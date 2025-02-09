import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import {
  Cursor,
  Preloader,
  ScrollToTop,
  Footer,
  Header,
  TeamDetail,
} from "../Components/index";
import Loader from "../Components/Global/Loader";

//IMPORTING CONTRCT DATA
import { VOTING_DAPP_CONTEXT } from "../context/context";

const candidateDetails = () => {
  const router = useRouter();
  //CANDIDATE ADDRESS
  const [candidate, setCandidate] = useState();
  const [user, setUser] = useState();
  const [votingTime, setVotingTime] = useState();
  const [currentVotingTime, setCurrentVotingTime] = useState();

  const {
    notifySuccess,
    notifyError,
    setLoader,
    loader,
    address,
    VOTING_DAPP,
    checkIfWalletIsConnected,
    REGISTER_VOTER,
    GET_SINGLE_CANDIDATE,
    APPROVE_CANDIDATE,
    GIVE_VOTE,
    OWNER_ADDRESS,
    ALL_VOTERS_VOTED,
    checkVote,
    REJECT_CANDIDATE,
    GET_SINGLE_VOTER,
    INITIAL_CONTRACT_DATA,
  } = useContext(VOTING_DAPP_CONTEXT);

  useEffect(() => {
    const fetchData = async () => {
      if (!router.isReady) return;

      const items = await GET_SINGLE_CANDIDATE(router?.query.address);
      setCandidate(items);

      const allVotedVoter = await ALL_VOTERS_VOTED();
      console.log(items);

      const votingStatus = await INITIAL_CONTRACT_DATA();
      setVotingTime(votingStatus);

      const nowInMilliseconds = Date.now();
      const nowInSeconds = Math.floor(nowInMilliseconds / 1000);
      setCurrentVotingTime(nowInSeconds);

      const address = await checkIfWalletIsConnected();

      if (address) {
        const user = await GET_SINGLE_VOTER(address);
        setUser(user);
        console.log(user);
      }
    };

    fetchData();
  }, [router.isReady]);

  const approveCandidate = async (address, message) => {
    await APPROVE_CANDIDATE(address, message);
  };

  const rejectCandidate = async (address, message) => {
    await REJECT_CANDIDATE(address, message);
  };
  //
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Cursor />
      <Header />
      <TeamDetail
        candidate={candidate}
        path={"candidate"}
        handleClickApprove={approveCandidate}
        handleClickReject={rejectCandidate}
        GIVE_VOTE={GIVE_VOTE}
        OWNER_ADDRESS={OWNER_ADDRESS}
        address={address}
        checkVote={checkVote}
        user={user}
        votingTime={votingTime}
        currentVotingTime={currentVotingTime}
      />
      {loader && <Loader />}
      <Footer />
    </>
  );
};

export default candidateDetails;

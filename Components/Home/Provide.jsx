import React from "react";

const Provide = () => {
  return (
    <section class="provide-world bg nb4-bg pt-120 pb-120  position-relative z-0">
      <div class="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-md-flex">
        <img
          src="assets/images/button.png"
          alt="vector"
          class="position-absolute pt-6 pt-xl-15 previewShapeRevX"
        />
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xxl-7">
            <div class="heading__content mb-10 mb-lg-15 text-center">
              <span class="heading p1-color fs-five mb-5">
              Welcome to the Online Voting System
              </span>
              <h3 class="mb-5 mb-lg-6">
              Empowering  <span class="s1-color">Democracy</span>{" "}
              with secure and transparent voting
              </h3>
              <p class="fs-six-up mx-ch mx-auto">
              Participate in the elections, Your voice matters.
              </p>
            </div>
          </div>
        </div>
        <div class="row gy-6 gy-xxl-0">
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-award-filled fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Secure & Transparent Voting</h4>
              <p>
              Our platform ensures secure, decentralized, and transparent voting using cutting-edge blockchain technology.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-users fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Anonymity</h4>
              <p>
              We aim to make elections fair, efficient, and accessible for everyone.Our mission is to make voting accessible, fair, and secure for everyone, no matter where they are. </p>
            </div>
          </div>
          <div class="col-md-6 col-xxl-4">
            <div class="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span class="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i class="ti ti-shield-check-filled fs-three p1-color"></i>
              </span>
              <h4 class="mt-5 mb-5">Real-time Results</h4>
              <p>
              We ensure that results are updated in real-time as votes are cast and recorded. Every vote is instantly verified, encrypted, and added to the digital ledger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;

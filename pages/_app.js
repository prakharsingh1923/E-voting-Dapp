import toast, { Toaster } from "react-hot-toast";
import { Html, Head, Main, NextScript } from 'next/document';
import "../styles/globals.css";

import { VOTER_DAPP_PROVIDER } from "../context/context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <VOTER_DAPP_PROVIDER>
        <Component {...pageProps} />
        <Toaster />
      </VOTER_DAPP_PROVIDER>

      <script
        data-cfasync="false"
        src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
      ></script>
      <script src="/assets/js/plugins/plugins.js"></script>
      <script src="/assets/js/plugins/plugin-custom.js"></script>
      <script src="/assets/js/main.js"></script>
    </>
  );
}

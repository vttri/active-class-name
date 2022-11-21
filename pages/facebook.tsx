import { useRouter } from 'next/router';

import * as ga from "../libs/ga";
import * as fb from "../libs/facebook";
import * as tk from "../libs/tiktok";
import Head from 'next/head'

const IndexPage = () => {
  const router = useRouter()
  const trackingGoogle = () => {
    ga.event({
      action: "trigger-google",
    });
  };
  const trackingFacebook = () => {
    fb.event({
      action: "submit_lead",
    });
  };
  const trackingTiktok = () => {
    tk.event({
      action: "submit_lead",
    });
  };
  return (
    <>
      <Head>Facebook Page</Head>
      <div className="conservations-tracking">
        <h1>Conservations Tracking</h1>
        <div className="main-content">
          <button className='wrap-image'>
            <img onClick={() => trackingGoogle()} src="/assets/images/google.png" />
          </button>
          <button className='wrap-image'>
            <img onClick={() => trackingFacebook()} src="/assets/images/facebook.png" />
          </button>
          <button className='wrap-image'>
            <img onClick={() => trackingTiktok()} src="/assets/images/tiktok.png" />
          </button>
        </div>
      </div>
    </>

  );
};

export default IndexPage;

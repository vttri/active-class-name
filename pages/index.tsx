import { useRouter } from 'next/router';

import * as ga from "../libs/ga";
import * as fb from "../libs/facebook";
import * as tk from "../libs/tiktok";

const IndexPage = () => {
  const router = useRouter()
  const trackingGoogle = () => {
    ga.event({
      action: "submit_lead",
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
      <div className="main-content">
        <button onClick={() => router.push('/google')} className='wrap-image'>
          Google page
        </button>
        <button onClick={() => router.push('/facebook')} className='wrap-image'>
          Facebook page
        </button>
        <button onClick={() => router.push('/tiktok')} className='wrap-image'>
          Tiktok page
        </button>
      </div>
    </div>
  );
};

export default IndexPage;

import { useRouter } from 'next/router';

import * as ga from "../libs/ga";

const IndexPage = () => {
  const router = useRouter()
  const search = () => {
    ga.event({
      action: "submit_lead",
    });
  };
  return (
    <div className="conservations-tracking">
      <h1>Conservations Tracking</h1>
      <div className="main-content">
        <button className='wrap-image'>
          <img onClick={() => search()} src="/assets/images/google.png"/>
        </button>
        <button className='wrap-image'>
          <img onClick={() => router.push('/facebook')} src="/assets/images/facebook.png"/>
        </button>
        <button className='wrap-image'>
          <img onClick={() => router.push('/tiktok')} src="/assets/images/tiktok.png" />
        </button>
      </div>
    </div>
  );
};

export default IndexPage;

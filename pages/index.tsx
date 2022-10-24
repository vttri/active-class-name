import Nav from "../components/Nav";
import { Facebook1 } from "../components/facebook";

import * as ga from "../libs/ga";

const IndexPage = () => {
  const search = () => {
    ga.event({
      action: "submit_lead",
    });
  };
  return (
    <>
      <Nav />
      <div>
        <div>
          <button onClick={() => search()}>Add google Event</button>
        </div>
      </div>
      <Facebook1 />
    </>
  );
};

export default IndexPage;

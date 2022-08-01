import Nav from "../components/Nav";

import * as fb from "../libs/facebook";

const FacebookPage = () => {
  const search = () => {
    debugger;
    fb.event({
      action: "Lead",
      params: {
        result: false,
        text: "event facebook add success",
      },
    });
  };
  return (
    <>
      <Nav />
      <div>
        <div>
          <button onClick={() => search()}>Add facebook event</button>
        </div>
      </div>
    </>
  );
};

export default FacebookPage;

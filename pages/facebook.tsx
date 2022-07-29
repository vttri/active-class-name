import Nav from "../components/Nav";

import * as fb from "../libs/facebook";

const FacebookPage = () => {
  const search = () => {
    fb.event({
      action: "SubmitApplication",
      params: {
        result: true,
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

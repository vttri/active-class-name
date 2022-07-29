import Nav from "../components/Nav";

import * as ga from "../libs/ga";

const IndexPage = () => {
  const search = () => {
    ga.event({
      action: "submit_lead",
      params: {
        result: true,
        text: "event google add success",
      },
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
    </>
  );
};

export default IndexPage;

import Nav from '../components/Nav'

import * as tt from '../libs/tiktok'

const TiktokPage = () => {

  const search = () => {
    tt.event({
      action: "event_tiktok",
      params: {
        result: true,
        text: "event tiktok add success",
      }
    })
  }
  return (
    <>
      <Nav />
      <div>
        <div>
          <button onClick={() => search()}>Add tiktok event</button>
        </div>
      </div>
    </>
  )

}

export default TiktokPage

import Nav from '../components/Nav'
import { useState } from 'react'

import * as ga from '../libs/ga'

const AboutPage = () => {
  const [query, setQuery] = useState("");

  const search = () => {
    ga.event({
      action: "about",
      params: {
        search_term: query
      }
    })
  }
  return (
    <>
      <Nav />
      <div>
        <div>
          <input type="text" onChange={(event) => setQuery(event.target.value)}></input>
        </div>
        <div>
          <button onClick={() => search()}>Search</button>
        </div>
      </div>
    </>
  )

}

export default AboutPage

import Nav from '../components/Nav'
import { useState } from 'react'

import * as ga from '../libs/ga'

const AboutPage = () => {
  const [query, setQuery] = useState("");

  const search = () => {
    ga.event({
      action: "add_payment_info",
      params: {
        "items": [
          {
            "id": "P12345",
            "name": "Android Warhol T-Shirt",
            "list_name": "Search Results",
            "brand": "Google",
            "category": "Apparel/T-Shirts",
            "variant": "Black",
            "list_position": 1,
            "quantity": 2,
            "price": 2
          },
          {
            "id": "P67890",
            "name": "Flame challenge TShirt",
            "list_name": "Search Results",
            "brand": "MyBrand",
            "category": "Apparel/T-Shirts",
            "variant": "Red",
            "list_position": 2,
            "quantity": 1,
            "price": 3
          }
        ]
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

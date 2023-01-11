import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';

import useResultContext from './SearchResultsProvider';


const resultManager = () => {
  // const {resultsApi, setResultsApi, isLoading, setIsLoading, input} = useResultContext()

  return (
    <div>
      {/* // example one
      <div itemScope itemType="https://schema.org/Restaurant">
        <h1 itemProp="name">Fondue for Fun and Fantasy</h1>
        <p itemProp="description">Fantastic and fun for all your cheesy occasions.</p>
        <p>Open: <span itemProp="openingHours" content="Mo,Tu,We,Th,Fr,Sa,Su 11:30-23:00">Daily from 11:30am till 11pm</span></p>
        <p>Phone: <span itemProp="telephone" content="+155501003333">555-0100-3333</span></p>
        <p>View <a itemProp="hasMenu" href="http://example.com/menu">our menu</a>.</p>
      </div> */}

      {/* // example two
      <div itemScope itemType="https://schema.org/Restaurant">
        <span itemProp="name">GreatFood</span>

        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <span itemProp="ratingValue">4</span> stars -
          based on <span itemProp="reviewCount">250</span> reviews
        </div>

        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">1901 Lemur Ave</span>
          <span itemProp="addressLocality">Sunnyvale</span>,
          <span itemProp="addressRegion">CA</span> <span itemProp="postalCode">94086</span>
        </div>
        <span itemProp="telephone">(408) 714-1489</span>
        <a itemProp="url" href="http://www.greatfood.com">www.greatfood.com</a>
        <div>
          <p>
            Hours:
          </p>
        <meta itemProp="openingHours" content="Mo-Sa 11:00-14:30">Mon-Sat 11am - 2:30pm </meta>
        <meta itemProp="openingHours" content="Mo-Th 17:00-21:30">Mon-Thu 5pm - 9:30pm </meta>
        <meta itemProp="openingHours" content="Fr-Sa 17:00-22:00">Fri-Sat 5pm - 10:00pm </meta>
        <p>
          Categories:
        </p>

        <span itemProp="servesCuisine">
          Middle Eastern
        </span>,
        <span itemProp="servesCuisine">
          Mediterranean
        </span>

        <p>Price Range:</p>
        <span itemProp="priceRange">$$</span>
        <p>Takes Reservations: Yes </p>
        </div>
      </div> */}
    </div>
  )
}

export default resultManager;
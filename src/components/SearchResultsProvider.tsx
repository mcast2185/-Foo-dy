import styles from "../theme/results.module.css";
import { useState } from 'react';
import { IonImg } from '@ionic/react';
import Accordion from "react-bootstrap/Accordion";
import { Api } from '../temp/snippet';


const apiKey = "AIzaSyBRShqSMbyvYoO_Q2p1XatFGytoIG5fYdM";
const searchEngineId = "54fd67d12dc924033";

// https://www.googleapis.com/customsearch/v1?key=AIzaSyBRShqSMbyvYoO_Q2p1XatFGytoIG5fYdM&cx=54fd67d12dc924033&as_rights=(cc_publicdomain%7Ccc_attribute%7Ccc_sharealike%7Ccc_nonderived).-(cc_noncommercial)&q=restaurants+near+me+denver,more:pagemap:restaurant-servesCuisine+rating&exactTerms=restaurant+denver&hq=denver+CO&orTerms=restaurant&sort_by=rating-stars,rating-stars:r:5
const SearchResultsProvider = ({children}: any) => {
  const [resultsApi, setResultsApi] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const input = {
    key: apiKey,
    cx: searchEngineId
  };


  const getResults = async () => {

    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${input.key}&cx=${input.cx}&as_rights=(cc_publicdomain%7Ccc_attribute%7Ccc_sharealike%7Ccc_nonderived).-(cc_noncommercial)&q=restaurants+near+me+denver,more:pagemap:restaurant-servesCuisine+rating&exactTerms=restaurant+denver&hq=denver+CO&orTerms=restaurant&sort_by=rating-stars,rating-stars:r:5`);
    const data = await response.json();
    setResultsApi(data);
    setIsLoading(false);
    console.log(data);
  };
  
    

  return (
    <section className={styles.resultsSection}>
      <span aria-details="results-button" className={styles.buttonWrapper}>
        <button className={styles.resultsButton} 
          onClick={() => getResults()}>
          <p className={styles.p}>
            Click here for top Restaurants
          </p>
        </button> 
      </span>

        {isLoading &&
          <div className={styles.promo} >
            <h1 className={styles.happyHour} >
              <i>
                {" · "} Find a Happy Hour that works for you {" "}
                <a target="_blank" rel="noopener noreferrer" 
                  aria-details='external-link'
                  href="https://www.5280.com/denvers-best-happy-hours" 
                  className={styles.a}>
                  Here
                </a> 
                {" · "} 
              </i>
            </h1>
          </div>
        }
      <div className={styles.accordionWrapper} id="accordionWrapper">
        { !isLoading && ((document.getElementById("accordionWrapper") as HTMLElement).style.visibility = "visible") &&
        <section id="accordion">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0" className={styles.accordionItem}>
              <Accordion.Header>{Api[0].title}</Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <span id=""> 
                  <IonImg role="img" src={Api[0].pagemap.img} 
                    style={{height: "200px", width: "180px",
                    imageRendering: "smooth", padding: "5px"}} />
                </span>
                <div itemScope itemType="https://schema.org/Restaurant">
                  <span itemProp="name" >
                    {Api[0].title}
                  </span>
                  <span>{" · Restaurant"}</span>
                  <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp='streetAddress'>
                      {Api[0].address}
                    </span>
                  </div>
                  <div itemProp="aggregateRating" className={styles.ionItem} 
                    itemScope itemType="https://schema.org/AggregateRating">
                    <span itemProp="ratingValue">{Api[0].pagemap.rating}</span>{" "}
                    <span className={styles.rating} aria-label='4.8 out of 5' role="img"/>{" "} 
                      stars · <span itemProp="reviewCount"> (455)</span> reviews
                  </div>
                  <span role="menuitem" itemProp="telephone">
                    {Api[0].phone}
                  </span><br/>
                  <a target="_blank" rel="noopener noreferrer" href={"https://" + Api[0].link}>{Api[0].link}</a>
                  <br/>
                  <br/>
                  <br/>
                  <span itemProp="description">
                    {Api[0].desc}
                  </span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className={styles.accordionItem}>
              <Accordion.Header>{Api[1].title}</Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <IonImg role="img" src={Api[1].pagemap.img} 
                  style={{height: "200px", width: "180px",
                  imageRendering: "smooth", padding: "5px"}} />
                <div itemScope itemType="https://schema.org/Restaurant">
                  <span itemProp="name" >
                    {Api[1].title}
                  </span>
                  <span>{" · Restaurant"}</span>
                  <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp='streetAddress'>
                      {Api[1].address}
                    </span>
                  </div>
                  <div itemProp="aggregateRating" className={styles.ionItem} 
                    itemScope itemType="https://schema.org/AggregateRating">
                    <span itemProp="ratingValue">
                      {Api[1].pagemap.rating}
                    </span>{" "}
                    <span className={styles.rating} aria-label='4.8 out of 5' role="img"/>
                      {" stars ·  "} 
                    <span itemProp="reviewCount"> (448)</span> {"reviews"}
                  </div>
                  <span role="menuitem" itemProp="telephone">
                    {Api[1].phone}
                  </span><br/>
                  <a target="_blank" rel="noopener noreferrer" href={"https://" + Api[1].link}>{Api[1].link}</a>
                  <br/>
                  <br/>
                  <br/>
                  <span itemProp="description">
                    {Api[1].desc}
                  </span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={styles.accordionItem}>
              <Accordion.Header>{Api[2].title}</Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <IonImg role="img" src={Api[2].pagemap.img} 
                  style={{height: "200px", width: "180px",
                  imageRendering: "smooth", padding: "5px"}} />
                <div itemScope itemType="https://schema.org/Restaurant">
                  <span itemProp="name" >
                    {Api[2].title}
                  </span>
                  <span>{" · Restaurant"}</span>
                  <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp='streetAddress'>
                      {Api[2].address}
                    </span>
                  </div>
                  <div itemProp="aggregateRating" className={styles.ionItem} 
                    itemScope itemType="https://schema.org/AggregateRating">
                    <span itemProp="ratingValue">{Api[2].pagemap.rating}</span>{" "}
                    <span className={styles.rating} aria-label='4.8 out of 5' role="img"/>{" "} 
                      stars · <span itemProp="reviewCount"> (1.6k)</span> reviews
                  </div>
                  <span role="menuitem" itemProp="telephone">
                    {Api[2].phone}
                  </span><br/>
                  <a target="_blank" rel="noopener noreferrer" href={"https://" + Api[2].link}>{Api[2].link}</a>
                  <br/>
                  <br/>
                  <br/>
                  <span itemProp="description">
                    {Api[2].desc}
                  </span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className={styles.accordionItem}>
              <Accordion.Header>{Api[3].title}</Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <IonImg role="img" src={Api[3].pagemap.img} 
                  style={{height: "200px", width: "180px",
                  imageRendering: "smooth", padding: "5px"}} />
                <div itemScope itemType="https://schema.org/Restaurant">
                  <span itemProp="name" >
                    {Api[3].title}
                  </span>
                  <span>{" · Restaurant"}</span>
                  <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp='streetAddress'>
                      {Api[3].address}
                    </span>
                  </div>
                  <div itemProp="aggregateRating" className={styles.ionItem} 
                    itemScope itemType="https://schema.org/AggregateRating">
                    <span itemProp="ratingValue">{Api[3].pagemap.rating}</span>{" "}
                    <span className={styles.rating} aria-label='4.8 out of 5' role="img"/>{" "} 
                      stars · <span itemProp="reviewCount"> (2.2k)</span> reviews
                  </div>
                  <span role="menuitem" itemProp="telephone">
                    {Api[3].phone}
                  </span><br/>
                  <a target="_blank" rel="noopener noreferrer" href={"https://" + Api[3].link}>{Api[3].link}</a>
                  <br/>
                  <br/>
                  <br/>
                  <span itemProp="description">
                    {Api[3].desc}
                  </span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className={styles.accordionItem}>
              <Accordion.Header>{Api[4].title}</Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <IonImg role="img" src={Api[4].pagemap.img} 
                  style={{height: "200px", width: "180px",
                  imageRendering: "smooth", padding: "5px"}} />
                <div itemScope itemType="https://schema.org/Restaurant">
                  <span itemProp="name" >
                    {Api[4].title}
                  </span>
                  <span>{" · Restaurant"}</span>
                  <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp='streetAddress'>
                      {Api[4].address}
                    </span>
                  </div>
                  <div itemProp="aggregateRating" className={styles.ionItem} 
                    itemScope itemType="https://schema.org/AggregateRating">
                    <span itemProp="ratingValue">{Api[4].pagemap.rating}</span>{" "}
                    <span className={styles.rating} aria-label='4.8 out of 5' role="img"/>{" "} 
                      stars · <span itemProp="reviewCount"> (1.9k)</span> reviews
                  </div>
                  <span role="menuitem" itemProp="telephone">
                    {Api[4].phone}
                  </span><br/>
                  <a  target="_blank" rel="noopener noreferrer" href={"https://" + Api[4].link}>{Api[4].link}</a>
                  <br/>
                  <br/>
                  <br/>
                  <span itemProp="description">
                    {Api[4].desc}
                  </span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>
        } 
      </div>
      <span aria-details="results-button" className={styles.buttonWrapper}>
        <button className={styles.centerButton} 
          onClick={() => getResults()}>
          {/* onClick={() => executeApiQuery()}> */}
          <p className={styles.p}>
            The city has options, so should you!
          </p>
        </button> 
      </span>
    </section>
  );
}
export default SearchResultsProvider;

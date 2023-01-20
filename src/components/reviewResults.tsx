import styles from "../theme/review.module.css";
import { useState } from 'react';



const apiKey = "AIzaSyBRShqSMbyvYoO_Q2p1XatFGytoIG5fYdM";
const searchEngineId = "54fd67d12dc924033";


const ReviewResults = () => {
  const [resultsApi, setResultsApi] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const input = {
    key: apiKey,
    cx: searchEngineId
  };


  const getResults = async () => {

    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${input.key}&cx=${input.cx}&as_rights=(cc_publicdomain%7Ccc_attribute%7Ccc_sharealike%7Ccc_nonderived).-(cc_noncommercial)&q=restaurants+near+me+denver,more:pagemap:review&exactTerms=restaurant+denver&hq=denver+CO&orTerms=restaurant&sort_by=rating-stars,rating-stars:r:5`);
    const data = await response.json();
    setResultsApi(data);
    console.log(data);
  };
  
    

  return (
    <main>
      <button onClick={() => getResults()}> review</button>
    </main>
  );
}

export default ReviewResults;

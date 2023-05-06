import DatePicker from './datePicker';
import './main.css'
import { useEffect, useState } from "react";


function Main() {
  const URL = "https://api.nasa.gov/planetary/apod";
  const ApiKey = "UXB375btOBdf6g5gbFGnaj6BprCZWGxnlQ9WBjDT";

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(`${URL}?api_key=${ApiKey}`);
      const data = await res.json();

      setData(data)
      setLoading(false)
    };
    dataFetch()
  }, []);

  console.log(data)
  if(loading) return <h1>Loading...</h1>

  
  return (
    <main>
        <DatePicker />
        <img src={data.url} alt={data.title} />
        <h3 className="title">{data.title}</h3>
        <p><i>{data.copyright}</i></p>
        <p className="expl-text">{data.explanation}</p>
    </main>
  );
 }

export default Main;

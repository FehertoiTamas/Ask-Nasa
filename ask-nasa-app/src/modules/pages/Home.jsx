/* 
import DatePicker from "./datePicker";
import "./main.css";
import { useEffect, useState } from "react";

function Main() {
  const URL = "https://api.nasa.gov/planetary/apod";
  const ApiKey = "UXB375btOBdf6g5gbFGnaj6BprCZWGxnlQ9WBjDT";

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const res = await fetch(`${URL}?api_key=${ApiKey}&date=${formattedDate}`);
      const data = await res.json();

      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [selectedDate]);

  if (loading) return <h1>Loading...</h1>;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <main>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
      <img src={data.url} alt={data.title} />
      <h3 className="title">{data.title}</h3>
      <p>
        <i>{data.date}</i>
      </p>
      <p>
        <i>{data.copyright}</i>
      </p>
      <p className="expl-text">{data.explanation}</p>
    </main>
  );
}

export default Main; */

import React, { useEffect, useState } from "react";
import '../styles/Home.css';
import Header from "../header";

const Home = () => {
  const URL = "https://api.nasa.gov/planetary/apod";
  const apiKey = "UXB375btOBdf6g5gbFGnaj6BprCZWGxnlQ9WBjDT";

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${URL}?api_key=${apiKey}&date=${selectedDate}`);
      const data = await res.json();

      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };


  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
    <Header />
    <main>
      <div>
        <input type="date" onChange={handleDateChange} />
      </div>
      <h3 className="title">{data.title}</h3>
      <p><i>{data.date}</i></p>
      <div className="pic-container">
        <img src={data.url} alt={data.title} />
        <p className="explanation">{data.explanation}</p>
      </div>
    </main>
    </div>
  );
};

export default Home;

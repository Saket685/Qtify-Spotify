// import './App.css';
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import FilterSongs from "../FilterSongs/FilterSongs";
import FAQs from "../FAQs/FAQs";

function HomePage() {
  let [topAlbums, setTopAlbums] = useState([]);
  let [newAlbums, setNewAlbums] = useState([]);
  let [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const albums1 = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/top"
      );
      setTopAlbums(albums1.data);

      const albums2 = await axios.get(
        "https://qtify-backend-labs.crio.do/albums/new"
      );
      setNewAlbums(albums2.data);

      const songsJson = await axios.get(
        "https://qtify-backend-labs.crio.do/songs"
      );
      setSongs(songsJson.data);
      // console.log("songs data: ",songsJson.data);
      console.log("albums1: ",albums1);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Section data={topAlbums} title="Top Albums" />
      <Section data={newAlbums} title="New Albums" />
      <FilterSongs songs={songs}/>
      <FAQs />
    </>
  );
}

export default HomePage;

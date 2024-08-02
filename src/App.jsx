import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Axios from "axios";
import Lyrics from "./Lyrics";

function App() {
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [lyrics, setLyrics] = useState("");

    function searchLyrics() {
        if (artist === "" && song === "") {
            return;
        }
        Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then((res) => {
            console.log(res.data.lyrics);
            setLyrics(res.data.lyrics);
        });
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            searchLyrics={searchLyrics}
                            setArtist={setArtist}
                            setSong={setSong}
                        />
                    }
                />
                <Route path="/lyrics" element={<Lyrics lyrics={lyrics} />} />
            </Routes>
        </Router>
    );
}

export default App;

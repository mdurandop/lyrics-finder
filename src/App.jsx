import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Axios from "axios";
import Lyrics from "./Lyrics";
import Error from "./Error";

function App() {
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [error, setError] = useState("");

    function searchLyrics() {
        return new Promise((resolve) => {
            if (artist === "" && song === "") {
                setError("Please enter both artist and song name.");
                setLyrics("");
                resolve(false);
                return;
            }
            Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
                .then((res) => {
                    setLyrics(res.data.lyrics);
                    setError(""); 
                    resolve(true);
                })
                .catch(() => {
                    setLyrics(""); 
                    setError("Lyrics not found for the specified song and artist."); 
                    resolve(false);
                });
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
                <Route path="/error" element={<Error error={error} />} />
            </Routes>
        </Router>
    );
}

export default App;

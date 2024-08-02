import React from 'react'
import { Link } from 'react-router-dom';

function Home({ searchLyrics, setArtist, setSong }) {
    return (
        <div className="flex justify-center items-center">
            <div className="mobile flex flex-col justify-center items-center overflow-y-auto overflow-x-hidden">
                <h1 className="text-3xl font-bold text-main">
                    Lyrics Finder 🎼
                </h1>
                <div className="flex bg-input-black w-4/5 justify-between items-center my-3 py-4 rounded-md px-3">
                    <input
                        type="text"
                        placeholder="Song name"
                        className="w-11/12"
                        onChange={(e) => {
                            setSong(e.target.value);
                        }}
                    />
                </div>
                <div className="w-full">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <div className="flex bg-input-black justify-between items-center py-4 rounded-md px-3 w-4/5">
                            <input
                                type="text"
                                placeholder="Artist name"
                                className="w-11/12"
                                onChange={(e) => {
                                    setArtist(e.target.value);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key == "Enter") {
                                        searchLyrics();
                                    }
                                }}
                            />
                        </div>
                        <Link to={'/lyrics'}
                            className="bg-main flex p-4 px-3 w-4/5 justify-center items-center rounded-full"
                            onClick={searchLyrics}
                        >
                            <p className="text-bg font-bold">Find Lyrics</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home

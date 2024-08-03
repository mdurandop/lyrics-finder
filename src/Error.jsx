import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "./assets/error.svg";

function Error({ error }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center h-screen gap-10 w-3/5">
                <h1 className="text-3xl font-bold text-main text-center">
                    Oops, something went wrong!
                </h1>
                <img src={ErrorImg} alt="" />
                <p className="text-lg text-center">{error}</p>
                <Link to={"/"}>
                    <button
                        className="bg-main flex p-2 px-9 justify-center items-center rounded-full"
                    >
                        <p className="text-bg font-bold">Go back</p>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Error;

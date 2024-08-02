import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from './assets/arrow.svg';

function Lyrics({ lyrics }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col  overflow-y-auto overflow-x-hidden">
                <div className='flex items-center justify-between py-3'>
                    <Link to="/" >
                        <img src={Arrow} alt="" className='w-10 ml-3'/>      
                    </Link>     
                    <h1 className="text-3xl font-bold text-main text-center">Lyrics</h1>
                    <div className='px-4'></div> 
                </div>
                <pre className="text-white text-wrap text-center mx-auto whitespace-pre-wrap px-3 font-sans py-4">{lyrics}</pre>
            </div>
        </div>
    );
}

export default Lyrics;
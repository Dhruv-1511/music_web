import React from 'react'
import './leftButton.css'
import { FaChevronLeft } from "react-icons/fa6";

function LeftButtton({refs}) {

    const handleScroll = (direction, refs) => {
        if (refs.current) {
            const scrollPixel = refs.current.clientWidth;

            refs.current.scrollBy({
                left: direction === "right" ? scrollPixel : -scrollPixel
            });
        }
    }

    return (
        <div
            className='left-arrow'
            onClick={() => handleScroll('left', refs)}
        >
            <FaChevronLeft />
        </div>
    )
}

export default LeftButtton
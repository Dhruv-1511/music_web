import React from 'react'
import './rightButton.css'
import { FaChevronRight  } from "react-icons/fa6";

function RightButton({refs}) {

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
            className='right-arrow'
            onClick={() => handleScroll('right', refs)}
        >
            <FaChevronRight />
        </div>
    )
}

export default RightButton
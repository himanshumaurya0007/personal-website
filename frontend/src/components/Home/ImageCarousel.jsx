import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel = ({ images = [], title }) => {
    // Set initial image index
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        // Go to the previous image, loop around if at start
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        // Go to the next image, loop around if at the end
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    if (images.length === 0) return null;

    return (
        <div className="relative w-full">
            {/* Image Container */}
            <div className="flex justify-center">
                <img
                    src={images[currentIndex]}
                    alt={`${title} screenshot ${currentIndex + 1}`}
                    className="w-[425px] h-[240px] object-cover rounded-xl border border-gray-300"
                />
            </div>

            {/* Left Button */}
            <button
                onClick={handlePrevClick}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full text-accent-secondary hover:bg-accent-primary transition-all"
            >
                <FaChevronLeft size={18} />
            </button>

            {/* Right Button */}
            <button
                onClick={handleNextClick}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full text-accent-secondary hover:bg-accent-primary transition-all"
            >
                <FaChevronRight size={18} />
            </button>
        </div>
    );
};

export default ImageCarousel;

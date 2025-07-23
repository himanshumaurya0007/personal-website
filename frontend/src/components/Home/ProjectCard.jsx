import React from "react";
import ImageCarousel from "../Home/ImageCarousel";

function ProjectCard({ title, tech, description, github, images = [] }) {
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 transition-transform hover:scale-[1.02] duration-200 space-y-4">

            <h3 className="text-2xl font-bold text-accent-primary">{title}</h3>

            {/* Image Carousel */}
            <ImageCarousel images={images} title={title} />

            <p className="text-sm text-text-secondary italic">{tech}</p>
            <p className="text-text-primary text-base">{description}</p>

            {github && (
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-accent-secondary font-medium hover:underline"
                >
                    View Code →
                </a>
            )}
        </div>
    );
}

export default ProjectCard;

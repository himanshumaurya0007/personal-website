import React from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectData } from "../data/ProjectData";

const fullStackProjects = ProjectData.filter(project =>
    project.title === "Blog Platform" || project.title === "Quiz App"
);

const otherProjects = ProjectData.filter(project =>
    project.title !== "Blog Platform" && project.title !== "Quiz App"
);

function Portfolio() {

    // const fullStackProjects = ProjectData.filter(p => p.category === "fullstack");
    // const otherProjects = ProjectData.filter(p => p.category !== "fullstack");

    return (
        <main className="min-h-screen py-10 px-4 md:px-8 mt-[76px] text-text-primary bg-gray-50">
            {/* Section heading */}
            <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-20 relative inline-block">
                <span className="relative z-10 bg-white px-4 py-2 shadow-md border-2 border-accent-secondary rounded-md">
                    Portfolio
                </span>
            </h1>

            <div className="max-w-6xl mx-auto space-y-24">
                {/* Full-Stack Projects Section */}
                <section className="animate-fadeSlideUp">
                    <h2 className="text-3xl font-semibold mb-8 text-accent-secondary border-l-4 border-accent-primary pl-4">
                        Full‑Stack (MERN) Projects
                    </h2>

                    <div className="grid gap-10 md:grid-cols-1">
                        {fullStackProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </section>

                {/* AI/ML & Academic Projects */}
                <section className="animate-fadeSlideUp">
                    <h2 className="text-3xl font-semibold mb-8 text-accent-secondary border-l-4 border-accent-primary pl-4">
                        AI/ML & Academic Projects
                    </h2>
                    <div className="grid gap-10 md:grid-cols-2">
                        {otherProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </section>

                {/* Hackathon Achievements */}
                <section className="animate-fadeSlideUp">
                    <h2 className="text-3xl font-semibold mb-8 text-accent-secondary border-l-4 border-accent-primary pl-4">
                        Hackathon Achievements
                    </h2>
                    <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                        <p>
                            🏆 <span className="text-accent-primary font-semibold">HackWave 2024, Winner</span> — Sustainability & Environment domain (Smart Grid Optimization)
                        </p>
                        <p>
                            💡 Participated in <span className="font-semibold">10+ National-Level Hackathons</span>, consistently achieving finalist or podium placements with impactful, time-bound solutions.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center animate-fadeSlideUp">
                    <a
                        href="mailto:himanshumaurya7781@gmail.com"
                        aria-label="Contact Himanshu"
                        className="inline-block bg-accent-primary hover:bg-accent-secondary text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Let’s Work Together
                    </a>
                </section>
            </div>
        </main>
    );
}

export default Portfolio;
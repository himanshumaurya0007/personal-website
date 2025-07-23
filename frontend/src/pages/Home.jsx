import React from "react";
import { NavLink } from "react-router";
import profile from "../assets/profile.jpeg";
import { ProjectData } from "../data/ProjectData";
import ProjectCard from "../components/Home/ProjectCard";

const featuredProjects = ProjectData.filter(project =>
    project.title === "Blog Platform" || project.title === "Quiz App"
);

function Home() {
    return (
        <main className="min-h-screen mt-[76px] text-text-primary bg-white">
            {/* Hero Section */}
            <section className="px-4 md:px-8 py-16 bg-gray-50 animate-fadeSlideUp">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-2/3">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            Hi, I'm <span className="text-accent-primary">Himanshu Maurya</span>
                        </h1>
                        <p className="text-lg leading-relaxed text-text-secondary mb-6">
                            A Full-Stack (MERN) Developer passionate about building scalable, user‑friendly, and impactful web applications.
                        </p>
                        <NavLink
                            to="/portfolio"
                            className="inline-block bg-accent-primary hover:bg-accent-secondary text-white px-6 py-2 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-lg"
                        >
                            View My Work
                        </NavLink>
                    </div>
                    <div className="w-full md:w-1/3">
                        <img
                            src={profile}
                            alt="Himanshu Maurya"
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Skills Preview */}
            <section className="px-4 md:px-8 py-16 bg-white animate-fadeSlideUp">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-accent-secondary border-l-4 border-accent-primary pl-4">
                        Tech Stack
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 text-text-secondary text-lg list-disc list-inside">
                        <li><strong>MERN Stack:</strong> MongoDB, Express.js, React.js, Node.js</li>
                        <li><strong>Languages:</strong> JavaScript (ES6+), Python, Java</li>
                        <li><strong>Databases:</strong> MySQL, SQLite, MongoDB</li>
                        <li><strong>Tools:</strong> Git, GitHub, VS Code, Linux</li>
                        <li><strong>Practices:</strong> RESTful APIs, CRUD, Component Architecture</li>
                    </ul>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="px-4 md:px-8 py-16 bg-gray-50 animate-fadeSlideUp">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-8 text-accent-secondary border-l-4 border-accent-primary pl-4">
                        Featured Projects
                    </h2>
                    <div className="grid gap-10 md:grid-cols-2">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <NavLink
                            to="/portfolio"
                            className="inline-block text-accent-primary font-semibold hover:underline"
                        >
                            Explore Full Portfolio &rarr;
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 md:px-8 py-16 bg-white text-center animate-fadeSlideUp">
                <h2 className="text-3xl font-semibold mb-4 text-accent-secondary">
                    Let’s Build Something Amazing
                </h2>
                <p className="text-text-secondary mb-6 text-lg">
                    I’m available for freelance, internships, and collaboration.
                </p>
                <a
                    href="mailto:himanshumaurya7781@gmail.com"
                    className="inline-block bg-accent-primary hover:bg-accent-secondary text-white px-6 py-2 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-lg"
                >
                    Get in Touch
                </a>
            </section>
        </main>
    );
}

export default Home;

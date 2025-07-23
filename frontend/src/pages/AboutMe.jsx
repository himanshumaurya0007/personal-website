import React from "react";
import profile from "../assets/profile.jpeg";

function AboutMe() {

    return (
        <main className="min-h-screen py-10 px-4 md:px-8 mt-[76px] text-text-primary bg-gray-50">
            {/* Section heading */}
            <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-20 relative inline-block">
                <span className="relative z-10 bg-white px-4 py-2 shadow-md border-2 border-accent-secondary rounded-md">
                    About Me
                </span>
            </h1>

            {/* Outer container */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start animate-fadeSlideUp">
                {/* Profile Image */}
                <div className="flex-shrink-0 w-full md:w-1/3">
                    <img
                        src={profile}
                        alt="Himanshu Maurya"
                        className="w-full h-auto rounded-2xl shadow-lg"
                    />
                </div>

                {/* Text Content */}
                <article className="w-full md:w-2/3 space-y-6">
                    {/* Intro */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-3">
                            Hi, I’m <span className="text-accent-primary">Himanshu Maurya</span>
                        </h2>
                        <p className="text-lg leading-relaxed text-text-secondary">
                            Full‑Stack Web Developer • MERN Developer • HackWave 2024 - Winner • B.E. CSE‑DS graduate (University of Mumbai). I thrive on building scalable, user‑centric web applications.
                        </p>
                    </section>

                    {/* Hackathons */}
                    <section>
                        <h3 className="text-2xl font-semibold mb-2">Hackathons & Awards</h3>
                        <ul className="space-y-1 text-text-secondary">
                            <li>🏆 <span className="text-accent-primary font-medium">HackWave 2024 Winner</span> – Sustainability & Environment domain</li>
                            <li>10+ National Hackathons with top-3 positions & finalist recognition</li>
                        </ul>
                    </section>

                    {/* Skills */}
                    <section>
                        <h3 className="text-2xl font-semibold mb-2">Core Skills</h3>
                        <ul className="list-disc list-inside space-y-1 text-text-secondary">
                            <li>MERN Stack (React.js • Node.js • Express.js • MongoDB)</li>
                            <li>JavaScript (ES6+), Python, Java</li>
                            <li>RESTful API design & CRUD operations</li>
                            <li>SQL (MySQL, SQLite) & NoSQL databases</li>
                            <li>Git, GitHub, Linux, VS Code</li>
                        </ul>
                    </section>

                    {/* CTA */}
                    <section className="pt-2">
                        <a
                            href="mailto:himanshumaurya7781@gmail.com"
                            className="inline-block bg-accent-primary hover:bg-accent-secondary text-white px-6 py-2 rounded-full font-semibold  transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            Let’s Collaborate
                        </a>
                    </section>
                </article>
            </div>
        </main>
    );
}

export default AboutMe;
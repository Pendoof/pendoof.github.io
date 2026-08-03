import { useState } from "react";
import { Link } from "react-router";
import type { Project, Social, Cert } from "../types.ts";
import projects from "../data/projects.json";
import socials from "../data/socials.json";
import certs from "../data/certs.json";
import resume from "../../public/DerekChen_Resume.pdf";

const Menu: React.FC = () => {
    const [selected, setSelected] = useState<string>("");
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const items: string[] = ["Projects", "Socials", "Certificates", "Resume"];
    const projectLinks: Project[] = projects;
    const socialLinks: Social[] = socials;
    const certLinks: Cert[] = certs;

    return (
        <div className="m-16 flex justify-center gap-16">
            {/* Sidebar */}
            <div
                className="
					w-64 bg-[#7295DF70] ring-4 ring-[#434BE1]
					p-8 rounded-2xl flex flex-col gap-5 shadow-xl
				"
            >
                {items.map((item) => (
                    <p
                        key={item}
                        onMouseEnter={() => setSelected(item)}
                        className={`
								text-3xl rounded-xl px-4 py-2
								transition-all duration-300 cursor-pointer
								${
                                    selected === item
                                        ? "text-white bg-[#434BE1] scale-105 shadow-lg"
                                        : "text-gray-200 hover:text-white hover:bg-white/10 hover:translate-x-2"
                                }
							`}
                    >
                        {item}
                    </p>
                ))}
            </div>

            <div
                className={`
					w-96 min-h-64 p-8 rounded-2xl
					ring-4 transition-all duration-300
					${selected ? "bg-[#7295DF70] ring-[#434BE1] shadow-xl" : "ring-transparent"}
				`}
            >
                {/* Projects */}
                {selected === "Projects" && (
                    <div className="flex flex-col gap-4">
                        {projectLinks.map((project, i) => (
                            <div
                                key={project.slug}
                                onMouseEnter={() => setHoveredProject(project.slug)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <Link
                                    key={project.slug}
                                    to={`/${project.slug}`}
                                    style={{
                                        animation: "fadeSlideIn 300ms ease-out forwards",
                                        animationDelay: `${i * 40}ms`,
                                        opacity: 0,
                                    }}
                                    className="
									flex items-start gap-3 text-3xl text-gray-200 transition-all duration-300
									hover:text-white hover:scale-110 hover:translate-x-2
									"
                                >
                                    <span className="shrink-0">→</span>
                                    <span>{project.title}</span>
                                </Link>
                                <p
                                    className={`
										text-sm text-gray-300 overflow-hidden
										transition-all duration-300
										${hoveredProject === project.slug ? "max-h-20 opacity-100 mt-1" : "max-h-0 opacity-0"}
									`}
                                >
                                    {project.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
                {/* Socials */}
                {selected === "Socials" && (
                    <div className="flex flex-col gap-4">
                        {socialLinks.map((social, i) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    animation: "fadeSlideIn 300ms ease-out forwards",
                                    animationDelay: `${i * 40}ms`,
                                    opacity: 0,
                                }}
                                className="
									text-3xl text-gray-200 transition-all duration-300
									hover:text-white hover:scale-110 hover:translate-x-2
								"
                            >
                                → {social.name}
                            </a>
                        ))}
                    </div>
                )}
                {/* Certs */}
                {selected === "Certificates" && (
                    <div className="flex flex-col gap-4">
                        {certLinks.map((cert, i) => (
                            <a
                                key={cert.name}
                                href={cert.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    animation: "fadeSlideIn 300ms ease-out forwards",
                                    animationDelay: `${i * 40}ms`,
                                    opacity: 0,
                                }}
                                className="
									text-3xl text-gray-200 transition-all duration-300
									hover:text-white hover:scale-110 hover:translate-x-2
								"
                            >
                                → {cert.name}
                            </a>
                        ))}
                    </div>
                )}
                {/* Resume */}
                {selected === "Resume" && (
                    <div className="flex flex-col gap-4">
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                animation: "fadeSlideIn 300ms ease-out forwards",
                                animationDelay: `${1 * 40}ms`,
                                opacity: 0,
                            }}
                            className="
								text-3xl text-gray-200 transition-all duration-300
								hover:text-white hover:scale-110 hover:translate-x-2
							"
                        >
                            → View Resume
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            style={{
                                animation: "fadeSlideIn 300ms ease-out forwards",
                                animationDelay: `${2 * 40}ms`,
                                opacity: 0,
                            }}
                            className="
								text-3xl text-gray-200 transition-all duration-300
								hover:text-white hover:scale-110 hover:translate-x-2
							"
                        >
                            → Download Resume
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;

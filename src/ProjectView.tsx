import { Link, useParams } from "react-router";
import type { Project } from "./types";
import projects from "./data/projects.json";
import Background from "./components/Background.tsx";

const ProjectView: React.FC = () => {
	const { slug } = useParams();
	const project = projects.find((p) => p.slug === slug) as Project | undefined;

	if (!project) {
		return (
			<div>
				<Background />
				<div className="flex flex-col items-center justify-center gap-6 px-4 py-32">
					<h1 className="text-4xl font-bold text-gray-100">Project not found</h1>
					<Link
						to="/"
						className="text-2xl text-gray-200 transition-all duration-300 hover:text-white hover:scale-110"
					>
						← Back home
					</Link>
				</div>
			</div>
		);
	}

	const { images, links, title, longDescription, tags } = project;

	const linkButtons: { label: string; href: string }[] = [];
	if (links.github) linkButtons.push({ label: "GitHub", href: links.github });
	if (links.demo) linkButtons.push({ label: "Demo", href: links.demo });
	if (links.live) linkButtons.push({ label: "Live Site", href: links.live });

	return (
        <div className="min-h-screen">
            <Background />

            <div className="relative py-10 px-6 max-w-5xl mx-auto">
                <Link
                    to="/"
                    className="inline-block mb-8 text-3xl text-gray-200 transition-all duration-300 hover:text-white hover:translate-x-2"
                >
                    ← Back
                </Link>

                {/* Header card */}
                {images.thumbnail && (
                    <img
                        src={images.thumbnail}
                        alt={title}
                        className="w-auto max-h-72 object-fit rounded-xl ring-4 ring-[#434BE1] mb-6 flex justify-center mx-auto"
                    />
                )}
                <div
                    className="bg-[#7295DF70] ring-4 ring-[#434BE1] p-8 rounded-2xl shadow-xl"
                    style={{
                        animation: "fadeSlideIn 300ms ease-out forwards",
                        opacity: 0,
                    }}
                >
                    <h1 className="text-5xl font-bold text-gray-100">{title}</h1>

                    {tags.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-6">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-lg text-gray-200 bg-[#161C3F] rounded-lg"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {linkButtons.length > 0 && (
                        <div className="flex flex-wrap gap-4 mt-8">
                            {linkButtons.map((btn) => (
                                <a
                                    key={btn.label}
                                    href={btn.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-white bg-[#434BE1] px-5 py-2 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                                >
                                    → {btn.label}
                                </a>
                            ))}
                        </div>
                    )}
                    {/* Body */}
                    <div className="max-w-3xl mx-auto mt-10">
                        {longDescription
                            .split("\n\n")
                            .filter(Boolean)
                            .map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="text-xl text-gray-300 leading-relaxed mb-6"
                                    style={{
                                        animation: "fadeSlideIn 300ms ease-out forwards",
                                        animationDelay: `${i * 60}ms`,
                                        opacity: 0,
                                    }}
                                >
                                    {paragraph}
                                </p>
                            ))}
                    </div>
                </div>

                {/* Gallery */}
                {images.gallery.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold text-gray-100 mb-6">Gallery</h2>
                        <div className="columns-2 md:columns-3 gap-6">
                            {images.gallery.map((src, i) => (
                                <div
                                    key={src}
                                    className="mb-6 break-inside-avoid"
                                    style={{
                                        animation: "fadeSlideIn 300ms ease-out forwards",
                                        animationDelay: `${i * 60}ms`,
                                        opacity: 0,
                                    }}
                                >
                                    {src.endsWith(".mp4") ? (
                                        <video
                                            src={src}
                                            controls
                                            autoPlay
                                            muted
                                            loop
                                            className="w-full rounded-xl ring-4 ring-[#434BE1] bg-black"
                                        />
                                    ) : (
                                        <img
                                            src={src}
                                            alt={`${title} gallery ${i + 1}`}
                                            className="w-full rounded-xl ring-4 ring-[#434BE1]"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectView;
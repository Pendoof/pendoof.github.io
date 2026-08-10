import { useState, useEffect } from "react";
import profile from "../assets/profile.png";
import profileHover from "../assets/profile-hover.png";

const Hero: React.FC = () => {
	const NAMES = ["Pendoof", "Derek Chen"];
    const INTERVAL_MS = 30000;
    const FADE_MS = 500;
	const [name, setName] = useState<string>(NAMES[0]);
    const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
        let index = 0;

        const timer = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                index = (index + 1) % NAMES.length;
                setName(NAMES[index]);
                setIsVisible(true);
            }, FADE_MS);
        }, INTERVAL_MS);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-12 px-4">
            {/* Profile Image */}
            <div className="group">
                <img
                    src={profile}
                    alt="Profile picture of Pendoof"
                    className="w-32 h-32 rounded-lg ring-4 ring-[#434BE1] transition duration-200 group-hover:opacity-0 absolute"
                />
                <img
                    src={profileHover}
                    alt=""
                    className="w-32 h-32 rounded-lg ring-4 ring-[#434BE1] transition duration-200 opacity-0 group-hover:opacity-100"
                />
            </div>

            {/* Text Card */}
            <div className="max-w-lg bg-[#7295DF70] ring-4 ring-[#434BE1] p-4 rounded-lg text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-100">
                    <span
                        className={`inline-block transition-opacity duration-500 ease-in-out ${
                            isVisible ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {name}
                    </span>
                </h1>
                <p className="text-xl text-gray-200 mt-2 leading-relaxed">
                    Sophomore at Cooper Union, building full-stack apps and native
                    software in whatever language the project demands
                </p>
            </div>
        </div>
    );
};

export default Hero;

import { ReactElement } from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import { IoLogoPython } from "react-icons/io5";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
	SiCss3,
	SiExpress,
	SiFastapi,
	SiKubernetes,
	SiMongodb,
	SiNextdotjs,
	SiRedis,
	SiWeb3Dotjs,
	SiWebstorm,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const icons = {
	ts: <BiLogoTypescript color="#3178C6" size={100} className=" rounded-xl" />,
	js: <RiJavascriptFill color="#F7DF1E" size={100} className=" rounded-xl" />,
	py: <IoLogoPython color="#3776AB" size={100} className=" rounded-xl" />,
	cpp: <TbBrandCpp color="#00599C" size={100} className=" rounded-xl" />,
	html: <FaHtml5 color="#E34F26" size={100} className=" rounded-xl" />,
	css: <SiCss3 color="#1572B6" size={100} className=" rounded-xl" />,
	tl: (
		<RiTailwindCssFill color="#06B6D4" size={100} className=" rounded-xl" />
	),
	react: <FaReact color="#61DAFB" size={100} className=" rounded-xl" />,
	next: <SiNextdotjs color="#000000" size={100} className=" rounded-xl" />,
	exp: <SiExpress color="#000000" size={100} className=" rounded-xl" />,
	fast: <SiFastapi color="#009688" size={100} className=" rounded-xl" />,
	ws: <SiWebstorm color="#000000" size={100} className=" rounded-xl" />,
	mongo: <SiMongodb color="#47A248" size={100} className=" rounded-xl" />,
	pg: <BiLogoPostgresql color="#4169E1" size={100} className=" rounded-xl" />,
	git: <FaGitAlt color="#F05032" size={100} className=" rounded-xl" />,
	dock: <GrDocker color="#2496ED" size={100} className=" rounded-xl" />,
	redis: <SiRedis color="#DC382D" size={100} className=" rounded-xl" />,
	k8s: <SiKubernetes color="#326CE5" size={100} className=" rounded-xl" />,
	w3: <SiWeb3Dotjs color="#000000" size={100} className=" rounded-xl" />,
	github: <FaGithub color="#181717" size={100} className=" rounded-xl" />,
};

type IconKey = keyof typeof icons;

export const SkillIcon = ({
	icon,
	name,
	isBelow,
}: {
	icon: IconKey;
	name: string;
	isBelow?: boolean;
}) => {
	return (
		<div className="flex flex-col p-1 rounded-xl items-center">
			{!isBelow && (
				<p className="text-md font-bold text-center">{name}</p>
			)}
			{icons[icon]}
			{isBelow && <p className="text-md font-bold text-center">{name}</p>}
		</div>
	);
};

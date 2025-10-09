"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { SkillIcon } from "./SkillIcon";
export default function Aboutme() {
	return (
		<div>
			<motion.div className="w-full px-50">
				<h3 className="text-5xl text-center"> About me</h3>
				<motion.div className="w-full flex items-center justify-center gap-10">
					<div>
						<p>
							Hey! I’m Adil Shaikh, a FullStack Developer and
							DevOps enthusiast who loves building scalable,
							real-world products.
						</p>
						<br />
						<p>
							I’ve explored everything from frontend craft to
							backend architecture and cloud-native deployments. I
							work mostly with TypeScript, React, Next.js,
							Express, PostgreSQL, MongoDB, WebSockets, and I
							enjoy setting up infra with Docker, AWS, and
							Kubernetes. My focus leans towards backend + DevOps,
							but I like experimenting with frontend design and
							I’m also diving into Web3.
						</p>
						<br />
						<p>
							Outside academics, I’ve solved 1000+ DSA problems,
							which shaped my problem-solving mindset. I’m also
							building indie projects like FinGenius (AI finance
							tracker) — because I love turning ideas into
							products.
						</p>
						<br />
						<p>
							Whether it’s freelancing, collaborating on
							open-source, or working on production-ready apps, I
							aim to craft software that’s not just functional but
							impactful.
						</p>
					</div>
					<div>
						<Image
							src={"/techphoto.png"}
							width={1000}
							height={1000}
							className="w-auto h-auto"
							alt="techphoto.png"
						/>
					</div>
				</motion.div>
			</motion.div>

			<motion.div>
				<h3>skills</h3>
				<motion.div className="px-50 grid grid-cols-5 gap-3 py-10">
					<div className="border rounded-xl flex items-end-safe justify-end-safe bg-gray-800">
						<SkillIcon name="HTML" icon={"html"} />
					</div>
					<div className="border rounded-xl flex items-end-safe justify-normal">
						<SkillIcon name="CSS" icon={"css"} />
					</div>
					<div className="border rounded-xl flex items-end-safe justify-end-safe">
						<SkillIcon name="TypeScript" icon={"ts"} />
					</div>
					<div className="border rounded-xl flex items-end-safe justify-end-safe">
						<SkillIcon name="Git" icon={"git"} />
					</div>
					<div className="border rounded-xl flex items-end-safe justify-normal">
						<SkillIcon name="Python" icon={"py"} />
					</div>
					<div className="border rounded-xl flex items-end-safe justify-end-safe">
						<SkillIcon
							name="JavaScript"
							icon={"js"}
							isBelow={true}
						/>
					</div>
					<div className="border rounded-xl flex items-end-safe justify-normal">
						<SkillIcon name="React" icon={"react"} isBelow={true} />
					</div>
					<div className="border rounded-xl flex items-end-safe justify-end-safe">
						<SkillIcon name="Tailwind" icon={"tl"} isBelow={true} />
					</div>
					<div className="border rounded-xl flex items-end-safe justify-normal">
						<SkillIcon name="C++" icon={"cpp"} isBelow={true} />
					</div>
					<div className="border rounded-xl flex items-start justify-normal">
						<SkillIcon
							name="Github"
							icon={"github"}
							isBelow={true}
						/>
					</div>
					<div className="border rounded-xl flex items-end-safe justify-end-safe">
						<SkillIcon name="Express" icon={"exp"} />
					</div>
					<div className="border rounded-xl flex items-end-safe justify-end-safe">
						<SkillIcon name="MongoDB" icon={"mongo"} />
					</div>
					<div className="border rounded-xl flex items-start justify-normal">
						<SkillIcon name="Next.js" icon={"next"} />
					</div>
					<div className="border rounded-xl flex items-end-safe justify-end-safe">
						<SkillIcon name="Docker" icon={"dock"} />
					</div>
					<div className="border rounded-xl flex items-end-safe justify-normal">
						<SkillIcon name="Redis" icon={"redis"} />
					</div>
					<div className="border rounded-xl flex items-start justify-end-safe">
						<SkillIcon
							name="Websocket"
							icon={"ws"}
							isBelow={true}
						/>
					</div>
					<div className="border rounded-xl flex items-start justify-normal">
						<SkillIcon
							name="Fastapi"
							icon={"fast"}
							isBelow={true}
						/>
					</div>
					<div className="border rounded-xl flex items-start justify-normal">
						<SkillIcon
							name="PostgreSQL"
							icon={"pg"}
							isBelow={true}
						/>
					</div>
					<div className="border rounded-xl flex items-start justify-end-safe">
						<SkillIcon
							name="Kubernetes"
							icon={"k8s"}
							isBelow={true}
						/>
					</div>
					<div className="border rounded-xl flex items-start justify-normal">
						<SkillIcon name="Web3" icon={"w3"} isBelow={true} />
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}

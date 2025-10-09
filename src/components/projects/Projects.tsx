"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { ProjectImage } from "./ProjectImage";

export default function Projects() {
	return (
		<motion.div className="py-20 px-50">
			<h3>Projects</h3>
			<motion.div className="w-full h-full">
				<div className="w-full grid grid-cols-2">
					<div className="relative py-5 px-3">
						{/* Project content structure - replace contents and classes as needed */}
						<div className="project-card-content">
							<div>
								<h4 className="project-title">Canvora</h4>
								<Link
									href="https://canvora.asxcode.com/"
									target="_blank"
									className="action-link"
									aria-label="Live demo"
								>
									live
								</Link>
							</div>
							<p className="project-summary">
								Short, crisp description of the project. Replace
								this with a concise summary of what the project
								does and why it matters.
							</p>
							<ul className="project-meta">
								<li>
									<strong>Role:</strong> Developer
								</li>
								<li>
									<strong>Tech:</strong> React, Next.js,
									Tailwind
								</li>
								<li>
									<strong>Date:</strong> 2025
								</li>
							</ul>
							<div
								className="project-actions"
								role="group"
								aria-label="project actions"
							>
								<a
									href="https://github.com/whoisasx/Canvora"
									className="action-link"
									aria-label="View source"
								>
									Source code
								</a>
								<a
									href="https://drive.google.com/drive/folders/1aFfZyy-HZGu6Qnbx_6TjjPZOdW1Wtul4?usp=sharing"
									className="action-link"
									aria-label="View videos"
								>
									Videos
								</a>
							</div>
						</div>
						<div className="absolute top-0 right-0 h-full w-1 overflow-visible z-10">
							<div className="mx-auto w-1 bg-gray-300 h-[110%]"></div>
							<div className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-4">
								<div className="h-4 w-4 bg-white border-2 border-gray-400 rounded-full"></div>
							</div>
						</div>
					</div>
					<div className=" py-5 px-3">
						<Link
							href="https://canvora.asxcode.com/"
							target="_blank"
							className="action-link"
							aria-label="Live demo"
						>
							<Image
								src={"/canvora-landing.png"}
								alt="canvora-landing"
								height={600}
								width={800}
								className="w-auto h-auto"
							/>
						</Link>
					</div>

					<ProjectCard />
					<ProjectImage />
				</div>
			</motion.div>
		</motion.div>
	);
}

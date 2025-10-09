"use client";
import { motion } from "motion/react";
import { BiLogoGmail } from "react-icons/bi";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaDownload } from "react-icons/fa";
import { IoCopy, IoCheckmark } from "react-icons/io5";
import { useState, useEffect } from "react";

const roles = [
	"Fullstack Developer",
	"DevOps Engineer",
	"Problem Solver",
	"Web3 Learner",
	"Freelancer",
];

const resumeDownloadLink =
	"https://drive.google.com/uc?export=download&id=1SzKV8H49vB19ryfYkzXRv5JJYlObCk2T";

export default function HeroSection() {
	const [currentRole, setCurrentRole] = useState(0);
	const [copiedItem, setCopiedItem] = useState<string | null>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentRole((prev) => (prev + 1) % roles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	const handleCopy = async (text: string, label: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopiedItem(label);
			setTimeout(() => setCopiedItem(null), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	const socialLinks = [
		{
			icon: <BsTwitterX size={24} />,
			href: "https://x.com/whoisasx",
			label: "Twitter",
			hoverColor: "hover:text-blue-400",
			copyText: "https://x.com/whoisasx",
			value: "@whoisasx",
		},
		{
			icon: <FaGithub size={24} />,
			href: "https://github.com/whoisasx",
			label: "GitHub",
			hoverColor: "hover:text-gray-300",
			copyText: "https://github.com/whoisasx",
			value: "@whoisasx",
		},
		{
			icon: <BiLogoGmail size={24} />,
			href: "mailto:adil.business4064@gmail.com",
			label: "Email",
			hoverColor: "hover:text-red-400",
			copyText: "adil.business4064@gmail.com",
			value: "adil.business4064@gmail.com",
		},
		{
			icon: <BsWhatsapp size={24} />,
			href: "https://wa.me/+919773703018",
			label: "WhatsApp",
			hoverColor: "hover:text-green-400",
			copyText: "+919773703018",
			value: "+919773703018",
		},
	];

	return (
		<section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-canvora-600/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-canvora-800/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>

			<div className="max-w-7xl mx-auto w-full relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Main Content */}
					<div className="space-y-8">
						{/* Greeting */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="space-y-4"
						>
							<motion.p
								initial={{ opacity: 0, x: -30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2, duration: 0.6 }}
								className="text-canvora-300 text-lg md:text-xl font-medium"
							>
								Hello, I'm
							</motion.p>

							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.8 }}
								className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
							>
								Adil Shaikh
							</motion.h1>
						</motion.div>

						{/* Dynamic Role */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							className="space-y-2"
						>
							<p className="text-xl md:text-2xl text-gray-300">
								I am a
							</p>
							<div className="relative h-16 md:h-20 overflow-hidden">
								<motion.div
									key={currentRole}
									initial={{ y: 50, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -50, opacity: 0 }}
									transition={{ duration: 0.5 }}
									className="absolute inset-0 flex items-center"
								>
									<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-canvora-400 via-canvora-300 to-canvora-500 bg-clip-text text-transparent">
										{roles[currentRole]}
									</h2>
								</motion.div>
							</div>
						</motion.div>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8, duration: 0.8 }}
							className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
						>
							Passionate about building scalable web applications
							and cloud infrastructure. I love turning complex
							problems into elegant solutions.
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 0.8 }}
							className="flex flex-col sm:flex-row gap-4"
						>
							<motion.a
								href={resumeDownloadLink}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 bg-gradient-to-r from-canvora-600 to-canvora-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-canvora-600/25 transition-all duration-300 flex items-center justify-center gap-2"
							>
								<FaDownload className="size-4" />
								Download Resume
							</motion.a>

							<motion.a
								href="#projects"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-8 py-4 border-2 border-canvora-600 text-canvora-400 rounded-xl font-semibold hover:bg-canvora-600/10 transition-all duration-300"
							>
								View Projects
							</motion.a>
						</motion.div>
					</div>

					{/* Social Links & Contact */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 1.2, duration: 0.8 }}
						className="flex lg:justify-end justify-center"
					>
						<div className="space-y-6">
							<h3 className="text-xl font-semibold text-canvora-300 text-center lg:text-right">
								Let's Connect
							</h3>

							<div className="flex lg:flex-col flex-row justify-center lg:justify-end lg:gap-4 gap-3">
								{socialLinks.map((social, index) => (
									<motion.div
										key={social.label}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											delay: 1.4 + index * 0.1,
											duration: 0.5,
										}}
										className="group relative"
									>
										{/* Desktop: Show full copy UI */}
										<div className="hidden lg:flex items-center justify-between bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl gap-3 p-3 min-w-fit hover:border-canvora-600/50 transition-all duration-300">
											<motion.a
												href={social.href}
												target="_blank"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												className={`text-gray-400 ${social.hoverColor} transition-colors duration-300 w-10 h-10 flex items-center justify-center`}
											>
												{social.icon}
											</motion.a>
											<motion.div className="flex items-center gap-2 justify-center">
												<span className="text-gray-300 text-sm font-medium min-w-fit">
													{social.value}
												</span>
												<motion.button
													onClick={() =>
														handleCopy(
															social.copyText,
															social.label
														)
													}
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.9 }}
													className="p-2 hover:bg-canvora-600/20 rounded-lg transition-colors duration-200 group-hover:text-canvora-400"
												>
													<motion.div
														initial={false}
														animate={{
															scale:
																copiedItem ===
																social.label
																	? [
																			1,
																			1.2,
																			1,
																	  ]
																	: 1,
														}}
														transition={{
															duration: 0.3,
														}}
													>
														{copiedItem ===
														social.label ? (
															<IoCheckmark
																size={18}
																className="text-green-400"
															/>
														) : (
															<IoCopy
																size={18}
																className="text-gray-400"
															/>
														)}
													</motion.div>
												</motion.button>
											</motion.div>
										</div>

										{/* Mobile: Show icon with tooltip */}
										<div className="lg:hidden">
											<motion.a
												href={social.href}
												target="_blank"
												whileHover={{
													scale: 1.1,
													y: -2,
												}}
												whileTap={{ scale: 0.9 }}
												className={`
													group relative w-12 h-12 bg-gray-800/50 rounded-xl border border-gray-700/50
													backdrop-blur-sm transition-all duration-300 text-gray-400 flex items-center justify-center ${social.hoverColor}
													hover:border-canvora-600/50 hover:shadow-lg hover:shadow-canvora-600/10
												`}
											>
												{social.icon}
											</motion.a>

											{/* Mobile Tooltip */}
											<div className="absolute -top-10 left-1/2 transform -translate-x-1/2 translate-y-2 scale-95 opacity-0 invisible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out lg:hidden z-30">
												<div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2 whitespace-nowrap flex gap-2 items-center justify-center pointer-events-auto">
													<div className="text-xs text-gray-300 mb-1">
														{social.value}
													</div>
													<button
														onClick={(e) => {
															e.preventDefault();
															handleCopy(
																social.copyText,
																social.label
															);
														}}
														className="flex items-center gap-1 text-xs text-canvora-400 hover:text-canvora-300 transition-colors"
													>
														<IoCopy size={14} />
													</button>
												</div>
												{/* Tooltip arrow */}
												<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
											</div>
										</div>

										{/* Copy success notification */}
										{copiedItem === social.label && (
											<motion.div
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -10 }}
												className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20"
											>
												Copied!
											</motion.div>
										)}
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 1 }}
					className="absolute -bottom-45 left-1/2 transform -translate-x-1/2"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="w-6 h-10 border-2 border-canvora-600 rounded-full flex justify-center"
					>
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
							className="w-1 h-3 bg-canvora-600 rounded-full mt-2"
						></motion.div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

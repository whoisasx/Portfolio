"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { BsTwitterX, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaHeart, FaArrowUp } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const resumeDownloadLink =
	"https://drive.google.com/uc?export=download&id=1SzKV8H49vB19ryfYkzXRv5JJYlObCk2T";

const socialLinks = [
	{
		name: "GitHub",
		icon: <FaGithub className="size-5" />,
		href: "https://github.com/whoisasx",
		color: "hover:text-gray-300",
	},
	{
		name: "Twitter",
		icon: <BsTwitterX className="size-5" />,
		href: "https://twitter.com/whoisasx",
		color: "hover:text-blue-400",
	},
	{
		name: "Email",
		icon: <BiLogoGmail className="size-5" />,
		href: "mailto:adil.business4064@gmail.com",
		color: "hover:text-red-400",
	},
	{
		name: "WhatsApp",
		icon: <BsWhatsapp className="size-5" />,
		href: "https://wa.me/+919773703018",
		color: "hover:text-green-400",
	},
];

const quickLinks = [
	{ name: "About", href: "#aboutme" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
	{ name: "Skills", href: "#skills" },
];

export default function Footer() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer
			id="contact"
			className="relative mt-20 bg-gradient-to-b from-transparent to-black/50"
		>
			{/* Background decoration */}
			<div className="absolute inset-0 bg-gradient-to-t from-canvora-950/20 to-transparent"></div>

			<div className="relative z-10">
				{/* Main Footer Content */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="grid lg:grid-cols-3 gap-12">
						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="space-y-6"
						>
							<div>
								<h3 className="text-2xl font-bold text-white mb-4">
									Let's Connect
								</h3>
								<p className="text-gray-400 text-lg leading-relaxed">
									I'm always open to discussing new
									opportunities, creative projects, or just
									having a chat about technology.
								</p>
							</div>

							<div className="space-y-4">
								<div className="flex items-center gap-3 text-gray-400">
									<HiLocationMarker className="size-5 text-canvora-400" />
									<span>Patna, India</span>
								</div>
								<div className="flex items-center gap-3 text-gray-400">
									<BiLogoGmail className="size-5 text-canvora-400" />
									<a
										href="mailto:adil@example.com"
										className="hover:text-canvora-400 transition-colors"
									>
										adil.business@gmail.com
									</a>
								</div>
							</div>

							{/* CTA Button */}
							<motion.a
								href="mailto:adil.business@gmail.com"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="inline-flex items-center gap-2 bg-canvora-600 hover:bg-canvora-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
							>
								<BiLogoGmail className="size-4" />
								Get In Touch
							</motion.a>
						</motion.div>

						{/* Quick Links */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.8 }}
							className="space-y-6"
						>
							<h3 className="text-2xl font-bold text-white">
								Quick Links
							</h3>
							<nav className="space-y-3">
								{quickLinks.map((link) => (
									<Link
										key={link.name}
										href={link.href}
										className="block text-gray-400 hover:text-canvora-400 transition-colors duration-300 text-lg"
									>
										{link.name}
									</Link>
								))}
							</nav>

							<div className="pt-4">
								<p className="text-gray-400 mb-4">
									Download my resume:
								</p>
								<motion.a
									href={resumeDownloadLink}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="inline-flex items-center gap-2 border-2 border-canvora-600 text-canvora-400 hover:bg-canvora-600/10 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
								>
									📄 Resume.pdf
								</motion.a>
							</div>
						</motion.div>

						{/* Social Links */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4, duration: 0.8 }}
							className="space-y-6"
						>
							<h3 className="text-2xl font-bold text-white">
								Follow Me
							</h3>
							<div className="grid grid-cols-2 gap-4">
								{socialLinks.map((social) => (
									<motion.a
										key={social.name}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ scale: 1.05, y: -2 }}
										whileTap={{ scale: 0.95 }}
										className={`
											flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50
											hover:border-canvora-600/50 transition-all duration-300 text-gray-400 ${social.color}
										`}
									>
										{social.icon}
										<span className="font-medium">
											{social.name}
										</span>
									</motion.a>
								))}
							</div>

							{/* Fun Stats */}
							<div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
								<h4 className="text-lg font-semibold text-canvora-400 mb-3">
									Current Status
								</h4>
								<div className="space-y-2 text-sm text-gray-400">
									<div className="flex items-center justify-between">
										<span>☕ Coffee consumed today:</span>
										<span className="text-white">
											3 cups
										</span>
									</div>
									<div className="flex items-center justify-between">
										<span>🚀 Projects in development:</span>
										<span className="text-white">2</span>
									</div>
									<div className="flex items-center justify-between">
										<span>🎵 Currently listening to:</span>
										<span className="text-white">
											Lo-fi
										</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
						<div className="flex flex-col md:flex-row items-center justify-between gap-4">
							<motion.p
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								className="text-gray-400 text-center md:text-left"
							>
								© 2025 Adil Shaikh. Made with{" "}
								<FaHeart className="inline-block size-4 text-red-500 mx-1" />{" "}
								using Next.js & Tailwind CSS
							</motion.p>

							<motion.button
								onClick={scrollToTop}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="flex items-center gap-2 text-canvora-400 hover:text-canvora-300 transition-colors duration-300"
							>
								<FaArrowUp className="size-4" />
								Back to top
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

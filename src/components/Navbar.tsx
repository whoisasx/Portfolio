"use client";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [viewMenu, setViewMenu] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ href: "#aboutme", label: "About" },
		{ href: "#projects", label: "Projects" },
		{ href: "#contact", label: "Contact" },
		{ href: "#skills", label: "Skills" },
	];

	// animation variants for mobile menu
	const menuVariants = {
		hidden: { opacity: 0, y: -8 },
		show: {
			opacity: 1,
			y: 0,
			transition: { when: "beforeChildren", staggerChildren: 0.06 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: -6 },
		show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
	};

	return (
		<motion.nav
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className={`fixed top-0 w-full z-50 transition-all duration-500 ${
				isScrolled
					? "backdrop-blur-xl bg-black/20 border-b border-canvora-800/30"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo/Name */}
					<motion.div
						initial={{ x: -50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="flex-shrink-0"
					>
						<h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-canvora-400 to-canvora-200 bg-clip-text text-transparent">
							Adil Shaikh
						</h1>
					</motion.div>

					{/* Navigation Links */}
					<motion.div
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className="hidden md:flex items-center space-x-1"
					>
						{navItems.map((item, index) => (
							<motion.div
								key={item.href}
								initial={{ y: -20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{
									delay: 0.5 + index * 0.1,
									duration: 0.5,
								}}
							>
								<Link
									href={item.href}
									className="relative px-4 py-2 text-gray-300 hover:text-canvora-300 transition-all duration-300 group"
								>
									<span className="relative z-10">
										{item.label}
									</span>
									<div className="absolute inset-0 bg-canvora-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
								</Link>
							</motion.div>
						))}
					</motion.div>

					{/* Mobile Menu Button */}
					<motion.div
						initial={{ x: 50, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						className="md:hidden"
					>
						<button
							className="text-gray-300 hover:text-canvora-300 transition-colors"
							onClick={() => setViewMenu((prev) => !prev)}
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</motion.div>
				</div>

				{/* Mobile Navigation - You can expand this later */}
				{viewMenu && (
					<AnimatePresence>
						<motion.div
							className="md:hidden"
							initial="hidden"
							animate="show"
							exit="hidden"
							variants={menuVariants}
						>
							<div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-lg rounded-lg mt-2">
								{navItems.map((item) => (
									<motion.div
										key={item.href}
										variants={itemVariants}
									>
										<Link
											key={item.href}
											href={item.href}
											className="block px-3 py-2 text-gray-300 hover:text-canvora-300 transition-colors"
										>
											{item.label}
										</Link>
									</motion.div>
								))}
							</div>
						</motion.div>
					</AnimatePresence>
				)}
			</div>
		</motion.nav>
	);
}

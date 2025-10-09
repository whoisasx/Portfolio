"use client";
import { motion } from "motion/react";
import { ReactElement } from "react";

interface IconProps {
	children: ReactElement;
	size?: string | number;
	color?: string;
	className?: string;
	onClick?: () => void;
	interactive?: boolean;
	variant?: "default" | "gradient" | "glass" | "minimal";
}

export const Icon = ({
	children,
	size,
	color,
	className = "",
	onClick,
	interactive = true,
	variant = "default",
}: IconProps) => {
	const baseClasses =
		"flex items-center justify-center transition-all duration-300";

	const variantClasses = {
		default:
			"h-12 w-12 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-canvora-600/50 hover:bg-canvora-600/10",
		gradient:
			"h-12 w-12 bg-gradient-to-br from-canvora-600/20 to-canvora-800/20 border border-canvora-600/30 rounded-xl hover:from-canvora-600/30 hover:to-canvora-800/30",
		glass: "h-12 w-12 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-canvora-400/50",
		minimal: "h-10 w-10 hover:bg-canvora-600/10 rounded-lg",
	};

	const hoverAnimation = interactive
		? {
				whileHover: { scale: 1.05, y: -2 },
				whileTap: { scale: 0.95 },
		  }
		: {};

	return (
		<motion.span
			className={`${baseClasses} ${variantClasses[variant]} ${className}`}
			onClick={onClick}
			style={{ color }}
			{...hoverAnimation}
		>
			{children}
		</motion.span>
	);
};

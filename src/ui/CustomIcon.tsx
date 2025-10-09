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
}

export const Icon = ({
	children,
	size,
	color,
	className,
	onClick,
	interactive = true,
}: IconProps) => {
	return (
		<motion.span
			className={`h-10 w-10 flex items-center justify-center ${className}`}
			onClick={onClick}
		>
			{children}
		</motion.span>
	);
};

"use client";
import { Icon } from "@/ui/CustomIcon";
import { motion } from "motion/react";
import { ReactElement, useState } from "react";
import { IoCopy, IoCheckmark } from "react-icons/io5";

export const Slider = ({
	icon,
	paraVal,
}: {
	icon: ReactElement;
	paraVal: string;
}) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(paraVal);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	return (
		<motion.div
			initial={{ x: 100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="group relative"
		>
			<motion.div
				whileHover={{ scale: 1.02 }}
				className="flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 gap-3 min-w-fit hover:border-canvora-600/50 transition-all duration-300"
			>
				<div className="text-canvora-400">{icon}</div>
				<span className="text-gray-300 text-sm font-medium min-w-fit">
					{paraVal}
				</span>
				<motion.button
					onClick={handleCopy}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="p-2 hover:bg-canvora-600/20 rounded-lg transition-colors duration-200 group-hover:text-canvora-400"
				>
					<motion.div
						initial={false}
						animate={{ scale: copied ? [1, 1.2, 1] : 1 }}
						transition={{ duration: 0.3 }}
					>
						{copied ? (
							<IoCheckmark className="size-4 text-green-400" />
						) : (
							<IoCopy className="size-4 text-gray-400" />
						)}
					</motion.div>
				</motion.button>
			</motion.div>

			{copied && (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded"
				>
					Copied!
				</motion.div>
			)}
		</motion.div>
	);
};

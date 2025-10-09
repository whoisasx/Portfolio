// ...existing code...
"use client";

import { motion } from "motion/react";

export default function Background() {
	return (
		<motion.div className="absolute inset-0 pointer-events-none">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={"100%"}
				height={"100%"}
				className="absolute inset-0"
				preserveAspectRatio="xMidYMid slice"
			>
				<defs>
					{/* tile width=86, height=74 roughly for hex tiling; adjust size by changing these */}
					<pattern
						id="hex"
						patternUnits="userSpaceOnUse"
						width="86"
						height="74"
					>
						<linearGradient
							id="hexStrokeGrad"
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop
								offset="0%"
								stopColor="var(--color-canvora-300, #a2a2ea)"
							/>
							<stop
								offset="50%"
								stopColor="var(--color-canvora-500, #6965db)"
							/>
							<stop
								offset="100%"
								stopColor="var(--color-canvora-700, #4945a9)"
							/>
						</linearGradient>

						{/* base hexagon at origin */}
						<path
							d="M43 0 L86 22 L86 52 L43 74 L0 52 L0 22 Z"
							fill="none"
							stroke="url(#hexStrokeGrad)"
							strokeWidth="1"
							strokeOpacity="0.5"
						/>

						{/* shifted hexagon that sits between two hexes of the previous row (dashed) */}
						<path
							d="M43 0 L86 22 L86 52 L43 74 L0 52 L0 22 Z"
							transform="translate(43,37)"
							fill="none"
							stroke="url(#hexStrokeGrad)"
							strokeWidth="1"
							strokeDasharray="4 4"
							strokeOpacity="0.5"
						/>
					</pattern>
				</defs>

				{/* big rect fills viewport with pattern */}
				<rect width="100%" height="100%" fill="url(#hex)" />

				{/* overlay dark gradient to sit above the grid so it feels like grid is 'beneath' the bg */}
				<defs>
					<radialGradient
						id="bgOverlayGrad"
						cx="50%"
						cy="40%"
						r="80%"
					>
						<stop
							offset="0%"
							stopColor="var(--bg-dark, #0a0c14)"
							stopOpacity="0.1"
						/>
						<stop
							offset="40%"
							stopColor="var(--bg-dark, #0a0c14)"
							stopOpacity="0.5"
						/>
						<stop
							offset="100%"
							stopColor="var(--bg-dark, #0a0c14)"
							stopOpacity="0.95"
						/>
					</radialGradient>
				</defs>

				<rect width="100%" height="100%" fill="url(#bgOverlayGrad)" />
			</svg>

			<div className="absolute inset-0 pointer-events-none">
				<div
					className="absolute inset-0"
					style={{
						background: `
							radial-gradient(ellipse 60% 15% at 50% 0%, transparent 0%, transparent 40%, rgba(248, 250, 252, 0.15) 70%, rgba(248, 250, 252, 0.3) 85%, rgba(248, 250, 252, 0.5) 100%),
							radial-gradient(ellipse 60% 15% at 50% 100%, transparent 0%, transparent 40%, rgba(248, 250, 252, 0.15) 70%, rgba(248, 250, 252, 0.3) 85%, rgba(248, 250, 252, 0.5) 100%),
							linear-gradient(to bottom, rgba(248, 250, 252, 0.03) 0%, rgba(248, 250, 252, 0.15) 10%, rgba(248, 250, 252, 0.25) 20%, rgba(248, 250, 252, 0.4) 30%, rgba(248, 250, 252, 0.6) 35%, rgba(248, 250, 252, 0.6) 65%, rgba(248, 250, 252, 0.4) 70%, rgba(248, 250, 252, 0.25) 80%, rgba(248, 250, 252, 0.15) 90%, rgba(248, 250, 252, 0.03) 100%)
						`,
					}}
				></div>

				<div
					className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/4 "
					style={{
						background:
							"radial-gradient(ellipse 100% 100% at center top, rgba(14, 165, 233, 0.04) 0%, transparent 70%)",
					}}
				></div>

				<div
					className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1/4 "
					style={{
						background:
							"radial-gradient(ellipse 100% 100% at center bottom, rgba(14, 165, 233, 0.04) 0%, transparent 70%)",
					}}
				></div>
			</div>
		</motion.div>
	);
}

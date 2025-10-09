"use client";
import { Icon } from "@/ui/CustomIcon";
import { motion } from "motion/react";
import { ReactElement } from "react";
import { IoCopy } from "react-icons/io5";

export const Slider = ({
	icon,
	paraVal,
}: {
	icon: ReactElement;
	paraVal: string;
}) => {
	return (
		<motion.div className="w-50 border h-10 rounded-l-full px-1 flex items-center gap-2">
			<Icon>{icon}</Icon>
			<div className="flex items-center gap-2">
				<p>{paraVal}</p>
				<Icon>
					<IoCopy color="currentColor" className="size-7" />
				</Icon>
			</div>
		</motion.div>
	);
};

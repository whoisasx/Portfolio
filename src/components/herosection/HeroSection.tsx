import { Icon } from "@/ui/CustomIcon";
import { BiLogoGmail } from "react-icons/bi";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { Slider } from "./SlidingIcon";

export default function HeroSection() {
	return (
		<div className="w-full h-full py-80 relative">
			<div>
				<div className="flex gap-4">
					<p className="text-5xl">Adil Shaikh, </p>
					<button className="mt-5">resume</button>
				</div>
				<h1 className="flex gap-3">
					<span className="text-9xl inline-block align-baseline">
						I am A{" "}
					</span>
					<div className="text-7xl mt-12 h-18 overflow-auto">
						<div>Fullstack Developer</div>
						<div>DevOps Engineer</div>
						<div>Problem Solver</div>
						<div>Web3 Learner</div>
						<div>Freelancer</div>
					</div>
				</h1>
			</div>
			<div className="absolute top-10 right-0 border">
				<div className="w-full h-full flex flex-col gap-1">
					<Icon className="mr-3">
						<BsTwitterX color="currentColor" className="size-7" />
					</Icon>
					<Slider
						paraVal="twitter"
						icon={
							<BsTwitterX
								className="size-7"
								color="currentColor"
							/>
						}
					/>
					<Icon>
						<FaGithub color="currentColor" className="size-7" />
					</Icon>
					<Icon>
						<BiLogoGmail color="currentColor" className="size-7" />
					</Icon>
					<Icon>
						<BsWhatsapp color="currentColor" className="size-7" />
					</Icon>
				</div>
			</div>
		</div>
	);
}

import Image from "next/image";
import Link from "next/link";

export const ProjectImage = () => {
	return (
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
	);
};

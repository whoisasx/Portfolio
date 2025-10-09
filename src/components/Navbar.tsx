import Link from "next/link";

export default function Navbar() {
	return (
		<div className="w-full px-5 py-4 bg-rose-300 flex items-center sticky top-0">
			<p className="hidden md:block">Adil Shaikh</p>
			<div className="w-full absolute inset-0 flex items-center justify-center">
				<div className="flex gap-2 items-center px-3 py-2 border">
					<Link href={"#aboutme"}>About me</Link>
					<Link href={"#projects"}>Projects</Link>
					<Link href={"#Contact"}>Contact</Link>
					<Link href={"resume download link"}>resume</Link>
				</div>
			</div>
		</div>
	);
}

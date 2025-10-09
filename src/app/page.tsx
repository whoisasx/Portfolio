import Aboutme from "@/components/aboutme/Aboutme";
import Background from "@/components/Background";
import HeroSection from "@/components/herosection/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/projects/Projects";

export default function Home() {
	return (
		<div className="min-h-scree min-w-screen relative">
			<Navbar />
			<HeroSection />
			<Aboutme />
			<Projects />
		</div>
	);
}

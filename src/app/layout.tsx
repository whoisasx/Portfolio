import type { Metadata } from "next";
import { Geist, Geist_Mono, Cal_Sans } from "next/font/google";
// @ts-ignore
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "whoisasx | portfolio",
	description:
		"Passionate about building scalable web applications and cloud infrastructure. I love turning complex problems into elegant solutions.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`font-alansans ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}

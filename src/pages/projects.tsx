import { HeroSection } from '@components/HeroSection';
import { PageWrapper } from '@components/PageWrapper';
import { ProjectCard } from '@components/ProjectCard';
import { ProjectDivider } from '@components/ProjectDivider';
import {
	SiD3dotjs,
	SiFirebase,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiRemix,
	SiTailwindcss,
	SiTypescript,
} from '@icons-pack/react-simple-icons';
import { Fragment } from 'react';

export interface Project {
	title: string;
	description: string;
	image: { url: string; alt: string; width: number; height: number };
	websiteUrl: string;
	githubUrl: string;
	tech: { title: string; icon: React.ReactNode }[];
}

const projects: Project[] = [
	{
		title: `Latin American Political History Map`,
		description: `A visual and interactive timeline of the political history of Latin America.`,
		image: { url: `/latamap.png`, alt: `A screenshot of the map set to January 1st, 2023`, width: 1200, height: 630 },
		websiteUrl: `https://www.latamap.com/`,
		githubUrl: `https://github.com/CalebLovell/latamap`,
		tech: [
			{ title: `D3.js`, icon: <SiD3dotjs fr={12} /> },
			{ title: `Remix Run`, icon: <SiRemix fr={12} /> },
			{ title: `Prisma`, icon: <SiPrisma fr={12} /> },
			{ title: `Postgres`, icon: <SiPostgresql fr={12} /> },
			{ title: `React.js`, icon: <SiReact fr={12} /> },
			{ title: `Tailwind CSS`, icon: <SiTailwindcss fr={12} /> },
			{ title: `TypeScript`, icon: <SiTypescript fr={12} /> },
		],
	},
	{
		title: `SteelPoll`,
		description: `SteelPoll is a web app for making real-time, privacy-focused polls that you can share with your friends. You can vote with First Past The Post, Ranked Choice and STAR voting systems.`,
		image: { url: `/steelpoll.png`, alt: `steelpoll results page`, width: 1094, height: 684 },
		websiteUrl: `https://www.steelpoll.com/`,
		githubUrl: `https://github.com/CalebLovell/steelpoll`,
		tech: [
			{ title: `Next.js`, icon: <SiNextdotjs fr={12} /> },
			{ title: `React.js`, icon: <SiReact fr={12} /> },
			{ title: `Firebase`, icon: <SiFirebase fr={12} /> },
			{ title: `D3.js`, icon: <SiD3dotjs fr={12} /> },
			{ title: `Tailwind CSS`, icon: <SiTailwindcss fr={12} /> },
			{ title: `TypeScript`, icon: <SiTypescript fr={12} /> },
		],
	},
	{
		title: `Caleb Lovell's Blogfolio`,
		description: `My personal website is what you are viewing right now! It's a blog, portfolio, contact form, and space for me to experiment with stuff.`,
		image: { url: `/blogfolio.png`, alt: `the website's home page`, width: 1094, height: 684 },
		websiteUrl: `https://www.caleblovell.com/`,
		githubUrl: `https://github.com/CalebLovell/personal-site`,
		tech: [
			{ title: `Next.js`, icon: <SiNextdotjs fr={12} /> },
			{ title: `React.js`, icon: <SiReact fr={12} /> },
			{ title: `Tailwind CSS`, icon: <SiTailwindcss fr={12} /> },
			{ title: `TypeScript`, icon: <SiTypescript fr={12} /> },
		],
	},
];

const metadata = {
	title: `Caleb Lovell's Projects Portfolio`,
	description: `Check out some of the website I've built`,
};

export default function Projects() {
	return (
		<PageWrapper metadata={metadata}>
			<HeroSection title='Projects' subtitle="A list of projects I've built" />
			<div className='flex justify-center'>
				<section className='max-w-4xl px-3 my-2 space-y-8 md:my-8 md:px-5 md:space-y-10'>
					{projects.map((x, index) => (
						<Fragment key={x.title}>
							<ProjectCard project={x} />
							{index !== projects.length - 1 && <ProjectDivider />}
						</Fragment>
					))}
				</section>
			</div>
		</PageWrapper>
	);
}

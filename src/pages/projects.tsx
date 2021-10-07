import { HeroSection } from '@components/HeroSection';
import { PageWrapper } from '@components/PageWrapper';
import { ProjectCard } from '@components/ProjectCard';
import { ProjectDivider } from '@components/ProjectDivider';

import { Nextdotjs, Tailwindcss, Typescript, ReactJs, Firebase, DThreeDotjs } from '@icons-pack/react-simple-icons';

export interface Project {
	title: string;
	description: string;
	image: { url: string; alt: string };
	websiteUrl: string;
	githubUrl: string;
	tech: { title: string; icon: React.ReactNode }[];
}

const projects: Project[] = [
	{
		title: `SteelPoll`,
		description: `SteelPoll is a web app for making real-time, privacy-focused polls that you can share with your friends. You can vote with First Past The Post, Ranked Choice and STAR voting systems.`,
		image: { url: `/steelpoll.png`, alt: `steelpoll results page` },
		websiteUrl: `https://www.steelpoll.com/`,
		githubUrl: `https://github.com/CalebLovell/steelpoll`,
		tech: [
			{ title: `Next.js`, icon: <Nextdotjs /> },
			{ title: `React.js`, icon: <ReactJs /> },
			{ title: `Firebase`, icon: <Firebase /> },
			{ title: `D3.js`, icon: <DThreeDotjs /> },
			{ title: `Tailwind CSS`, icon: <Tailwindcss /> },
			{ title: `TypeScript`, icon: <Typescript /> },
		],
	},
	{
		title: `Caleb Lovell Personal Website`,
		description: `My personal website is what you are viewing right now! It's a blog, portfolio, contact form, and space for me to experiment with stuff.`,
		image: { url: `/steelpoll.png`, alt: `placeholder` },
		websiteUrl: `https://www.caleblovell.dev/`,
		githubUrl: `https://github.com/CalebLovell/personal-site`,
		tech: [
			{ title: `Next.js`, icon: <Nextdotjs /> },
			{ title: `React.js`, icon: <ReactJs /> },
			{ title: `Tailwind CSS`, icon: <Tailwindcss /> },
			{ title: `TypeScript`, icon: <Typescript /> },
		],
	},
];

export default function Projects() {
	return (
		<PageWrapper>
			<HeroSection title='Projects' subtitle="A list of projects I've built" />
			<div className='flex justify-center'>
				<section className='max-w-4xl px-3 my-2 space-y-8 md:my-8 md:px-5 md:space-y-10'>
					{projects.map((x, index) => (
						<>
							<ProjectCard key={x.title} project={x} />
							{index !== projects.length - 1 && <ProjectDivider />}
						</>
					))}
				</section>
			</div>
		</PageWrapper>
	);
}

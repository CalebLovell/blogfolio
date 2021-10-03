import { HeroSection } from '@components/HeroSection';
import { PageWrapper } from '@components/PageWrapper';
import { ProjectCard } from '@components/ProjectCard';
import { ProjectDivider } from '@components/ProjectDivider';
import { D3Icon } from '@components/svg/D3Icon';
import { FirebaseIcon } from '@components/svg/FirebaseIcon';
import { MDXIcon } from '@components/svg/MDXIcon';
import { NextIcon } from '@components/svg/NextIcon';
import { ReactIcon } from '@components/svg/ReactIcon';
import { TailwindIcon } from '@components/svg/TailwindIcon';
import { TypescriptIcon } from '@components/svg/TypeScriptIcon';

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
		image: { url: `/steelpoll_results.png`, alt: `steelpoll results page` },
		websiteUrl: `https://www.steelpoll.com/`,
		githubUrl: `https://github.com/CalebLovell/steelpoll`,
		tech: [
			{ title: `Next.js`, icon: <NextIcon /> },
			{ title: `React.js`, icon: <ReactIcon /> },
			{ title: `Firebase`, icon: <FirebaseIcon /> },
			{ title: `D3.js`, icon: <D3Icon /> },
			{ title: `Tailwind CSS`, icon: <TailwindIcon /> },
			{ title: `TypeScript`, icon: <TypescriptIcon /> },
		],
	},
	{
		title: `Caleb Lovell Personal Website`,
		description: `My personal website is what you are viewing right now! It's a blog, portfolio, contact form, and space for me to experiment with new technologies too.`,
		image: { url: `/steelpoll.png`, alt: `placeholder` },
		websiteUrl: `https://www.caleblovell.dev/`,
		githubUrl: `https://github.com/CalebLovell/personal-site`,
		tech: [
			{ title: `Next.js`, icon: <NextIcon /> },
			{ title: `React.js`, icon: <ReactIcon /> },
			{ title: `MDX`, icon: <MDXIcon /> },
			{ title: `Tailwind CSS`, icon: <TailwindIcon /> },
			{ title: `TypeScript`, icon: <TypescriptIcon /> },
		],
	},
];

export default function Projects() {
	return (
		<PageWrapper>
			<HeroSection title='Projects' subtitle="A list of projects I've built" />
			<section className='w-full px-3 my-8 space-y-8 md:px-5 md:space-y-10'>
				{projects.map((x, index) => (
					<>
						<ProjectCard key={x.title} project={x} index={index} />
						{index !== projects.length - 1 && <ProjectDivider />}
					</>
				))}
			</section>
		</PageWrapper>
	);
}

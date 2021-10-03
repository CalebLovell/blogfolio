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
	imageUrl: string;
	websiteUrl: string;
	githubUrl: string;
	tech: { id: number; title: string; icon: React.ReactNode }[];
}

const projects: Project[] = [
	{
		title: `SteelPoll`,
		description: `SteelPoll is a web app for making real-time, privacy-focused polls that you can share and vote on with friends. This site uses First Past The Post, Ranked Choice and STAR voting systems.`,
		imageUrl: `/steelpoll_results.png`,
		websiteUrl: `https://www.steelpoll.com/`,
		githubUrl: `https://github.com/CalebLovell/steelpoll`,
		tech: [
			{ id: 0, title: `Next.js`, icon: <NextIcon /> },
			{ id: 1, title: `React.js`, icon: <ReactIcon /> },
			{ id: 2, title: `Firebase`, icon: <FirebaseIcon /> },
			{ id: 3, title: `D3.js`, icon: <D3Icon /> },
			{ id: 4, title: `Tailwind CSS`, icon: <TailwindIcon /> },
			{ id: 5, title: `TypeScript`, icon: <TypescriptIcon /> },
		],
	},
	{
		title: `Caleb Lovell Personal Website`,
		description: `My personal website is what you are viewing right now! It's a blog, portfolio, contact form, and space for me to experiment with new technologies too.`,
		imageUrl: `http://via.placeholder.com/1440x900`,
		websiteUrl: `https://www.caleblovell.dev/`,
		githubUrl: `https://github.com/CalebLovell/personal-site`,
		tech: [
			{ id: 0, title: `Next.js`, icon: <NextIcon /> },
			{ id: 1, title: `React.js`, icon: <ReactIcon /> },
			{ id: 2, title: `MDX`, icon: <MDXIcon /> },
			{ id: 3, title: `Tailwind CSS`, icon: <TailwindIcon /> },
			{ id: 4, title: `TypeScript`, icon: <TypescriptIcon /> },
		],
	},
];

export default function Projects() {
	return (
		<PageWrapper>
			<main className='flex flex-col items-center px-5 min-h-content'>
				<section className='flex flex-col items-center w-full space-y-4'>
					<h1 className='text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl'>Projects</h1>
					<h2 className='mt-2 text-lg text-gray-400 sm:mt-3'>A list of projects I&apos;ve built</h2>
				</section>
				<div className='w-full my-8 space-y-8 md:my-10 md:space-y-10'>
					{projects.map((x, index) => (
						<>
							<ProjectCard key={x.title} project={x} index={index} />
							{index !== projects.length - 1 && <ProjectDivider />}
						</>
					))}
				</div>
			</main>
		</PageWrapper>
	);
}

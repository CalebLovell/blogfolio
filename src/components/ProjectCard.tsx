import { Project } from 'pages/projects';
import Image from 'next/image';

export const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<article className='flex flex-col w-full gap-4 p-4 bg-gray-800 rounded-md'>
			<h1 className={`text-3xl font-bold text-gray-200`}>{project.title}</h1>
			<h3 className={`text-sm lg:text-base font-normal text-gray-200`}>{project.description}</h3>
			<div>
				<h2 className={`text-sm font-semibold tracking-tighter text-gray-400`}>Major Technologies Used:</h2>
				<div className={`flex flex-wrap gap-2 mt-2`}>
					{project.tech.map(x => (
						<div key={x.title} className='flex items-center px-3 py-1 bg-gray-900 rounded-md'>
							<p className='text-gray-200 lg:text-lg'>{x.title}</p>
							<div className='text-red-400'>{x.icon}</div>
						</div>
					))}
				</div>
			</div>
			<div className='overflow-hidden'>
				<Image
					className='rounded-md'
					src={project.image.url}
					width={1094}
					height={684}
					alt={project.image.alt}
					placeholder='blur'
					blurDataURL={project.image.url}
				/>
			</div>
			<div className={`flex justify-end gap-2`}>
				<a
					className='w-full sm:w-auto flex text-center justify-center items-center px-2 md:px-4 py-1.5 text-sm font-medium text-gray-200 transition duration-150 ease-in-out bg-red-600 border-2 border-red-600 rounded-md lg:text-base hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-900 focus:ring-red-600'
					href={project.websiteUrl}
					target='_blank'
					rel='noreferrer'
				>
					Visit Website
					<svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 ml-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
					</svg>
				</a>
				<a
					className='w-full sm:w-auto flex text-center justify-center items-center px-2 md:px-4 py-1.5 text-sm font-medium text-gray-200 transition duration-150 ease-in-out bg-transparent border-2 border-gray-400 rounded-md lg:text-base hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-900 focus:ring-red-600'
					href={project.githubUrl}
					target='_blank'
					rel='noreferrer'
				>
					View Code
					<svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 ml-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
					</svg>
				</a>
			</div>
		</article>
	);
};

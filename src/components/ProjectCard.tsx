import Image from 'next/image';
import { Project } from 'pages/projects';

export const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<article className='flex flex-col w-full gap-4 p-4 bg-gray-800 rounded-md'>
			<h1 className='text-3xl font-bold text-gray-200'>{project.title}</h1>
			<h3 className='text-sm lg:text-base font-normal text-gray-200'>{project.description}</h3>
			<div>
				<h2 className='text-sm font-semibold tracking-tighter text-gray-400'>Major Technologies Used:</h2>
				<div className='flex flex-wrap gap-2 mt-2'>
					{project.tech.map(x => (
						<div
							key={x.title}
							className='flex items-center px-3 py-1 bg-gray-900 rounded-md transition duration-75 ease-in-out hover:scale-90 hover:bg-gray-700'
						>
							<p className='text-gray-200 lg:text-lg'>{x.title}</p>
							<div className='ml-2 text-red-400'>{x.icon}</div>
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
			<div className='flex justify-end gap-2'>
				<a
					className='w-full sm:w-auto flex text-center justify-center items-center px-2 md:px-4 py-1.5 text-sm font-medium hover:scale-105 text-gray-200 transition duration-150 ease-in-out bg-red-600 border-2 border-red-600 rounded-md lg:text-base hover:bg-red-800 hover:border-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-900 focus:ring-red-600'
					href={project.websiteUrl}
					target='_blank'
					rel='noreferrer'
				>
					Visit Website
				</a>
				<a
					className='w-full sm:w-auto flex text-center justify-center items-center px-2 md:px-4 py-1.5 text-sm font-medium text-gray-200 hover:scale-105 transition duration-150 ease-in-out bg-transparent border-2 border-white rounded-md lg:text-base hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-900 focus:ring-red-600'
					href={project.githubUrl}
					target='_blank'
					rel='noreferrer'
				>
					View Code
				</a>
			</div>
		</article>
	);
};

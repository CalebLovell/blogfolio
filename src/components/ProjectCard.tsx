import { Project } from 'pages/projects';

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
	const isOdd = index % 2 === 0;
	return (
		<div className='p-1 rounded-md bg-gradient-to-br from-purple-400 via-pink-500 to-red-500'>
			<article className={`flex bg-gray-800 p-4 flex-col w-full gap-4 rounded-md ${isOdd ? `lg:flex-row` : `lg:flex-row-reverse`}`}>
				<div className='w-full h-full bg-gray-700 rounded-md'>
					<img className='object-cover w-full h-full rounded-md lg:h-72' src={project.image.url} alt={project.image.alt} />
				</div>
				<section className='flex flex-col justify-between w-full h-full gap-2 rounded-md lg:h-72'>
					<h1 className={`text-3xl font-bold text-gray-200 ${isOdd ? `lg:text-left` : `lg:text-right`}`}>{project.title}</h1>
					<div>
						<h2 className={`text-sm font-semibold tracking-tighter text-gray-400 ${isOdd ? `lg:text-left` : `lg:text-right`}`}>
							Major Technologies Used:
						</h2>
						<div className={`flex flex-wrap gap-2 mt-2 ${isOdd ? `lg:flex-row` : `lg:flex-row-reverse`}`}>
							{project.tech.map(x => (
								<div key={x.title} className='flex items-center px-1 py-1 bg-gray-900 border-2 border-gray-400 rounded-md lg:px-3'>
									<p className='text-gray-200 lg:text-lg'>{x.title}</p>
									{/* Hack cuz the MDX icon is weird */}
									{x.title === `MDX` ? <div className='ml-2'>{x.icon}</div> : <div className='w-4 ml-2 md:w-6'>{x.icon}</div>}
								</div>
							))}
						</div>
					</div>
					<h3 className={`text-sm lg:text-base font-normal text-gray-200 ${isOdd ? `lg:text-left` : `lg:text-right`}`}>{project.description}</h3>
					<div className={`flex gap-2 ${isOdd ? `lg:flex-row` : `lg:flex-row-reverse`}`}>
						<a
							className='flex text-center items-center px-4 py-1.5 text-sm font-medium text-gray-200 transition duration-150 ease-in-out bg-red-600 border-2 border-red-600 rounded-md lg:py-2 lg:text-base hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-900 focus:ring-red-600'
							href={project.websiteUrl}
							target='_blank'
							rel='noreferrer'
						>
							View Website
							<svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 ml-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
							</svg>
						</a>
						<a
							className='flex text-center items-center px-4 py-1.5 text-sm font-medium text-gray-200 transition duration-150 ease-in-out bg-transparent border-2 border-gray-400 rounded-md lg:py-2 lg:text-base hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-900 focus:ring-red-600'
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
				</section>
			</article>
		</div>
	);
};

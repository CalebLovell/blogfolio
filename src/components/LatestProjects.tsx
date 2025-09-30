import { Project } from 'pages/portfolio';

export const LatestProjects = ({ projects }: { projects: Project[] }) => {
	return (
		<div className='w-full'>
			<h3 className='my-4 text-2xl font-semibold tracking-tight text-gray-200'>Latest Projects</h3>
			<ul className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
				{projects.map(project => (
					<ProjectPreview key={project.title} project={project} />
				))}
			</ul>
		</div>
	);
};

const ProjectPreview = ({ project }: { project: Project }) => {
	return (
		<li
			key={project.title}
			className='flex flex-col justify-start p-4 rounded-md bg-gray-800 transition duration-75 ease-in-out hover:bg-gray-700 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600'
		>
			<a href={project.websiteUrl} target='_blank' rel='noopener noreferrer' className='focus:outline-none flex flex-col gap-4'>
				<p className='text-lg font-medium text-gray-200'>{project.title}</p>
				<img alt={project.image.alt} src={project.image.url} width={project.image.width} height={project.image.height} />
				<p className='text-sm text-gray-400'>{project.description}</p>
			</a>
		</li>
	);
};

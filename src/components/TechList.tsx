import {
	SiCss3,
	SiDocker,
	SiEslint,
	SiExpo,
	SiFirebase,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrettier,
	SiPrisma,
	SiReact,
	SiRemix,
	SiSentry,
	SiStripe,
	SiSupabase,
	SiSwagger,
	SiTailwindcss,
	SiTestinglibrary,
	SiTypescript,
} from '@icons-pack/react-simple-icons';

const frontend = [
	{ title: `HTML`, icon: <SiHtml5 fr={12} size={40} /> },
	{ title: `CSS`, icon: <SiCss3 fr={12} size={40} /> },
	{ title: `Tailwind CSS`, icon: <SiTailwindcss fr={12} size={40} /> },
	{ title: `React.js`, icon: <SiReact fr={12} size={40} /> },
	{ title: `Next.js`, icon: <SiNextdotjs fr={12} size={40} /> },
	{ title: `Remix Run`, icon: <SiRemix fr={12} size={40} /> },
	{ title: `JavaScript`, icon: <SiJavascript fr={12} size={40} /> },
	{ title: `TypeScript`, icon: <SiTypescript fr={12} size={40} /> },
	{ title: `Prettier`, icon: <SiPrettier fr={12} size={40} /> },
	{ title: `Eslint`, icon: <SiEslint fr={12} size={40} /> },
	{ title: `React Testing Library`, icon: <SiTestinglibrary fr={12} size={40} /> },
	{ title: `Sentry`, icon: <SiSentry fr={12} size={40} /> },
	{
		title: `Plausible Analytics`,
		icon: (
			<svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='w-10 h-10'>
				<title>Plausible Analytics</title>
				<path
					className='bg-red-400 fill-current'
					d='M12.1835.0017c-.6378-.0097-1.2884.022-1.7246.0996C8.601.424 7.035 1.2116 5.7384 2.4782 4.406 3.7806 3.582 5.299 3.1818 7.1929l-.1387.6445c-.0118 5.3872-.0233 10.7744-.035 16.1617.2914.0081.591-.0392.8416-.0606 2.348-.2868 4.3442-1.7083 5.4315-3.8651.2749-.5497.472-1.182.6094-1.9707.1135-.6691.1195-.8915.1016-4.3807l-.0176-3.6737.1425-.3574c.1972-.49.7425-1.0352 1.2324-1.2324l.3574-.1426 3.3457-.0058c1.8401 0 3.4545-.025 3.58-.0489.5854-.1135 1.2118-.6027 1.4628-1.1464.0717-.1494.1671-.4415.209-.6387.0657-.3286.0604-.4186-.0352-.789-.2987-1.0993-1.3503-2.6234-2.4257-3.5136C16.6247 1.1638 15.2798.4887 13.828.1482c-.3824-.0866-1.0067-.1368-1.6445-.1465zm8.5369 6.8006c-.0506.1798-.098.3662-.172.5215-.3358.7278-1.0382 1.2776-1.8221 1.4296-3.6737.0566-2.5392.0561-3.6737.0566l-3.248.0059-.2695.1074c-.3135.1262-.827.6397-.9531.9531l-.1074.2676.0175 3.576c.0149 2.8888.007 3.5821-.0605 4.125a8.9918 8.9918 0 0 0 1.5683.1386c4.9662.0001 8.992-4.0258 8.992-8.992a8.9918 8.9918 0 0 0-.2715-2.1893Z'
				/>
			</svg>
		),
	},
	{ title: `React Native`, icon: <SiReact fr={12} size={40} /> },
	{ title: `Expo`, icon: <SiExpo fr={12} size={40} /> },
];

const backend = [
	{ title: `Node.js`, icon: <SiNodedotjs fr={12} size={40} /> },
	{ title: `PostgreSQL`, icon: <SiPostgresql fr={12} size={40} /> },
	{ title: `Docker`, icon: <SiDocker fr={12} size={40} /> },
	{ title: `Prisma`, icon: <SiPrisma fr={12} size={40} /> },
	{ title: `Firebase`, icon: <SiFirebase fr={12} size={40} /> },
	{ title: `Supabase`, icon: <SiSupabase fr={12} size={40} /> },
	{ title: `Swagger`, icon: <SiSwagger fr={12} size={40} /> },
	{ title: `Stripe`, icon: <SiStripe fr={12} size={40} /> },
];

export const TechList = () => {
	return (
		<div className='w-full space-y-6'>
			<h3 className='my-4 text-2xl font-semibold tracking-tight text-gray-200'>Frontend Tech Stack</h3>
			<ul className='grid grid-cols-2 text-red-400 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-4'>
				{frontend.map(x => (
					<div
						key={x.title}
						className='flex flex-col items-center justify-center w-full h-full px-1 py-4 bg-gray-800 rounded-md transition duration-75 ease-in-out hover:scale-110 hover:bg-gray-700'
					>
						{x.icon}
						<p className='mt-2 font-semibold text-center text-gray-200'>{x.title}</p>
					</div>
				))}
			</ul>
			<h3 className='my-4 text-2xl font-semibold tracking-tight text-gray-200'>Backend Tech Stack</h3>
			<ul className='grid grid-cols-2 text-red-400 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-4'>
				{backend.map(x => (
					<div
						key={x.title}
						className='flex flex-col items-center justify-center w-full h-full px-1 py-4 bg-gray-800 rounded-md transition duration-75 ease-in-out hover:scale-110 hover:bg-gray-700'
					>
						{x.icon}
						<p className='mt-2 font-semibold text-center text-gray-200'>{x.title}</p>
					</div>
				))}
			</ul>
		</div>
	);
};

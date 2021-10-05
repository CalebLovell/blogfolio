import {
	Nextdotjs,
	Tailwindcss,
	Typescript,
	ReactJs,
	Firebase,
	Html5,
	CssThree,
	Javascript,
	Eslint,
	Prettier,
	Postgresql,
	Nodedotjs,
	Stripe,
	Docker,
	Prisma,
	Sentry,
	Testinglibrary,
} from '@icons-pack/react-simple-icons';

const frontend = [
	{ title: `HTML`, icon: <Html5 size={40} /> },
	{ title: `CSS`, icon: <CssThree size={40} /> },
	{ title: `Tailwind CSS`, icon: <Tailwindcss size={40} /> },
	{ title: `React.js`, icon: <ReactJs size={40} /> },
	{ title: `Next.js`, icon: <Nextdotjs size={40} /> },
	{ title: `JavaScript`, icon: <Javascript size={40} /> },
	{ title: `TypeScript`, icon: <Typescript size={40} /> },
	{ title: `Prettier`, icon: <Prettier size={40} /> },
	{ title: `Eslint`, icon: <Eslint size={40} /> },
	{ title: `React Testing Library`, icon: <Testinglibrary size={40} /> },
	{ title: `Sentry`, icon: <Sentry size={40} /> },
];

const backend = [
	{ title: `Node.js`, icon: <Nodedotjs size={40} /> },
	{ title: `PostgreSQL`, icon: <Postgresql size={40} /> },
	{ title: `Docker`, icon: <Docker size={40} /> },
	{ title: `Prisma`, icon: <Prisma size={40} /> },
	{ title: `Firebase`, icon: <Firebase size={40} /> },
	{ title: `Stripe`, icon: <Stripe size={40} /> },
];

export const TechList = () => {
	return (
		<>
			<h3 className='my-4 text-2xl font-semibold tracking-tight text-gray-200'>Frontend Tech</h3>
			<ul className='flex flex-wrap gap-x-2 gap-y-2'>
				{frontend.map(x => (
					<div key={x.title} className='flex flex-col items-center justify-center bg-gray-800 rounded-md w-28 h-28'>
						{x.icon}
						<p className='mt-2 font-semibold text-center text-gray-200'>{x.title}</p>
					</div>
				))}
			</ul>
			<h3 className='my-4 text-2xl font-semibold tracking-tight text-gray-200'>Backend Tech</h3>
			<ul className='flex flex-wrap gap-x-2 gap-y-2'>
				{backend.map(x => (
					<div key={x.title} className='flex flex-col items-center justify-center bg-gray-800 rounded-md w-28 h-28'>
						{x.icon}
						<p className='mt-2 font-semibold text-center text-gray-200'>{x.title}</p>
					</div>
				))}
			</ul>
		</>
	);
};

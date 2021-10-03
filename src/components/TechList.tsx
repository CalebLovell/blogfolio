import { FirebaseIcon } from './svg/FirebaseIcon';
import { NextIcon } from './svg/NextIcon';
import { ReactIcon } from './svg/ReactIcon';
import { TailwindIcon } from './svg/TailwindIcon';
import { TypescriptIcon } from './svg/TypeScriptIcon';

const tech = [
	{ title: `Next.js`, icon: <NextIcon /> },
	{ title: `React.js`, icon: <ReactIcon /> },
	{ title: `Firebase`, icon: <FirebaseIcon /> },
	{ title: `Tailwind CSS`, icon: <TailwindIcon /> },
	{ title: `TypeScript`, icon: <TypescriptIcon /> },
];

export const TechList = () => {
	return (
		<ul className='flex flex-wrap gap-x-2'>
			{tech.map(x => (
				<div key={x.title} className='flex flex-col items-center justify-center bg-gray-800 rounded-md w-28 h-28'>
					<div className='w-8'>{x.icon}</div>
					<p className='mt-2 font-semibold text-center text-gray-200'>{x.title}</p>
				</div>
			))}
		</ul>
	);
};

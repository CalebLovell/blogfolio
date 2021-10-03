interface Props {
	title: string;
	subtitle: string;
}

export const HeroSection: React.FC<Props> = ({ title, subtitle, children }) => {
	return (
		<section className='flex flex-col items-center w-full'>
			<h1 className='text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl'>{title}</h1>
			<h2 className='mt-2 text-lg text-gray-400 sm:mt-3'>{subtitle}</h2>
			{children}
		</section>
	);
};

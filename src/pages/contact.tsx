import * as React from 'react';
import { PageWrapper } from '@components/PageWrapper';
import { useForm } from 'react-hook-form';

export default function Contact() {
	const [promptsType, setContactType] = React.useState(0);
	const { handleSubmit } = useForm({
		defaultValues: {
			name: ``,
			email: ``,
			message: ``,
		},
	});

	const onSubmit = (rawFormData: any) => {
		console.log(rawFormData);
	};

	const workPrompts = [`I'd like to work with you`, `I have a project idea for you`, `Other`];
	const chatPrompts = [
		`Tell me about the project you're working on`,
		`Tell me about your biggest passion in life`,
		`Tell me the coolest thing you learned recently`,
		`Other`,
	];
	const prompts = [workPrompts, chatPrompts];

	return (
		<PageWrapper>
			<main className='flex flex-col px-5 min-h-content'>
				<section className='flex flex-col items-start w-full py-8 space-y-8'>
					<h1 className='text-4xl font-extrabold text-gray-200 sm:text-5xl md:text-6xl'>Contact Me</h1>
					<h2 className='mt-3 text-xl text-gray-400 sm:mt-4'>I love meeting new people! Would you like to...</h2>
					<div className='flex text-sm leading-none text-white bg-gray-800 rounded-md'>
						<button
							className={`px-6 py-3 transition-colors duration-150 ease-in rounded-l-md hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-gray-800 ${
								promptsType === 0 ? `bg-red-700` : `bg-gray-800`
							}`}
							onClick={() => setContactType(0)}
						>
							<span>Work With Me</span>
						</button>
						<button
							className={`px-6 py-3 transition-colors duration-150 ease-in rounded-r-md hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-gray-800 ${
								promptsType === 1 ? `bg-red-700` : `bg-gray-800`
							}`}
							onClick={() => setContactType(1)}
						>
							<span>Just Say Hi</span>
						</button>
					</div>
				</section>
				<form className='w-full space-y-4 rounded-lg' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
					<div>
						<label htmlFor='name' className='text-base font-semibold text-gray-200'>
							Name
						</label>
						<input
							name='name'
							className='w-full p-2 mt-2 text-gray-200 placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-red-600 focus:border-red-600 sm:text-sm'
							placeholder='Your name'
							type='text'
							required
							maxLength={100}
						/>
					</div>
					<div>
						<label htmlFor='email' className='text-base font-semibold text-gray-200'>
							Email
						</label>
						<input
							name='email'
							className='w-full p-2 mt-2 text-gray-200 placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-red-600 focus:border-red-600 sm:text-sm'
							placeholder='Your email'
							type='email'
							required
							maxLength={100}
						/>
					</div>
					<div>
						<label htmlFor='prompt' className='text-base font-semibold text-gray-200'>
							Select a Prompt
						</label>
						<select
							id='prompt'
							name='prompt'
							className='w-full p-2 pr-10 mt-2 text-gray-200 placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-red-600 focus:border-red-600 sm:text-sm'
							defaultValue='Canada'
							required
						>
							{prompts[promptsType].map(x => (
								<option key={x}>{x}</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor='message' className='text-base font-semibold text-gray-200'>
							Message
						</label>
						<textarea
							name='message'
							className='w-full p-2 mt-2 text-gray-200 placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-red-600 focus:border-red-600 sm:text-sm'
							placeholder='Your message'
							aria-labelledby='message'
							rows={5}
							maxLength={2000}
						/>
					</div>
					<button
						type='submit'
						// disabled={isLoading || pageIsLoading}
						className='inline-flex items-center px-4 py-2 mt-4 text-sm font-medium leading-4 text-white bg-gray-800 border-2 border-gray-800 rounded-md hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-gray-800'
					>
						Submit
						{/* {isLoading && <LoadingSpinner />} */}
					</button>
				</form>
			</main>
		</PageWrapper>
	);
}

import { HeroSection } from '@components/HeroSection';
import { LoadingSpinner } from '@components/LoadingSpinner';
import { PageWrapper } from '@components/PageWrapper';
import { RadioGroup } from '@headlessui/react';
import { useSendEmail } from 'api/sendEmail';
import * as React from 'react';
import { useForm } from 'react-hook-form';

const chatPrompts = [
	{ id: 3, message: `Tell me about the project you're working on` },
	{ id: 4, message: `Tell me the coolest thing you learned recently` },
	{ id: 5, message: `Tell me whatever you want, I'm not your boss!` },
];

const workPrompts = [
	{ id: 0, message: `I'd like to work with you` },
	{ id: 1, message: `I have a project idea for you` },
	{ id: 2, message: `Other` },
];

const metadata = {
	title: `Contact Me`,
	description: `Send me a message about work or just say hi!`,
};

export default function Contact() {
	const [prompts, setPrompts] = React.useState(chatPrompts);
	const [selectedPrompt, setSelectedPrompt] = React.useState(chatPrompts[0]);
	const { handleSubmit, register, reset } = useForm({
		defaultValues: {
			name: ``,
			email: ``,
			message: ``,
		},
	});

	const { mutate, isLoading } = useSendEmail();

	const onSubmit = (rawFormData: any) => {
		mutate(
			{ ...rawFormData, prompt: selectedPrompt },
			{
				onSuccess: () => {
					reset();
					setSelectedPrompt(chatPrompts[0]);
				},
			}
		);
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(` `);
	}

	return (
		<PageWrapper metadata={metadata}>
			<div className='px-3 md:px-5'>
				<HeroSection title='Contact Me' subtitle='I love meeting new people! Would you like to...'>
					<div className='flex mt-4 text-sm leading-none text-white bg-gray-800 rounded-md'>
						<button
							className={`px-3 sm:px-6 py-3 transition-colors duration-150 ease-in rounded-l-md hover:bg-red-700 hover:border-red-700 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-gray-800 ${
								prompts[0].id === 3 ? `bg-red-700` : `bg-gray-800`
							}`}
							onClick={() => {
								setPrompts(chatPrompts);
							}}
						>
							Just Say Hi
						</button>
						<button
							className={`px-3 sm:px-6 py-3 transition-colors duration-150 ease-in rounded-r-md hover:bg-red-700 hover:border-red-700 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-gray-800 ${
								prompts[0].id === 0 ? `bg-red-700` : `bg-gray-800`
							}`}
							onClick={() => {
								setPrompts(workPrompts);
							}}
						>
							Work With Me
						</button>
					</div>
				</HeroSection>
				<section className='w-full my-8 rounded-md'>
					<form className='w-full space-y-4 rounded-lg' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
						<div>
							<label htmlFor='name' className='text-base font-semibold text-gray-200'>
								Name
							</label>
							<input
								{...register(`name`)}
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
								{...register(`email`)}
								name='email'
								className='w-full p-2 mt-2 text-gray-200 placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-red-600 focus:border-red-600 sm:text-sm'
								placeholder='Your email'
								type='email'
								required
								maxLength={100}
							/>
						</div>
						<RadioGroup value={selectedPrompt} onChange={setSelectedPrompt}>
							<RadioGroup.Label className='text-base font-semibold text-gray-200'>Select a Prompt</RadioGroup.Label>
							<div className='mt-2 -space-y-px bg-gray-800 border border-gray-700 divide-y divide-gray-700 rounded-md'>
								{prompts.map((prompt, i) => (
									<RadioGroup.Option
										key={prompt.id}
										value={prompt.message}
										className={({ checked }) =>
											classNames(
												i === 0 ? `rounded-tl-md rounded-tr-md` : ``,
												i === prompts.length - 1 ? `rounded-bl-md rounded-br-md` : ``,
												checked ? `bg-gray-700` : ``,
												`relative p-3 flex cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-red-600 focus:border-red-600`
											)
										}
									>
										{({ checked }) => (
											<div className='flex space-x-4'>
												<div className='flex items-center'>
													<span
														className={classNames(
															checked
																? `bg-red-600 border-gray-700 outline-none ring-2 ring-offset-1 ring-red-600 ring-offset-gray-700`
																: `border-gray-500`,
															`h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center`
														)}
														aria-hidden='true'
													>
														<span className={classNames(checked ? `bg-gray-700` : ``, `rounded-full w-1.5 h-1.5`)} />
													</span>
												</div>
												<RadioGroup.Label as='span' className='block text-sm font-normal text-gray-200'>
													{prompt?.message}
												</RadioGroup.Label>
											</div>
										)}
									</RadioGroup.Option>
								))}
							</div>
						</RadioGroup>
						<div>
							<label htmlFor='message' className='text-base font-semibold text-gray-200'>
								Message
							</label>
							<textarea
								{...register(`message`)}
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
							disabled={isLoading}
							className='inline-flex items-center px-4 py-2 mt-4 text-sm font-medium leading-4 text-white bg-gray-800 border-2 border-gray-800 rounded-md hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-gray-800'
							onSubmit={onSubmit}
						>
							Submit
							{isLoading && <LoadingSpinner />}
						</button>
					</form>
				</section>
			</div>
		</PageWrapper>
	);
}

import NextImage from 'next/image';
import NextLink from 'next/link';
import React from 'react';

export const MdxComponents = {
	h1: (props: any) => <h1 className='mt-4 mb-4 text-4xl font-bold' {...props} />,
	h2: (props: any) => <h2 className='mt-4 mb-3 text-2xl font-bold' {...props} />,
	h3: (props: any) => <h3 className='mt-4 mb-5 text-xl font-bold lg:text-2xl' {...props} />,
	h4: (props: any) => <h4 className='mt-6 mb-5 text-lg font-bold lg:text-xl' {...props} />,
	p: (props: any) => <p className='mb-5 leading-7 lg:text-lg' {...props} />,
	a: ({ href = ``, ...props }) => {
		if (href.startsWith(`http`)) {
			return (
				<a className='font-medium text-red-500 transition-colors hover:text-red-700' href={href} target='_blank' rel='noreferrer' {...props} />
			);
		}

		return (
			<NextLink href={href} passHref>
				<a className='font-medium text-red-500 transition-colors hover:text-red-700' {...props} />
			</NextLink>
		);
	},
	ul: (props: any) => <ul className='pl-4 my-4 leading-7 list-disc md:pl-10' {...props} />,
	ol: (props: any) => <ol className='pl-4 my-4 leading-7 list-decimal md:pl-10' {...props} />,
	li: (props: any) => <li className='relative pl-2 my-3 lg:text-lg sm:pl-7' {...props} />,
	strong: (props: any) => <strong className='font-semibold' {...props} />,
	NextImage: ({ ...props }: { children: React.ReactNode }) => {
		return (
			<div className='my-5'>
				<NextImage className='rounded-md' {...(props as any)} />
			</div>
		);
	},
	img: ({ ...props }: { children: React.ReactNode }) => (
		<div className='my-5'>
			<NextImage className='rounded-md' layout='fill' {...(props as any)} />
		</div>
	),
	blockquote: (props: any) => <blockquote className='pl-4 my-4 font-medium border-l-4 border-gray-200 bg-gray-800' {...props} />,
	del: (props: any) => <del className='line-through' {...props} />,
	pre: ({ children, ...props }: { children: React.ReactNode }) => {
		return (
			<pre className='' {...props}>
				{children}
			</pre>
		);
	},
	code: ({ children }: { children: React.ReactNode }) => {
		return <code className='px-1.5 py-0.5 text-sm font-mono font-medium rounded-md bg-gray-700'>{children}</code>;
	},
};

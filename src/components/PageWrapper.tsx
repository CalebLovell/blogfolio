import { Footer } from '@components/Footer';
import Head from 'next/head';
import { Header } from '@components/Header';
import PlausibleProvider from 'next-plausible';
import { useRouter } from 'next/router';
import { Sidebar } from './Sidebar';

interface Props {
	metadata?: {
		title?: string;
		description?: string;
		image?: string;
	};
}

export const PageWrapper: React.FC<Props> = ({ metadata, children }) => {
	const router = useRouter();

	const defaultMetadata = {
		title: `Caleb Lovell's Blogfolio`,
		description: `Check out my projects, read the blog, or send me a message!`,
		image: `/CL.png`,
		...metadata,
	};
	const { title, description, image } = defaultMetadata;
	const imageUrl = `https://www.caleblovell.com${image}`;

	return (
		<>
			<PlausibleProvider domain='caleblovell.com'>
				<Head>
					<title>{title}</title>
					<meta name='description' content={description} />
					<meta property='og:title' content={title} />
					<meta property='og:description' content={description} />
					<meta property='og:url' content={`https://www.caleblovell.com${router.asPath}`} />
					<link rel='canonical' href={`https://www.caleblovell.com${router.asPath}`} />
					<meta property='og:site_name' content='Caleb Lovell' />
					<meta property='og:type' content='website' />
					<meta property='og:image' content={imageUrl} />
					<meta property='og:image:width' content='320' />
					<meta property='og:image:height' content='320' />
					<meta property='og:image:type' content='image/png' />
					<meta name='twitter:card' content='summary' />
					<meta name='twitter:site' content='@Caleb__Lovell' />
					<meta name='twitter:title' content={title} />
					<meta name='twitter:image' content={imageUrl} />
					<meta name='twitter:description' content={description} />
					<meta name='twitter:image:alt' content={description} />
				</Head>
			</PlausibleProvider>
			<div className='bg-gray-900'>
				<div className='h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' />
				<div className='max-w-6xl mx-auto'>
					<Header />
					<main className='flex flex-col bg-blue-200 min-h-content'>{children}</main>
					<Footer />
				</div>
				<Sidebar />
			</div>
		</>
	);
};

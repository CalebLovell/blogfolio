import { HeroSection } from '@components/HeroSection';
import { LatestBlogs } from '@components/LatestBlogs';
import { LatestPages } from '@components/LatestPages';
import { LatestProjects } from '@components/LatestProjects';
import { PageWrapper } from '@components/PageWrapper';
import { ProfileCard } from '@components/ProfileCard';
import { getAllPostsMeta } from '@utils/mdx';
import { techlessProjects } from 'pages/portfolio';

export default function Home({ blogs, projects }) {
	return (
		<PageWrapper>
			<div className='px-3 md:px-5'>
				<div className='flex justify-center'>
					<ProfileCard />
				</div>
				<HeroSection
					title="Hey there! I'm Caleb Lovell"
					subtitle='As a developer, I love building beautiful, data rich, accessible apps. In my free time, I like to read about geopolitics, practice my foreign language skills, and play a lot of beach volleyball!'
				/>
				<section className='flex flex-col items-center space-y-6'>
					<LatestProjects projects={projects} />
					<LatestBlogs blogs={blogs} />
					<LatestPages />
				</section>
			</div>
		</PageWrapper>
	);
}

export const getStaticProps = () => {
	const blogs = getAllPostsMeta();
	const sortedBlogs = blogs.sort((a, b) => b.index - a.index);
	return {
		props: {
			blogs: sortedBlogs.slice(0, 5),
			projects: techlessProjects,
		},
	};
};

import { BlogPreview } from '@components/BlogPreview';
import { PageWrapper } from '@components/PageWrapper';
const posts = [
	{
		title: `Boost your conversion rate`,
		href: `#`,
		category: { name: `Article`, href: `#` },
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.`,
		date: `Mar 16, 2020`,
		datetime: `2020-03-16`,
		imageUrl: `https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80`,
		readingTime: `6 min`,
		author: {
			name: `Roel Aufderehar`,
			href: `#`,
			imageUrl: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
		},
	},
	{
		title: `How to use search engine optimization to drive sales`,
		href: `#`,
		category: { name: `Video`, href: `#` },
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.`,
		date: `Mar 10, 2020`,
		datetime: `2020-03-10`,
		imageUrl: `https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80`,
		readingTime: `4 min`,
		author: {
			name: `Brenna Goyette`,
			href: `#`,
			imageUrl: `https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
		},
	},
	{
		title: `Improve your customer experience`,
		href: `#`,
		category: { name: `Case Study`, href: `#` },
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.`,
		date: `Feb 12, 2020`,
		datetime: `2020-02-12`,
		imageUrl: `https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80`,
		readingTime: `11 min`,
		author: {
			name: `Daniela Metz`,
			href: `#`,
			imageUrl: `https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
		},
	},
];

export default function Blog() {
	return (
		<PageWrapper>
			<main className='flex flex-col px-5 min-h-content'>
				<h1 className='mt-6 text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl'>From the blog</h1>
				<h2 className='mt-3 text-xl text-gray-400 sm:mt-4'>All my articles on tech, languages, travel, etc.</h2>
				<div className='grid max-w-lg gap-5 mx-auto mt-6 lg:grid-cols-3 lg:max-w-none'>
					{posts.map(post => (
						<BlogPreview key={post.title} post={post} />
					))}
				</div>
			</main>
		</PageWrapper>
	);
}

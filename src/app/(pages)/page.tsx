import { notFound } from 'next/navigation'

import { agent } from '@/api'
import { BskyPost } from '@/components/bsky-post'

// Every 15 minutes
export const revalidate = 900

export default async function Homepage() {
	// await new Promise(resolve => setTimeout(resolve, 10000))
	const { success, data } = await agent.app.bsky.feed.getFeed(
		{
			feed: process.env.FEED_URI_STARWARS!,
			limit: 100,
		},
		{}
	)

	if (!success) {
		notFound()
	}

	return (
		<div className="container mx-auto max-w-2xl">
			<h1 className="font-bold my-4 title-burst">Star Wars Feed</h1>
			<div className="flex flex-col gap-8 justify-center">
				{data.feed.map(feedViewPost => (
					<BskyPost key={feedViewPost.post.cid} feedViewPost={feedViewPost} />
				))}
			</div>
		</div>
	)
}

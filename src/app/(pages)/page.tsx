import { notFound } from 'next/navigation'

import { agent } from '@/api'
import { BskyPost } from '@/components/bsky-post'

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
			<h1 className="font-bold text-xl my-4">Star Wars Feed</h1>
			<div className="flex flex-col gap-4 justify-center">
				{data.feed.map(feedViewPost => (
					<BskyPost key={feedViewPost.post.cid} feedViewPost={feedViewPost} />
				))}
			</div>
		</div>
	)
}

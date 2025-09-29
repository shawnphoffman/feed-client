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

	return data.feed.map(feedViewPost => <BskyPost key={feedViewPost.post.cid} feedViewPost={feedViewPost} />)
}

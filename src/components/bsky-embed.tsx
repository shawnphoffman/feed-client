import { FeedViewPost } from '@atproto/api/dist/client/types/app/bsky/feed/defs'
// import { Record } from '@atproto/api/dist/client/types/app/bsky/feed/post'

// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

type Props = {
	feedViewPost: FeedViewPost
}

export async function BskyPost({ feedViewPost }: Props) {
	// const post = feedViewPost.post.record as Record

	const oembed = await fetch(`https://embed.bsky.app/oembed?url=${feedViewPost.post.uri}`)

	if (!oembed.ok) {
		return null
	}

	const oembedJson = await oembed.json()
	const oembedHtml = oembedJson.html

	return <div dangerouslySetInnerHTML={{ __html: oembedHtml }}></div>

	// return (
	// 	<Card>
	// 		<CardHeader>
	// 			<CardTitle>{post.text}</CardTitle>
	// 		</CardHeader>
	// 		<CardContent>
	// 			<div className="font-bold">{post.text}</div>
	// 			<span>{feedViewPost.post.uri}</span>
	// 			<HoverCard>
	// 				<HoverCardTrigger>JSON</HoverCardTrigger>
	// 				<HoverCardContent className="w-10/12">
	// 					<pre>
	// 						<code className="code text-xs">{JSON.stringify(feedViewPost.post.record, null, 2)}</code>
	// 					</pre>
	// 				</HoverCardContent>
	// 			</HoverCard>
	// 		</CardContent>
	// 	</Card>
	// )
}

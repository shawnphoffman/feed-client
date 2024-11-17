import { FeedViewPost } from '@atproto/api/dist/client/types/app/bsky/feed/defs'
import { Record } from '@atproto/api/dist/client/types/app/bsky/feed/post'
import { faUserCircle } from '@awesome.me/kit-ac8ad9255a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNowStrict } from 'date-fns'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
// import { Button } from './ui/button'
import PostContent from './bsky-post-content'
import PostEmbed from './bsky-post-embed'

function formatRelativeDate(date: string) {
	const result = formatDistanceToNowStrict(date, {
		addSuffix: true,
		// unit: 'minute',
	})

	// Simplify the output to get "29m," "3h," etc.
	return result
		.replace(' minutes', 'm')
		.replace(' minute', 'm')
		.replace(' hours', 'h')
		.replace(' hour', 'h')
		.replace(' days', 'd')
		.replace(' day', 'd')
		.replace(' months', 'mo')
		.replace(' month', 'mo')
		.replace(' years', 'y')
		.replace(' year', 'y')
		.replace(' ago', '')
}

type Props = {
	feedViewPost: FeedViewPost
}

export async function BskyPost({ feedViewPost }: Props) {
	const author = feedViewPost.post.author

	return (
		// <article className="rounded-lg border bg-card text-card-foreground shadow-sm flex-row flex gap-2 p-4 comic-panel">
		<article className="comic-panel">
			{/* LEFT */}
			<div>
				<Avatar className="border-[3px] rounded-none border-black">
					<AvatarImage src={author.avatar} alt={author.displayName} />
					<AvatarFallback>
						<FontAwesomeIcon icon={faUserCircle} size="xl" />
					</AvatarFallback>
				</Avatar>
			</div>
			{/* RIGHT */}
			<div className="flex-1 flex flex-col gap-1">
				<Link
					href={`https://bsky.app/profile/${author.handle}`}
					target="_blank"
					className="font-medium group flex flex-row gap-2 items-center text-3xl"
				>
					<span className="group-hover:underline">{author.displayName}</span>
					<span className="font-normal text-lg text-muted-foreground flex flex-row gap-1">
						@{author.handle}
						<div>·</div>
						<time dateTime={new Date(feedViewPost.post.indexedAt).toISOString()}>{formatRelativeDate(feedViewPost.post.indexedAt)}</time>
					</span>
				</Link>

				<PostContent record={feedViewPost.post.record as Record} />

				<PostEmbed content={feedViewPost.post.embed} />

				{/* <HoverCard>
					<HoverCardTrigger>
						<Button variant={'secondary'}>JSON</Button>
					</HoverCardTrigger>
					<HoverCardContent className="w-10/12">
						<pre>
							<code className="code text-xs">{JSON.stringify(feedViewPost.post.record, null, 2)}</code>
						</pre>
					</HoverCardContent>
				</HoverCard> */}
			</div>
		</article>
	)
}

import { FeedViewPost } from '@atproto/api/dist/client/types/app/bsky/feed/defs'
import { Record } from '@atproto/api/dist/client/types/app/bsky/feed/post'
import { faUserCircle } from '@awesome.me/kit-ac8ad9255a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
// import { Button } from './ui/button'
import PostContent from './bsky-post-content'
import PostEmbed from './bsky-post-embed'

type Props = {
	feedViewPost: FeedViewPost
}

export async function BskyPost({ feedViewPost }: Props) {
	const author = feedViewPost.post.author

	return (
		<article className="rounded-lg border bg-card text-card-foreground shadow-sm flex-row flex gap-2 p-4">
			{/* LEFT */}
			<div>
				<Avatar>
					<AvatarImage src={author.avatar} alt={author.displayName} />
					<AvatarFallback>
						<FontAwesomeIcon icon={faUserCircle} size="xl" />
					</AvatarFallback>
				</Avatar>
			</div>
			{/* RIGHT */}
			<div className="flex-1 flex flex-col gap-1">
				<Link href={`https://bsky.app/profile/${author.handle}`} target="_blank" className="font-bold hover:underline">
					{author.displayName}
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

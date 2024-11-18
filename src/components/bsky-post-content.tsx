import { AppBskyFeedPost, AppBskyRichtextFacet, RichText } from '@atproto/api'

// import { comic } from '@/app/(pages)/layout'
import Link from './bsky-post-link'

export default function PostContent({ record }: { record: AppBskyFeedPost.Record | null }) {
	if (!record) return null

	const rt = new RichText({
		text: record.text,
		facets: record.facets,
	})

	const richText = []

	let counter = 0
	for (const segment of rt.segments()) {
		if (segment.link && AppBskyRichtextFacet.validateLink(segment.link).success) {
			richText.push(
				<Link key={counter} href={segment.link.uri} className="text-blue-400 hover:underline">
					{segment.text}
				</Link>
			)
		} else if (segment.mention && AppBskyRichtextFacet.validateMention(segment.mention).success) {
			richText.push(
				<Link key={counter} href={`/profile/${segment.mention.did}`} className="text-blue-500 hover:underline">
					{segment.text}
				</Link>
			)
		} else if (segment.tag && AppBskyRichtextFacet.validateTag(segment.tag).success) {
			richText.push(
				<Link key={counter} href={`/tag/${segment.tag.tag}`} className="text-blue-500 hover:underline">
					{segment.text}
				</Link>
			)
		} else {
			richText.push(segment.text)
		}

		counter++
	}

	// return <p className={`text-xl font-bold leading-[1.15] break-word break-words whitespace-pre-wrap ${comic.className}`}>{richText}</p>
	return <p className={`text-xl font-normal leading-[1.15] break-word break-words whitespace-pre-wrap`}>{richText}</p>
}

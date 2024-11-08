import { HtmlHTMLAttributes } from 'react'

type Props = {
	href: string
	className?: string
} & HtmlHTMLAttributes<HTMLAnchorElement>

export default function Link({ href, className, ...props }: Props) {
	return (
		<a
			href={`${href.startsWith('http') ? href : `https://bsky.app${href}`}`}
			target="_blank"
			// rel="noopener noreferrer nofollow"
			// onClick={evt => evt.stopPropagation()}
			className={`cursor-pointer ${className || ''}`}
			{...props}
		/>
	)
}

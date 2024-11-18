import { HtmlHTMLAttributes } from 'react'
import Link from 'next/link'

type Props = {
	href: string
	className?: string
} & HtmlHTMLAttributes<HTMLAnchorElement>

export default function BskyLink({ href, className, ...props }: Props) {
	return (
		<Link
			prefetch={false}
			href={`${href.startsWith('http') ? href : `https://bsky.app${href}`}`}
			target="_blank"
			className={`cursor-pointer ${className || ''}`}
			{...props}
		/>
	)
}

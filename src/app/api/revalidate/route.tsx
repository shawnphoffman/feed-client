import { revalidatePath } from 'next/cache'

export const dynamic = 'force-dynamic'

// export async function GET(request: NextRequest) {
export async function GET() {
	// console.log('Revalidating "episodes" tag')
	// revalidateTag('episodes')

	// const searchParams = request.nextUrl.searchParams
	// const force = searchParams.get('force')
	// if (!!force) {
	console.log('Revalidating path: /')
	revalidatePath('/')
	// }

	// return Response.json({ success: true, force: !!force })
	return Response.json({ success: true })
}

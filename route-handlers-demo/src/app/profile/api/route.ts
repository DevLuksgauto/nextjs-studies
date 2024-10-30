import { type NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
	const requestHeaders = new Headers(request.headers);

	(await cookies()).set('ResultsPerPage', '20');

	console.log((await cookies()).get('ResultsPerPage'));
	console.log(requestHeaders.get('Authorization'));

	return new Response('<h1>Profile API data<h1>', {
		headers: { 'Content-Type': 'text/html', 'Set-Cookie': 'Theme=dark' },
	});
}

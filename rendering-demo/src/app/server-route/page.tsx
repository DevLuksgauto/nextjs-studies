import ImageSlider from '@/components/imageSlider';
// import clientSideFunction from '@/utils/client-utils';
import { serverSideFunction } from '@/utils/server-utils';

export default function ServerRoutePage() {
	console.log('Server route rendered');
	const result = serverSideFunction();
	// const clientResult = clientSideFunction(); exemplo de uso indevido de use client
	return (
		<>
			<h1>Server Route Page</h1>
			<p>{result}</p>
			<ImageSlider />
		</>
	);
}

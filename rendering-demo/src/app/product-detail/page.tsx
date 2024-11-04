import { Suspense } from 'react';

import Product from '@/components/Product';
import Reviews from '@/components/Reviews';
import React from 'react';

export default function ProductDetailPage() {
	return (
		<>
			<h1>Product Detail Page</h1>
			<Suspense fallback={<p>Loading Product...</p>}>
				<Product />
			</Suspense>
			<Suspense fallback={<p>Loading Reviews...</p>}>
				<Reviews />
			</Suspense>
		</>
	);
}

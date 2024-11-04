import React from 'react';

export default async function Product() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return <div>Product</div>;
}

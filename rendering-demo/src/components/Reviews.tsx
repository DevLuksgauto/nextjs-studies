import React from 'react';

export default async function Reviews() {
	await new Promise((resolve) => setTimeout(resolve, 4000));
	return <div>Reviews</div>;
}
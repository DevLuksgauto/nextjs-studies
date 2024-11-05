import React from 'react';

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const productsResponse = await fetch('http://localhost:3001/products', {
		next: {
			revalidate: 10, //dessa forma o next espera esse tempo para revalidar o fetch, antes desse tempo ele usa o cache
			//para revalidar no layout é preciso colocar (export const revalidate = 10) no topo do arquivo
		},
	});
	const products = await productsResponse.json();
	console.log({ products });
	return <>{children}</>;
}

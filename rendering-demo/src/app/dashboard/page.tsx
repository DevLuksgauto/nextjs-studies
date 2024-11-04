'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Dashboardpage() {
	const [name, setName] = useState<string>('');
	return (
		<>
			<h1>Dashboard page</h1>
			<input
				style={{ color: '#000' }}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<p>Hello, {name}!</p>
			<Link href="/">Back</Link>
		</>
	);
}

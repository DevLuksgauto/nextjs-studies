/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState } from 'react';

export default function NavSearch() {
	console.log('NavSearch rendered');

	const [search, setSearch] = useState<string>('');

	return <div>Nav search input</div>;
}

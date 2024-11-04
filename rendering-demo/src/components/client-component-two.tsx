/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';

export default function ClientComponentTwo() {
	const [name, setName] = useState('Batman');
	return <h1>Client component two</h1>;
}

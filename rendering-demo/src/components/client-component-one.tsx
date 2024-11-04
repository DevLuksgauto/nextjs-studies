/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';

export default function ClientComponentOne() {
	const [name, setName] = useState('Batman');
	return <h1>client-component-one</h1>;
}

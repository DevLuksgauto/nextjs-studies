import NavLinks from './nav-links';
import NavSearch from './nav-search';

export default function NavBar() {
	console.log('NavBar rendered');

	return (
		<div>
			<NavLinks />
			<NavSearch />
		</div>
	);
}

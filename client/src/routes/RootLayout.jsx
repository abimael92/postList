import { Outlet, useLoaderData } from 'react-router-dom';

import MainHeader from '../components/MainHeader';

function RootLayout() {
	const loaderData = useLoaderData();

	return (
		<>
			<MainHeader isDbConnected={!loaderData.error} />
			<Outlet />
		</>
	);
}

export default RootLayout;

export async function loader() {
	try {
		const response = await fetch('http://localhost:8080/posts');
		if (!response.ok) {
			throw new Error('Database not found');
		}
		const resData = await response.json();
		return { posts: resData.posts, error: false };
	} catch (error) {
		return { posts: [], error: true };
	}
}

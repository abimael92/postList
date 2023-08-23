import { Outlet } from 'react-router-dom';

import PostsList from '../components/PostsList';

function Posts() {
	return (
		<>
			<Outlet />
			<main>
				<PostsList />
			</main>
		</>
	);
}

export default Posts;

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

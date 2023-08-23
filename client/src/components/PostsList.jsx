import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
	const data = useLoaderData();
	const posts = data.posts;

	if (posts.error) {
		return (
			<div style={{ textAlign: 'center', color: 'red' }}>
				<h2>Error: Database not found.</h2>
			</div>
		);
	}

	return (
		<>
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post) => (
						<Post
							key={post.id}
							id={post.id}
							author={post.author}
							body={post.body}
						/>
					))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some!</p>
				</div>
			)}
		</>
	);
}

export default PostsList;

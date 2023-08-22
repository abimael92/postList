import { useState, useEffect } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

interface PostData {
	author: string;
	body: string;
}

interface PostsListProps {
	isPosting: boolean;
	onStopPosting: () => void;
}

function PostsList({ isPosting, onStopPosting }: PostsListProps): JSX.Element {
	const [posts, setPosts] = useState<PostData[]>([]);

	useEffect(() => {
		async function fetchPosts() {
			const response = await fetch('http://localhost:8080/posts');
			const resData = await response.json();
			setPosts(resData.posts);
		}

		fetchPosts();
	}, []);

	function addPostHandler(postData: PostData) {
		fetch('http://localhost:8080/posts', {
			method: 'POST',
			body: JSON.stringify(postData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		setPosts((existingPosts) => [postData, ...existingPosts]);
	}

	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost
						onCancel={onStopPosting}
						onAddPost={addPostHandler}
					/>
				</Modal>
			)}
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post) => (
						<Post
							key={post.body}
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

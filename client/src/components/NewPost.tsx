import React from 'react';
import classes from './NewPost.module.css';

interface NewPostProps {
	onCancel: () => void;
	onAddPost: (postData: PostData) => void;
}

interface PostData {
	body: string;
	author: string;
}

const NewPost: React.FC<NewPostProps> = ({ onCancel, onAddPost }) => {
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const body = (document.getElementById('body') as HTMLTextAreaElement)
			.value;
		const author = (document.getElementById('name') as HTMLInputElement)
			.value;

		if (!body || !author) {
			return;
		}

		const postData: PostData = {
			body: body,
			author: author,
		};

		onAddPost(postData);

		// Clear the form after adding a post
		(document.getElementById('body') as HTMLTextAreaElement).value = '';
		(document.getElementById('name') as HTMLInputElement).value = '';
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<p>
				<label htmlFor='body'>Text</label>
				<textarea id='body' required rows={3} />
			</p>
			<p>
				<label htmlFor='name'>Your name</label>
				<input type='text' id='name' required />
			</p>
			<p className={classes.actions}>
				<button type='button' onClick={onCancel}>
					Cancel
				</button>
				<button type='submit'>Add Post</button>
			</p>
		</form>
	);
};

export default NewPost;

import classes from './Post.module.css';

interface PostProps {
	author: string;
	body: string;
}

function Post({ author, body }: PostProps): JSX.Element {
	return (
		<li className={classes.post}>
			<p className={classes.author}>{author}</p>
			<p className={classes.text}>{body}</p>
		</li>
	);
}

export default Post;

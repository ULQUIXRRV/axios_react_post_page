import React from "react";
import MyButton from "./../components/UI/button/MyButton";
import MyInput from "./../components/UI/input/MyInput";
import { useState } from "react";

const PostForm = ({create}) => {

	const [post, setPost] = useState({title: '', body: ''})

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
		setPost({title: '', body: ''})
	}

	return (
		<form>
				<MyInput
					type="text"
					placeholder="Название поста"
					value={post.title}
					onChange={e => setPost({...post, title: e.target.value})}
				/>
				<MyInput
					value={post.body}
					type="text"
					placeholder="Описание поста"
					onChange={e => setPost({...post, body: e.target.value})}
				/>
				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>
	)
} 

export default PostForm
import { PropsCard } from "../types";
import { users, userImages } from "../features/posts/users";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { deletePost, posts } from "../features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export default function Card({ post }: PropsCard) {
    const dispatch = useAppDispatch();
    const postList = useAppSelector(posts);

    return (
        <div className="Posts__item" key={post.id}>
            <div className="Posts__item-user">
                <img src={userImages[post.userId - 1]} alt="imagen de usuario" className="Posts__item-user-img" />
                <p>
                    <span className="Posts__item-user-name">{users[post.userId - 1].name}</span><br />
                    <span className="Posts__item-user-title"><b>{post.title[0].toUpperCase()+post.title.substring(1, post.title.length).toLowerCase()}</b></span>
                </p>
            </div>
            <p className="Posts__item-body">{post.body}</p>
            <div className="Posts__item-icons">
                <FiEdit2 />
                <AiOutlineDelete onClick={() => {
                    dispatch(deletePost(post.id));
                    console.log(postList.length);
                } } />
            </div>
        </div>
    )
}
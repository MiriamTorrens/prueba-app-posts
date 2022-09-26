import { PropsCard } from "../types";
import { users, userImages } from "../features/posts/users";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { deletePost } from "../features/posts/postsSlice";
import { useAppDispatch } from "../app/hooks";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card({ post }: PropsCard) {
    const dispatch = useAppDispatch();
    const handleDelete = () => {
        if (localStorage.getItem("authorized")) {
            dispatch(deletePost(post.id))
        } else {
            toast('Para eliminar un post tienes que iniciar sesión', {
                position: toast.POSITION.TOP_CENTER,
                progressClassName: "progress"
            });
        }
    }
    const handleUpdate = () => {
        if (localStorage.getItem("user")) {
            alert("Hola");
        } else {
            toast('Para editar un post tienes que iniciar sesión', {
                position: toast.POSITION.TOP_CENTER,
        });
        }
    }

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
                <FiEdit2 onClick={handleUpdate}  size={25} color={"cadetblue"}  />
                <AiOutlineDelete onClick={handleDelete}  size={25} color={"cadetblue"} />
            </div>
        </div>
    )
}
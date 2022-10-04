import { PropsCard } from "../types";
import { users, userImages } from "../features/posts/users";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import ModalUpdate from "./ModalUpdate";
import ModalDelete from "./ModalDelete";

export default function Card({ post }: PropsCard) {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <div className="posts__item" key={post.id}>
      <div className="posts__item-user">
        <img
          src={userImages[post.userId - 1]}
          alt="imagen de usuario"
          className="posts__item-user-img"
        />
        <p>
          <span className="posts__item-user-title">
            <b>
              {post.title[0].toUpperCase() +
                post.title.substring(1, post.title.length).toLowerCase()}
            </b>
          </span>
          <br />
          <span className="posts__item-user-name">
            {users[post.userId - 1].name}
          </span>
          <br />
        </p>
      </div>
      <p className="posts__item-body">{post.body} </p>
      <div className="posts__item-buttons">
        <button
          onClick={handleOpenUpdate}
          className="posts__item-buttons-button posts__item-buttons-update"
        >
          Editar <FiEdit2 size={18} color={"var(--secondary-color)"} />
        </button>
        <button
          onClick={handleOpenDelete}
          className="posts__item-buttons-button posts__item-buttons-delete"
        >
          Eliminar <AiOutlineDelete size={18} color={"white"} />
        </button>
      </div>
      <ModalUpdate
        open={openUpdate}
        handleClose={handleCloseUpdate}
        post={post}
      />
      <ModalDelete
        open={openDelete}
        handleClose={handleCloseDelete}
        post={post}
      />
    </div>
  );
}

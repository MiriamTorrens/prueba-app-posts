import { PropsModal, PostType } from '../types';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {updatePost,  } from '../features/posts/postsSlice';
import { useState, useEffect } from 'react';
import { users, userImages } from "../features/posts/users";
import { AiOutlineSave } from "react-icons/ai";
import { useAppDispatch } from '../app/hooks';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

export default function ModalUpdate({ open, handleClose, post }: PropsModal) {
  const dispatch = useAppDispatch();
  const [body, setBody] = useState(post.body);

  const handleUpdate = (body: string) => {
    const updatedPost: PostType = {
      id: post.id,
      userId: post.userId,
      title: post.title,
      body: body
    }
    dispatch(updatePost(updatedPost));
    handleClose();
  }

  useEffect(() => {
    setBody(post.body);
  }, [post]);
  
  return (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
      >
        {post && post.id > 0 ? (
            <Box sx={style} className="Modal">
              <div className="Posts__item-user">
                <img src={userImages[post.userId - 1]} alt="imagen de usuario" className="Posts__item-user-img" />
                <p>
                  <span className="Posts__item-user-title"><b>{post.title[0].toUpperCase() + post.title.substring(1, post.title.length).toLowerCase()}</b></span><br />
                  <span className="Posts__item-user-name">{users[post.userId - 1].name}</span><br />
                </p>
              </div>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="Posts__item-textarea">
              </textarea>
              <div className="Posts__item-buttons">
                <button className="Posts__item-buttons-button Posts__item-buttons-save" onClick={() => handleUpdate(body)}><AiOutlineSave size={18} color={"var(--secondary-color)"} />Guardar</button>
              </div>
          </Box>
          ) : (<p>Not found</p>)}
          </Modal>
        </div>
  );
}

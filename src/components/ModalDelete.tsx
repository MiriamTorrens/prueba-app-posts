import { PropsModal } from "../types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { deletePost } from "../features/posts/postsSlice";
import { useAppDispatch } from "../app/hooks";
import { AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";
import { MdKeyboardReturn } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  width: { xs: "300px", sm: "500px" },
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
  outline: "none",
};

export default function ModalDelete({ open, handleClose, post }: PropsModal) {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal modal__delete" id="modal-delete">
          {/* <FaWindowClose
            fill={"var(--secondary-color)"}
            size={20}
            onClick={handleClose}
            className="modal__close"
          /> */}
          <AiOutlineInfoCircle
            size={40}
            fill={"var(--tertiary-color)"}
            className="modal__info"
          />
          <p className="modal__text">
            ¿Estás seguro que quieres eliminar este post?
          </p>
          <div className="posts__item-buttons modal__buttons">
            <button
              className="posts__item-buttons-button modal__buttons-button modal__buttons-button-cancel"
              onClick={handleClose}
            >
              <MdKeyboardReturn size={18} color={"white"} />
              {"\u00A0"}Cancelar
            </button>
            <button
              className="posts__item-buttons-button posts__item-buttons-delete modal__buttons-button"
              onClick={() => dispatch(deletePost(post.id))}
              id="delete"
            >
              Eliminar{"\u00A0"} <AiOutlineDelete size={18} color={"white"} />
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

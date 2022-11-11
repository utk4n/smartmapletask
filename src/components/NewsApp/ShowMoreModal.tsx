import { createPortal } from "react-dom";
import { useAppSelector } from "../../hooks/useRedux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import useModal from "../../hooks/useModal";
import style from "../../styles/newsModal.module.scss";
import useClickOutSideCloseModal from "../../hooks/useClickOutSideCloseModal";
const ShowMoreModal = () => {
  const modalElement = document.querySelector("#portal") as Element;
  const { showDetails, closeModal } = useModal();
  const divRef = useClickOutSideCloseModal();
  const showDetailsContent = useAppSelector(
    (state) => state.news.showDetailsContent
  );

  if (showDetails)
    return createPortal(
      <div className={style.modal_container}>
        <div ref={divRef} className={style.modal_content}>
          <div className={style.modal_content__close_btn}>
            <AiOutlineCloseCircle onClick={closeModal} />
          </div>
          <img
            className={style.modal_content__img}
            src={showDetailsContent?.img_url}
            alt="news_img"
          />
          <div className={style.modal_content__date_src}>
            <code>{showDetailsContent?.date?.slice(0, 10)}</code>
            <code>Kaynak : {showDetailsContent?.source}</code>
          </div>
          <p className={style.modal_content__title}>
            {showDetailsContent?.title}
          </p>
          <div className={style.modal_content__desc}>
            <p>{showDetailsContent?.description}</p>
          </div>
        </div>
      </div>,
      modalElement
    );
  else {
    return null;
  }
};

export default ShowMoreModal;

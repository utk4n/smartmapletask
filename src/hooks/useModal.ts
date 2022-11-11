import { useAppDispatch, useAppSelector } from "./useRedux";
import { closeDetails, openDetails } from "../redux/slices/newsSlice";
const useModal = () => {
  const dispatch = useAppDispatch();
  const showDetails = useAppSelector((state) => state.news.showDetails);
  const closeModal = (): void => {
    dispatch(closeDetails());
  };
  const openModal = (): void => {
    dispatch(openDetails());
  };

  return { showDetails, closeModal, openModal };
};

export default useModal;

import { useRef, useEffect } from "react";
import useModal from "../hooks/useModal";
const useClickOutSideCloseModal = () => {
  const { closeModal } = useModal();

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutSide = (e: any) => {
      if (!divRef.current?.contains(e.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", clickOutSide);

    return () => document.removeEventListener("mousedown", clickOutSide);
  });

  return divRef;
};

export default useClickOutSideCloseModal;

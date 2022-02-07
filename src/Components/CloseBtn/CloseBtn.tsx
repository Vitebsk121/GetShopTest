import "./CloseBtn.scss";

import React, {useEffect, useRef} from "react";

type CloseBtnProps = {
  pickedBtn: string
  id: string
  playVideo: () => void
};

const CloseBtn: React.FC<CloseBtnProps> = ({playVideo, id, pickedBtn}) => {

  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    pickedBtn === id ? button.current!.focus() : button.current!.blur()
  }, [pickedBtn])

  return (
    <button
      ref={button}
      tabIndex={-1}
      className='promoReg__closeBtn'
      onClick={playVideo}
    >
      <div className="closeBtn__line first__line" />
      <div className="closeBtn__line second__line" />
    </button>  );
};

export default CloseBtn;

import "./CloseBtn.scss";

import React from "react";

type CloseBtnProps = {
  id: string
  pickedBtn: string
  checkVrKey: (key: string) => void
};

const CloseBtn: React.FC<CloseBtnProps> = ({id, pickedBtn, checkVrKey}) => {

  const classes = () => {
    if(pickedBtn === id) {
      return "promoReg__closeBtn picked";
    } else {
      return "promoReg__closeBtn";
    }
  }
  return (
    <button
      tabIndex={-1}
      className={classes()}
      onClick={() => checkVrKey('close')}
    >
      <div className="closeBtn__line first__line" />
      <div className="closeBtn__line second__line" />
    </button>  );
};

export default CloseBtn;

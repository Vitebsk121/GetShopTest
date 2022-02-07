import "./SubmitBtn.scss";

import React from "react";

type SubmitBtnProps = {
  id: string
  pickedBtn: string
  checkVrKey: (key: string) => void
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({id, pickedBtn, checkVrKey}) => {
  const classes = () => {
    if(pickedBtn === id) {
      return "registration__submitBtn picked";
    } else {
      return "registration__submitBtn";
    }
  }
  return (
    <button
      tabIndex={-1}
      onKeyPress={() => {return}}
      onClick={() => checkVrKey('submit')}
      className={classes()}
    >
      Подтвердить
    </button>
  );
};

export default SubmitBtn;

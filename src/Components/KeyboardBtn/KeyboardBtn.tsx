import "./KeyboardBtn.scss";

import React from "react";

type KeyboardBtnProps = {
  id: string
  cls?: string[]
  handlePhoneNum: (id: string) => void
  pickedBtn: string
};

const KeyboardBtn: React.FC<KeyboardBtnProps> = ({ cls=[], id, handlePhoneNum, pickedBtn }) => {

  const classes = () => {
    if(id === pickedBtn) {
      return `keyboard__item ${cls.join(' ')} picked`
    } else {
      return `keyboard__item ${cls.join(' ')}`
    }
  }

  return (
    <button
      tabIndex={-1}
      className={classes()}
      onClick={() => handlePhoneNum(id)}
    >
      {id}
    </button>
  );
};

export default KeyboardBtn;

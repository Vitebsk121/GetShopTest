import "./KeyBoardVR.scss";

import React from "react";
import KeyboardBtn from "../KeyboardBtn/KeyboardBtn";

type KeyBoardVrProps = {
  checkVrKey: (key: string) => void
  pickedBtn: string
};

const KeyBoardVR: React.FC<KeyBoardVrProps> = ({ checkVrKey, pickedBtn }) => {

  const keyBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'стереть']

  return (
    <div className='keyBoardVr'>
      {keyBoard.map((key, i) => (
        <KeyboardBtn key={key} id={key} cls={[`btn${i + 1}`]} handlePhoneNum={checkVrKey} pickedBtn={pickedBtn} />
      ))}
    </div>
  );
};

export default KeyBoardVR;

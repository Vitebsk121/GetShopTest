import "./KeyBoardVR.scss";

import React from "react";

type KeyBoardVrProps = {
  handlePhoneNum: (key: string) => void
};

const KeyBoardVR: React.FC<KeyBoardVrProps> = ({ handlePhoneNum }) => {

  const keyBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'стереть']

  return (
    <div className='keyBoardVr'>
      {keyBoard.map((key, i) => (
        <button
          className={`keyboard__item btn${i + 1}`}
          key={key}
          onClick={() => handlePhoneNum(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default KeyBoardVR;

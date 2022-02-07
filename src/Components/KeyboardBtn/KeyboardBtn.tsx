import "./KeyboardBtn.scss";

import React, {useEffect, useRef} from "react";

type KeyboardBtnProps = {
  id: string
  cls?: string[]
  programInputHandler: (key: string) => void
  pickedBtn: string
};

const KeyboardBtn: React.FC<KeyboardBtnProps> = ({ cls=[], id, programInputHandler, pickedBtn}) => {

  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    pickedBtn === id ? button.current!.focus() : button.current!.blur()
  }, [pickedBtn])

  return (
    <button
      ref={button}
      type="button"
      tabIndex={-1}
      className={`keyboard__item ${cls.join(' ')}`}
      onClick={() => programInputHandler(id)}
    >
      {id}
    </button>
  );
};

export default KeyboardBtn;

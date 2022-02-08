import "./SubmitBtn.scss";

import React, {useEffect, useRef} from "react";

type SubmitBtnProps = {
  pickedBtn: string
  formIsValid: boolean
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({pickedBtn, formIsValid}: SubmitBtnProps) => {

  const id = 'submit';

  const button = useRef<HTMLButtonElement>(null);

  const clearFocus = () => {
    button.current!.blur();
  }

  const cls = () => {
    return formIsValid ? "registration__submitBtn" : "registration__submitBtn invalid";
  }

  useEffect(() => {
    pickedBtn === id ? button.current!.focus() : button.current!.blur()
  }, [pickedBtn])


  return (
    <button
      ref={button}
      onMouseLeave={clearFocus}
      className={cls()}
      type="submit"
    >
      Подтвердить номер
    </button>
  );
};

export default SubmitBtn;

import "./SubmitBtn.scss";

import React, {useEffect, useRef} from "react";

type SubmitBtnProps = {
  pickedBtn: string
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({pickedBtn}) => {

  const id = 'submit';

  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    pickedBtn === id ? button.current!.focus() : button.current!.blur()
  }, [pickedBtn])


  return (
    <button
      ref={button}
      className='registration__submitBtn'
      type="submit"
    >
      Подтвердить номер
    </button>
  );
};

export default SubmitBtn;

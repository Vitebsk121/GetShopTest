import "./RegOffer.scss";

import React, {useEffect, useRef} from "react";

type RegOfferProps = {
  pickedBtn: string
  offer: boolean
  handleChange: {(e: React.ChangeEvent<any>): void, <T_1=string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void)}
};

const RegOffer: React.FC<RegOfferProps> = ({offer, handleChange, pickedBtn}) => {

  const id = 'offer';

  const label = useRef<HTMLLabelElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    pickedBtn === id ? label.current!.focus() : label.current!.blur()
  }, [pickedBtn])

  const clickSimulation = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if(e.key === 'Enter' || e.key === ' ') input.current!.click();
  }

  return (
    <>
      <input
        ref={input}
        id="offer"
        name="offer"
        type="checkbox"
        className="check__checkbox"
        checked={offer}
        onChange={handleChange}
      />
      <label htmlFor="offer" className="check__title" tabIndex={0} ref={label} onKeyDown={clickSimulation}>
        Согласие на обработку персональных данных
      </label>
    </>
  );
};

export default RegOffer;

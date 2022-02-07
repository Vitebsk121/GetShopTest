import "./RegOffer.scss";

import React from "react";

type RegOfferProps = {
  id: string
  pickedBtn: string
  isChecked: boolean
  setOfferIsAccepted: React.Dispatch<React.SetStateAction<boolean>>
};

const RegOffer: React.FC<RegOfferProps> = ({pickedBtn, id, isChecked, setOfferIsAccepted}) => {

  const classes = () => {
    if(pickedBtn === id) {
      return "registration__check picked";
    } else {
      return "registration__check";
    }
  }

  return (
    <div className={classes()}>
      <input id="chBx1" type="checkbox" className="check__checkbox" checked={isChecked} onChange={() => setOfferIsAccepted(prev => !prev)}/>
      <label htmlFor="chBx1" className="check__title">
        Согласие на обработку персональных данных
      </label>
    </div>
  );
};

export default RegOffer;

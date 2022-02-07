import "./Registration.scss";

import React from "react";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import KeyBoardVR from "../KeyBoardVR/KeyBoardVR";
import RegOffer from "../RegOffer/RegOffer";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

type RegistrationProps = {
  phoneNum: string[]
  checkVrKey: (id: string) => void
  pickedBtn: string
  offerIsAccepted: boolean
  setOfferIsAccepted: React.Dispatch<React.SetStateAction<boolean>>
};

const Registration: React.FC<RegistrationProps> = (
  {
    phoneNum,
    checkVrKey,
    pickedBtn,
    offerIsAccepted,
    setOfferIsAccepted,

  }
) => {
  return (
    <div className="registration">
      <p className="registration__title">
        Введите ваш номер
        мобильного телефона
      </p>
      <PhoneNumber phoneNum={phoneNum} />
      <p className="registration__subtitle">
        и с Вами свяжется наш менеджер для дальнейшей консультации
      </p>
      <KeyBoardVR checkVrKey={checkVrKey} pickedBtn={pickedBtn} />
      <RegOffer id={"offer"} pickedBtn={pickedBtn} isChecked={offerIsAccepted} setOfferIsAccepted={setOfferIsAccepted}/>
      <SubmitBtn id={'submit'} pickedBtn={pickedBtn} checkVrKey={checkVrKey} />
    </div>
  );
};

export default Registration;

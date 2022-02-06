import "./PromoReg.scss";

import React, {useState} from "react";
import KeyBoardVR from "../KeyBoardVR/KeyBoardVR";

type PromoRegProps = {
  playVideo: () => void
};

const PromoReg: React.FC<PromoRegProps> = ({ playVideo }) => {

  const [phoneNum, setPhoneNum] = useState<string[]>([]);

  const handlePhoneNum = (key: string) => {
    setPhoneNum(prev => key === 'стереть'
      ? [...(prev.filter((item, i) => i !== prev.length - 1))]
      : phoneNum.length > 9 ? [...prev] : [...prev, key]);
  }

  return (
    <div className='promoReg'>
      <div className="registration">
        <p className="registration__title">
          Введите ваш номер
          мобильного телефона
        </p>
        <div className="registration__telephone">
          +7(
          <span className="phoneNum__item">{phoneNum[0] !== undefined ? phoneNum[0] : '_'}</span>
          <span className="phoneNum__item">{phoneNum[1] !== undefined ? phoneNum[1] : '_'}</span>
          <span className="phoneNum__item">{phoneNum[2] !== undefined ? phoneNum[2] : '_'}</span>
          )
          <span className="phoneNum__item">{phoneNum[3] !== undefined ? phoneNum[3] : '_'}</span>
          <span className="phoneNum__item">{phoneNum[4] !== undefined ? phoneNum[4] : '_'}</span>
          <span className="phoneNum__item">{phoneNum[5] !== undefined ? phoneNum[5] : '_'}</span>
          -
          <span className="phoneNum__item">{phoneNum[6] !== undefined ? phoneNum[6] : '_'}</span>
          <span className="phoneNum__item">{phoneNum[7] !== undefined ? phoneNum[7] : '_'}</span>
          -
          <span className="phoneNum__item">{phoneNum[8] !== undefined ? phoneNum[8] : '_'}</span>
          <span className="phoneNum__item">{phoneNum[9] !== undefined ? phoneNum[9] : '_'}</span>
        </div>
        <p className="registration__subtitle">
          и с Вами свяжется наш менеджер для дальнейшей консультации
        </p>
        <KeyBoardVR handlePhoneNum={handlePhoneNum} />
        <div className="registration__check">
          <input id="chBx1" type="checkbox" className="check__checkbox"/>
          <label htmlFor="chBx1" className="check__title">
            Согласие на обработку персональных данных
          </label>
        </div>
        <button className="registration__submitBtn">Подтвердить</button>
      </div>
      <div className="promoReg__controls">
        <button
          className="promoReg__closeBtn"
          onClick={playVideo}
        >
          <div className="closeBtn__line first__line" />
          <div className="closeBtn__line second__line" />
        </button>
        <div className="promoReg__info">
          <p className="promoReg__info__title">
            Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
          </p>
          <img src="../../assets/images/qrCode_pic.png" alt="QR-code" className="promoReg__info__pic"/>
        </div>
      </div>
    </div>
  );
};

export default PromoReg;

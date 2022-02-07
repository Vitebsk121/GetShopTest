import "./PromoReg.scss";

import React, {useEffect, useState} from "react";
import CloseBtn from "../CloseBtn/CloseBtn";
import Registration from "../Registration/Registration";

type PromoRegProps = {
  playVideo: () => void
};

const PromoReg: React.FC<PromoRegProps> = ({ playVideo }) => {

  const coordinatesLink = [0,0];

  const arrayOfKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',]

  const [offerIsAccepted, setOfferIsAccepted] = useState(false)

  const [pickedBtn, setPickedBtn] = useState('');

  const navigationVR = [
    ['1', '2', '3', 'close'],
    ['4', '5', '6', 'close'],
    ['7', '8', '9', 'close'],
    ['стереть', 'стереть', '0', 'close'],
    ['offer', 'close'],
    ['submit', 'close'],
  ]

  const chosenKey = () => {
    return navigationVR[coordinatesLink[0]][coordinatesLink[1]];
  };

  const [phoneNum, setPhoneNum] = useState<string[]>([]);

  const handlePhoneNum = (key: string) => {
    setPhoneNum(prev => key === 'стереть'
      ? [...(prev.filter((item, i) => i !== prev.length - 1))]
      : prev.length > 9 ? [...prev] : [...prev, key]);
  }

  const checkVrKey = (id: string) => {
    if(id === 'close') {
      playVideo();
    } else if(id === 'submit') {
      console.log(phoneNum);
    } else if(id === 'offer') {
      setOfferIsAccepted(prev => !prev)
    } else {
      handlePhoneNum(id);
    }
  }

  const keyboardControl = (key: KeyboardEvent) => {
    if(key.key === 'ArrowUp') {
      if(coordinatesLink[0] === 0) return;
      coordinatesLink[0]--;
    } else if(key.key === 'ArrowDown') {
      if(coordinatesLink[0] === navigationVR.length - 1) return;
      if(chosenKey() === 'стереть' || chosenKey() === '0') coordinatesLink[1] = 0;
      if(chosenKey() === 'close') return;
      coordinatesLink[0]++;
    } else if(key.key === 'ArrowLeft') {
      if(coordinatesLink[1] === 0) return;
      if(chosenKey() === 'close' || chosenKey() === undefined) {
        coordinatesLink[0] = 0;
        coordinatesLink[1] = 3;
      }
      coordinatesLink[1]--;
    } else if(key.key === 'ArrowRight') {
      if(coordinatesLink[1] === navigationVR[coordinatesLink[0]].length - 1) return;
      if(chosenKey() === 'стереть' && coordinatesLink[1] === 0) coordinatesLink[1]++;
      coordinatesLink[1]++;
    } else if(key.key === 'Enter') {
      checkVrKey(chosenKey());
    } else if(arrayOfKeys.includes(key.key)) {
      checkVrKey(key.key);
      return;
    } else if(key.key === 'Backspace') {
      checkVrKey('стереть');
      return;
    } else return
    console.log(phoneNum);
    setPickedBtn(chosenKey());
  }

  useEffect(() => {
    document.addEventListener('keydown', keyboardControl);

    return () => document.removeEventListener('keydown', keyboardControl)
  },[])

  useEffect(() => {
    const resetPickedBtn = () => {
      setPickedBtn('')
    }
    document.addEventListener('mousemove', resetPickedBtn);

    return () => document.removeEventListener('mousemove', resetPickedBtn);
  }, [])

  return (
    <div className='promoReg'>
      <Registration
        phoneNum={phoneNum}
        checkVrKey={checkVrKey}
        pickedBtn={pickedBtn}
        offerIsAccepted={offerIsAccepted}
        setOfferIsAccepted={setOfferIsAccepted}
      />
      <div className="promoReg__controls">
        <CloseBtn id={'close'} pickedBtn={pickedBtn} checkVrKey={checkVrKey} />
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

import "./PromoReg.scss";

import React, {useEffect, useState} from "react";
import Registration from "../Registration/Registration";
import CloseBtn from "../CloseBtn/CloseBtn";
import FinalInfo from "../FinalInfo/FinalInfo";

type PromoRegProps = {
  playVideo: () => void
};

const PromoReg: React.FC<PromoRegProps> = ({playVideo}) => {

  const coordinatesLink = [0,0];

  const [pickedBtn, setPickedBtn] = useState('');

  const [regIsFinished, setRegIsFinished] = useState(false);

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
    } else return
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
      <div className='promoReg__content'>
        {regIsFinished
          ? <FinalInfo />
          : <Registration pickedBtn={pickedBtn} setRegIsFinished={setRegIsFinished} />
        }
      </div>
      <div className="promoReg__controls">
        <CloseBtn id={'close'} playVideo={playVideo} pickedBtn={pickedBtn}/>
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

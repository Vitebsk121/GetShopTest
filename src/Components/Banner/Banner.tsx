import "./Banner.scss";
import qrCodePic from "../../assets/images/qrCode_pic.png"

import React from "react";

type BannerProps = {
  cls: string[]
  stopVideo: () => void
};

const Banner: React.FC<BannerProps> = ({cls, stopVideo}: BannerProps) => {


  return (
    <div className={cls.join(' ')}>
      <p className="banner__title">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО БОССА!
        ПОДАРИТЕ ЕМУ VOLVO!
      </p>
      <img src={qrCodePic} alt="QR-code" className="banner__qrCode"/>
      <p className="banner__subtitle">
        Сканируйте QR-код
        или нажмите ОК
      </p>
      <button
        type="button"
        className="banner__btn"
        onClick={stopVideo}
      >
        OK
      </button>
    </div>
  );
};

export default Banner;

import "./PhoneNumber.scss";

import React from "react";

type PhoneNumberProps = {
  phoneNum: string[]
};

const PhoneNumber: React.FC<PhoneNumberProps> = ({phoneNum}) => {
  return (
    <div className="registration__phone">
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
  );
};

export default PhoneNumber;

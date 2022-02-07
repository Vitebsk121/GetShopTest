import "./FinalInfo.scss";

import React from "react";

type FinalInfoProps = {
};

const FinalInfo: React.FC<FinalInfoProps> = () => {
  return (
    <div className="final__info">
      <p className="final__info__title">
        ЗАЯВКА ПРИНЯТА
      </p>
      <p className="final__info__subtitle">
        Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.
      </p>
    </div>
  );
};

export default FinalInfo;

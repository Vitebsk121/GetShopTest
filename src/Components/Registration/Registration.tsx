import "./Registration.scss";

import React from "react";
import KeyBoardVR from "../KeyBoardVR/KeyBoardVR";
import {useFormik} from "formik";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import RegOffer from "../RegOffer/RegOffer";
import SubmitBtn from "../SubmitBtn/SubmitBtn";

type RegistrationProps = {
  pickedBtn: string
};

const Registration: React.FC<RegistrationProps> = ({ pickedBtn }) => {

  const formik = useFormik({
    initialValues: {
      phone: '',
      offer: false,
    },
    onSubmit: values => {
      if(!formik.values.offer || formik.values.phone.length < 10) return;
      alert(JSON.stringify(values, null, 2));
    },
  });

  const checkNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const arrayOfNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', null, undefined];
    return !!arrayOfNumbers.includes(event.nativeEvent.data);

  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(checkNumber(e)) formik.handleChange(e);
  }

  const programInputHandler = (key: string) => {
    const arrOfKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'стереть']
    if(!arrOfKeys.includes(key)) return;
    const prevValue = formik.values.phone.split('');
    if(key === 'стереть') {
      formik.setFieldValue('phone', `${(prevValue.filter((item, i) => i !== prevValue.length  - 1)).join('')}`)
    } else {
      if(prevValue.length > 9) return;
      formik.setFieldValue('phone', `${formik.values.phone}${key}`)
    }
  }

  return (
    <form className="registration" onSubmit={formik.handleSubmit}>
      <label className="registration__title" htmlFor="phone">
        Введите ваш номер
        мобильного телефона
      </label>
      <input
        className="registration__phone-input"
        maxLength={10}
        id="phone"
        name="phone"
        type="text"
        onChange={inputHandler}
        value={formik.values.phone}
      />
      <PhoneNumber phoneNum={formik.values.phone.split('')} />
      <label className="registration__subtitle" htmlFor="phone">
        и с Вами свяжется наш менеджер для дальнейшей консультации
      </label>
      <KeyBoardVR programInputHandler={programInputHandler} pickedBtn={pickedBtn} />
      <RegOffer offer={formik.values.offer} handleChange={formik.handleChange} pickedBtn={pickedBtn} />
      <SubmitBtn pickedBtn={pickedBtn} />
    </form>
  );
};

export default Registration;

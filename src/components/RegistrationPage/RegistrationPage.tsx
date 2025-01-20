
import { AppButton } from "../UI/AppButton/AppButton";
import { AppInput } from "../UI/AppInput/AppInput";
import { IconWrapper } from "../UI/IconWrapper/IconWrapper";
import "../../pages/LoginPage/LoginPage.scss";




export const RegistrationPage = () => {
  return (
    <div className="LoginPage">
      <h1>Registration</h1>
      <form action="#">
        <AppInput inputPlaceholder="Имя и Фамилия" inputType="text"/>
        <AppInput inputPlaceholder="Номер телефона" inputType="tel"/>
        <AppInput inputPlaceholder="Пароль" inputType="password"/>
        <AppButton buttonText="Зарегистрироваться" buttonType="button" isDisabled={false}/>
      </form>
      <IconWrapper regLink="#"/>
    </div>
  );
};

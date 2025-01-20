import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppLink } from "../../components/UI/AppLink/AppLink";
import { IconWrapper } from "../../components/UI/IconWrapper/IconWrapper";
import "./LoginPage.scss";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {  Controller } from "react-hook-form"
import { useLoginUserMutation } from "../../store/API/authApi";

const AuthFormScheme = yup.object({
  userEmail: yup.string().email().min(4).max(30).required(),
  userPassword: yup.string().min(6).max(30).required(),
})

export const LoginPage = () => {
  interface ILoginForm{
    userEmail:string;
    userPassword:string;
  }
  const {
    control,
    handleSubmit, 
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(AuthFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });
  const [loginUser, {data: userData}] = useLoginUserMutation();

  const formData: SubmitHandler<ILoginForm> = (data) =>{
    const payload = {
      email: data.userEmail,
      password: data.userPassword
    };
    loginUser(payload);
  };

  return (
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form action="#" onSubmit={handleSubmit(formData)}>
        <Controller control={control} name="userEmail" render={({field}) => (
          <AppInput 
          inputPlaceholder="ваша почта" 
          inputType="email" {...field} 
          isError={errors.userEmail ? true : false} 
          errorText={errors.userEmail ?.message}/>
        )}
        />
        <Controller 
        control={control}
        name="userPassword"
        render={({ field })=>(
          <AppInput 
          inputPlaceholder="пароль" 
          inputType="password" {...field} 
          isError={errors.userPassword ? true : false} 
          errorText={errors.userPassword?.message}/>
        )}
        />
        <AppButton buttonText="Войти" buttonType="button" isDisabled={false}/>
      </form>
      <AppLink href="#" linkText="Забыли пароль?"/>
      <IconWrapper regLink="#"/>
    </div>
  );
};

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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store"
import { useEffect } from "react";

const AuthFormScheme = yup.object({
  userEmail: yup.string().email().min(4).max(30).required(),
  userPassword: yup.string().min(6).max(30).required(),
})

interface ILoginForm{
  userEmail:string;
  userPassword:string;
}

export const LoginPage = () => {
 const navigate = useNavigate();
 const user = useSelector((state: RootState)=> state.user.user)
 console.log(user);
 
  const {
    control,
    handleSubmit, 
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(AuthFormScheme),
    defaultValues: {
      userEmail: `${user?.email ? user.email:""}`,
      userPassword: `${user?.password ? user.password: ""}`,
    },
  });
  const [loginUser, {data: userData}] = useLoginUserMutation();

  const formData: SubmitHandler<ILoginForm> = (data) =>{
    const payload = {
      email: data.userEmail,
      password: data.userPassword,
    };
    loginUser(payload);
  };

  useEffect(()=>{
    if (userData?.user_id){
      navigate("/main-page");
    }
  }, [userData]);

  return (
    <div className="LoginPage">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(formData)}>
        <Controller 
        control={control} 
        name="userEmail" 
        render={({field}) => (
          <AppInput 
          inputPlaceholder="ваша почта" 
          inputType="email" 
          inputValue={field.value}
          onChange={field.onChange}
          isError={Boolean(errors.userEmail)} 
          errorText={errors.userEmail?.message}
          />
        )}
        />
        <Controller 
        control={control}
        name="userPassword"
        render={({ field })=>(
          <AppInput 
          inputPlaceholder="пароль" 
          inputType="password"
          inputValue={field.value}
          onChange={field.onChange}
          isError={Boolean(errors.userPassword)} 
          errorText={errors.userPassword?.message}/>
        )}
        />
        <AppButton 
        buttonText="Войти" 
        buttonType="submit" 
        isDisabled={false}
        />
      </form>
      <AppLink href="#" linkText="Забыли пароль?"/>
      <IconWrapper regLink="./register-page"/>
    </div>
  );
};

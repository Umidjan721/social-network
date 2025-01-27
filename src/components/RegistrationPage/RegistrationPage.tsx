import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppLink } from "../UI/AppLink/AppLink";
import { IconWrapper } from "../UI/IconWrapper/IconWrapper";
// import "../LoginPage/LoginPage.scss";
import * as yup from "yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginUserMutation, useRegisterMutation } from "../../store/API/authApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IRegisterUserPayload } from "../../store/API/authApi";
import { useDispatch } from "react-redux";
import { changeUser } from "../../store/API/userSlice";
// import { changeUser } from "../../store/API/userSlice";
// import { useSelector } from "react-redux";
// import { RootState } from "../../store/store";

const registrationFormScheme = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .email("Введите корректный email")
    .required("Обязательное поле!"),
  phone_number: yup.string().required(),
  password: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
  user_city: yup.string().required(),
});

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [registerUser, {data: userData}] = useRegisterMutation(); 
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserPayload>({
    resolver: yupResolver(registrationFormScheme),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      user_city: "",
    },
  });

  const formData: SubmitHandler<IRegisterUserPayload> = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      password: data.password,
      user_city: data.user_city,
    };
    try {
      const response = await registerUser(payload).unwrap();
      if(response.user_id){
        dispatch(changeUser(payload));
        navigate("/");
      }
    } catch (error) {
      console.error("Ошибка"+ error);
    }
  };

  return (
    <div className="LoginPage">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(formData)}>
      <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваше имя"
              inputType="text"
              inputValue={field.value}
              onChange={field.onChange}
              isError={Boolean(errors.name)}
              errorText={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваша почта"
              inputType="email"
              inputValue={field.value}
              onChange={field.onChange}
              isError={Boolean(errors.email)}
              errorText={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="phone_number"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваша номер"
              inputType="text"
              inputValue={field.value}
              onChange={field.onChange}
              isError={Boolean(errors.phone_number)}
              errorText={errors.phone_number?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Пароль"
              inputType="password"
              inputValue={field.value}
              onChange={field.onChange}
              isError={Boolean(errors.password)}
              errorText={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="user_city"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваш город"
              inputType="text"
              inputValue={field.value}
              onChange={field.onChange}
              isError={Boolean(errors.user_city)}
              errorText={errors.user_city?.message}
            />
          )}
        />
        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false} />
      </form>
      <AppLink href="#" linkText="Забыли пароль?" />
      <IconWrapper regLink="/register-page" />
    </div>
  );
};

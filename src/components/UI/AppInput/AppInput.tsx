import React from "react";
import { SAppInput } from "./AppInput.style";
import { SErrorText } from "./AppInput.style";

type TAppInput = {
    inputType:"text"|"tel"|"password"|"email"|"search";
    inputPlaceholder:string;
    inputValue?:string;
    isError?:boolean;
    errorText?:string;
    onChange?:()=>void;
}& React.InputHTMLAttributes<HTMLInputElement>

export const AppInput = ({
    inputType,
    inputPlaceholder,
    inputValue,
    isError,
    errorText,
    onChange,
    ...props
}: TAppInput) =>{
    return(
        <>
        <SAppInput 
           type={inputType} 
           placeholder={inputPlaceholder} 
           value={inputValue} 
           onChange={onChange} 
           {...props}
           />
           {isError && <SErrorText>{errorText}</SErrorText>}
        </>
    );
};
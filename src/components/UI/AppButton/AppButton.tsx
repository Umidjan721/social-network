import { SAppButoon } from "./AppButton.style";

type TAppButton={
    buttonText: string;
    buttonType: "button" | "submit";
    buttonClick?: ()=> void;
    isDisabled: boolean;
};

export const AppButton =  ( {
    buttonText,
    buttonType,
    buttonClick,
    isDisabled,
}: TAppButton) =>{
    return(
        <SAppButoon type={buttonType} onClick={buttonClick} disabled={isDisabled}>
            {buttonText}
        </SAppButoon>
    );
};
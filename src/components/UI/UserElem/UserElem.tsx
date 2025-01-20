import { SUserElem } from "./UserElem.style";

interface IUserElem{
    userImg:string;
    userSecondryText:string;
    useMainText:string;
}

export const UserElem = ({userImg, useMainText, userSecondryText}: IUserElem) =>{
    return(
        <SUserElem>
        <img src={userImg} alt="User" />
        <div className="user__description">
          <p className="main__text">{useMainText}</p>
          <p className="secondary__text">{userSecondryText}</p>
        </div>
        <span className="Badge">3</span>
      </SUserElem>
    );
};
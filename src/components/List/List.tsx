import { dataList } from "./dataList";
import { UserElem } from "../UI/UserElem/UserElem";


export const List = () => {
    return (
        <div className="List">
          <div className="List__title">
            <h2>Подписки</h2>
            <span className="count">123</span>
          </div>
          {dataList.map((elem) => (
            <UserElem 
            userImg={elem.listImg}
            useMainText={elem.listMain}
            userSecondryText={elem.listSecondary}/>
          ))}
        </div>
    );
};
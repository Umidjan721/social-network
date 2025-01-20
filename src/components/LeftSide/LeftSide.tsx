import { List } from "../List/List";
import { Navbar } from "../Navbar/Navbar";

export const LeftSide = () => {
    return(
        <aside className="LeftSide">
          <Navbar/>
          <List/>
      </aside>
    );
};
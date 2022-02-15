import { ReactNode } from "react";
import StatusBar from "@core/StatusBar";

interface IPageProps {
  children?: ReactNode;
}

const Page = (props: IPageProps) => {
  return (
    <div className="App">
      <div className="AppHeader">
        <StatusBar />
      </div>
      <div className="AppBody">{props.children}</div>
      <div className="AppFooter"></div>
    </div>
  );
};
export default Page;

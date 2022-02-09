import { IconType } from "react-icons";
import * as MD from "react-icons/md";

interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  const NamedIcon: IconType =
    name in MD ? MD[name as keyof typeof MD] : MD.MdOutlineDisabledByDefault;
  return <NamedIcon />;
};

export default Icon;

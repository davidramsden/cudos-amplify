import logoSrc from "../../../Assets/Images/logo.png";

interface LogoProps {
  alt?: string;
  className?: string;
  src?: any;
}

const Logo = ({ alt = "Cudos Logo", className, src }: LogoProps) => {
  return <img src={logoSrc} alt={alt} className={className} />;
};

export default Logo;

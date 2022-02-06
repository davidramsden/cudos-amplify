import logo from "@images/logo.png";

interface LogoProps {
  alt?: string;
  className?: string;
  src?: any;
}

const Logo = ({ alt = "Cudos Logo", className, src }: LogoProps) => {
  return <img src={src ? src : logo} alt={alt} className={className} />;
};

export default Logo;

import { FontawesomeObject, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface buttonProps {
  text: string;
  link: string;
  icon?: IconProp;
}

const LinkButton = ({ text, link, icon }: buttonProps) => {
  return (
    <Link
      className="flex items-center w-fit gap-4 font-semibold text-base px-4 py-3 rounded-full bg-pastel-dark text-white hover:bg-red transition-all duration-300 ease-in-out  cursor-pointer"
      href={link}
      target="_blank">
      {icon && <FontAwesomeIcon icon={icon} />} {text}
    </Link>
  );
};

export default LinkButton;

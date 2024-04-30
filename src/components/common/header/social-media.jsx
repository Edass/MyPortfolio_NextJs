import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./social-media.scss";
const SocialMedia = ({flex="row", gap="4"}) => {
  return (
    <div className={`medias d-flex flex-${flex} gap-${gap}`}>
    <a href="https://github.com/Edass" target="_blank"><FaGithub /></a>
    <a href="https://www.linkedin.com/in/eda-sarikaya/" target="_blank"><FaLinkedin /></a>
    <a href="mailto: edassarkaya@outlook.com" target="_blank"><IoMdMail /></a>
    </div>
  )
}

export default SocialMedia

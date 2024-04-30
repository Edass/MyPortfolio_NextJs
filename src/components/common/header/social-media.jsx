import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./social-media.scss";
const SocialMedia = () => {
  return (
    <div className="medias">
    <a href=""><FaGithub /></a>
    <a href=""><FaLinkedin /></a>
    <a href=""><IoMdMail /></a>
    </div>
  )
}

export default SocialMedia

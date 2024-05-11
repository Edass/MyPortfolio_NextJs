import { MdOutlineDownload } from "react-icons/md";
import "./download-cv.scss";



const DownloadCv = ({children}) => {
  return (
    <div>
            <h4 className="download-cv"> <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">{children} <span><MdOutlineDownload /></span> </a> </h4>
      
    </div>
  )
}

export default DownloadCv

import React from "react";
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://drive.google.com/file/d/128RJeEQkixbwGxYHMhFhbl3hmzq6_Yg4/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaRegFilePdf />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Ctruss501"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/corey-trussell-62227058/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;

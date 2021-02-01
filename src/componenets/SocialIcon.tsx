import React from 'react';
import {ISocialIcon} from "../types/project";

type socialIconProps = {
  socialIcon: ISocialIcon
}
const SocialIcon: React.FC<socialIconProps> = (props) => {
  const {socialIcon} = props;
  return (
    <div style={{width: "45px"}}>
      <a href={socialIcon.link} target='_blank' rel="noreferrer" aria-label={socialIcon.arialLabel}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={socialIcon.viewBox} stroke="currentColor">
          <path className="my-icon" stroke={socialIcon.isDark ? "#bdc3c7" : "#19192f"} strokeLinecap="round"
                strokeLinejoin="round" strokeWidth={socialIcon.strokeWidth} d={socialIcon.pathLine}/>
        </svg>
      </a>
    </div>
  );
}

export default SocialIcon;


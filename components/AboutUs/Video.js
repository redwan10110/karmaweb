import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import '/node_modules/react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Video = () => {
  return (
    <div>
      <div className="px-[25px] xl:px-[95px] mb-5">
        <LiteYouTubeEmbed
          id="t5o4SP2471w"
          title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
        />
      </div>
      
    </div>
  );
};

export default Video;

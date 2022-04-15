import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/Dev_180Memes" target="_blank">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/adeoluwa-agbakosi-687023219/" target="_blank">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/Dev-180Memes" target="_blank">
        <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;

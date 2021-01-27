import React from 'react';
import { Link } from 'react-router-dom';

const socials = {
  "Mailing List": "tinyurl.com/gtmakerysurvey",
  Discord: "discord.gg/mccRCsu",
  Slack: "the-makery.slack.com",
  Instagram: "instagram.com/gtmakery",
  Facebook: "facebook.com/groups/2927249277306104/about/"
}

function Landing() {
  return (
    <div className="w-full h-fill flex flex-col p-2">
      <h1 className="text-lg text-center">The Makery!</h1>
      <h3>Join our socials!</h3>
      <ul>
        {Object.entries(socials).map(([text, target]) => {
          return <li>
            {text}: <Link to={{ pathname: `https://${target}` }} target="_blank">
              {target}
            </Link>
          </li>
        })}
      </ul>
    </div>
  );
};

export default Landing;

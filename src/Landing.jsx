import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

const socials = {
  "Mailing List": "tinyurl.com/gtmakerysurvey",
  Discord: "discord.gg/mccRCsu",
  Slack: "the-makery.slack.com",
  Instagram: "instagram.com/gtmakery",
  Facebook: "facebook.com/groups/2927249277306104/about/"
}

function Landing() {
  return (
    <div>
      <h1>The Makery!</h1>
      <h3>Join our socials!</h3>
      <ul>
        {Object.entries(socials).map(([text, target]) => {
          return <li>
            <Link to={{ pathname: `https://${target}` }}>
              {text}: {target}
            </Link>
          </li>
        })}
      </ul>
    </div>
  );
};

export default Landing;

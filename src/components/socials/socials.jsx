import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { REDIRECTS, filtered } from 'utils/Redirects';

const socials = filtered('socials');
const groupChats = filtered('chat', socials);
const socialMedia = filtered('media', socials);
const mailingList = REDIRECTS.mailing;
// TODO: add embedded instagram preview

function Socials() {
  return (
    <div className="w-full h-fill flex flex-col p-2 items-center">
      <div className="w-full flex flex-row justify-center items-center">
        <h1 className="text-4xl font-bold text-center mr-2">Get emails!</h1>
        <Link to={{ pathname: `https://${mailingList.path}` }} target="_blank" className={`${mailingList.color} underline mt-1.5`}>
          <FontAwesomeIcon icon={mailingList.icon} size="2x" />
        </Link>
      </div>
      <div className="w-full flex flex-row justify-evenly flex-wrap">
        <div className="w-fit flex flex-col">
          <h1 className="text-4xl font-bold text-center">Join Us!</h1>
          <ul className="p-2 flex flex-row items-center justify-around">
            {Object.entries(groupChats).map(([shortName, data]) => {
              return <li key={shortName} className={`${data.color} text-2xl`}>
                <Link to={{ pathname: `https://${data.path}` }} target="_blank" className="underline">
                  <FontAwesomeIcon icon={data.icon} size="2x" />
                </Link>
              </li>
            })}
          </ul>
        </div>
        <div className="w-fit flex flex-col">
          <h1 className="text-4xl font-bold text-center">Follow us!</h1>
          <ul className="p-2 flex flex-row items-center justify-around">
            {Object.entries(socialMedia).map(([shortName, data]) => {
              return <li key={shortName} className={`${data.color} text-2xl`}>
                <Link to={{ pathname: `https://${data.path}` }} target="_blank" className="underline">
                  <FontAwesomeIcon icon={data.icon} size="2x" />
                </Link>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Socials;

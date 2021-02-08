import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExternalRedirect from 'components/externalRedirect';

import WORKSHOPS, { latestWorkshop } from 'clubData/workshops';
import { redirectionDataMapping } from 'clubData';
import { filtered } from 'utils/Redirects';
import { upperFirstChar } from 'utils';

const softwareRedirects = filtered("software");

function Workshop({ semester, dateString }) {
  const semesterData = WORKSHOPS[semester];
  const workshopData = WORKSHOPS[semester].workshops[dateString];
  const isLatest = latestWorkshop === workshopData;
  const dayAfter = new Date(workshopData.fullDate);
  dayAfter.setDate(dayAfter.getDate() + 1);
  dayAfter.setHours(0,0,0,0);

  const fullWorkshopMatch = useRouteMatch({
    path: `/workshops/${semester}/${dateString}`
  });

  const redirectRequestMatch = useRouteMatch({
    path: `/workshops/${semester}/${dateString}/:dataName`
  });

  if (redirectRequestMatch && workshopData.redirects.includes(redirectRequestMatch.params.dataName) && workshopData[redirectRequestMatch.params.dataName] && workshopData[redirectRequestMatch.params.dataName].length) {
    return <ExternalRedirect target={`https://${workshopData[redirectRequestMatch.params.dataName]}`} />;
  }
//TODO fix the h-flil garbage
  return (
    <div className={`container ${!!fullWorkshopMatch ? "h-fill" : ""} flex flex-col p-2 items-center`}>
      { !!fullWorkshopMatch && <Link to={`/workshops/${semester}`} className="self-start p-2 flex flex-row items-center rounded-md border border-yellow-300 text-black hover:bg-yellow-300 outline-none">
        <div className="">
          <FontAwesomeIcon icon="chevron-left" />
        </div>
        <p className="ml-2">
          Back to {semesterData.longName}
        </p>
      </Link> }
      <h1 className={`${fullWorkshopMatch ? "text-6xl" : "text-3xl"} font-bold text-center text-yellow-400 mb-3`}>{`${workshopData.title} (${workshopData.date})`}</h1>
      <div className="w-full h-fit flex flex-row flex-wrap p-2 justify-around">
        { workshopData.flyer && (
          !!fullWorkshopMatch
            ? <img src={require(`assets/images/flyers/${workshopData.flyer}.png`).default} alt="workshop flyer" className="w-11/12 md:w-5/12 max-h-90vh object-contain object-bottom"/>
            : <Link key={dateString} to={`/workshops/${semester}/${dateString}`} className="w-11/12 md:w-5/12">
                <img src={require(`assets/images/flyers/${workshopData.flyer}.png`).default} alt="workshop flyer" className="w-full h-full max-h-90vh object-contain object-bottom"/>
              </Link>
        )}
        <div className="w-11/12 md:w-1/2 h-full p-3 flex flex-col justify-between">
          { !!workshopData.description && <p className="text-lg">{workshopData.description}</p> }
          { workshopData.hasRental && isLatest && Date.now() <= dayAfter.getTime() && <div className="">
            <Link to={{ pathname: `/rentals` }} target="_blank" className="underline flex flex-row items-center">
              <p className="text-lg font-bold mr-2">Rentals</p>
            </Link>
          </div> }
          { !!workshopData.software && !!workshopData.software.length && <div className="flex flex-col">
            <p className="text-lg font-bold">Downloads:</p>
            <ul className="flex flex-col">
              {workshopData.software.map(softwareLinkName => {
                const softwareLinkData = softwareRedirects[softwareLinkName];
                if (!softwareLinkData) {
                  return <p className="text-red-500">oops! contact gtmakery@gmail.com to fix this</p>
                }
                return <li key={softwareLinkName} className={`${softwareLinkData.color} text-base`}>
                  <Link to={{ pathname: `https://${softwareLinkData.path}` }} target="_blank" className="underline flex flex-row items-center w-fit">
                    { !!softwareLinkData.icon && <FontAwesomeIcon icon={softwareLinkData.icon} size="lg" /> }
                    <p>{softwareLinkData.longName}</p>
                  </Link>
                </li>
              })}
            </ul>
          </div> }
          { !!workshopData.concepts && !!workshopData.concepts.length && <div className="flex flex-col">
            <p className="text-lg font-bold">Concepts/Tags:</p>
            <ul className="flex flex-row flex-wrap w-fit">
              {workshopData.concepts.map(concept => {
                return <li key={concept} className={`w-fit p-1 px-2 m-1 rounded-full border border-yellow-300 text-black`}>
                  <p>{concept}</p>
                </li>
              })}
            </ul>
          </div> }
          { !!workshopData.redirects && workshopData.redirects.filter(redirKey => workshopData[redirKey]).map(redirKey => {
            return <div className="">
              <Link to={{ pathname: `https://${workshopData[redirKey]}` }} target="_blank" className="underline flex flex-row items-center">
                <p className="text-lg font-bold mr-2">{ redirectionDataMapping[redirKey].title || upperFirstChar(redirKey) }</p>
                { redirectionDataMapping[redirKey] && redirectionDataMapping[redirKey].icon &&
                  <FontAwesomeIcon icon={redirectionDataMapping[redirKey].icon} size="lg" />
                }
              </Link>
            </div>
          })}
          <div className="flex-grow-0.5" />
        </div>
      </div>
    </div>
  );
};

export default Workshop;

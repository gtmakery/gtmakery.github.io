import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useQueryParams from 'hooks/useQueryParams';

import ExternalRedirect from 'components/externalRedirect';

import PROJECTS from 'clubData/projects';
import PROJECT_MEETINGS from 'clubData/projectMeetings';
import { redirectionDataMapping } from 'clubData';
import { upperFirstChar } from 'utils';

function Project({ projectName }) {
  const projectData = PROJECTS[projectName];
  const isOngoing = !projectData.finished;

  const fullProjectMatch = useRouteMatch({
    path: `/projects/${projectName}`
  });
  let returnToMeetingInfo = useQueryParams();
  returnToMeetingInfo = (returnToMeetingInfo && returnToMeetingInfo.get("fromSem") && returnToMeetingInfo.get("fromDate") && PROJECT_MEETINGS[returnToMeetingInfo.get("fromSem")] && PROJECT_MEETINGS[returnToMeetingInfo.get("fromSem")].projectMeetings[returnToMeetingInfo.get("fromDate")]) || null;

  const redirectRequestMatch = useRouteMatch({
    path: `/projects/${projectName}/:dataName`
  });

  if (redirectRequestMatch && projectData.redirects.includes(redirectRequestMatch.params.dataName) && projectData[redirectRequestMatch.params.dataName] && projectData[redirectRequestMatch.params.dataName].length) {
    return <ExternalRedirect target={`https://${projectData[redirectRequestMatch.params.dataName]}`} />;
  }
//TODO fix the h-flil garbage
  return (
    <div className={`container ${!!fullProjectMatch ? "h-fill" : ""} flex flex-col p-2 items-center mx-auto`}>
      { !!fullProjectMatch && <Link to={`/projects${returnToMeetingInfo ? `/${returnToMeetingInfo.semester}/${returnToMeetingInfo.dateString}` : ""}`} className="self-start p-2 flex flex-row items-center rounded-md border border-yellow-300 text-black hover:bg-yellow-300 outline-none">
        <div className="">
          <FontAwesomeIcon icon="chevron-left" />
        </div>
        <p className="ml-2">
          {`Back to ${returnToMeetingInfo ? `${returnToMeetingInfo.date} Meeting Info` : "all projects"}`}
        </p>
      </Link> }
      {
        !!fullProjectMatch
          ? <h1 className={`${fullProjectMatch ? "text-6xl" : "text-3xl"} font-bold text-center text-yellow-400 mb-3`}>{`${projectData.title}`}</h1>
          : <h1 className={`${fullProjectMatch ? "text-6xl" : "text-3xl"} font-bold text-center text-yellow-400 mb-3`}>
            <Link to={`/projects/${projectName}`} className="w-11/12 md:w-5/12">{`${projectData.title}`}</Link>
          </h1>
      }
      <p className={`text-lg`}>{`${fullProjectMatch ? (projectData.description || projectData.shortDesc) : projectData.shortDesc}`}</p>
      <div className="w-full h-fit flex flex-row flex-wrap p-2 justify-around">
        <div className="w-11/12 h-full p-3 flex flex-col justify-between">

          { !!projectData.redirects && projectData.redirects.filter(redirKey => projectData[redirKey]).map(redirKey => {
            return <div className="">
              <Link to={{ pathname: `https://${projectData[redirKey]}` }} target="_blank" className="underline flex flex-row items-center">
                <p className="text-lg font-bold mr-2">{ redirectionDataMapping[redirKey].title || upperFirstChar(redirKey) }</p>
                { redirectionDataMapping[redirKey] && redirectionDataMapping[redirKey].icon &&
                  <FontAwesomeIcon icon={redirectionDataMapping[redirKey].icon} size="lg" />
                }
              </Link>
            </div>
          })}
          { !!projectData.materials && !!projectData.materials.length && <div className="flex flex-col">

          </div>}
          <div className="flex-grow-0.5" />
        </div>
      </div>
    </div>
  );
};

export default Project;

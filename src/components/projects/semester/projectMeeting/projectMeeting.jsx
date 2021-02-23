import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ExternalRedirect from 'components/externalRedirect';
import BulletList from 'components/nestedBulletList';

import PROJECT_MEETINGS, { /*latestProjectMeeting*/ } from 'clubData/projectMeetings';
import PROJECTS from 'clubData/projects';
import { redirectionDataMapping } from 'clubData';
import { upperFirstChar } from 'utils';

function ProjectMeeting({ semester, dateString }) {
  const semesterData = PROJECT_MEETINGS[semester];
  const projectMeetingData = PROJECT_MEETINGS[semester].projectMeetings[dateString];
  // const isLatest = latestProjectMeeting === projectMeetingData;
  const dayAfter = new Date(projectMeetingData.fullDate);
  dayAfter.setDate(dayAfter.getDate());
  dayAfter.setHours(12,0,0,0);
  const isPast = Date.now() > dayAfter.getTime();

  const fullProjectMeetingMatch = useRouteMatch({
    path: `/projects/${semester}/${dateString}`
  });

  const redirectRequestMatch = useRouteMatch({
    path: `/projects/${semester}/${dateString}/:dataName`
  });

  if (redirectRequestMatch && projectMeetingData.redirects.includes(redirectRequestMatch.params.dataName) && projectMeetingData[redirectRequestMatch.params.dataName] && projectMeetingData[redirectRequestMatch.params.dataName].length) {
    return <ExternalRedirect target={`https://${projectMeetingData[redirectRequestMatch.params.dataName]}`} />;
  }

  return (
    <div className={`container ${!!fullProjectMeetingMatch ? "h-fill" : ""} min-h-fit flex flex-col p-2 items-center`}>
      { !!fullProjectMeetingMatch && <Link to={`/projects/${semester}`} className="self-start p-2 flex flex-row items-center rounded-md border border-yellow-300 text-black hover:bg-yellow-300 outline-none">
        <div className="">
          <FontAwesomeIcon icon="chevron-left" />
        </div>
        <p className="ml-2">
          Back to {semesterData.longName}
        </p>
      </Link> }
      {
        !!fullProjectMeetingMatch
          ? <h1 className={`${fullProjectMeetingMatch ? "text-5xl mb-3" : "text-3xl -mb-2"} font-bold text-center text-yellow-400`}>{`Project Meeting (${projectMeetingData.date})`}</h1>
          : <h1 className={`${fullProjectMeetingMatch ? "text-5xl mb-3" : "text-3xl -mb-2"} font-bold text-center text-yellow-400`}>
            <Link key={dateString} to={`/projects/${semester}/${dateString}`}>{`Project Meeting (${projectMeetingData.date})`}</Link>
          </h1>
      }
      { !!projectMeetingData.mainProjectFocus && !!projectMeetingData.mainProjectFocus.length && projectMeetingData.mainProjectFocus in PROJECTS &&
        <Link className="text-2xl font-semibold mt-1" to={`/projects/${projectMeetingData.mainProjectFocus}${!!fullProjectMeetingMatch ? `?fromSem=${semester}&fromDate=${dateString}` : ""}`}>
          {`More info on ${PROJECTS[projectMeetingData.mainProjectFocus].title}`}
        </Link>
      }
      <div className="w-full h-fit flex flex-row flex-wrap p-2 justify-around">
        <div className="w-11/12 h-full p-3 flex flex-col justify-between">
          { !!projectMeetingData.redirects && projectMeetingData.redirects.filter(redirKey => projectMeetingData[redirKey] && (!projectMeetingData.offLimits || !projectMeetingData.offLimits.includes(redirKey))).map(redirKey => {
            return <div key={redirKey} className="">
              <Link to={{ pathname: `https://${projectMeetingData[redirKey]}` }} target="_blank" className="underline flex flex-row items-center">
                <p className="text-lg font-bold mr-2">{ redirectionDataMapping[redirKey]?.title || upperFirstChar(redirKey) }</p>
                { redirectionDataMapping[redirKey]?.icon &&
                  <FontAwesomeIcon icon={redirectionDataMapping[redirKey].icon} size="lg" />
                }
              </Link>
            </div>
          })}
          {!isPast
            ? ( !!projectMeetingData.preMeetingBlurb && <>
                <p className="text-xl">{projectMeetingData.preMeetingBlurb.text || projectMeetingData.preMeetingBlurb}</p>
                { projectMeetingData.preMeetingBlurb.bullets && <BulletList bullets={projectMeetingData.preMeetingBlurb.bullets} /> }
              </> )
            : ( !!projectMeetingData.minutes && !!projectMeetingData.minutes.length && <>
              <h2 className="text-2xl font-bold">Summary:</h2>
              <BulletList bullets={projectMeetingData.minutes} />
            </> )
          }
          <div className="flex-grow-0.5" />
        </div>
      </div>
    </div>
  );
};

export default ProjectMeeting;

import React from 'react';
import { Link, Redirect, useRouteMatch  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProjectMeeting from './projectMeeting';

import PROJECT_MEETINGS, { byAlias } from 'clubData/projectMeetings';

function Semester({ semester }) {
  let semesterMatch = useRouteMatch({
    path: `/projects/${semester}`
  });
  let fullSemesterDateMatch = useRouteMatch({
    path: `/projects/${semester}/:dateString`
  });

  const selectedProjectMeeting = fullSemesterDateMatch && byAlias(fullSemesterDateMatch.params.dateString);
  if (selectedProjectMeeting && fullSemesterDateMatch.params.dateString !== selectedProjectMeeting.dateString) {
    // console.log(fullSemesterDateMatch);
    // console.log(`/projects/${selectedProjectMeeting.semester}/${selectedProjectMeeting.dateString}${window.location.pathname.substring(fullSemesterDateMatch.url.length)}`);
    // return <ProjectMeeting semester={selectedProjectMeeting.semester} dateString={selectedProjectMeeting.dateString} />
    return <Redirect to={`/projects/${selectedProjectMeeting.semester}/${selectedProjectMeeting.dateString}${window.location.pathname.substring(fullSemesterDateMatch.url.length)}`} />
  }

  return (
    fullSemesterDateMatch && Object.keys(PROJECT_MEETINGS[semester].projectMeetings).includes(fullSemesterDateMatch.params.dateString)
      ? <ProjectMeeting semester={semester} dateString={fullSemesterDateMatch.params.dateString} />
      : <div className="w-full h-fill flex flex-col p-2 items-center">
        { semesterMatch && <Link to={`/projects`} className="self-start p-2 flex flex-row items-center rounded-md border border-yellow-300 text-black hover:bg-yellow-300 outline-none">
          <div className="">
            <FontAwesomeIcon icon="chevron-left" />
          </div>
          <p className="ml-2">
            Back to all projects
          </p>
        </Link> }
        <div className="w-full h-fill flex flex-col flex-wrap justify-evenly">
          {Object.entries(PROJECT_MEETINGS[semester].projectMeetings).map(([dateString, data]) => {
            /* Extremely hacky code below
             * require(`assets/images/flyers/${data.flyer}.png`).default
             */
            return (
              <Link key={dateString} to={`/projects/${semester}/${dateString}`} className="flex flex-col items-center">
                { data.flyer && <img src={require(`assets/images/flyers/${data.flyer}.png`).default} alt="projectMeeting flyer" className="w-48 h-72 object-contain object-bottom" /> }
                <p className="text-lg">{`${data.date} Meeting Info`}</p>
              </Link>
            );
          })}
        </div>
      </div>
  );
};

export default Semester;

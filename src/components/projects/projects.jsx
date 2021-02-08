import React from 'react';
import { Link, Redirect, useRouteMatch  } from 'react-router-dom';

import Semester from './semester';
import Project from './project';

import PROJECT_MEETINGS, { byAlias } from 'clubData/projectMeetings';
import PROJECTS from 'clubData/projects';

function ProjectMeetings() {
  let match = useRouteMatch({
    path: `/projects/:semester`
  });

  const selectedProjectMeeting = match && byAlias(match.params.semester);
  if (selectedProjectMeeting && match.params.semester !== selectedProjectMeeting.semester) {
    // console.log(match);
    // console.log(`/projects/${selectedProjectMeeting.semester}/${selectedProjectMeeting.dateString}${window.location.pathname.substring(match.url.length)}`);
    // return <ProjectMeeting semester={selectedProjectMeeting.semester} dateString={selectedProjectMeeting.dateString} />
    return <Redirect to={`/projects/${selectedProjectMeeting.semester}/${selectedProjectMeeting.dateString}${window.location.pathname.substring(match.url.length)}`} />
  }

  const selectedProject = match && PROJECTS[match.params.semester];
  if (selectedProject) {
    return <Project projectName={match.params.semester} />
  }

  return (
    match && Object.keys(PROJECT_MEETINGS).includes(match.params.semester)
      ? <Semester semester={match.params.semester} />
      : <div className="w-full h-fill flex flex-col p-2 items-center">
        <h2 className="text-3xl font-bold text-yellow-400">Projects</h2>
        <div className="w-full flex flex-col items-center">
          {Object.entries(PROJECTS).map(([projectName, data]) => {
            return (
              <div className="w-full flex flex-col items-center my-4 first:mt-0 last:mb-0" key={projectName}>
                <Link to={`/projects/${projectName}`} className="mb-2">
                  <p className="text-2xl font-semibold">{data.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
        <h2 className="text-3xl font-bold text-yellow-400">Meetings</h2>
        <div className="w-full flex flex-col items-center">
          {Object.entries(PROJECT_MEETINGS).map(([semester, data]) => {
            return (
              <div className="w-full flex flex-col items-center my-4 first:mt-0 last:mb-0" key={semester}>
                <Link to={`/projects/${semester}`} className="mb-2">
                  <p className="text-2xl font-semibold">{data.longName}</p>
                </Link>
                <Semester semester={semester} />
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default ProjectMeetings;

import React from 'react';
import { Link, Redirect, useRouteMatch  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Workshop from './workshop';

import WORKSHOPS, { byAlias } from 'clubData/workshops';

function Semester({ semester }) {
  let semesterMatch = useRouteMatch({
    path: `/workshops/${semester}`
  });
  let fullSemesterDateMatch = useRouteMatch({
    path: `/workshops/${semester}/:dateString`
  });

  const selectedWorkshop = fullSemesterDateMatch && byAlias(fullSemesterDateMatch.params.dateString);
  if (selectedWorkshop && fullSemesterDateMatch.params.dateString !== selectedWorkshop.dateString) {
    // console.log(fullSemesterDateMatch);
    // console.log(`/workshops/${selectedWorkshop.semester}/${selectedWorkshop.dateString}${window.location.pathname.substring(fullSemesterDateMatch.url.length)}`);
    // return <Workshop semester={selectedWorkshop.semester} dateString={selectedWorkshop.dateString} />
    return <Redirect to={`/workshops/${selectedWorkshop.semester}/${selectedWorkshop.dateString}${window.location.pathname.substring(fullSemesterDateMatch.url.length)}`} />
  }

  return (
    fullSemesterDateMatch && Object.keys(WORKSHOPS[semester].workshops).includes(fullSemesterDateMatch.params.dateString)
      ? <Workshop semester={semester} dateString={fullSemesterDateMatch.params.dateString} />
      : <div className="w-full h-fill flex flex-col p-2 items-center">
        { semesterMatch && <Link to={`/workshops`} className="self-start p-2 flex flex-row items-center rounded-md border border-yellow-300 text-black hover:bg-yellow-300 outline-none">
          <div className="">
            <FontAwesomeIcon icon="chevron-left" />
          </div>
          <p className="ml-2">
            Back to all workshops
          </p>
        </Link> }
        <div className="w-full h-fill flex flex-row flex-wrap justify-evenly">
          {Object.entries(WORKSHOPS[semester].workshops).map(([dateString, data]) => {
            /* Extremely hacky code below
             * require(`assets/images/flyers/${data.flyer}.png`).default
             */
            return (
              <Link key={dateString} to={`/workshops/${semester}/${dateString}`} className="flex flex-col items-center">
                { data.flyer && <img src={require(`assets/images/flyers/${data.flyer}.png`).default} alt="projectMeeting flyer" className="w-48 h-72 object-contain object-bottom" /> }
                <p className="text-lg">{data.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
  );
};

export default Semester;

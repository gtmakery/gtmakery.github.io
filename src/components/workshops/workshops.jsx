import React from 'react';
import { Link, Redirect, useRouteMatch  } from 'react-router-dom';

import Semester from './semester';
// import Workshop from './semester/workshop';

import WORKSHOPS, { byAlias } from 'clubData/workshops';

function Workshops() {
  let match = useRouteMatch({
    path: `/workshops/:semester`
  });

  const selectedWorkshop = match && byAlias(match.params.semester);
  if (selectedWorkshop && match.params.semester !== selectedWorkshop.semester) {
    // console.log(match);
    // console.log(`/workshops/${selectedWorkshop.semester}/${selectedWorkshop.dateString}${window.location.pathname.substring(match.url.length)}`);
    // return <Workshop semester={selectedWorkshop.semester} dateString={selectedWorkshop.dateString} />
    return <Redirect to={`/workshops/${selectedWorkshop.semester}/${selectedWorkshop.dateString}${window.location.pathname.substring(match.url.length)}`} />
  }

  return (
    match && Object.keys(WORKSHOPS).includes(match.params.semester)
      ? <Semester semester={match.params.semester} />
      : <div className="w-full h-fill flex flex-col p-2 items-center">
        {Object.entries(WORKSHOPS).map(([semester, data]) => {
          return (
            <div className="w-full flex flex-col items-center my-4 first:mt-0 last:mb-0" key={semester}>
              <Link to={`/workshops/${semester}`} className="mb-2">
                <p className="text-2xl font-semibold">{data.longName}</p>
              </Link>
              <Semester semester={semester} />
            </div>
          );
        })}
      </div>
  );
};

export default Workshops;

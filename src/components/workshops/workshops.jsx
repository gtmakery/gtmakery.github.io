import React from 'react';
import { Link, useRouteMatch  } from 'react-router-dom';

import Semester from './semester';
import Workshop from './semester/workshop';

import WORKSHOPS, { byAlias } from 'workshops';

function Workshops() {
  let match = useRouteMatch({
    path: `/workshops/:semester`
  });

  const selectedWorkshop = match && byAlias(match.params.semester);
  if (selectedWorkshop) {
    return <Workshop semester={selectedWorkshop.semester} dateString={selectedWorkshop.dateString} />
    // return <Redirect to={`/workshops/${selectedWorkshop.semester}/${selectedWorkshop.dateString}`} />
  }

  return (
    match && Object.keys(WORKSHOPS).includes(match.params.semester)
      ? <Semester semester={match.params.semester} />
      : <div className="w-full h-full flex flex-col p-2 items-center">
        {Object.entries(WORKSHOPS).map(([semester, data]) => {
          return (
            <div className="flex flex-col items-center my-4 first:mt-0 last:mb-0" key={semester}>
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

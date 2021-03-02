import React from 'react';

import Socials from 'components/socials';
import Workshop from 'components/workshops/semester/workshop';
import ProjectMeeting from 'components/projects/semester/projectMeeting';
import SchedulePic from 'assets/images/spring21schedule.png';

import { nextMeeting, latestMeeting } from 'clubData';

const NextMeetingType = nextMeeting.type === "WORKSHOP" ? Workshop : ProjectMeeting;

const LatestMeetingType = latestMeeting.type === "WORKSHOP" ? Workshop : ProjectMeeting;

function Landing() {
  return (
    <div className="w-full h-fill min-h-fit flex flex-col p-2 items-center">
      <h1 className="text-6xl font-bold text-center text-yellow-400 mb-3">The Makery!</h1>
      <div className="container flex flex-col items-center text-lg">
        <p className="">The Makery is a Georgia Tech student organization dedicated to embedded systems. We teach all things from basic Ardiuno concepts to Raspberry Pi web hosting and even 3D-printing/laser-cutting!</p>
        <p className="">Our mission is to enable individuals to prototype, build, and program their own electronic devices, be it as simple as a flashing LED sign or as complicated as a solar powered surveillance blimp. We provide support for aspiring makers to develop ideas by providing the necessary knowledge and equipment.</p>
      </div>
      <div className="w-full flex flex-col items-center">
        <NextMeetingType semester={nextMeeting.semester} dateString={nextMeeting.dateString} />
      </div>
      <div className="w-full flex flex-col items-center">
        <LatestMeetingType semester={latestMeeting.semester} dateString={latestMeeting.dateString} />
      </div>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center text-black mb-3">Schedule</h2>
        <img src={SchedulePic} className="w-124" alt="schedule" />
      </div>
      <Socials />
    </div>
  );
};

export default Landing;

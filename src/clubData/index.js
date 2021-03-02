import WORKSHOPS, { allWorkshops, upcomingWorkshops, nextWorkshop, latestWorkshop, byAlias as workshopByAlias } from './workshops';
import PROJECT_MEETINGS, { allProjectMeetings, upcomingProjectMeetings, nextProjectMeeting, latestProjectMeeting, byAlias as projectMeetingByAlias } from './projectMeetings';

const allMeetings = [...allWorkshops, ...allProjectMeetings].sort((meeting1,meeting2) => meeting1.fullDate.getTime()-meeting2.fullDate.getTime());

const upcomingMeetings = allMeetings.filter(meeting => {
  const dayAfter = new Date(meeting.fullDate);
  dayAfter.setDate(dayAfter.getDate());
  dayAfter.setHours(12,0,0,0);
  return Date.now() <= dayAfter.getTime();
});

const nextMeeting = upcomingMeetings[0];

let latestIndex = -1;
let latestMeeting = allMeetings.slice(latestIndex)[0];
while (latestMeeting === nextMeeting) latestMeeting = allMeetings.slice(--latestIndex)[0];

const redirectionDataMapping = {
  slides: {
    title: "Slides",
    icon: ["far", "file-powerpoint"]
  },
  video: {
    title: "Video",
    icon: ["fab", "youtube"]
  },
  code: {
    title: "Code",
    icon: "code"
  },
  files: {
    title: "Files",
    icon: ["far", "folder-open"]
  },
  notes: {
    title: "Meeting Notes",
    icon: ["far", "file"]
  }
};

export {
  WORKSHOPS, upcomingWorkshops, nextWorkshop, latestWorkshop, workshopByAlias,
  PROJECT_MEETINGS, upcomingProjectMeetings, nextProjectMeeting, latestProjectMeeting, projectMeetingByAlias
};
export { latestMeeting, nextMeeting, redirectionDataMapping };

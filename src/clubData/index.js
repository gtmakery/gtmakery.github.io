import WORKSHOPS, { upcomingWorkshops, nextWorkshop, latestWorkshop, byAlias as workshopByAlias } from './workshops';
import PROJECT_MEETINGS, { upcomingProjectMeetings, nextProjectMeeting, latestProjectMeeting, byAlias as projectMeetingByAlias } from './projectMeetings';


const latestMeeting = latestWorkshop.fullDate.getTime() >= latestProjectMeeting.fullDate.getTime() ? latestWorkshop : latestProjectMeeting;
latestMeeting.type = latestWorkshop.fullDate.getTime() >= latestProjectMeeting.fullDate.getTime() ? "WORKSHOP" : "PROJECT_MEETING";

const nextMeeting = nextWorkshop.fullDate.getTime() <= nextProjectMeeting.fullDate.getTime() ? nextWorkshop : nextProjectMeeting;
nextMeeting.type = nextWorkshop.fullDate.getTime() <= nextProjectMeeting.fullDate.getTime() ? "WORKSHOP" : "PROJECT_MEETING";


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

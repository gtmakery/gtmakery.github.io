import WORKSHOPS, { latestWorkshop, byAlias as workshopByAlias } from './workshops';
import PROJECT_MEETINGS, { latestProjectMeeting, byAlias as projectMeetingByAlias } from './projectMeetings';


const latestMeeting = latestWorkshop.fullDate.getTime() >= latestProjectMeeting.fullDate.getTime() ? latestWorkshop : latestProjectMeeting;
latestMeeting.type = latestWorkshop.fullDate.getTime() >= latestProjectMeeting.fullDate.getTime() ? "WORKSHOP" : "PROJECT_MEETING";

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
  }
};

export {
  WORKSHOPS, latestWorkshop, workshopByAlias,
  PROJECT_MEETINGS, latestProjectMeeting, projectMeetingByAlias
};
export { latestMeeting, redirectionDataMapping };

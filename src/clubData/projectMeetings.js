/**
 semester: "reverse mapping"
 dateString: "reverse mapping"
 date: "m/dd",
 fullDate: new Date(year, mm-1, dd),    //month is 0 indexed
 slides: "box link",
 video: "youtube link",
 files: "box folder link"
 redirects: ["key names that are URLS (slides, videos, files)"]
 offLimits: ["key names that should be revealed after the meeting"]
 mainProjectFocus: "variableName of project being mainly discussed" (limeKart, etc)
 minutes: ["list of bulletted notes"]
 */
const PROJECT_MEETINGS = {
  spring21: {
    longName: "Spring 2021",
    projectMeetings: {
      feb11: {
        semester: "spring21",
        dateString: "feb11",
        date: "2/11",
        fullDate: new Date(2021, 1, 11),
        slides: "gatech.box.com/v/gtmakery2-11",
        video: "",
        files: "",
        redirects: ["slides", "video", "files"],
        offLimits: ["slides"],
        mainProjectFocus: "",
        preMeetingBlurb: {
          text: "Hey everyone! We'd love for you to come up with some project ideas that we can discuss at the meeting.",
          bullets: [
            {
              text: "Some inspiration:",
              bullets: [
                "Build-your-own CNC mill/3-D Printer",
                "Swarm robots (a bunch of small robots with one common goal)",
                "Mini-Mars Rover (small car)",
                "Smart watch"
              ]
            },
            {
              text: "Considerations:",
              bullets: [
                "Cool factor",
                "Can it be a team effort (or is it more  of a solo project)?",
                {
                  text: "How interested are YOU and how interested are your teammates?",
                  bullets: ["Tell us why you love your idea"]
                }
              ]
            }
          ]
        },
        minutes: [
          "None yet!"
        ],
      }
    }
  }
};

const latestProjectMeeting = Object.values(Object.values(PROJECT_MEETINGS)[0].projectMeetings).slice(-1)[0];

const byAlias = (alias) => {
  return Object.values(PROJECT_MEETINGS).map(semester => semester.projectMeetings).reduce((allProjectMeetings, projectMeetingSetObject) => allProjectMeetings.concat(Object.values(projectMeetingSetObject)), []).find(projectMeeting =>
    alias === projectMeeting.semester + projectMeeting.dateString
        || alias === projectMeeting.dateString
        || alias === projectMeeting.date
        || (projectMeeting.aliases && projectMeeting.aliases.find(projectMeetingAlias => projectMeetingAlias.toLowerCase() === alias.toLowerCase()))
  );
}

export default PROJECT_MEETINGS;
export { latestProjectMeeting, byAlias };

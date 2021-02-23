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
        notes: "gatech.box.com/v/projectnotes2-11",
        redirects: ["slides", "notes"],
        offLimits: ["slides"],
        mainProjectFocus: "robotArm",
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
          {
            text: "Potential project ideas:",
            bullets: [
              {
                text: "Paper airplane/Origami making machine"
              },
              {
                text: "Robot arm from Ironman"
              },
              {
                text: "Lime Karts"
              },
              {
                text: "Swarm Robots"
              },
              {
                text: "DIY CNC Mill"
              },
              {
                text: "Mini-Mars Rover"
              }
            ]
          },
          "Final choice: Robot Arm"
        ],
      },
      feb19: {
        semester: "spring21",
        dateString: "feb19",
        date: "2/19",
        fullDate: new Date(2021, 1, 19),
        notes: "gatech.box.com/v/projectnotes2-19",
        redirects: ["notes"],
        mainProjectFocus: "robotArm",
        minutes: [
          "Development platform: ROS 2",
          {
            text: "Gesture Recognition",
            bullets: [
              {
                text: "Camera: Realsense Depth Camera D415"
              },
              {
                text: "Gestures",
                bullets: [
                  "Swiping up/down/left/right",
                  "Push forward/backward",
                  "Grabbing",
                  "High five"
                ]
              }
            ]
          },
        ],
      },
      feb25: {
        semester: "spring21",
        dateString: "feb25",
        date: "2/25",
        fullDate: new Date(2021, 1, 25),
        notes: "gatech.box.com/v/projectnotes2-25",
        redirects: ["notes"],
        offLimits: ["notes"],
        mainProjectFocus: "robotArm",
        preMeetingBlurb: {
          text: "We'll be working on the mechanics/building of the Robot Arm",
          bullets: [
            "Research ROS2 if you'd like"
          ]
        },
        minutes: [

        ],
      }
    }
  }
};

const allProjectMeetings = Object.values(PROJECT_MEETINGS).map(semester => Object.values(semester.projectMeetings)).flat().sort((meeting1,meeting2) => meeting1.fullDate.getTime()-meeting2.fullDate.getTime());

const upcomingProjectMeetings = allProjectMeetings.filter(meeting => {
  const dayAfter = new Date(meeting.fullDate);
  dayAfter.setDate(dayAfter.getDate());
  dayAfter.setHours(12,0,0,0);
  return Date.now() <= dayAfter.getTime();
});

const nextProjectMeeting = upcomingProjectMeetings[0];
const latestProjectMeeting = upcomingProjectMeetings.slice(-1)[0];

const byAlias = (alias) => {
  return allProjectMeetings.find(projectMeeting =>
    alias === projectMeeting.semester + projectMeeting.dateString
        || alias === projectMeeting.dateString
        || alias === projectMeeting.date
        || (projectMeeting.aliases && projectMeeting.aliases.find(projectMeetingAlias => projectMeetingAlias.toLowerCase() === alias.toLowerCase()))
  );
}

export default PROJECT_MEETINGS;
export { upcomingProjectMeetings, nextProjectMeeting, latestProjectMeeting, byAlias };

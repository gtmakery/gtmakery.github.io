/**
 semester: "reverse mapping"
 dateString: "reverse mapping"
 date: "m/dd",
 fullDate: new Date(year, mm-1, dd),    //month is 0 indexed
 title: "",
 desciption: "",
 links: ["keys in REDIRECT"],
 concepts: ["tags"],
 slides: "box link",
 video: "youtube link",
 code: "github link"
 files: "box folder link"
 redirects: ["key names that are URLS (slides, videos, code)"]
 flyer: "png name in assets/images/flyers/"
 */
const WORKSHOPS = {
  spring21: {
    longName: "Spring 2021",
    workshops: {
      jan26: {
        semester: "spring21",
        dateString: "jan26",
        date: "1/26",
        fullDate: new Date(2021, 0, 26),
        title: "LED Face Mask",
        description: "Learn how to create your very own voice-controlled LED face mask!",
        concepts: ["Arduino", "Arduino Nano", "Arduino microphone", "LEDs", "NeoPixel", "NeoPixel Matrix", "Wearable Tech"],
        slides: "gatech.box.com/v/gtmakery1-26",
        video: "youtu.be/TJ0sRLvHopQ",
        code: "github.com/gtmakery/Workshops/tree/master/2021-Spring/1-LED_Face_Mask",
        redirects: ["slides", "video", "code"],
        flyer: "jan26"
      },
      feb2: {
        semester: "spring21",
        dateString: "feb2",
        date: "2/2",
        fullDate: new Date(2021, 1, 2),
        title: "Valentine's Day",
        description: "Learn how to laser cut a custom design and make it glow with LEDs!",
        software: ["inkscape"],
        concepts: ["Arduino", "LEDs", "Laser Cutting", "Inkscape", "Gifts"],
        slides: "gatech.box.com/v/gtmakery2-02",
        video: "youtu.be/NDmTO2ucPHc",
        code: "github.com/gtmakery/Workshops/tree/master/2021-Spring/2-Valentines_Acrylic_LED_Display",
        files: "gatech.box.com/v/gtmakery2-2files",
        redirects: ["slides", "video", "code", "files"],
        flyer: "feb2",
        hasRental: true
      },
      feb16: {
        semester: "spring21",
        dateString: "feb16",
        date: "2/16",
        fullDate: new Date(2021, 1, 16),
        title: "Moth Bot",
        description: "Build a car that follows the light!",
        software: ["arduino", "tinkercad"],
        concepts: ["Arduino", "Motors", "L293D (H-Bridge)", "Photoresistors", "Kit car"],
        slides: "gatech.box.com/v/gtmakery2-16",
        video: "youtu.be/tHsXpMAmVu0",
        code: "github.com/gtmakery/Workshops/tree/master/2021-Spring/3-Moth_Bot",
        redirects: ["slides", "video", "code"],
        flyer: "feb16",
        hasRental: true
      },
      mar2: {
        semester: "spring21",
        dateString: "mar2",
        date: "3/2",
        fullDate: new Date(2021, 2, 2),
        title: "Pi Day",
        description: "Control an LED matrix with a Raspberry Pi!",
        software: ["etcher", "putty", "ngrok"],
        concepts: ["Raspberry Pi", "SSH", "Python3", "LEDs", "NeoPixel", "NeoPixel Matrix",],
        slides: "gatech.box.com/v/gtmakery3-02",
        video: "",
        code: "github.com/gtmakery/Workshops/tree/master/2021-Spring/4-Pi_Day",
        redirects: ["slides", "video", "code"],
        flyer: "mar2",
      }
    }
  }
};

const allWorkshops = Object.values(WORKSHOPS).map(semester => Object.values(semester.workshops)).flat().sort((meeting1,meeting2) => meeting1.fullDate.getTime()-meeting2.fullDate.getTime());
allWorkshops.forEach(workshop => workshop.type = "WORKSHOP");

const upcomingWorkshops = allWorkshops.filter(meeting => {
  const dayAfter = new Date(meeting.fullDate);
  dayAfter.setDate(dayAfter.getDate());
  dayAfter.setHours(12,0,0,0);
  return Date.now() <= dayAfter.getTime();
});

const nextWorkshop = upcomingWorkshops[0];
const latestWorkshop = upcomingWorkshops.slice(-1)[0] || allWorkshops.slice(-1)[0];

// !nextWorkshop && (nextWorkshop = );
// !latestWorkshop && (latestWorkshop = allWorkshops.slice(-1)[0]);

const byAlias = (alias) => {
  return allWorkshops.find(workshop =>
    alias === workshop.semester + workshop.dateString
        || alias === workshop.dateString
        || alias === workshop.date
        || alias.toLowerCase() === workshop.title.toLowerCase()
        || alias.toLowerCase() === workshop.title.replace(/ /g,"-").toLowerCase()
        || alias.toLowerCase() === workshop.title.replace(/ /g,"").toLowerCase()
        || (workshop.aliases && workshop.aliases.find(workshopAlias => workshopAlias.toLowerCase() === alias.toLowerCase()))
  );
};

export default WORKSHOPS;
export { allWorkshops, upcomingWorkshops, nextWorkshop, latestWorkshop, byAlias };

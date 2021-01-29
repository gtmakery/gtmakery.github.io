/**
 semester: "reverse mapping"
 dateString: "reverse mapping"
 date: "m/dd",
 title: ""
 desciption: "",
 links: ["keys in REDIRECT"],
 concepts: ["tags"],
 slides: "box link",
 video: "youtube link",
 code: "github link"
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
        title: "Valentine's Day",
        description: "Learn how to laser cut a custom design and make it glow with LEDs!",
        software: ["inkscape"],
        concepts: ["Arduino", "LEDs", "Laser Cutting", "Inkscape", "Gifts"],
        slides: "gatech.box.com/v/gtmakery2-2",
        video: "",
        flyer: "feb2"
      }
    }
  }
};

const byAlias = (alias) => {
  return Object.values(WORKSHOPS).map(semester => semester.workshops).reduce((allWorkshops, workshopSetObject) => allWorkshops.concat(Object.values(workshopSetObject)), []).find(workshop =>
    alias === workshop.semester + workshop.dateString
        || alias === workshop.dateString
        || alias === workshop.date
        || alias === workshop.title
        || alias.toLowerCase() === workshop.title.replace(/ /g,"-").toLowerCase()
        || (workshop.aliases && workshop.aliases.find(workshopAlias => workshopAlias.toLowerCase() === alias.toLowerCase()))
  );
}

export default WORKSHOPS;
export { byAlias };

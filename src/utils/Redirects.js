const REDIRECTS = {
  bluejeans: {
    aliases: ["meeting", "bluejean"],
    longName: "Bluejeans",
    path: "bluejeans.com/172056840",
    showNav: true,
    icon: ["fas","video"],
    color: "text-blue-300"
  },
  rentals: {
    aliases: ["rental"],
    longName: "Rentals",
    path: "gatech.co1.qualtrics.com/jfe/form/SV_6xo6Al2j4TEWru6",
    showNav: true,
    icon: ["fas","toolbox"],
    color: "text-yellow-400"
  },
  youtube: {
    aliases: ["videos"],
    longName: "YouTube",
    path: "youtube.com/channel/UCzlfxJFgJsj0D2HhD94Mxsw/videos",
    social: true,
    media: true,
    showNav: true,
    icon: ["fab","youtube"],
    color: "text-red-500"
  },
  mailing: {
    aliases: ["mailing-list", "interest"],
    longName: "Mailing List",
    path: "tinyurl.com/gtmakerysurvey2021",
    social: true,
    icon: ["far","envelope"],
    color: "text-black"
  },
  discord: {
    longName: "Discord",
    path: "discord.gg/mccRCsu",
    social: true,
    chat: true,
    icon: ["fab","discord"],
    color: "text-blue-400"
  },
  slack: {
    longName: "Slack",
    path: "the-makery.slack.com/signup",
    social: true,
    chat: true,
    icon: ["fab","slack"],
    color: "text-purple-600"
  },
  instagram: {
    aliases: ["insta"],
    longName: "Instagram",
    path: "instagram.com/gtmakery",
    social: true,
    media: true,
    showNav: true,
    icon: ["fab","instagram"],
    color: "text-pink-500"
  },
  facebook: {
    aliases: ["fb"],
    longName: "Facebook",
    path: "facebook.com/groups/2927249277306104/about",
    social: true,
    media: true,
    showNav: true,
    icon: ["fab","facebook"],
    color: "text-blue-500"
  },
  inkscape: {
    longName: "Inkscape",
    path: "inkscape.org/release/inkscape-1.0.2",
    software: true
  },
  tinkercad: {
    aliases: ["tinker", "tinker-cad"],
    longName: "TinkerCAD",
    path: "tinkercad.com",
    software: true
  },
  fusion360: {
    aliases: ["fusion"],
    longName: "Fusion 360",
    path: "autodesk.com/education/edu-software/overview#",
    software: true
  },
  arduino: {
    aliases: ["arduino-ide"],
    longName: "Arduino IDE",
    path: "arduino.cc/en/software#",
    software: true
  },
  putty: {
    longName: "PuTTY",
    path: "putty.org",
    software: true
  },
  etcher: {
    aliases: ["balena-etcher"],
    longName: "Balena Etcher",
    path: "etcher.io",
    software: true
  }
};

const filtered = (flagName, from=REDIRECTS) => {
  return Object.fromEntries(Object.entries(REDIRECTS).filter(([,{[flagName]: flag}]) => flag));
}

export default REDIRECTS;
export { REDIRECTS, filtered };

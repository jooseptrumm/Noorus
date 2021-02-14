/* jshint esversion: 8 */

const routeInfo = {
  appName: {
    est: "Segakoor Noorus ",
    en: "Mixed Choir Noorus"
  },
  pageTitles: {
    home: {
      est: "Avaleht",
      en: "Home"
    },
    about: {
      est: "Koorist",
      en: "About us"
    },
    events: {
      est: "Sündmused",
      en: "Events"
    },
    contact: {
      est: "Kontakt",
      en: "Contact"
    },
    shop: {
      est: "Pood",
      en: "Shop"
    },
    order: {
      est: "Telli",
      en: "Order"
    }
  },
  buttonText: {
    est: "Loe edasi",
    en: "Read more"
  },
  navigation: {
    linkTexts: {
      est: ["Koorist", "Sündmused", "Kontakt", "Pood"],
      en: ["About us", "Events", "Contact", "Shop"]
    },
    ariaLabels: {
      est: ["Ava lisavalikud", "Näita valikuid", "Avalehele", "Facebooki link", "Instagrami link", "In English"],
      en: ["Open submenu", "Show menu", "To the home page", "Facebook link", "Instagram link", "Eesti keeles"]
    },
    hrefs: {
      links: {
        est: ["koorist", "sundmused", "kontakt", "pood"],
        en: ["/en/about", "en/events", "en/contact", "en/shop"]
      },
      dropdown: {
        est: ["koorist#liikmed", "koorist#dirigendid", "koorist#ajalugu", "koorist#meedia", "koorist#toetajad"],
        en: ["about#members", "about#conductors", "about#history", "about#media", "about#sponsors"]
      },
      changeLanguage: {
        est: "/en",
        en: "est"
      }
    }
  },
  miscellaneous: {
    home: {
      est: ["Segakoor Nooruse Logo", "sundmused#moodunud"],
      en: ["Logo of Mixed Choir Noorus", "events#past"]
    }
  }
};

module.exports = routeInfo;

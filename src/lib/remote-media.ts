export type RemoteMediaAsset = {
  src: string;
  alt: string;
  photographer: string;
  source: string;
};

function unsplash(id: string, photo: string, photographer: string, alt: string): RemoteMediaAsset {
  return {
    src: `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=2200&q=82`,
    alt,
    photographer,
    source: `https://unsplash.com/photos/${id}`,
  };
}

export const remoteMedia = {
  services: {
    aviation: {
      hero: unsplash(
        "tCp2K2sYpFg",
        "photo-1524592714635-d77511a4834d",
        "Ivan Shimko",
        "Commercial airliner taxiing on a runway",
      ),
      capabilities: [
        unsplash(
          "REZp_5-2wzA",
          "photo-1518566107615-f7267099eced",
          "Leonel Fernandez",
          "Detailed aircraft cockpit instruments",
        ),
        unsplash(
          "-ajZ_Xzeqe4",
          "photo-1503379230423-19c53f7e9a33",
          "Andrew Ruiz",
          "Aircraft propeller and engine during inspection",
        ),
        unsplash(
          "7OgQ-Ze7BXQ",
          "photo-1485310818226-f01c4269687f",
          "Pandu Agus Wismoyo",
          "Aircraft maintenance specialist working beneath a structure",
        ),
      ],
      gallery: [
        unsplash(
          "qY8au30b7wI",
          "photo-1594973841081-ec0c9c7e3064",
          "Ifik Ismoedjati",
          "Ground crew walking beside a commercial aircraft",
        ),
        unsplash(
          "2w34Ep0-BcY",
          "photo-1632099060431-85c610c202df",
          "Isaac Struna",
          "Commercial aircraft positioned on an airport apron",
        ),
        unsplash(
          "ERed5HLKSYA",
          "photo-1737059217479-1f3ee86b5708",
          "Yu Yu",
          "Modern jet engine on an airport apron",
        ),
        unsplash(
          "XKqwypJ9KvQ",
          "photo-1716713954917-5501e188ad89",
          "Bernd Dittrich",
          "Passenger aircraft standing on an airport apron",
        ),
        unsplash(
          "uDa9QHn7SrA",
          "photo-1585347890782-6e1ddd365053",
          "Yaroslav Muzychenko",
          "Aircraft positioned inside a manufacturing facility",
        ),
        unsplash(
          "HjuC8iFy7O8",
          "photo-1674897537555-dd6fbf72b4eb",
          "Mos Design",
          "Modern jetliner inside an aircraft hangar",
        ),
      ],
    },
    drones: {
      hero: unsplash(
        "XYrjl3j7smo",
        "photo-1473968512647-3e447244af8f",
        "Jason Mavrommatis",
        "Professional drone in flight against a clear sky",
      ),
      capabilities: [
        unsplash(
          "CeHGoFLzvNU",
          "photo-1482169704817-5b66aafa1a01",
          "Quilia",
          "Field operator piloting a drone outdoors",
        ),
        unsplash(
          "0fA3gVTGwjQ",
          "photo-1473186639016-1451879a06f0",
          "Aaron Burden",
          "Drone flying above a remote body of water",
        ),
        unsplash(
          "L9wrEGJjRdo",
          "photo-1527977966376-1c8408f9f108",
          "Jonathan Lampel",
          "Close view of a professional quadcopter system",
        ),
      ],
      gallery: [
        unsplash(
          "QuAVl93Wswo",
          "photo-1664431398786-aaffcf1c0cee",
          "Frederick Shaw",
          "Operator carrying a drone before a field mission",
        ),
        unsplash(
          "NsrkkaxBIQA",
          "photo-1614358108424-04d03647e343",
          "Gustaf von Zeipel",
          "White survey drone prepared for deployment",
        ),
        unsplash(
          "Qk5FTvxUlcs",
          "photo-1613080218929-5e2e2f9f1e9c",
          "Red Charlie",
          "Drone operating above a field team",
        ),
        unsplash(
          "6nRjHtBDk4o",
          "photo-1487219116710-23ffcb172b2b",
          "Kaleb Kendall",
          "Drone operating above a rugged landscape",
        ),
        unsplash(
          "3ciHxbx9H0U",
          "photo-1514043454212-14c181f46583",
          "Diana Macesanu",
          "Compact autonomous drone prepared for a mission",
        ),
        unsplash(
          "d8dnBSJWdk4",
          "photo-1495811853829-7f743aca3770",
          "Ricardo Gomez Angel",
          "Quadcopter flying during an aerial inspection",
        ),
      ],
    },
    consulting: {
      hero: unsplash(
        "gMsnXqILjp4",
        "photo-1542744173-8e7e53415bb0",
        "Campaign Creators",
        "Strategy workshop with a presenter and corporate team",
      ),
      capabilities: [
        unsplash(
          "KdeqA3aTnBY",
          "photo-1517048676732-d65bc937f952",
          "Dylan Gillis",
          "Business leaders collaborating around a meeting table",
        ),
        unsplash(
          "5QgIuuBxKwM",
          "photo-1517245386807-bb43f82c33c4",
          "Headway",
          "Consulting team reviewing a plan on a laptop",
        ),
        unsplash(
          "JaoVGh5aJ3E",
          "photo-1551836022-d5d88e9218df",
          "Amy Hirschi",
          "Two professionals discussing a transformation program",
        ),
      ],
      gallery: [
        unsplash(
          "2pPw5Glro5I",
          "photo-1624555130581-1d9cca783bc0",
          "Memento Media",
          "Cross-functional team working around a conference table",
        ),
        unsplash(
          "qCi_MzVODoU",
          "photo-1542744095-fcf48d80b0fd",
          "Campaign Creators",
          "Program team reviewing documents and digital information",
        ),
        unsplash(
          "omGSZqBXkqY",
          "photo-1714974528737-3e6c7e4d11af",
          "Vitaly Gariev",
          "Corporate workshop with specialists gathered at a table",
        ),
        unsplash(
          "N0bthfvycY4",
          "photo-1596496356933-9b6e0b186b88",
          "Jeswin Thomas",
          "Professionals reviewing operational data on a laptop",
        ),
        unsplash(
          "c5pRBXFhJgo",
          "photo-1573496774426-fe3db3dd1731",
          "Christina Wocintechchat",
          "Corporate specialists gathered for a program review",
        ),
        unsplash(
          "F7v66RfronU",
          "photo-1580982333389-cca46f167381",
          "ThisisEngineering",
          "Technical program leader working beside an engineering table",
        ),
      ],
    },
    research: {
      hero: unsplash(
        "8yS04veb1TQ",
        "photo-1581093577421-f561a654a353",
        "ThisisEngineering",
        "Research engineer working with laboratory equipment",
      ),
      capabilities: [
        unsplash(
          "gKUC4TMhOiY",
          "photo-1518152006812-edab29b069ac",
          "Ousa Chea",
          "Scientist examining a sample through a microscope",
        ),
        unsplash(
          "9xHsWmh3m_4",
          "photo-1606206873764-fd15e242df52",
          "Testalize.me",
          "Robotic research arm in a controlled technology facility",
        ),
        unsplash(
          "XLhDvfz0sUM",
          "photo-1579165466991-467135ad3110",
          "CDC",
          "Researcher holding a sample tube in a laboratory",
        ),
      ],
      gallery: [
        unsplash(
          "_9xRHrMOjeg",
          "photo-1602052577122-f73b9710adba",
          "Trnava University",
          "Precision laboratory instruments arranged for testing",
        ),
        unsplash(
          "wDxFn_dBEC0",
          "photo-1582560475093-ba66accbc424",
          "CDC",
          "Laboratory specialist conducting a controlled experiment",
        ),
        unsplash(
          "tGYrlchfObE",
          "photo-1486825586573-7131f7991bdd",
          "Drew Hays",
          "Petri dish used for applied materials research",
        ),
        unsplash(
          "KxEBySpHZA4",
          "photo-1667986292516-f27450ae75a9",
          "Sven Mieke",
          "Advanced protective technology under development",
        ),
        unsplash(
          "l74VaCZon7I",
          "photo-1558137623-ce933996c730",
          "Marilia Castelli",
          "Tracked research robot undergoing field evaluation",
        ),
        unsplash(
          "GpNOhig3LSU",
          "photo-1553678324-f84674bd7b24",
          "David Leveque",
          "Engineering tools arranged for prototype development",
        ),
      ],
    },
    mining: {
      hero: unsplash(
        "Mk2ls9UBO2E",
        "photo-1523848309072-c199db53f137",
        "Dominik Vanyi",
        "Large excavators operating across a resource site",
      ),
      capabilities: [
        unsplash(
          "4Gf51uY0YQE",
          "photo-1628487749130-2d41acb1802a",
          "Matthew de Livera",
          "Aerial view of a large open-pit resource operation",
        ),
        unsplash(
          "YG0qc-e6hgg",
          "photo-1709489662983-3674d790b224",
          "MiningWatch Portugal",
          "Industrial haul truck traveling along a remote mine road",
        ),
        unsplash(
          "Mx6Xmf_nbRk",
          "photo-1582280871722-424e91cbee8b",
          "Vladimir Patkachakov",
          "Heavy mining truck operating on a resource site",
        ),
      ],
      gallery: [
        unsplash(
          "oF7hh97lVqA",
          "photo-1571223641822-b82408a0e705",
          "Dion Beetson",
          "Aerial view of a quarry and water management area",
        ),
        unsplash(
          "7QAbQrQ2Iog",
          "photo-1711012604128-8339024a3e12",
          "Mukovhe Mavhungu",
          "Mine vehicles moving across an active resource site",
        ),
        unsplash(
          "Sy_8KuxLwBI",
          "photo-1600363503477-a8d1d6d57dfc",
          "Albert Hyseni",
          "Aircraft surveying a broad mining landscape",
        ),
        unsplash(
          "qq8eWIreIgg",
          "photo-1578804376914-6d367cd21488",
          "Albert Hyseni",
          "Large mining machine operating across an open site",
        ),
        unsplash(
          "iQAF4A0To1g",
          "photo-1599756719094-9e28479389c4",
          "Albert Hyseni",
          "Heavy resource equipment working on exposed terrain",
        ),
        unsplash(
          "7Nn346qEzkg",
          "photo-1653202293335-92f6ace9943f",
          "Omid Roshan",
          "Fleet of industrial haul trucks at a resource operation",
        ),
      ],
    },
  },
  products: {
    aeroline: {
      cover: unsplash(
        "r1sVib5QYU4",
        "photo-1565876464729-e5184585870a",
        "Unleashed Agency",
        "Commercial aircraft climbing through a clear sky",
      ),
      gallery: [
        unsplash(
          "XKqwypJ9KvQ",
          "photo-1716713954917-5501e188ad89",
          "Bernd Dittrich",
          "Passenger aircraft standing on an airport apron",
        ),
        unsplash(
          "uDa9QHn7SrA",
          "photo-1585347890782-6e1ddd365053",
          "Yaroslav Muzychenko",
          "Aircraft positioned inside a manufacturing facility",
        ),
        unsplash(
          "HjuC8iFy7O8",
          "photo-1674897537555-dd6fbf72b4eb",
          "Mos Design",
          "Modern jetliner inside an aircraft hangar",
        ),
      ],
    },
    skygrid: {
      cover: unsplash(
        "72AYEEBJpz4",
        "photo-1506947411487-a56738267384",
        "David Henrichs",
        "Professional inspection drone hovering in flight",
      ),
      gallery: [
        unsplash(
          "6nRjHtBDk4o",
          "photo-1487219116710-23ffcb172b2b",
          "Kaleb Kendall",
          "Drone operating above a rugged landscape",
        ),
        unsplash(
          "3ciHxbx9H0U",
          "photo-1514043454212-14c181f46583",
          "Diana Macesanu",
          "Compact autonomous drone prepared for a mission",
        ),
        unsplash(
          "d8dnBSJWdk4",
          "photo-1495811853829-7f743aca3770",
          "Ricardo Gomez Angel",
          "Quadcopter flying during an aerial inspection",
        ),
      ],
    },
    fleetOps: {
      cover: unsplash(
        "aWf7mjwwJJo",
        "photo-1578574577315-3fbeb0cecdc2",
        "Mediensturmer",
        "Advisors discussing an operational transformation plan",
      ),
      gallery: [
        unsplash(
          "N0bthfvycY4",
          "photo-1596496356933-9b6e0b186b88",
          "Jeswin Thomas",
          "Professionals reviewing operational data on a laptop",
        ),
        unsplash(
          "c5pRBXFhJgo",
          "photo-1573496774426-fe3db3dd1731",
          "Christina Wocintechchat",
          "Corporate specialists gathered for a program review",
        ),
        unsplash(
          "F7v66RfronU",
          "photo-1580982333389-cca46f167381",
          "ThisisEngineering",
          "Technical program leader working beside an engineering table",
        ),
      ],
    },
    researchCampus: {
      cover: unsplash(
        "XknuBmnjbKg",
        "photo-1581594549595-35f6edc7b762",
        "National Cancer Institute",
        "Precision research equipment and laboratory sample",
      ),
      gallery: [
        unsplash(
          "KxEBySpHZA4",
          "photo-1667986292516-f27450ae75a9",
          "Sven Mieke",
          "Advanced protective technology under development",
        ),
        unsplash(
          "l74VaCZon7I",
          "photo-1558137623-ce933996c730",
          "Marilia Castelli",
          "Tracked research robot undergoing field evaluation",
        ),
        unsplash(
          "GpNOhig3LSU",
          "photo-1553678324-f84674bd7b24",
          "David Leveque",
          "Engineering tools arranged for prototype development",
        ),
      ],
    },
    terrasight: {
      cover: unsplash(
        "33JLhfRuqbk",
        "photo-1483638867541-6d87ce7f2d4d",
        "Curioso Photography",
        "Bird's-eye view of a working mining area",
      ),
      gallery: [
        unsplash(
          "qq8eWIreIgg",
          "photo-1578804376914-6d367cd21488",
          "Albert Hyseni",
          "Large mining machine operating across an open site",
        ),
        unsplash(
          "iQAF4A0To1g",
          "photo-1599756719094-9e28479389c4",
          "Albert Hyseni",
          "Heavy resource equipment working on exposed terrain",
        ),
        unsplash(
          "7Nn346qEzkg",
          "photo-1653202293335-92f6ace9943f",
          "Omid Roshan",
          "Fleet of industrial haul trucks at a resource operation",
        ),
      ],
    },
    aeroDigital: {
      cover: unsplash(
        "HsqBGASgXJA",
        "photo-1708738793054-32b71e3fc822",
        "Kevin Stadnyk",
        "Communications satellite operating above Earth",
      ),
      gallery: [
        unsplash(
          "Wj1D-qiOseE",
          "photo-1526666923127-b2970f64b422",
          "Donald Giannatti",
          "Satellite communications antenna beneath a clear sky",
        ),
        unsplash(
          "3cIPFNW3wog",
          "photo-1572224104782-91a08d296390",
          "Alec Favale",
          "Ground station dish supporting connected operations",
        ),
        unsplash(
          "4qk3nQI3WHY",
          "photo-1528499908559-b8e4e8b89bda",
          "Donald Giannatti",
          "Large radio telescope used for data communications",
        ),
      ],
    },
  },
  careers: {
    hero: unsplash(
      "rMILC1PIwM0",
      "photo-1603201667141-5a2d4c673378",
      "Cherrydeck",
      "Diverse technical team collaborating in a modern workplace",
    ),
    disciplines: [
      unsplash(
        "bIltCMXIwRE",
        "photo-1581091226033-d5c48150dbaa",
        "ThisisEngineering",
        "Two engineers reviewing technical work together",
      ),
      unsplash(
        "FXgbqr-t7uw",
        "photo-1581091212911-f4efc3f71c48",
        "ThisisEngineering",
        "Engineering operations team collaborating around equipment",
      ),
      unsplash(
        "0gYq67rIK8s",
        "photo-1581091226205-b28ac533a45f",
        "ThisisEngineering",
        "Research engineer working at a digital workstation",
      ),
      unsplash(
        "lr5RHwBmrbs",
        "photo-1581093805071-a04e696db334",
        "ThisisEngineering",
        "Technical business specialist working in an engineering facility",
      ),
    ],
  },
  innovation: {
    hero: unsplash(
      "kE0JmtbvXxM",
      "photo-1655393001768-d946c97d6fd1",
      "Zhenyu Luo",
      "Advanced robotic arm in a technology showroom",
    ),
    domains: [
      unsplash(
        "jIBMSMs4_kA",
        "photo-1531746790731-6c087fecd65a",
        "Franck V",
        "Robotic arm demonstrating autonomous movement",
      ),
      unsplash(
        "3pBHB-bmGno",
        "photo-1531317994335-9222558fa07a",
        "Ricardo Gomez Angel",
        "Close view of a carbon-fiber composite structure",
      ),
      unsplash(
        "aA_l42E8To0",
        "photo-1766019463451-04e0b1269f37",
        "Angie Baongoc",
        "Operations team working across a bank of digital displays",
      ),
      unsplash(
        "pONBhDyOFoM",
        "photo-1548337138-e87d889cc369",
        "Nicholas Doherty",
        "Wind turbine representing efficient energy engineering",
      ),
    ],
  },
  sustainability: {
    hero: unsplash(
      "baXCV2qg9Ew",
      "photo-1675116731363-c17d957f3444",
      "Zac Wolff",
      "Wind turbines generating power across green fields",
    ),
    commitments: [
      unsplash(
        "dqXiw7nCb9Q",
        "photo-1451976426598-a7593bd6d0b2",
        "Danist Soh",
        "Green architecture integrated with mature planting",
      ),
      unsplash(
        "0w-uTa0Xz7w",
        "photo-1466611653911-95081537e5b7",
        "Karsten Wurth",
        "Wind turbine operating in warm evening light",
      ),
      unsplash(
        "rK-MCUCezNk",
        "photo-1719825523711-eda3221c111c",
        "Bhautik Patel",
        "Hands holding a globe representing accountable governance",
      ),
    ],
  },
} as const;

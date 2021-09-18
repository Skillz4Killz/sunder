export default [
  {
    name: "Sincerity",
    description: "A battle rifle that fires a fast burst of three shots, each dealing moderate damage at medium range.",
    quote: `An all-around workhorse that radiates with primal power.`,
    type: "Primary",
    title: "Battle Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+20%" },
          { name: "Move Speed", value: "+5%" },
          { name: "Damage", value: "195" },
          { name: "Max Charges", value: "6" },
          { name: "Range", value: "10.6" },
          { name: "Volley Count", value: "3" },
          { name: "Primal Energy On Hit", value: "0.3s" },
          { name: "Reload Time", value: "1.8s" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
    ],
    banner: "Support",
  },
  {
    name: "Boarson",
    description: "A shotgun with a slow rate of fire that shoots at close range in a moderate arc in front of you.",
    quote: `If hell doesn't exist, this will create it for you.`,
    type: "Primary",
    title: "Shotgun",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+40%" },
          { name: "Move Speed", value: "+7.5%" },
          { name: "Damage", value: "110" },
          { name: "Max Charges", value: "8" },
          { name: "Range", value: "5.8" },
          { name: "Arc per Volley", value: "40" },
          { name: "Shot Count", value: "5" },
          { name: "Primal Energy On Hit", value: "0.35s" },
          { name: "Reload Time", value: "2s" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
    ],
    banner: "Protector",
  },
  {
    name: "Rush",
    description: "A rocket launcher that deals high damage to a small area at medium range.",
    quote: `Built by classicists with the intent to destroy primals.`,
    type: "Primary",
    title: "Rocket Launcher",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+15%" },
          { name: "Move Speed", value: "+0%" },
          { name: "Damage", value: "700" },
          { name: "Max Charges", value: "4" },
          { name: "Range", value: "9.8" },
          { name: "Detonate Radius", value: "2.2" },
          { name: "Primal Energy On Hit", value: "1.31s" },
          { name: "Reload Time", value: "1.8s" },
          { name: "Reactivation Delay", value: "0.5s" },
        ],
      },
    ],
    banner: "Primal Hunter",
  },
  {
    name: "Hailstrom!",
    description: "A mortar that lobs six explosive shots to single location, dealing high damage to a small area.",
    quote: `Could this thing be any more obnoxious?!`,
    type: "Heavy",
    title: "Heavy Mortar",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "700" },
          { name: "Max Charges", value: "2" },
          { name: "Range", value: "14.2" },
          { name: "Detonate Radius", value: "2.8" },
          { name: "Charge On Pickup", value: "68%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
    ],
    banner: "Protector",
  },
  {
    name: "Arrival",
    description: "A mortar that fires a single lobbed shot that explodes dealing very high damage to a large area.",
    quote: `Not a good first impression, but definitely a lasting one.`,
    type: "Heavy",
    title: "Heavy Mortar",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "1610" },
          { name: "Max Charges", value: "2" },
          { name: "Range", value: "15.5" },
          { name: "Detonate Radius", value: "4.8" },
          { name: "Charge On Pickup", value: "75%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Damage", value: "1642" },
          { name: "Max Charges", value: "2" },
          { name: "Range", value: "15.5" },
          { name: "Detonate Radius", value: "4.8" },
          { name: "Charge On Pickup", value: "75%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
    ],
    banner: "Primalist",
  },
  {
    name: "Primal Eye",
    description: "A sniper rifle with a slow rate of fire that shoots a single round for high damage at long range.",
    quote: `As if peering the fabric of the veil...`,
    type: "Primary",
    title: "Sniper Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+5%" },
          { name: "Move Speed", value: "+0%" },
          { name: "Damage", value: "575" },
          { name: "Max Charges", value: "6" },
          { name: "Range", value: "13" },
          { name: "Primal Energy On Hit", value: "1.17s" },
          { name: "Reload Time", value: "2.2s" },
          { name: "Reactivation Delay", value: "0.4s" },
          { name: "Damage at Close Range", value: "50%" },
        ],
      },
    ],
    banner: "Sniper",
  },
  {
    name: "Soft Thunder",
    description: "A mortar with a measured rate of fire that lobs a single round, dealing high damage to an area.",
    quote: `The rainstorms in the hills above Cardum have been known to resolve after a single clap of muted thunder.`,
    type: "Primary",
    title: "Mortar",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+12.5%" },
          { name: "Move Speed", value: "+5%" },
          { name: "Damage", value: "580" },
          { name: "Max Charges", value: "4" },
          { name: "Range", value: "10.6" },
          { name: "Detonate Radius", value: "3" },
          { name: "Primal Energy On Hit", value: "0.33s" },
          { name: "Reload Time", value: "1.6s" },
          { name: "Reactivation Delay", value: "0.8s" },
        ],
      },
    ],
    banner: "Primal Hunter",
  },
  {
    name: "Objection",
    description: "A sniper rifle that fires a single shot for massive damage at very long range.",
    quote: `"This is the one." - Oren Lin, the assassination of Eryc`,
    type: "Heavy",
    title: "Heavy Sniper Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "2000" },
          { name: "Max Charges", value: "3" },
          { name: "Range", value: "15" },
          { name: "Charge On Pickup", value: "72%" },
          { name: "Reactivation Delay", value: "1.2s" },
          { name: "Damage at Close Range", value: "50%" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Damage", value: "2040" },
          { name: "Max Charges", value: "3" },
          { name: "Range", value: "15" },
          { name: "Charge On Pickup", value: "72%" },
          { name: "Reactivation Delay", value: "1.2s" },
          { name: "Damage at Close Range", value: "50%" },
        ],
      },
    ],
    banner: "Sniper",
  },
  {
    name: "The Heretic",
    description: "A rocket launcher that deals very high damage to a moderate area at very long range.",
    quote: `"Right now, going against 'tradition' means blowing it up."`,
    type: "Heavy",
    title: "Heavy Rocket Launcher",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "1645" },
          { name: "Max Charges", value: "2" },
          { name: "Range", value: "12" },
          { name: "Detonate Radius", value: "3.8" },
          { name: "Charge On Pickup", value: "84%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Damage", value: "1678" },
          { name: "Max Charges", value: "2" },
          { name: "Range", value: "12" },
          { name: "Detonate Radius", value: "3.8" },
          { name: "Charge On Pickup", value: "84%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
    ],
    banner: "Seeker",
  },
  {
    name: "Splintered Fate",
    description:
      "A chaingun that deals moderate damage at medium range. Each subsequent shot increases attack speed while decreasing movement speed.",
    quote:
      `We will not give ground...even if Torden himself were to come wrest it from us! \n \n - Field Marshall Lander, the war for Eventide`,
    type: "Primary",
    title: "Minigun",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+40%" },
          { name: "Move Speed", value: "+2.5%" },
          { name: "Damage", value: "95" },
          { name: "Max Charges", value: "72" },
          { name: "Range", value: "10" },
          { name: "Primal Energy On Hit", value: "0.13s" },
          { name: "Reload Time", value: "2.6s" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "+40%" },
          { name: "Move Speed", value: "+2.5%" },
          { name: "Damage", value: "97" },
          { name: "Max Charges", value: "72" },
          { name: "Range", value: "10" },
          { name: "Primal Energy On Hit", value: "0.13s" },
          { name: "Reload Time", value: "2.6s" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
    ],
    banner: "Vanguard",
  },
  {
    name: "The Miser",
    description: "A flak cannon that deals high damage to a small area at medium range.",
    quote: `Protect what you treasure at the cost of your soul.`,
    type: "Heavy",
    title: "Heavy Flak",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "465" },
          { name: "Max Charges", value: "14" },
          { name: "Range", value: "7.8" },
          { name: "Detonate Radius", value: "2.5" },
          { name: "Charge On Pickup", value: "427%" },
          { name: "Reactivation Delay", value: "0.2s" },
        ],
      },
    ],
    banner: "Support",
  },
  {
    name: "Northern Warmth",
    description: "An assault rifle with a rapid rate of fire, moderate damage and medium range.",
    quote: `The stoic denizens of the north are renowned for their "hospitality"`,
    type: "Primary",
    title: "Assault Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+17.5%" },
          { name: "Move Speed", value: "+7.5%" },
          { name: "Damage", value: "215" },
          { name: "Max Charges", value: "20" },
          { name: "Range", value: "10.2" },
          { name: "Primal Energy On Hit", value: "0.31s" },
          { name: "Reload Time", value: "1.6s" },
          { name: "Reactivation Delay", value: "0.1s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "+17.5%" },
          { name: "Move Speed", value: "+7.5%" },
          { name: "Damage", value: "219" },
          { name: "Max Charges", value: "20" },
          { name: "Range", value: "10.2" },
          { name: "Primal Energy On Hit", value: "0.31s" },
          { name: "Reload Time", value: "1.6s" },
          { name: "Reactivation Delay", value: "0.1s" },
        ],
      },
    ],
    banner: "Seeker",
  },
  {
    name: "The Prodigal",
    description:
      "A sniper rifle with a slow rate of fire that shoots a single round for very high damage at long range.",
    quote: `For those that want everything up front--high likelihood of regret.`,
    type: "Primary",
    title: "Sniper Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+2.5%" },
          { name: "Move Speed", value: "+3.75%" },
          { name: "Damage", value: "920" },
          { name: "Max Charges", value: "3" },
          { name: "Range", value: "13.2" },
          { name: "Primal Energy On Hit", value: "1.84s" },
          { name: "Reload Time", value: "2s" },
          { name: "Reactivation Delay", value: "0.7s" },
          { name: "Damage at Close Range", value: "50%" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "+2.5%" },
          { name: "Move Speed", value: "+3.75%" },
          { name: "Damage", value: "938" },
          { name: "Max Charges", value: "3" },
          { name: "Range", value: "13.2" },
          { name: "Primal Energy On Hit", value: "1.84s" },
          { name: "Reload Time", value: "2s" },
          { name: "Reactivation Delay", value: "0.7s" },
          { name: "Damage at Close Range", value: "50%" },
        ],
      },
    ],
    banner: "Sniper",
  },
  {
    name: "Lost Dreamer",
    description: "An assault rifle with a rapid rate of fire, moderate damage and medium range.",
    quote: `A mask makes you question reality, but this will confirm the truth.`,
    type: "Primary",
    title: "Assault Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+32.5%" },
          { name: "Move Speed", value: "+6.25%" },
          { name: "Damage", value: "295" },
          { name: "Max Charges", value: "16" },
          { name: "Range", value: "10.6" },
          { name: "Primal Energy On Hit", value: "0.43s" },
          { name: "Reload Time", value: "1.4s" },
          { name: "Reactivation Delay", value: "0.2s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "+32.5%" },
          { name: "Move Speed", value: "+6.25%" },
          { name: "Damage", value: "300" },
          { name: "Max Charges", value: "16" },
          { name: "Range", value: "10.6" },
          { name: "Primal Energy On Hit", value: "0.43s" },
          { name: "Reload Time", value: "1.4s" },
          { name: "Reactivation Delay", value: "0.2s" },
      },
    ],
    banner: "Primalist",
  },
  {
    name: "Facade",
    description: "A flak cannon that deals moderate to a small area at medium range.",
    quote: `Fantastic for building a wall...of explosions.`,
    type: "Primary",
    title: "Flak",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+32.5%" },
          { name: "Move Speed", value: "+5%" },
          { name: "Damage", value: "400" },
          { name: "Max Charges", value: "10" },
          { name: "Range", value: "7.6" },
          { name: "Detonate Radius", value: "2.2" },
          { name: "Primal Energy On Hit", value: "1.22s" },
          { name: "Reload Time", value: "2.2s" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "+32.5%" },
          { name: "Move Speed", value: "+5%" },
          { name: "Damage", value: "408" },
          { name: "Max Charges", value: "10" },
          { name: "Range", value: "7.6" },
          { name: "Detonate Radius", value: "2.2" },
          { name: "Primal Energy On Hit", value: "1.22s" },
          { name: "Reload Time", value: "2.2s" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
    ],
    banner: "Support",
  },
  {
    name: "Dispatch",
    description: "A battle rifle that fires a fast burst of three shots, each dealing moderate damage at long range.",
    quote: `The favored weapon of guerilla fighters from the Yurtac Accord.`,
    type: "Heavy",
    title: "Heavy Battle Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "290" },
          { name: "Max Charges", value: "9" },
          { name: "Range", value: "11.6" },
          { name: "Volley Count", value: "3" },
          { name: "Charge On Pickup", value: "297%" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Damage", value: "295" },
          { name: "Max Charges", value: "9" },
          { name: "Range", value: "11.6" },
          { name: "Volley Count", value: "3" },
          { name: "Charge On Pickup", value: "297%" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
    ],
    banner: "Ranger",
  },
  {
    name: "Trial",
    description: "A rocket launcher that deals high damage to a small area at long range.",
    quote: `Carried by Hafthor Vang during the second excursion to the Welkin isles.`,
    type: "Primary",
    title: "Rocket Launcher",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+15%" },
          { name: "Move Speed", value: "+2.5%" },
          { name: "Damage", value: "395" },
          { name: "Max Charges", value: "8" },
          { name: "Range", value: "10.4" },
          { name: "Detonate Radius", value: "2.6" },
          { name: "Primal Energy On Hit", value: "1.01s" },
          { name: "Reload Time", value: "1.6s" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "+15%" },
          { name: "Move Speed", value: "+2.5%" },
          { name: "Damage", value: "402" },
          { name: "Max Charges", value: "8" },
          { name: "Range", value: "10.4" },
          { name: "Detonate Radius", value: "2.6" },
          { name: "Primal Energy On Hit", value: "1.01s" },
          { name: "Reload Time", value: "1.6s" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
    ],
    banner: "Primal Hunter",
  },
  {
    name: "Commotion",
    description: "A battle rifle that fires a fast burst of three shots, each dealing moderate damage at medium range.",
    quote: `"You'll all get shot...whether it's your fault or not" - Rylan Hamerain, in defense of Lower Wilds`,
    type: "Primary",
    title: "Battle Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+25%" },
          { name: "Move Speed", value: "+6.25%" },
          { name: "Damage", value: "245" },
          { name: "Max Charges", value: "9" },
          { name: "Range", value: "9.8" },
          { name: "Volley Count", value: "3" },
          { name: "Primal Energy On Hit", value: "0.62s" },
          { name: "Reload Time", value: "1.4s" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "+25%" },
          { name: "Move Speed", value: "+6.25%" },
          { name: "Damage", value: "249" },
          { name: "Max Charges", value: "9" },
          { name: "Range", value: "9.8" },
          { name: "Volley Count", value: "3" },
          { name: "Primal Energy On Hit", value: "0.62s" },
          { name: "Reload Time", value: "1.4s" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
    ],
    banner: "Ranger",
  },
  {
    name: "The Caretaker",
    description: "A shotgun with a slow rate of fire that shoots at short range in a moderate arc in front of you.",
    quote: `To do great work is to love what you do.`,
    type: "Primary",
    title: "Shotgun",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+30%" },
          { name: "Move Speed", value: "+10%" },
          { name: "Damage", value: "90" },
          { name: "Max Charges", value: "5" },
          { name: "Range", value: "6.2" },
          { name: "Arc per Volley", value: "30" },
          { name: "Shot Count", value: "7" },
          { name: "Primal Energy On Hit", value: "0.32s" },
          { name: "Reload Time", value: "1.8s" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "+30%" },
          { name: "Move Speed", value: "+10%" },
          { name: "Damage", value: "91" },
          { name: "Max Charges", value: "5" },
          { name: "Range", value: "6.2" },
          { name: "Arc per Volley", value: "30" },
          { name: "Shot Count", value: "7" },
          { name: "Primal Energy On Hit", value: "0.32s" },
          { name: "Reload Time", value: "1.8s" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
    ],
    banner: "Vanguard",
  },
  {
    name: "Luma Prodigal",
    description:
      "A powerful long range sniper that deals more damage and travels even further than its non-Ancient counterpart, but has only 2 shots in the magazine.",
    quote:
      `Crafted using the same techniques employed by the SacredForm to embue their masks, thi variant packs more power into a single round than it's traditional form.`,
    type: "Primary",
    title: "Sniper Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "0%" },
          { name: "Move Speed", value: "+2.5%" },
          { name: "Damage", value: "1100" },
          { name: "Max Charges", value: "3" },
          { name: "Range", value: "13.8" },
          { name: "Primal Energy On Hit", value: "1.84s" },
          { name: "Reload Time", value: "2.6s" },
          { name: "Reactivation Delay", value: "0.7s" },
          { name: "Damage at Close Range", value: "50%" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "0%" },
          { name: "Move Speed", value: "+2.5%" },
          { name: "Damage", value: "1122" },
          { name: "Max Charges", value: "3" },
          { name: "Range", value: "13.8" },
          { name: "Primal Energy On Hit", value: "1.84s" },
          { name: "Reload Time", value: "2.6s" },
          { name: "Reactivation Delay", value: "0.7s" },
          { name: "Damage at Close Range", value: "50%" },
        ],
      },
    ],
    banner: "Sniper",
  },
  {
    name: "Avalanche",
    description:
      "A mortar that fires six lobbed shots in rapid succession, each detonating a short distance from the previous.",
    quote: `You won't realize you've lost ground until it's too late.`,
    type: "Heavy",
    title: "Heavy Mortar",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "1490" },
          { name: "Max Charges", value: "2" },
          { name: "Range", value: "15" },
          { name: "Detonate Radius", value: "2.25" },
          { name: "Charge On Pickup", value: "150%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Damage", value: "1519" },
          { name: "Max Charges", value: "2" },
          { name: "Range", value: "15" },
          { name: "Detonate Radius", value: "2.25" },
          { name: "Charge On Pickup", value: "150%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
    ],
    banner: "Primal Hunter",
  },
  {
    name: "Renegade",
    description: "An assault rifle with a rapid rate of fire that deals high damage at long range.",
    quote: `A weapon so anxious to fire, picking it up is a risk most opt to avoid.`,
    type: "Heavy",
    title: "Heavy Assault Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "310" },
          { name: "Max Charges", value: "18" },
          { name: "Range", value: "11.2" },
          { name: "Charge On Pickup", value: "+584%" },
          { name: "Reactivation Delay", value: "0.1s" },
        ],
      },
      {
        level: 2,
        stats: [
           { name: "Damage", value: "316" },
          { name: "Max Charges", value: "18" },
          { name: "Range", value: "11.2" },
          { name: "Charge On Pickup", value: "+584%" },
          { name: "Reactivation Delay", value: "0.1s" },
        ],
      },
    ],
    banner: "Assassin",
  },
  {
    name: "Findlay",
    description:
      "A chaingun that deals high damage at long range. Each subsequent shot increases attack speed while decreasing movement speed.",
    quote: `An icon. \n \n Hold the lever down until it stops. Reload. Then, do it again.`,
    type: "Heavy",
    title: "Heavy Minigun",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "180" },
          { name: "Max Charges", value: "74" },
          { name: "Range", value: "11.6" },
          { name: "Charge On Pickup", value: "+1142%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Damage", value: "183" },
          { name: "Max Charges", value: "74" },
          { name: "Range", value: "11.6" },
          { name: "Charge On Pickup", value: "+1142%" },
          { name: "Reactivation Delay", value: "0.4s" },
      },
    ],
    banner: "Vanguard",
  },
  {
    name: "Luma Arrival",
    description: "An ancient heavy mortar that hits a larger area for more damage than its standard counterpart but with a restricted clip size.",
    quote:
      `Acolytes of the Sacred Form specialized in drawing heightened power out of catalyst. As a result, this weapon carries a single charge, but can discharge more power than the standard counterpart.`,
    type: "Heavy",
    title: "Heavy Mortar",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "2200" },
          { name: "Max Charges", value: "1" },
          { name: "Range", value: "16" },
          { name: "Detonate Radius", value: "5.8" },
          { name: "Charge On Pickup", value: "+65%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Damage", value: "2244" },
          { name: "Max Charges", value: "1" },
          { name: "Range", value: "16" },
          { name: "Detonate Radius", value: "5.8" },
          { name: "Charge On Pickup", value: "+65%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
    ],
    banner: "Primal Hunter",
  },
  {
    name: "Demilune",
    description: "This heavy mortat lobs 5 explosives in an arc - a fantastic choice for area control",
    quote:`"Create power where power exists." \n \n  -a crafting mantra empolyed bythe Vingians to augment the natural power inherent ingeometric patterns. \n \n The Vingians spent a season obsessing over arcing patterns in their weaponry, with no better test case than the mortar.`,
    type: "Heavy",
    title: "Heavy Mortar",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "590" },
          { name: "Max Charges", value: "3" },
          { name: "Range", value: "10.4" },
          { name: "Detonate Radius", value: "2.7" },
          { name: "Charge On Pickup", value: "+92%" },
          { name: "Reactivation Delay", value: "0.7s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Damage", value: "602" },
          { name: "Max Charges", value: "3" },
          { name: "Range", value: "10.4" },
          { name: "Detonate Radius", value: "2.7" },
          { name: "Charge On Pickup", value: "+92%" },
          { name: "Reactivation Delay", value: "0.7s" },
        ],
      },
    ],
    banner: "Seeker",
  },
   {
    name: "Trine Plane",
    description: "This heavy shotgun fires 8 shots in a wide arc at long range - deals well with crowded enemies, or point-blank single targets.",
    quote:`The triangle holds special place of consideration for the Vingians. It is simultaneously the least complex and most rigid natural occuring form.`,
    type: "Heavy",
    title: "Heavy Shotgun",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "135" },
          { name: "Max Charges", value: "5" },
          { name: "Range", value: "10.8" },
          { name: "Arc per Volley", value: "25" },
          { name: "Shot Count", value: "8" },
          { name: "Charge On Pickup", value: "+179%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
    ],
    banner: "Vanguard",
  },
    {
    name: "Aught Mandrel",
    description: "This heavy shotgun fires two volleys  in a brust when activated - able to quickly dispatch nearby enemies.",
    quote: `The Vingians named this weapon after the critical tool used to ensure its success. The core design premise was to increase projectile spread coming from theirshotguns. Doing so proved remarkably challenging. It was only when they turned their attention to the tooling used to refine the weapon's bore that they made major strides toward thier end goal.`,
    type: "Heavy",
    title: "Heavy Shotgun",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "125" },
          { name: "Max Charges", value: "5" },
          { name: "Range", value: "6.8" },
          { name: "Arc per Volley", value: "35" },
          { name: "Shot Count", value: "5" },
          { name: "Charge On Pickup", value: "+120%" },
          { name: "Reactivation Delay", value: "0.7s" },
        ],
      },
    ],
    banner: "Vanguard",
  },
   {
    name: "MK-4 Accelerator",
    description: "This heavy rocket launcher fires at increased range with a larger clip at the cost of damage.",
    quote: `The Mk-IV was a breakthrough for the Vingians in their attempts to increase both the projectile speed and the range of their heavy weapon. The Accelerator series is still being improved upon today, but the Mk-IV remainsthe most reliableof all publicly available models.`,
    type: "Heavy",
    title: "Heavy Rocket Launcher",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "590" },
          { name: "Max Charges", value: "7" },
          { name: "Range", value: "11.5" },
          { name: "Detonate Radius", value: "2.5" },
          { name: "Charge On Pickup", value: "211%" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Damage", value: "602" },
          { name: "Max Charges", value: "2" },
          { name: "Range", value: "12" },
          { name: "Detonate Radius", value: "3.2" },
          { name: "Charge On Pickup", value: "80%" },
          { name: "Reactivation Delay", value: "0.4s" },
        ],
      },
    ],
    banner: "Ranger",
  },
   {
    name: "Mutiny's Song",
    description: "A set of heavy pistols that fire explosive rounds.",
    quote: `It emboldens the blood just as it narrows the mind.`,
    type: "Heavy",
    title: "Heavy Pistol",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "410" },
          { name: "Max Charges", value: "10" },
          { name: "Range", value: "10.8" },
          { name: "Detonate Radius", value: "1.8" },
          { name: "Charge On Pickup", value: "+340%" },
          { name: "Reactivation Delay", value: "0.2s" },
        ],
      },
    ],
    banner: "Assassin",
  },
   {
    name: "Tetrad",
    description: "A primary battle rifle that fires a four round burst and reloads quickly at cost of its clip size.",
    quote: `Known for its aggressive non-conformity, Vingian craftsmanship is responsible for some of the most innovative effective uses of catalytic power in all of Kyria. In the case of the Tetrad, it was decided that a battle rifle ought four rounds instead of three. According to the Vingians, catalyze has ‘rhythmic frequencies’ that favor intentional patterns of power expression.`,
    type: "Primary",
    title: "Battle Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+17.5%" },
          { name: "Move Speed", value: "+6.25%" },
          { name: "Damage", value: "160" },
          { name: "Max Charges", value: "6" },
          { name: "Range", value: "11.8" },
          { name: "Volley Count", value: "4" },
          { name: "Primal Energy On Hit", value: "0.46s" },
          { name: "Reload Time", value: "1.2s" },
          { name: "Reactivation Delay", value: "0.3s" },
        ],
      },
    ],
    banner: "Ranger",
  },
  {
  name: "Codiffusion Constant",
    description: "Set of primary pistols that deal very high damage on a limited clip size - works best for finishing or enemies or paired with a supportive ally.",
    quote: `Unlike most pistols the Vingians built this particular set a function as in inextricable unit. You cannot fire one without previously firing the other the Codiffusion series was an experiment in shared power expulsion across multiple devices.`,
    type: "Primary",
    title: "Pistol",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+35%" },
          { name: "Move Speed", value: "+5%" },
          { name: "Damage", value: "320" },
          { name: "Max Charges", value: "8" },
          { name: "Range", value: "9.8" },
          { name: "Primal Energy On Hit", value: "0.36s" },
          { name: "Reload Time", value: "2.3s" },
          { name: "Reactivation Delay", value: "0.1s" },
        ],
      },
    ],
    banner: "Primalist",
  },
  {
   name: "Orthotic Generator",
    description: "This primary motor labs two explosives in rapid succession - best against those who are unable to maneuver easily.",
    quote: `Vingian artisans are convinced catalyte is rhythmic in nature, with some interpretations going so far as to describe it as ‘musical.’ The break-through decision making that allowed for heightened performance Vingian design was the inclusion of repetitive patterns. Catalytic power seems to sit most comfortably in these cyclical forms. The stylized approach to construction has become a hallmark of Vingian craft.`,
    type: "Primary",
    title: "Mortar",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+7.5%" },
          { name: "Move Speed", value: "+2.5%" },
          { name: "Damage", value: "390" },
          { name: "Max Charges", value: "3" },
          { name: "Range", value: "10.2" },
          { name: "Detonate Radius", value: "2.8" },
          { name: "Primal Energy On Hit", value: "0.28s" },
          { name: "Reload Time", value: "1.3s" },
          { name: "Reactivation Delay", value: "0.7s" },
        ],
      },
    ],
    banner: "Primal Hunter",
  },
  {
    name: "Writhe",
    description: "A standard SMG that’s fires two shots in parallel - works best in smaller corridors were both sides have the potential to land.",
    quote: `Small projectiles shoot at a rapid pace… \n \n There is a heightened sense of malice in the realized effects of this weapon.`,
    type: "Primary",
    title: "SMG",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+20%" },
          { name: "Move Speed", value: "+8.25%" },
          { name: "Damage", value: "120" },
          { name: "Max Charges", value: "16" },
          { name: "Range", value: "9.4" },
          { name: "Primal Energy On Hit", value: "0.29s" },
          { name: "Reload Time", value: "1.8s" },
          { name: "Reactivation Delay", value: "0.1s" },
        ],
      },
    ],
    banner: "Assassin",
  },
 {
    name: "Brighton",
    description: "A standard flame thrower that releases a steady stream of fire at short range - great when working with a team, but not as effective in small smaller skirmishes.",
    quote: `Initially developed for use in public service efforts, the Brighton model proved itself remarkably useful in defensive combat scenarios.`,
    type: "Primary",
    title: "Thrower",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "+37.5%" },
          { name: "Move Speed", value: "+3.25%" },
          { name: "Damage", value: "1320" },
          { name: "Max Charges", value: "28" },
          { name: "Range", value: "10" },
          { name: "Primal Energy On Hit", value: "0.27s" },
          { name: "Reload Time", value: "1.6s" },
          { name: "Reactivation Delay", value: "0.1s" },
        ],
      },
    ],
    banner: "Vanguard",
  },
 {
    name: "Negate Siren",
    description: "This heavy sniper rifle has a large clip and can slow targets at higher infusion tiers.",
    quote: `Tiring of the incessant pressure to craft weapons bent on destruction, The Vingians began experimenting with the broader potential for catalytic projectiles. The Negate Siren was an effort the Vingians hoped would be capable of diffusing conflict as opposed to heightening it.`,
    type: "Heavy",
    title: "Heavy Sniper Rifle",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "500" },
          { name: "Max Charges", value: "8" },
          { name: "Range", value: "13.8" },
          { name: "Charge On Pickup", value: "223%" },
          { name: "Reactivation Delay", value: "0.7s" },
          { name: "Damage at Close Range", value: "50%" },
        ],
      },
    ],
    banner: "Support",
  },
]

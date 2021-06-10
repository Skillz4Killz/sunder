export default [
  {
    name: "Feral Inspiration",
    description: "Sunder empowers his allies causing them deal increased damage.",
    quote: "Contagious aggression.",
    primal: "Sunder",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage Increase Strength", value: "15%" },
          { name: "Effect Radius", value: "5" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Damage Increase Strength", value: "15.5%" },
          { name: "Effect Radius", value: "5.09" },
        ],
      },
    ],
  },
  {
    name: "Hunter",
    description: "Sunder focuses his power, greatly increasing his movement speed.",
    quote: "You are not far enough away.",
    primal: "Sunder",
    stats: [
      {
        level: 1,
        stats: [{ name: "Movespeed Strength", value: "35%" }],
      },
      {
        level: 2,
        stats: [{ name: "Movespeed Strength", value: "36.25%" }],
      },
    ],
  },
    {
    name: "Rampage",
    description: "Sunder extends his primal form with every kill secured.",
    quote: "Momentary satisfaction only heightens the hunger.",
    primal: "Sunder",
    stats: [
      {
        level: 1,
        stats: [{ name: "Duration Increase", value: "?s" }],
      },
      {
        level: 2,
        stats: [{ name: "Duration Increase", value: "?s" }],
      },
    ],
  },
  {
    name: "Stillness",
    description: "Issia emanates an auro of cold, slowing enemies in he area around her.",
    quote: "This presence--you are lost in thought...",
    primal: "Issia",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Slow Strength", value: "-35%" },
          { name: "Effect Radius", value: "5" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Slow Strength", value: "-36%" },
          { name: "Effect Radius", value: "5.09" },
        ],
      },
    ],
  },
  {
    name: "Shiver Shroud",
    description: "Issia wraps herself in a protective barrier that regenerates over time.",
    quote: "This may be determination.",
    primal: "Issia",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Shield Max", value: "2000" },
          { name: "Shield Per Second", value: "200" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Shield Max", value: "2040" },
          { name: "Shield Per Second", value: "204" },
        ],
      },
    ],
  },
  {
    name: "Seeking Storm",
    description: "Issia periodically targets an enemy around her, striking them with an icy torrent from above.",
    quote: "This may be agitation.",
    primal: "Issia",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage", value: "1500" },
          { name: "Search Radius", value: "6.8" },
          { name: "Effect Radius", value: "2.4" },
          { name: "Effect Cooldown", value: "1.8s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Damage", value: "1530" },
          { name: "Search Radius", value: "6.94" },
          { name: "Effect Radius", value: "2.4" },
          { name: "Effect Cooldown", value: "1.78s" },
        ],
      },
    ],
  },
  {
    name: "Enter The Storm",
    description: "Allies near Torden constantly receive a shield (up to a max).",
    quote: "There was calm before. There will be calm after.",
    primal: "Torden",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Shield Max", value: "600" },
          { name: "Shield Per Second", value: "75" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Shield Max", value: "612" },
          { name: "Shield Per Second", value: "76.5" },
        ],
      },
    ],
  },
  {
    name: "Smite",
    description: "Torden infuses his hammer with power, increasing both the area and damage dealt from Smash.",
    quote: "What more power looks like.",
    primal: "Torden",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Primary Damage Increase", value: "0%" },
          { name: "Primary Radius Increase", value: "1.2" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Primary Damage Increase", value: "0.5%" },
          { name: "Primary Radius Increase", value: "1.2" },
        ],
      },
    ],
  },
   {
    name: "Blessing of Protection",
    description: "Torden periodically grants a nearby ally invulnerability.",
    quote: "Do not fear, Torden will save us.",
    primal: "Torden",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Search Radius", value: "7.5" },
          { name: "Invulnerability Duration", value: "1.2s" },
          { name: "Effect Cooldown", value: "5.2s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Search Radius", value: "7.5" },
          { name: "Invulnerability Duration", value: "1.23s" },
          { name: "Effect Cooldown", value: "5.11s" },
        ],
      },
    ],
  },
  {
    name: "Playtime!",
    description: "Nock incintes all nearby allies, increasing their movespeed.",
    quote: "Don't encourage her.",
    primal: "Nock",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Movespeed Strength", value: "20%" },
          { name: "Effect Radius", value: "5" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Movespeed Strength", value: "20.5%" },
          { name: "Effect Radius", value: "5.09" },
        ],
      },
    ],
  },
  {
    name: "Catch Me!",
    description: "Nock gains an extra charge of Zoom! while slightly increasing its cooldown.",
    quote: "A fool's errand.",
    primal: "Nock",
    stats: [
      {
        level: 1,
        stats: [{ name: "Primary Cooldown Increase", value: "75%" }],
      },
      {
        level: 2,
        stats: [{ name: "Primary Cooldown Increase", value: "73.25%" }],
      },
    ],
  },
   {
    name: "Hide and Seek!",
    description:
      "Nock can freely switch back and forth between human and primal forms for the duration of her transformation.",
    quote: "Just when you thought it was over...",
    primal: "Nock",
    stats: [
      {
        level: 1,
        stats: [{ name: "Lockout Duration", value: "?s" }],
      },
      {
        level: 2,
        stats: [{ name: "Lockout Duration", value: "?s" }],
      },
    ],
  },
   {
    name: "Spite",
    description: "Any damage dealt by Jainx returns health to him.",
    quote: "Everything is personal.",
    primal: "Jainx",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Heal Strength", value: "700" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Heal Strength", value: "714" },
        ],
      },
    ],
  },
   {
    name: "Dread",
    description: "Jainx emanates an aura of dread that drains life from his enemies and restores life to his allies.",
    quote: "Completely demoralizes enemies, while allies relieved to be allies.",
    primal: "Jainx",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Damage Per Second ", value: "400" },
          { name: "Heal Strength Per Second", value: "200" },
          { name: "Effect Radius", value: "6" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Shield Max", value: "408" },
          { name: "Heal Strength Per Second", value: "204" },
          { name: "Effect Radius", value: "6" },
        ],
      },
    ],
  },
]

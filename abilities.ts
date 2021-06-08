export default [
  {
    name: "Catalytic Heal",
    description: "You and nearby allies instantly recover health.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "80" },
          { name: "Charge Time", value: "19s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Heal Strength", value: "450" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "91.6" },
          { name: "Charge Time", value: "19s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Heal Strength", value: "459" },
        ],
      },
    ],
    banner: "Vanguard",
  },
  {
    name: "Heal",
    description: "Instantly recover health.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "60" },
          { name: "Charge Time", value: "15s" },
          { name: "Heal Strength", value: "750" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "71.2" },
          { name: "Charge Time", value: "15s" },
          { name: "Heal Strength", value: "765" },
        ],
      },
    ],
    banner: "Ranger",
  },
  {
    name: "Leap Attack",
    description: "Leap to target location, dealing damage to nearby enemies upon landing.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "200" },
          { name: "Charge Time", value: "9.2s" },
          { name: "Damage", value: "680" },
          { name: "Cast Range", value: "11.2" },
          { name: "Effect Radius", value: "3" },
        ],
      },
    ],
    banner: "Protector",
  },
  {
    name: "Protection",
    description: "Become invulnerable.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "40" },
          { name: "Charge Time", value: "18s" },
          { name: "Invulnerability Duration", value: "1.2s" },
        ],
      },
    ],
    banner: "Vanguard",
  },
  {
    name: "Sprint",
    description: "Gain increased movespeed",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "100" },
          { name: "Charge Time", value: "16s" },
          { name: "Movespeed Duration", value: "2.4s" },
          { name: "Movespeed Strength", value: "60%" },
        ],
      },
    ],
    banner: "Assassin",
  },
  {
    name: "Catalytic Sprint",
    description: "You and nearby allies gain increased movespeed.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "120" },
          { name: "Charge Time", value: "20s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Movespeed Duration", value: "2s" },
          { name: "Movespeed Strength", value: "40%" },
        ],
      },
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "132" },
          { name: "Charge Time", value: "20s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Movespeed Duration", value: "2.04s" },
          { name: "Movespeed Strength", value: "40.75%" },
        ],
      },
    ],
    banner: "Protector",
  },
  {
    name: "Catalytic Protection",
    description: "You and nearby allies become invulnerable.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "60" },
          { name: "Charge Time", value: "25s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Invulnerability Duration", value: "0.6s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "71.2" },
          { name: "Charge Time", value: "25s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Invulnerability Duration", value: "0.62s" },
        ],
      },
    ],
    banner: "Protector",
  },
  {
    name: "Healing Totem",
    description: "Summon a totem at target location. Allies near the totem recover health.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "80" },
          { name: "Charge Time", value: "22s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10s" },
          { name: "Summon Health", value: "1000" },
          { name: "Effect Radius", value: "5" },
          { name: "Heal Strength Per Second", value: "120" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "91.6" },
          { name: "Charge Time", value: "22s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10.2s" },
          { name: "Summon Health", value: "1040" },
          { name: "Effect Radius", value: "5" },
          { name: "Heal Strength Per Second", value: "120" },
        ],
      },
    ],
    banner: "Support",
  },
  {
    name: "Windwalker Totem",
    description: "Summon a totem at target location. Allies near the totem gain increased movespeed.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "80" },
          { name: "Charge Time", value: "22s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10s" },
          { name: "Summon Health", value: "1000" },
          { name: "Effect Radius", value: "5" },
          { name: "Movespeed Strength", value: "25%" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "91.6" },
          { name: "Charge Time", value: "22s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10.2s" },
          { name: "Summon Health", value: "1040" },
          { name: "Effect Radius", value: "5" },
          { name: "Movespeed Strength", value: "26.25%" },
        ],
      },
    ],
    banner: "Support",
  },
  {
    name: "Onslaught Totem",
    description: "Summon a totem at target location. Allies near the totem deal increased damage.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "80" },
          { name: "Charge Time", value: "20s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10s" },
          { name: "Summon Health", value: "1000" },
          { name: "Effect Radius", value: "5" },
          { name: "Bonus Damage Strength", value: "10%" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "91.6" },
          { name: "Charge Time", value: "20s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10.2s" },
          { name: "Summon Health", value: "1040" },
          { name: "Effect Radius", value: "5" },
          { name: "Bonus Damage Strength", value: "10.25%" },
        ],
      },
    ],
    banner: "Primalist",
  },
  {
    name: "Earthbind Totem",
    description: "Summon a totem at target location. Enemies near the totem are slowed.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "100" },
          { name: "Charge Time", value: "20s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10s" },
          { name: "Summon Health", value: "1000" },
          { name: "Effect Radius", value: "5" },
          { name: "Slow Strength", value: "-30%" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "112" },
          { name: "Charge Time", value: "20s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10.2s" },
          { name: "Summon Health", value: "1040" },
          { name: "Effect Radius", value: "5" },
          { name: "Slow Strength", value: "-30%" },
        ],
      },
    ],
    banner: "Ranger",
  },
  {
    name: "Primal Fire",
    description: "Release a bolt of energy in target direction, burning the enemy struck by it.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "80" },
          { name: "Charge Time", value: "10s" },
          { name: "Max Charges", value: "2" },
          { name: "Cast Range", value: "13.2" },
          { name: "Damage", value: "440" },
          { name: "Percent Health Per Second", value: "5%" },
          { name: "Burn Duration", value: "2s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "91.6" },
          { name: "Charge Time", value: "10s" },
          { name: "Max Charges", value: "2" },
          { name: "Cast Range", value: "13.2" },
          { name: "Damage", value: "449" },
          { name: "Percent Health Per Second", value: "5%" },
          { name: "Burn Duration", value: "2.08s" },
        ],
      },
    ],
    banner: "Primal Hunter",
  },
  {
    name: "Grounding Bolt",
    description: "Release a bolt of energy in target direction, slowing the enemy struct by it.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "140" },
          { name: "Charge Time", value: "8s" },
          { name: "Max Charges", value: "2" },
          { name: "Cast Range", value: "15.5" },
          { name: "Damage", value: "440" },
          { name: "Slow Strength", value: "65%" },
          { name: "Slow Duration", value: "2.8s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "153" },
          { name: "Charge Time", value: "8s" },
          { name: "Max Charges", value: "2" },
          { name: "Cast Range", value: "15.5" },
          { name: "Damage", value: "449" },
          { name: "Slow Strength", value: "65%" },
          { name: "Slow Duration", value: "2.84s" },
        ],
      },
    ],
    banner: "Sniper",
  },
  {
    name: "Power Infusion",
    description: "Firing your primary weapon does not consume ammo.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "20" },
          { name: "Charge Time", value: "24s" },
          { name: "Duration", value: "4.8s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "30.4" },
          { name: "Charge Time", value: "24s" },
          { name: "Duration", value: "4.92s" },
        ],
      },
    ],
    banner: "Seeker",
  },
  {
    name: "Stasis",
    description: "Freeze in place and become immune to all damage. Reactivate this ability to end it early.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "60" },
          { name: "Charge Time", value: "18s" },
          { name: "Duration", value: "3s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "71.2" },
          { name: "Charge Time", value: "18s" },
          { name: "Duration", value: "3.06s" },
        ],
      },
    ],
    banner: "Primalist",
  },
  {
    name: "Renewal",
    description: "Recover health over the next few seconds.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "100" },
          { name: "Charge Time", value: "16s" },
          { name: "Duration", value: "5s" },
          { name: "Heal Strength Per Second", value: "300" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "112" },
          { name: "Charge Time", value: "16s" },
          { name: "Duration", value: "5s" },
          { name: "Heal Strength Per Second", value: "306" },
        ],
      },
    ],
    banner: "Primalist",
  },
  {
    name: "Catalytic Renewal",
    description: "You and nearby allies recover health over the next few seconds.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "120" },
          { name: "Charge Time", value: "20s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Duration", value: "5s" },
          { name: "Heal Strength Per Second", value: "180" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "132" },
          { name: "Charge Time", value: "20s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Duration", value: "5s" },
          { name: "Heal Strength Per Second", value: "184" },
        ],
      },
    ],
    banner: "Primalist",
  },
  {
    name: "Volatile Mine",
    description: "Drop an explosive mine.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "60" },
          { name: "Charge Time", value: "6s" },
          { name: "Cast Range", value: "1" },
          { name: "Damage", value: "750" },
          { name: "Duration", value: "10s" },
          { name: "Trigger Radius", value: "1" },
          { name: "Effect Radius", value: "2.4" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "71.2" },
          { name: "Charge Time", value: "6s" },
          { name: "Cast Range", value: "1" },
          { name: "Damage", value: "765" },
          { name: "Duration", value: "10s" },
          { name: "Trigger Radius", value: "1" },
          { name: "Effect Radius", value: "2.4" },
        ],
      },
    ],
    banner: "Ranger",
  },
  {
    name: "Temporal Rush",
    description: "Dash in target direction, dealing damage to enemies passed through.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "160" },
          { name: "Charge Time", value: "8s" },
          { name: "Damage", value: "580" },
          { name: "Cast Range", value: "6.4" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "173" },
          { name: "Charge Time", value: "8s" },
          { name: "Damage", value: "591" },
          { name: "Cast Range", value: "6.4" },
        ],
      },
    ],
    banner: "Assassin",
  },
  {
    name: "Frost Bomb",
    description: "Lob a ball of energy at target location, slowing all enemies caught in its explosion.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "140" },
          { name: "Charge Time", value: "10s" },
          { name: "Damage", value: "300" },
          { name: "Cast Range", value: "12" },
          { name: "Slow Strength", value: "-40%" },
          { name: "Slow Duration", value: "2s" },
          { name: "Effect Radius", value: "3.2" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "153" },
          { name: "Charge Time", value: "10s" },
          { name: "Damage", value: "306" },
          { name: "Cast Range", value: "12" },
          { name: "Slow Strength", value: "-40%" },
          { name: "Slow Duration", value: "2.04s" },
          { name: "Effect Radius", value: "3.25" },
        ],
      },
    ],
    banner: "Assassin",
  },
  {
    name: "Teleport",
    description: "Teleport to target location.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "60" },
          { name: "Charge Time", value: "10.4s" },
          { name: "Cast Range", value: "11.2" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "71.2" },
          { name: "Charge Time", value: "10.4s" },
          { name: "Cast Range", value: "11.2" },
        ],
      },
    ],
    banner: "Seeker",
  },
  {
    name: "Shield",
    description: "Instantly gain a shield.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "80" },
          { name: "Charge Time", value: "15s" },
          { name: "Effect Radius", value: "0" },
          { name: "Shield Duration", value: "3s" },
          { name: "Shield Strength", value: "1000" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "91.6" },
          { name: "Charge Time", value: "15s" },
          { name: "Effect Radius", value: "0" },
          { name: "Shield Duration", value: "3.04s" },
          { name: "Shield Strength", value: "1020" },
        ],
      },
    ],
    banner: "Seeker",
  },
  {
    name: "Catalytic Shield",
    description: "You and nearby allies instantly gain a shield.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "100" },
          { name: "Charge Time", value: "19s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Shield Duration", value: "2s" },
          { name: "Shield Strength", value: "600" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "112" },
          { name: "Charge Time", value: "19s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Shield Duration", value: "2.02s" },
          { name: "Shield Strength", value: "612" },
        ],
      },
    ],
    banner: "Support",
  },
]

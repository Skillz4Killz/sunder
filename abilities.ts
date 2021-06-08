export default [
  {
    name: "Catalytic Heal",
    description: "You and nearby allies instantly recover health.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "400" },
          { name: "Charge Time", value: "15s" },
          { name: "Effect Radius", value: "8.2" },
          { name: "Heal Strength", value: "1320" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "428" },
          { name: "Charge Time", value: "15s" },
          { name: "Effect Radius", value: "8.2" },
          { name: "Heal Strength", value: "1347" },
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
          { name: "Health Max", value: "240" },
          { name: "Charge Time", value: "12.8s" },
          { name: "Heal Strength", value: "1150" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "265" },
          { name: "Charge Time", value: "12.8s" },
          { name: "Heal Strength", value: "1173" },
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
          { name: "Health Max", value: "160" },
          { name: "Charge Time", value: "10.4s" },
          { name: "Damage", value: "740" },
          { name: "Cast Range", value: "9.2" },
          { name: "Effect Radius", value: "3" },
        ],
      },
    ],
    banner: "Vanguard",
  },
  {
    name: "Protection",
    description: "Become invulnerable.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "80" },
          { name: "Charge Time", value: "22s" },
          { name: "Invulnerability Duration", value: "1.4s" },
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
          { name: "Health Max", value: "200" },
          { name: "Charge Time", value: "16s" },
          { name: "Movespeed Duration", value: "5s" },
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
          { name: "Health Max", value: "240" },
          { name: "Charge Time", value: "18s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Movespeed Duration", value: "4.4s" },
          { name: "Movespeed Strength", value: "40%" },
        ],
      },
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "265" },
          { name: "Charge Time", value: "18s" },
          { name: "Effect Radius", value: "7.5" },
          { name: "Movespeed Duration", value: "4.45s" },
          { name: "Movespeed Strength", value: "41%" },
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
          { name: "Health Max", value: "120" },
          { name: "Charge Time", value: "26s" },
          { name: "Effect Radius", value: "4" },
          { name: "Invulnerability Duration", value: "1s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "142" },
          { name: "Charge Time", value: "26s" },
          { name: "Effect Radius", value: "4.07" },
          { name: "Invulnerability Duration", value: "1s" },
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
          { name: "Health Max", value: "280" },
          { name: "Charge Time", value: "15s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10s" },
          { name: "Effect Radius", value: "5" },
          { name: "Heal Strength Per Second", value: "225" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "306" },
          { name: "Charge Time", value: "15s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10.2s" },
          { name: "Effect Radius", value: "5" },
          { name: "Heal Strength Per Second", value: "230" },
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
          { name: "Health Max", value: "240" },
          { name: "Charge Time", value: "18s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10s" },
          { name: "Effect Radius", value: "5" },
          { name: "Movespeed Strength", value: "35%" },
          { name: "Movespeed Duration", value: "2.4s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "265" },
          { name: "Charge Time", value: "18s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10.2s" },
          { name: "Effect Radius", value: "5" },
          { name: "Movespeed Strength", value: "35.75%" },
          { name: "Movespeed Duration", value: "2.44s" },
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
          { name: "Health Max", value: "160" },
          { name: "Charge Time", value: "18s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10s" },
          { name: "Effect Radius", value: "5" },
          { name: "Bonus Damage Strength", value: "10%" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "183" },
          { name: "Charge Time", value: "18s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10.2s" },
          { name: "Effect Radius", value: "5" },
          { name: "Bonus Damage Strength", value: "10.25%" },
        ],
      },
    ],
    banner: "Primalist",
  },
  {
    name: "Quake Totem",
    description: "Summon a totem at target location. Enemies near the totem are slowed.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "200" },
          { name: "Charge Time", value: "18s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10s" },
          { name: "Effect Radius", value: "5" },
          { name: "Slow Strength", value: "-40%" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "224" },
          { name: "Charge Time", value: "18s" },
          { name: "Cast Range", value: "6" },
          { name: "Summon Duration", value: "10.2s" },
          { name: "Effect Radius", value: "5" },
          { name: "Slow Strength", value: "-40%" },
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
          { name: "Health Max", value: "280" },
          { name: "Charge Time", value: "10s" },
          { name: "Max Charges", value: "2" },
          { name: "Cast Range", value: "13.8" },
          { name: "Damage", value: "300" },
          { name: "Percent Health Per Second", value: "5%" },
          { name: "Max Damage Per Second", value: "2500" },
          { name: "Burn Duration", value: "2.2s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "306" },
          { name: "Charge Time", value: "10s" },
          { name: "Max Charges", value: "2" },
          { name: "Cast Range", value: "13.8" },
          { name: "Damage", value: "306" },
          { name: "Percent Health Per Second", value: "5%" },
          { name: "Max Damage Per Second", value: "2500" },
          { name: "Burn Duration", value: "2.24s" },
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
          { name: "Health Max", value: "160" },
          { name: "Charge Time", value: "10.2s" },
          { name: "Max Charges", value: "2" },
          { name: "Cast Range", value: "13.4" },
          { name: "Damage", value: "270" },
          { name: "Slow Strength", value: "-60%" },
          { name: "Slow Duration", value: "1.6s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "183" },
          { name: "Charge Time", value: "10.2s" },
          { name: "Max Charges", value: "2" },
          { name: "Cast Range", value: "13.4" },
          { name: "Damage", value: "275" },
          { name: "Slow Strength", value: "-60%" },
          { name: "Slow Duration", value: "1.63s" },
        ],
      },
    ],
    banner: "Sniper",
  },
  {
    name: "Power Infusion",
    description: "Deals increased damage and firing your primary weapon does not consume ammo.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "240" },
          { name: "Charge Time", value: "24s" },
          { name: "Duration", value: "6s" },
          { name: "Bonus Damage Strength", value: "10%" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "265" },
          { name: "Charge Time", value: "24s" },
          { name: "Duration", value: "6s" },
          { name: "Bonus Damage Strength", value: "10.25%" },
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
          { name: "Health Max", value: "200" },
          { name: "Charge Time", value: "18s" },
          { name: "Duration", value: "4.4s" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "224" },
          { name: "Charge Time", value: "18s" },
          { name: "Duration", value: "4.48s" },
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
          { name: "Health Max", value: "280" },
          { name: "Charge Time", value: "16s" },
          { name: "Duration", value: "7s" },
          { name: "Heal Strength Per Second", value: "450" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "306" },
          { name: "Charge Time", value: "16s" },
          { name: "Duration", value: "7s" },
          { name: "Heal Strength Per Second", value: "459" },
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
          { name: "Health Max", value: "320" },
          { name: "Charge Time", value: "18s" },
          { name: "Effect Radius", value: "8.2" },
          { name: "Duration", value: "5s" },
          { name: "Heal Strength Per Second", value: "400" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "346" },
          { name: "Charge Time", value: "18s" },
          { name: "Effect Radius", value: "8.2" },
          { name: "Duration", value: "5s" },
          { name: "Heal Strength Per Second", value: "408" },
        ],
      },
    ],
    banner: "Seeker",
  },
  {
    name: "Volatile Mine",
    description: "Drop an explosive mine.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "120" },
          { name: "Charge Time", value: "4.8s" },
          { name: "Damage", value: "1500" },
          { name: "Duration", value: "20s" },
          { name: "Trigger Radius", value: "1.2" },
          { name: "Effect Radius", value: "2.6" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "142" },
          { name: "Charge Time", value: "4.8s" },
          { name: "Damage", value: "1530" },
          { name: "Duration", value: "20s" },
          { name: "Trigger Radius", value: "1.2" },
          { name: "Effect Radius", value: "2.6" },
        ],
      },
    ],
    banner: "Ranger",
  },
  {
    name: "Temporal Rush",
    description: "Dodge in target direction, dealing damage to enemies passed through.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "160" },
          { name: "Charge Time", value: "8.6s" },
          { name: "Damage", value: "580" },
          { name: "Cast Range", value: "6.4" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "183" },
          { name: "Charge Time", value: "8.6s" },
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
          { name: "Health Max", value: "280" },
          { name: "Charge Time", value: "8.2s" },
          { name: "Damage", value: "450" },
          { name: "Cast Range", value: "13.6" },
          { name: "Slow Strength", value: "-50%" },
          { name: "Slow Duration", value: "2s" },
          { name: "Effect Radius", value: "4.2" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "306" },
          { name: "Charge Time", value: "8.2s" },
          { name: "Damage", value: "459" },
          { name: "Cast Range", value: "13.6" },
          { name: "Slow Strength", value: "-50%" },
          { name: "Slow Duration", value: "2.04s" },
          { name: "Effect Radius", value: "4.2" },
        ],
      },
    ],
    banner: "Ranger",
  },
  {
    name: "Blink",
    description: "Teleport to target location.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "120" },
          { name: "Charge Time", value: "10.4s" },
          { name: "Cast Range", value: "8.4" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "142" },
          { name: "Charge Time", value: "10.4s" },
          { name: "Cast Range", value: "8.4" },
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
          { name: "Health Max", value: "160" },
          { name: "Charge Time", value: "11.6s" },
          { name: "Shield Duration", value: "3s" },
          { name: "Shield Strength", value: "1400" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "183" },
          { name: "Charge Time", value: "11.6s" },
          { name: "Shield Duration", value: "3.04s" },
          { name: "Shield Strength", value: "1428" },
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
          { name: "Health Max", value: "200" },
          { name: "Charge Time", value: "15.4s" },
          { name: "Effect Radius", value: "8.2" },
          { name: "Shield Duration", value: "2s" },
          { name: "Shield Strength", value: "1250" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "224" },
          { name: "Charge Time", value: "15.4s" },
          { name: "Effect Radius", value: "8.2" },
          { name: "Shield Duration", value: "2.02s" },
          { name: "Shield Strength", value: "1275" },
        ],
      },
    ],
    banner: "Support",
  },
  {
    name: "Warden",
    description: "Leap to target location, shielding yourself and all nearby allies upon landing.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "280" },
          { name: "Charge Time", value: "14.2s" },
          { name: "Shield Strentgh", value: "900" },
          { name: "Cast Range", value: "9.8" },
          { name: "Effect Radius", value: "4.2" },
        ],
      },
    ],
    banner: "Protector",
  },
    {
    name: "Blink Strike",
    description: "Teleport in a target direction, deal damage to upon arrival.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "200" },
          { name: "Charge Time", value: "13.2s" },
          { name: "Damage", value: "800" },
          { name: "Cast Range", value: "7.2" },
          { name: "Effect Radius", value: "2.6" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "224" },
          { name: "Charge Time", value: "13.2s" },
          { name: "Damage", value: "816" },
          { name: "Cast Range", value: "7.2" },
          { name: "Effect Radius", value: "2.6" },
        ],
      },
    ],
    banner: "Assassin",
  },
   {
    name: "Concussive Mine",
    description: "Drop a mine that triggers on contact, slowing any enemy caught in its blast.",
    stats: [
      {
        level: 1,
        stats: [
          { name: "Health Max", value: "320" },
          { name: "Charge Time", value: "8.2s" },
          { name: "Slow Strength", value: "-45%" },
          { name: "Slow Duration", value: "2s" },          
          { name: "Damage", value: "800" },
          { name: "Duration", value: "20s" },
          { name: "Trigger Radius", value: "1" },
          { name: "Effect Radius", value: "2.8" },
        ],
      },
      {
        level: 2,
        stats: [
          { name: "Health Max", value: "346" },
          { name: "Charge Time", value: "8.2s" },
          { name: "Slow Strength", value: "-45%" },
          { name: "Slow Duration", value: "2.04s" },
          { name: "Damage", value: "816" },
          { name: "Duration", value: "20s" },
          { name: "Trigger Radius", value: "1" },
          { name: "Effect Radius", value: "2.8" },
        ],
      },
    ],
    banner: "Primal Hunter",
  },
]

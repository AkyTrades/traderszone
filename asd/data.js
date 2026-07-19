// ============================================================
// TradersZone marketplace data
// Edit this file to add/remove traders or change their info.
// Every trader listed here automatically appears on the site.
// ============================================================

const TRADERS = [
  {
    id: "max-carter",
    name: "Max Carter",
    handle: "@MaxFX",
    market: "Forex",
    style: "Day trading · Price action",
    years: 7,
    members: 1250,
    rating: 4.8,
    gradient: ["#22c55e", "#0ea5e9"],
    tagline: "London session scalps with strict risk rules.",
    bio: "Max has traded the London and New York forex sessions full-time for 7 years. His approach is pure price action — market structure, liquidity sweeps, and tight risk management. No indicators, no noise.",
    clips: [
      { title: "How I frame the London open", length: "4:12" },
      { title: "Live trade: GBP/USD liquidity sweep", length: "6:45" },
      { title: "Why I risk max 1% per trade", length: "3:08" },
    ],
    courses: [
      {
        name: "London Session Playbook",
        desc: "Max's complete day-trading system for the London open: session framing, entry models, and trade management.",
        price: 149,
      },
      {
        name: "Risk Management Bootcamp",
        desc: "Position sizing, drawdown rules, and the psychology of protecting capital.",
        price: 79,
      },
    ],
    discord: {
      name: "MaxFX Trading Floor",
      price: 39,
      perks: ["Daily pre-London watchlist", "Live trade callouts with reasoning", "Weekly review streams"],
    },
  },
  {
    id: "sofia-lin",
    name: "Sofia Lin",
    handle: "@SofiaCharts",
    market: "Crypto",
    style: "Swing trading · Technical analysis",
    years: 5,
    members: 2100,
    rating: 4.9,
    gradient: ["#a855f7", "#ec4899"],
    tagline: "Patient swing setups on BTC, ETH and top alts.",
    bio: "Sofia swing-trades major crypto pairs, holding positions from days to weeks. She teaches a structured technical framework: higher-timeframe bias, key levels, and confirmation entries — designed for people who can't watch charts all day.",
    clips: [
      { title: "My weekly BTC game plan", length: "5:30" },
      { title: "Spotting real breakouts vs traps", length: "7:02" },
      { title: "How I take profit in stages", length: "4:47" },
    ],
    courses: [
      {
        name: "Crypto Swing System",
        desc: "The full framework: bias, levels, entries, exits, and portfolio rules for swing trading crypto.",
        price: 199,
      },
    ],
    discord: {
      name: "SofiaCharts Lounge",
      price: 45,
      perks: ["Weekly market outlook video", "Every setup posted with charts", "Alt-season rotation alerts"],
    },
  },
  {
    id: "dre-thompson",
    name: "Dre Thompson",
    handle: "@DreTakesProfit",
    market: "Futures",
    style: "Scalping · Order flow",
    years: 9,
    members: 870,
    rating: 4.7,
    gradient: ["#f59e0b", "#ef4444"],
    tagline: "NQ and ES scalps read straight from the order flow.",
    bio: "Dre scalps index futures using order flow and volume profile. 9 years in, he's known for brutally honest recaps — losses included. His teaching focuses on reading aggression in the tape and executing without hesitation.",
    clips: [
      { title: "Reading the tape on NQ open", length: "8:15" },
      { title: "Full session recap — wins & losses", length: "11:20" },
      { title: "Volume profile basics in 5 minutes", length: "5:01" },
    ],
    courses: [
      {
        name: "Order Flow Foundations",
        desc: "Footprint charts, delta, volume profile, and how to actually use them in live trading.",
        price: 249,
      },
      {
        name: "The Scalper's Routine",
        desc: "Pre-market prep, execution drills, and post-session review — the daily process behind consistency.",
        price: 99,
      },
    ],
    discord: {
      name: "Dre's Trading Pit",
      price: 55,
      perks: ["Live voice during NY open", "Real-time scalp callouts", "Daily honest recap — losses included"],
    },
  },
  {
    id: "elena-voss",
    name: "Elena Voss",
    handle: "@VossOptions",
    market: "Options",
    style: "Income strategies · Swing",
    years: 11,
    members: 1580,
    rating: 4.8,
    gradient: ["#0ea5e9", "#6366f1"],
    tagline: "Consistent options income without lottery-ticket gambling.",
    bio: "Elena spent 6 years on an institutional derivatives desk before going independent. She teaches defined-risk options strategies — spreads, wheels, and covered structures — aimed at steady income rather than moonshots.",
    clips: [
      { title: "Why I never buy naked calls", length: "6:33" },
      { title: "Building a wheel on quality stocks", length: "9:10" },
      { title: "Managing a trade gone wrong", length: "7:44" },
    ],
    courses: [
      {
        name: "Options Income Blueprint",
        desc: "Defined-risk spreads and the wheel strategy, taught from first principles to full portfolio management.",
        price: 229,
      },
    ],
    discord: {
      name: "Voss Income Club",
      price: 49,
      perks: ["Weekly trade plan every Sunday", "Every position shared live", "Earnings-season playbooks"],
    },
  },
  {
    id: "kenji-mori",
    name: "Kenji Mori",
    handle: "@KenjiQuant",
    market: "Crypto",
    style: "Systematic · Data-driven",
    years: 6,
    members: 640,
    rating: 4.6,
    gradient: ["#14b8a6", "#22c55e"],
    tagline: "Rules-based crypto systems you can backtest yourself.",
    bio: "Kenji builds and trades fully systematic crypto strategies. No discretion, no vibes — every rule is written down and backtested. He teaches traders how to turn ideas into testable systems and how to know when a system is broken.",
    clips: [
      { title: "Backtesting a simple trend system", length: "10:05" },
      { title: "Why most backtests lie to you", length: "6:18" },
      { title: "My portfolio of systems explained", length: "8:40" },
    ],
    courses: [
      {
        name: "Systematic Crypto Trading",
        desc: "From idea to backtest to live execution — build rule-based systems even without coding experience.",
        price: 179,
      },
    ],
    discord: {
      name: "Quant Corner",
      price: 35,
      perks: ["Monthly system performance reports", "Backtest reviews of member ideas", "Signal feed from live systems"],
    },
  },
  {
    id: "carla-mendes",
    name: "Carla Mendes",
    handle: "@CarlaTrades",
    market: "Forex",
    style: "Swing trading · Fundamentals + TA",
    years: 8,
    members: 1930,
    rating: 4.9,
    gradient: ["#ef4444", "#f59e0b"],
    tagline: "Macro-driven forex swings, explained in plain language.",
    bio: "Carla combines macro fundamentals with clean technical entries, holding forex swings for days to weeks. Her strength is making central-bank policy and macro data actually understandable — and tradeable — for normal people.",
    clips: [
      { title: "How rate decisions move currencies", length: "7:55" },
      { title: "My EUR/USD swing thesis this month", length: "5:22" },
      { title: "Pairing macro bias with entries", length: "6:40" },
    ],
    courses: [
      {
        name: "Macro Forex Mastery",
        desc: "Understand what actually drives currencies and combine it with technical timing for swing trades.",
        price: 189,
      },
      {
        name: "The News Trading Survival Guide",
        desc: "How to trade around high-impact news events — or protect yourself from them.",
        price: 69,
      },
    ],
    discord: {
      name: "Carla's Macro Room",
      price: 42,
      perks: ["Weekly macro briefing", "Swing trade journal shared live", "Central-bank week live coverage"],
    },
  },
];

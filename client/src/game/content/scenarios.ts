import type { Item, Scenario } from "../types";

export const ITEMS: Item[] = [
  { id: "ration", name: "Emergency Ration", short: "Ration", icon: "▦", description: "Restore 10 HP between decisions.", count: 2, usable: true },
  { id: "lens", name: "Cracked Lens", short: "Lens", icon: "◉", description: "Reveal one hidden choice requirement.", count: 1, usable: true },
  { id: "charm", name: "Threadbare Charm", short: "Charm", icon: "✧", description: "A small talisman that softens one wound.", count: 1, usable: true },
];

export const SCENARIOS: Scenario[] = [
  {
    id: "first-narration", title: "The First Narration", tier: "TIER 01 · AWAKENING", day: 1, objective: "Survive the first rule.",
    narration: ["At 06:14, every screen in the city went black.", "Then a voice arrived from inside the silence. It spoke as if the world had already agreed to become a story.", "SCENARIO 01 — PROVE THAT YOU ARE LISTENING.", "A pale line of text waits beneath your window. What will you do?"],
    choices: [
      { id: "read", title: "Read the rule aloud.", subtitle: "If it is a story, give it a witness.", tone: "clever", statDelta: { storySense: 1, coins: 6 }, reward: "Story Sense +1 · 6 coins", next: "price-of-shelter", sponsor: "The Archivist tilts their head. Interesting." },
      { id: "hide", title: "Pull the curtains and wait.", subtitle: "Safe is still a kind of answer.", tone: "safe", statDelta: { hp: -3, willpower: 1 }, reward: "Willpower +1", next: "price-of-shelter", sponsor: "The Quiet Judge withholds approval." },
      { id: "touch", title: "Touch the line of text.", subtitle: "Boldness may be the only language it respects.", tone: "bold", statDelta: { hp: -7, strength: 1, coins: 12 }, reward: "Strength +1 · 12 coins", next: "price-of-shelter", sponsor: "The Red Witness laughs once. Then stops." },
    ],
  },
  {
    id: "price-of-shelter", title: "The Price of Shelter", tier: "TIER 01 · AWAKENING", day: 2, objective: "Secure a place to sleep.",
    narration: ["By nightfall, the city has divided itself into safe zones and story zones.", "You find a community center with its doors chained from the inside.", "Someone whispers that the lock opens for a convincing offer. Someone else whispers that the people inside are hungry."],
    choices: [
      { id: "offer", title: "Offer your last food.", subtitle: "A warm room is worth an empty stomach.", tone: "safe", statDelta: { hp: -2, willpower: 1, coins: 5 }, itemGain: "ration", reward: "Found an Emergency Ration", next: "unseen-audience", sponsor: "The Hearthkeeper approves of the cost." },
      { id: "force", title: "Break the chain.", subtitle: "The lock is only a suggestion.", tone: "bold", statDelta: { hp: -9, strength: 1, coins: 14 }, reward: "Strength +1 · 14 coins", next: "unseen-audience", sponsor: "The Red Witness approves of the spectacle." },
      { id: "listen", title: "Listen for the real rule.", subtitle: "The building is saying more than the people are.", tone: "clever", requirement: { stat: "storySense", min: 1, label: "Story Sense 1" }, statDelta: { storySense: 1, coins: 10 }, reward: "Story Sense +1 · 10 coins", next: "unseen-audience", sponsor: "The Archivist marks your page." },
    ],
  },
  {
    id: "unseen-audience", title: "The Unseen Audience", tier: "TIER 02 · WITNESS", day: 4, objective: "Find out who is watching.",
    narration: ["The lights in the shelter flicker in a pattern: short, short, long.", "You know the code. It is not a distress signal. It is applause.", "A new line appears in the air, visible only when you stop looking directly at it.", "THE AUDIENCE HAS REQUESTED A BETTER SCENE."],
    choices: [
      { id: "perform", title: "Give them a better scene.", subtitle: "Turn fear into theatre.", tone: "bold", statDelta: { willpower: -1, coins: 20 }, reward: "20 coins", next: "survivors-bargain", sponsor: "Several unseen figures lean closer." },
      { id: "lens", title: "Look through the Cracked Lens.", subtitle: "The item hums when the air lies.", tone: "clever", requirement: { stat: "storySense", min: 2, label: "Story Sense 2" }, statDelta: { storySense: 1, coins: 16 }, reward: "Story Sense +1 · 16 coins", next: "survivors-bargain", sponsor: "The Archivist sends a private note: Noted." },
      { id: "ignore", title: "Ignore the audience.", subtitle: "You refuse to be content.", tone: "safe", statDelta: { agility: 1, hp: -4 }, reward: "Agility +1", next: "survivors-bargain", sponsor: "The Quiet Judge looks away." },
    ],
  },
  {
    id: "survivors-bargain", title: "The Survivor's Bargain", tier: "TIER 02 · WITNESS", day: 6, objective: "Leave the shelter with a purpose.",
    narration: ["A survivor named Mara has a map and a trembling hand.", "She says the next safe zone is real. She also says the road there has started to remember people.", "The map is offered to you in exchange for a promise you may not be able to keep."],
    choices: [
      { id: "promise", title: "Promise to return for everyone.", subtitle: "A lie can still be a bridge.", tone: "safe", statDelta: { willpower: 1, hp: -5 }, reward: "Willpower +1", next: "story-stabilizes", sponsor: "The Hearthkeeper approves, cautiously." },
      { id: "map", title: "Take the map and leave alone.", subtitle: "Survival is not a group project.", tone: "clever", statDelta: { agility: 1, coins: 12 }, reward: "Agility +1 · 12 coins", next: "story-stabilizes", sponsor: "The Quiet Judge approves of the honesty." },
      { id: "charm", title: "Give Mara the Threadbare Charm.", subtitle: "Trade certainty for another chance.", tone: "desperate", requirement: { stat: "willpower", min: 2, label: "Willpower 2" }, statDelta: { willpower: 1, hp: 8 }, reward: "Willpower +1 · HP restored", next: "story-stabilizes", sponsor: "The Red Witness is silent for a long time." },
    ],
  },
  {
    id: "story-stabilizes", title: "The Story Stabilizes", tier: "TIER 03 · THE TURN", day: 9, objective: "Choose what kind of story survives.",
    narration: ["At the edge of the city, the sky folds like a page turned by an impatient hand.", "Every choice you made is written there: the food, the lock, the audience, the promise.", "The voice returns. This time, it asks you a question instead of issuing a rule.", "WHO WILL YOU BE WHEN THE STORY STOPS WATCHING?"],
    choices: [
      { id: "author", title: "Write a new ending.", subtitle: "The page is blank for one breath.", tone: "bold", requirement: { stat: "storySense", min: 2, label: "Story Sense 2" }, statDelta: { storySense: 1, coins: 30 }, reward: "The story recognizes you · 30 coins", next: "win", sponsor: "The Archivist closes the book. At last." },
      { id: "survive", title: "Keep walking.", subtitle: "Some victories are simply continued motion.", tone: "safe", statDelta: { hp: -8 }, reward: "You remain alive.", next: "win", sponsor: "The Quiet Judge gives a single nod." },
      { id: "surrender", title: "Ask the audience for mercy.", subtitle: "Even a watched life can ask for an intermission.", tone: "desperate", statDelta: { hp: -99 }, reward: "The page goes dark.", next: "lose", sponsor: "The audience applauds, but not for you." },
    ],
  },
];

export const findScenario = (id: string) => SCENARIOS.find((scenario) => scenario.id === id) ?? SCENARIOS[0];

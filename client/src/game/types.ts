export type StatKey = "strength" | "agility" | "willpower" | "storySense";
export type GamePhase = "reading" | "choice" | "resolving" | "between" | "win" | "lose";
export type PlayerStats = { hp: number; maxHp: number; strength: number; agility: number; willpower: number; storySense: number };
export type Item = { id: string; name: string; short: string; icon: string; description: string; count: number; usable?: boolean };
export type Choice = { id: string; title: string; subtitle: string; tone: "safe" | "bold" | "clever" | "desperate"; requirement?: { stat: StatKey; min: number; label: string }; hidden?: boolean; outcome?: string; statDelta?: Partial<Record<"hp" | "strength" | "agility" | "willpower" | "storySense" | "coins", number>>; reward?: string; next: string | "win" | "lose"; sponsor?: string; itemGain?: string };
export type Scenario = { id: string; title: string; tier: string; day: number; objective: string; narration: string[]; choices: Choice[] };
export type GameState = { phase: GamePhase; scenarioId: string; stats: PlayerStats; coins: number; inventory: Record<string, number>; history: { day: number; text: string; tone: "good" | "bad" | "neutral" }[]; sponsorLog: { label: string; text: string; tone: "approve" | "watch" | "warn" }[]; lastOutcome?: { text: string; reward?: string; tone: "good" | "bad" | "neutral" }; selectedChoice?: string };

import PlayerCard from "./components/player-card";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen px-4 py-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center font-display">
        Leaderboard
      </h1>
      <div className="flex-1 flex flex-col gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <PlayerCard key={i} />
        ))}
      </div>
    </div>
  );
}

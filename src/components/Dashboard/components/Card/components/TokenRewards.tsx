interface TokenReward {
  timestamp: string;
  hash: string;
  value: string;
}

interface TokenRewardsProps {
  rewards: TokenReward[];
}

export function TokenRewards({ rewards }: TokenRewardsProps) {
  // Calculate total tokens by summing up all reward values
  const totalTokens = rewards.reduce((total, reward) => {
    const value = parseFloat(reward.value.replace("+", "").replace(" WTR", ""));
    return total + value;
  }, 0);

  return (
    <div className="h-[320px] w-full bg-white/5 backdrop-blur-sm rounded-lg p-4">
      <div className="text-white text-lg font-medium mb-4">Token Rewards</div>
      <div className="flex flex-col h-[calc(100%-2rem)]">
        <div className="flex-1">
          {rewards.map((reward, index) => (
            <div key={reward.hash}>
              <div className="flex-1">
                <div className="text-white/60 text-sm mb-2">
                  {reward.timestamp}
                </div>
                <a
                  href={`https://etherscan.io/tx/${reward.hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm mb-1 hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
                >
                  {reward.hash}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-80"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <div className="text-emerald-400 text-base font-medium">
                  {reward.value}
                </div>
              </div>
              {index < rewards.length - 1 && (
                <div className="h-px w-full bg-white/10 my-4" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-white/80 text-sm font-medium">
                Total Tokens
              </span>
              <span className="text-emerald-400 text-sm font-semibold">
                {totalTokens.toFixed(1)} IoTK
              </span>
            </div>
            <button
              className="border text-xs font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-3 py-1.5 rounded-full bg-emerald-400/10 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap hover:bg-emerald-400/20 transition-colors"
              onClick={() => {}}
            >
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

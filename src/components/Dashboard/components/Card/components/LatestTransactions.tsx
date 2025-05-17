interface Transaction {
  type: "water-usage" | "token-reward";
  timestamp: string;
  hash: string;
  value: string;
}

interface LatestTransactionsProps {
  transactions: Transaction[];
}

export function LatestTransactions({ transactions }: LatestTransactionsProps) {
  return (
    <div className="h-[320px] w-full bg-white/5 backdrop-blur-sm rounded-lg p-4">
      <div className="text-white text-lg font-medium mb-4">
        Latest Transactions
      </div>
      <div className="flex flex-col h-[calc(100%-2rem)]">
        {transactions.map((transaction, index) => (
          <div key={transaction.hash}>
            <div className="flex-1">
              <div className="text-white/80 text-base font-medium mb-1">
                {transaction.type === "water-usage"
                  ? "Water Usage"
                  : "Token Reward"}
              </div>
              <div className="text-white/60 text-sm mb-2">
                {transaction.timestamp}
              </div>
              <a
                href={`https://etherscan.io/tx/${transaction.hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm mb-1 hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
              >
                {transaction.hash}
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
                {transaction.value}
              </div>
            </div>
            {index < transactions.length - 1 && (
              <div className="h-px w-full bg-white/10 my-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

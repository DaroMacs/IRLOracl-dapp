import { StatusIndicator } from "./StatusIndicator";

interface BlockchainStatusProps {
  isConnected: boolean;
  lastSync: string;
  blockNumber: number;
}

export function BlockchainStatus({
  isConnected,
  lastSync,
  blockNumber,
}: BlockchainStatusProps) {
  const contractAddress = "0x1234...5678"; // This should come from your actual contract

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 space-y-3 w-full">
      <div className="flex items-center gap-2">
        <span className="text-white text-lg font-medium">
          Blockchain Status
        </span>
        <StatusIndicator isConnected={isConnected} />
      </div>
      <div className="text-white/80 text-base space-y-2">
        <p className="font-medium">Connected to: Ethereum</p>
        <p>Last sync: {lastSync}</p>
        <p>Block #{blockNumber.toLocaleString()}</p>
        <div className="flex items-center gap-1">
          <span className="text-white/80 text-base">Contract:</span>
          <a
            href={`https://etherscan.io/address/${contractAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
          >
            {contractAddress}
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
        </div>
      </div>
    </div>
  );
}

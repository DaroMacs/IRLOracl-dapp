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
      </div>
    </div>
  );
}

import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { getDevice } from "@/data/devices.data";
import { TDevice } from "@/types/TDevice";
import { BlockchainStatus } from "./components/BlockchainStatus";
import { ConsumptionChart } from "./components/ConsumptionChart";
import { LatestTransactions } from "./components/LatestTransactions";
import { StatusIndicator } from "./components/StatusIndicator";
import { TokenRewards } from "./components/TokenRewards";
import { TransactionChart } from "./components/TransactionChart";

export function Card({
  index,
  toggleDeviceStatus,
  device,
}: {
  index: number;
  toggleDeviceStatus: (device: string) => Promise<boolean>;
  device: TDevice;
}) {
  const deviceDB = getDevice(`Device${index + 1}`);
  if (!deviceDB) return null;

  const { name, unit } = deviceDB;

  const blockchainStatus = {
    isConnected: device.enabled,
    lastSync: "2 min ago",
    blockNumber: 22998861,
  };

  const transactions = [
    {
      type: "water-usage" as const,
      timestamp: "Today, 10:45 AM",
      hash: "0x7c2...b9a4",
      value: `${Math.floor(Math.random() * 25)} ${unit}`,
    },
    {
      type: "token-reward" as const,
      timestamp: "Today, 9:30 AM",
      hash: "0x3f1...72c6",
      value: `+${2.1 + index} IoTK`,
    },
  ];

  const rewards = [
    {
      timestamp: "Today, 9:30 AM",
      hash: "0x3f1...72c6",
      value: `+${2.1 + index} IoTK`,
    },
    {
      timestamp: "Today, 8:15 AM",
      hash: "0x5d2...e8b3",
      value: `+${Math.floor(Math.random() * 10)} IoTK`,
    },
  ];

  return (
    <CardSpotlight className="min-h-[400px] w-full p-6">
      <div className="text-white text-2xl relative z-20 font-sans mb-6 flex justify-between items-center">
        <div>
          <span className="font-[400]">IoT Device: </span>
          <span className="font-[600]">{name}</span>
        </div>
        <StatusIndicator isConnected={device.enabled} useSimpleText={true} />
      </div>
      <div className="flex flex-col gap-4 relative z-20">
        <div className="flex gap-4 items-stretch">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/device${index + 1}.avif`}
            className="h-[320px] w-[320px] object-cover rounded-2xl group-hover/card:shadow-xl"
            alt="Water Flow Monitor Device"
          />
          <div className="flex gap-4 flex-1">
            <LatestTransactions transactions={transactions} />
            <TokenRewards rewards={rewards} />
          </div>

          <div className="flex flex-col items-center gap-4 flex-1">
            <BlockchainStatus {...blockchainStatus} />
            <button
              className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full w-full bg-emerald-400/10 backdrop-blur-sm"
              onClick={() => toggleDeviceStatus(`Device${index + 1}`)}
            >
              <span>{device.enabled ? "Disconnect" : "Connect"}</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="w-full h-[320px] bg-white/5 backdrop-blur-sm rounded-2xl p-4">
            <ConsumptionChart unit={unit} />
          </div>
          <div className="w-full h-[320px] bg-white/5 backdrop-blur-sm rounded-2xl p-4">
            <TransactionChart />
          </div>
        </div>
      </div>
    </CardSpotlight>
  );
}

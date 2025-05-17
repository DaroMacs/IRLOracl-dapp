import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { BlockchainStatus } from "./components/BlockchainStatus";
import { ConsumptionChart } from "./components/ConsumptionChart";
import { StatusIndicator } from "./components/StatusIndicator";

export function Card() {
  const isConnected = true; // This should come from your actual device status
  const blockchainStatus = {
    isConnected: true,
    lastSync: "2 min ago",
    blockNumber: 18732091,
  };

  return (
    <CardSpotlight className="min-h-[400px] w-full p-6">
      <div className="text-white text-2xl relative z-20 font-sans mb-6 flex justify-between items-center">
        <div>
          <span className="font-[400]">IoT Device: </span>
          <span className="font-[600]">Water Flow Monitor</span>
        </div>
        <StatusIndicator isConnected={isConnected} useSimpleText={true} />
      </div>
      <div className="flex flex-col gap-4 relative z-20">
        <div className="flex gap-4 items-stretch">
          {/* <div className="flex gap-4 items-stretch flex-1 min-w-[320px]"> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1605387132052-357a341cc515?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-[320px] w-[320px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          <div className="h-[320px] w-full bg-white/5 backdrop-blur-sm rounded-lg p-4">
            <div className="text-white text-lg font-medium mb-4">
              Latest Transactions
            </div>
            <div className="text-white/60 text-sm">No transactions yet</div>
          </div>
          {/* </div> */}

          <div className="flex flex-col items-center gap-4 flex-1">
            <BlockchainStatus {...blockchainStatus} />
            <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full w-full bg-emerald-400/10 backdrop-blur-sm">
              <span>Disconnect</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </div>
        </div>

        <div className="w-full h-[320px] bg-white/5 backdrop-blur-sm rounded-lg p-4">
          <ConsumptionChart />
        </div>
      </div>
    </CardSpotlight>
  );
}

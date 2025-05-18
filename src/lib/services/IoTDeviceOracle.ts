import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/lib/contracts";
import { getWalletClient, publicClient } from "@/lib/viem";
import type { TDevice } from "@/types/TDevice";

export async function getAllDevices(): Promise<TDevice[]> {
  try {
    const devicesData: TDevice[] = [];
    let currentId = 1;
    let continueSearching = true;

    while (continueSearching) {
      try {
        const deviceId = `Device${currentId}`;
        const [device, totalData, timestamp, owner, enabled] =
          (await publicClient.readContract({
            address: CONTRACT_ADDRESS,
            abi: CONTRACT_ABI,
            functionName: "getDeviceData",
            args: [deviceId],
          })) as [string, bigint, bigint, string, boolean];

        devicesData.push({
          device,
          totalData,
          timestamp,
          owner,
          enabled,
        });

        currentId++;
      } catch (error) {
        continueSearching = false;
      }
    }

    return devicesData;
  } catch (error) {
    console.error("Error fetching all devices:", error);
    throw error;
  }
}

// Function to toggle the device status
export async function toggleDeviceStatus(device: string): Promise<boolean> {
  const { walletClient, address } = await getWalletClient();

  try {
    // Calling the contract's toggleDeviceStatus function
    const transactionHash = await walletClient.writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "toggleDeviceStatus", // Ensure the function name matches the one in your contract
      args: [device], // Pass the device name as an argument
      account: address, // Pass the address of the sender here
    });

    return true;
  } catch (error) {
    console.error("Error toggling device status:", error);
    return false; // Return false if an error occurs
  }
}

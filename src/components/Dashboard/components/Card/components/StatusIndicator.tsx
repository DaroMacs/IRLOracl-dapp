import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  isConnected: boolean;
  useSimpleText?: boolean;
}

export function StatusIndicator({
  isConnected,
  useSimpleText = false,
}: StatusIndicatorProps) {
  return (
    <span className="inline-flex items-center ml-2">
      <span className="relative flex h-3 w-3">
        {isConnected && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        )}
        <span
          className={cn(
            "relative inline-flex rounded-full h-3 w-3",
            isConnected ? "bg-green-500" : "bg-red-500",
          )}
        />
      </span>
      <span
        className={cn(
          "ml-2 text-sm font-medium",
          isConnected ? "text-green-500" : "text-red-500",
        )}
      >
        {isConnected
          ? useSimpleText
            ? "ON"
            : "Connected"
          : useSimpleText
          ? "OFF"
          : "Disconnected"}
      </span>
    </span>
  );
}

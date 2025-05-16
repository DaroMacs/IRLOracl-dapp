import { usePrivy } from "@privy-io/react-auth";

const ConnectWallet = () => {
  const { ready, authenticated, user, logout, login } = usePrivy();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    logout();
  };

  return (
    <button
      className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
      onClick={() => {
        if (authenticated) {
          handleLogout();
        } else {
          login();
        }
      }}
    >
      <span>
        {" "}
        {user?.wallet?.address
          ? user.wallet.address.slice(0, 6) +
            "..." +
            user.wallet.address.slice(-4)
          : "Connect Wallet"}
      </span>

      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
    </button>
  );
};

export default ConnectWallet;

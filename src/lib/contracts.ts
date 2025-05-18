export const CONTRACT_ADDRESS = "0xe891cC6391B8561432139687480C0882EA86E8BC";

export const CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "device",
        type: "string",
      },
    ],
    name: "DeviceCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalData",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "device",
        type: "string",
      },
    ],
    name: "DeviceDataRecorded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "device",
        type: "string",
      },
      { indexed: false, internalType: "bool", name: "enabled", type: "bool" },
    ],
    name: "DeviceStatusChanged",
    type: "event",
  },
  {
    inputs: [{ internalType: "string", name: "_device", type: "string" }],
    name: "createDevice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "deviceNames",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "", type: "string" }],
    name: "deviceRecords",
    outputs: [
      { internalType: "string", name: "device", type: "string" },
      { internalType: "uint256", name: "totalData", type: "uint256" },
      { internalType: "uint256", name: "timestamp", type: "uint256" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bool", name: "enabled", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_device", type: "string" }],
    name: "getDeviceData",
    outputs: [
      { internalType: "string", name: "", type: "string" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
      { internalType: "bool", name: "", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_totalData", type: "uint256" },
      { internalType: "string", name: "_device", type: "string" },
    ],
    name: "recordDeviceData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_device", type: "string" }],
    name: "toggleDeviceStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

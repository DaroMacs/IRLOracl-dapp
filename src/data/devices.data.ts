interface IDevice {
  id: string;
  name: string;
  unit: string;
}

const devices: IDevice[] = [
  {
    id: "Device1",
    name: "Water Flow Monitor",
    unit: "L/s",
  },
  {
    id: "Device2",
    name: "Energy Monitor",
    unit: "kWh",
  },
  {
    id: "Device3",
    name: "Gas Monitor",
    unit: "m³",
  },
  {
    id: "Device4",
    name: "Temperature Monitor",
    unit: "°C",
  },
  {
    id: "Device5",
    name: "Humidity Monitor",
    unit: "%",
  },
];

const getDevice = (id: string): IDevice | undefined => {
  return devices.find((device) => device.id === id);
};

export { devices, getDevice };

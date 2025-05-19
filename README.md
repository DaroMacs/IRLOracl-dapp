# IRL Oracles dApp

IRL Oracles is a cutting-edge Web3 platform that revolutionizes real-world data collection and verification through IoT devices. By seamlessly bridging the physical and digital worlds, we create a decentralized network of trusted data streams that are instantly recorded on the blockchain.

## 🌟 Key Features

- **Real-time Data Collection**: Seamless integration with IoT devices for instant data recording
- **Blockchain Verification**: All data is immutably recorded on the blockchain
- **Decentralized Marketplace**: Fair and transparent data exchange between providers and consumers
- **Automated Rewards**: Smart contract-based compensation system for data providers
- **Instant Access**: Quick and secure access to verified data streams
- **Advanced Validation**: Robust data quality assurance mechanisms
- **Energy-efficient**: Optimized protocols for sustainable data transmission
- **User-friendly Interface**: Intuitive design for both providers and consumers

## 💡 Benefits and Use Cases

### Research and Development

- **Academic Research**: Enable researchers to access verified, real-time data for scientific studies
- **Environmental Studies**: Track and analyze environmental changes through distributed sensor networks
- **Urban Planning**: Gather insights for smart city development and infrastructure optimization
- **Climate Research**: Monitor and analyze climate patterns with verified, immutable data

### Business Intelligence

- **Resource Optimization**: Make data-driven decisions for resource allocation and efficiency
- **Predictive Analytics**: Leverage historical data for forecasting and trend analysis
- **Market Research**: Access real-world consumer behavior and usage patterns
- **Supply Chain Optimization**: Monitor and optimize logistics through verified sensor data

### Public Sector Applications

- **Policy Making**: Support evidence-based policy decisions with verified data
- **Public Health**: Monitor environmental factors affecting community health
- **Emergency Response**: Real-time data for disaster prevention and response
- **Infrastructure Management**: Smart monitoring of public utilities and services

### Sustainability and ESG

- **Carbon Footprint Tracking**: Monitor and verify environmental impact metrics
- **Resource Conservation**: Optimize resource usage through data-driven insights
- **ESG Reporting**: Provide verified data for environmental, social, and governance reporting
- **Sustainable Development**: Support SDG goals with reliable, real-world data

## 🔗 Relevant Links

- [Live Demo Landing page/Dashboard](https://irloracles.netlify.app) (https://irloracles.netlify.app/dashboard)
  Remark: In order to see the dashboard you must connect any wallet.

**Landing:**
<br />
<img width="600" alt="image" src="https://github.com/user-attachments/assets/a5c7d418-b543-45ae-9e88-bdc7a46ad632" />

**Dashboard:**
<br />
<img width="600" alt="image" src="https://github.com/user-attachments/assets/08e66a7b-a4ae-4ba5-a6ce-b3237b2395f5" />

- [Smart Contracts](https://github.com/DaroMacs/IRLOracles-smart-contract)

## 🔗 IoT Integration Links

- [Local Server](https://github.com/DaroMacs/local-server-esp32): This server provides connectivity to from the IoT's devide to its IP and will be used to send the consumption or data to be recorded in the smart contract.

- [ESP32 Water Monitor Consumption Example](https://github.com/DaroMacs/ESP32-YF-S201): This program runs inside the ROM of the ESP32 which is connected to a flow water sensor that detects the quantity of water that flows in the device and then it is send to its local server(link above)

Prototype device with LCD:
<br />
<img src="https://github.com/user-attachments/assets/4e19a099-a603-4a33-a5db-c66df3ec5434" alt="Prototype device with LCD" width="250" />

Flow sensor detection:
The serial monitor shows the water flow in liters, when water stops flowing it stops counting and the when flows again it measures as seen in this video:
https://www.loom.com/share/bf934620799d4c64af9e2f42ae458c29

- [ESP32 WIFI Connection](https://github.com/DaroMacs/ESP32WifiConnect): This program is to connect the ESP32 to the WIFI and send the data from the sensors via wireless.

Remark: The ESP32 can be customized to use any kind of sensors and therefore gather any kind of measurable IRL/Physical data.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MetaMask or compatible Web3 wallet
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/IRLOracles-dapp.git
cd IRLOracles-dapp
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example
```

Fill in the required environment variables in `.env.example`

add:

```env
NEXT_PUBLIC_PRIVY_APP_ID="1234"
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Authentication**: Privy
- **Blockchain**: Ethereum, Smart Contracts
- **Data Visualization**: Recharts, Three.js
- **Animation**: Framer Motion
- **State Management**: React Hooks

## 📱 Features in Detail

### Data Provider Features

- Easy IoT device integration
- Real-time data streaming
- Automated reward distribution
- Performance analytics
- Device management dashboard

### Data Consumer Features

- Instant data access
- Data quality metrics
- Historical data analysis
- Custom data stream subscriptions
- API integration options

## 🔒 Security

- Smart contract audits
- Encrypted data transmission
- Secure wallet integration
- Regular security updates
- Access control mechanisms

---

import './App.css';
import { UseWalletProvider } from 'use-wallet'
import Home from "./pages/home";

const App = () => {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

// export default App;
export default () => (
  <UseWalletProvider
    chainId={4}
    connectors={{
      // This is how connectors get configured
    }}
  >
    <App />
  </UseWalletProvider>
);

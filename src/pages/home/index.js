import { useWallet } from 'use-wallet';

import DeployNFTContract from '../../components/deploy-contract';
import CreateNFT from '../../components/create-token';
import GetCommission from '../../components/get-commission';
import ReduceCommission from '../../components/reduce-commission';
import ClaimLostToken from '../../components/claim-lost-token';
import ListForSale from '../../components/list-for-sale';
import RemoveFromSale from '../../components/remove-from-sale';
import Buy from '../../components/buy';
import OfferToPayCommission from '../../components/offer-pay-commission';
import TokensByAuthor from '../../components/tokens-by-author';

const Home = () => {

  const wallet = useWallet()
  
  const connectWallet = () => {
    
    if (wallet.status !== 'connected') {
        console.log('Connecting Wallet');
        wallet.connect();
    } else {
        console.log('Wallet is already connected');
    }
  }

  return (
    <div style={{ padding: '20px 40px' }}>
      <h2>Non Fungible Contract</h2>
      <button onClick={connectWallet}>Connect Wallet</button>
      <div style={{display: 'flex', marginTop: '30px'}}>
        <div style={{flex: '1'}}>
          <DeployNFTContract></DeployNFTContract>
          <GetCommission></GetCommission>
          <ReduceCommission></ReduceCommission>
          <RemoveFromSale></RemoveFromSale>
          <OfferToPayCommission></OfferToPayCommission>
          <ClaimLostToken></ClaimLostToken>
        </div>
        <div style={{flex: '1'}}>
          <CreateNFT></CreateNFT>
          <ListForSale></ListForSale>
          <Buy></Buy>
          <TokensByAuthor></TokensByAuthor>
          
        </div>
      </div>
    </div>
  );
}

export default Home;

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi } from '../../contracts/nft-contract.abi.json';
import { NFT_CONTRACT_ADDRESS } from '../../constants/contract-address';
import { buyWithCoins, buyWithTokens } from '../../contracts/nft-contract';
import { approveToken } from '../../contracts/erc20';

const Buy = () => {

    const [tokenId, setTokenId] = useState(0);

    const COMMISSION_TOKEN_ADDRESS = "0x022E292b44B5a146F2e8ee36Ff44D3dd863C915c";
  
    const buyWithCoin = async (event) => {
        event.preventDefault();
        console.log('buy with coin', tokenId);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const res = await buyWithCoins(NFT_CONTRACT_ADDRESS[4], signer, tokenId);
        console.log({res});
    }

    const buyWithToken = async (event) => {
        event.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        await approveToken(COMMISSION_TOKEN_ADDRESS, signer, NFT_CONTRACT_ADDRESS[4], '1000');
        const res = await buyWithTokens(NFT_CONTRACT_ADDRESS[4], signer, tokenId);
        console.log({res});
    }


    return (
        <div style={{ textAlign: 'left'}}>
            <h3>Buy Token</h3>
            <div>
                <p>Token ID</p>
                <input type="text" value={tokenId} onChange={(evt) => setTokenId(evt.target.value)} />
            </div>
            <div style={{ paddingTop: '16px' }}>
                <button onClick={buyWithCoin}> Buy With Coins</button>
                <button onClick={buyWithToken}> Buy With Tokens</button>
            </div>
        </div>
    );
}

export default Buy;

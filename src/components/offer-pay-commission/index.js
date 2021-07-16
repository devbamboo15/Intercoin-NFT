import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi } from '../../contracts/nft-contract.abi.json';
import { NFT_CONTRACT_ADDRESS } from '../../constants/contract-address';
import { offerToPayCommission } from '../../contracts/nft-contract';

const OfferToPayCommission = () => {

    const [tokenId, setTokenId] = useState(0);
    const [amount, setAmount] = useState(0);
  
    const submitData = async (event) => {
        event.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const res = await offerToPayCommission(NFT_CONTRACT_ADDRESS[4], signer, tokenId, amount);
        console.log({res});
        // setCommission(res.toString());
    }


    return (
        <div style={{ textAlign: 'left'}}>
            <h3>Offer To Pay Commission</h3>
            <form onSubmit={submitData}>
                <div>
                    <p>Token ID</p>
                    <input type="text" value={tokenId} onChange={(evt) => setTokenId(evt.target.value)} />
                </div>
                <div>
                    <p>Amount</p>
                    <input type="text" value={amount} onChange={(evt) => setAmount(evt.target.value)} />
                </div>
                <div style={{ paddingTop: '16px' }}>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default OfferToPayCommission;

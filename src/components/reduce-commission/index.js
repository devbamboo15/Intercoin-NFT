import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi } from '../../contracts/nft-contract.abi.json';
import { NFT_CONTRACT_ADDRESS } from '../../constants/contract-address';
import { reduceCommission } from '../../contracts/nft-contract';

const ReduceCommission = () => {

    const [tokenId, setTokenId] = useState('');
    const [reduceCommissionPercent, setReduceCommissionPercent] = useState(0);
  
    const submitData = async (event) => {
        event.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const res = await reduceCommission(NFT_CONTRACT_ADDRESS[4], signer, tokenId, reduceCommissionPercent);
        console.log({res});
    }


    return (
        <div style={{ textAlign: 'left'}}>
            <h3>Reduce Commission</h3>
            <form onSubmit={submitData}>
                <div>
                    <p>Token ID</p>
                    <input type="text" value={tokenId} onChange={(evt) => setTokenId(evt.target.value)} />
                </div>
                <div>
                    <p>Reduce Commissoin Percent [0 - 10000]</p>
                    <input type="text" value={reduceCommissionPercent} onChange={(evt) => setReduceCommissionPercent(evt.target.value)} />
                </div>
                <div style={{ paddingTop: '16px' }}>
                    <input type="submit" value="Set" />
                </div>
            </form>
        </div>
    );
}

export default ReduceCommission;

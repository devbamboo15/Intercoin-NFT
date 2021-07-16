import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi } from '../../contracts/nft-contract.abi.json';
import { NFT_CONTRACT_ADDRESS } from '../../constants/contract-address';
import { getCommission } from '../../contracts/nft-contract';

const GetCommission = () => {

    const [tokenId, setTokenId] = useState('');
    const [commission, setCommission] = useState('');
  
    const getData = async (event) => {
        event.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const res = await getCommission(NFT_CONTRACT_ADDRESS[4], signer, tokenId);
        console.log({res});
    }


    return (
        <div style={{ textAlign: 'left'}}>
            <h3>Get Commission</h3>
            <form onSubmit={getData}>
                <div>
                    <p>Token ID</p>
                    <input type="text" value={tokenId} onChange={(evt) => setTokenId(evt.target.value)} />
                </div>
                <div>
                    <p>{commission}</p>
                </div>
                <div style={{ paddingTop: '16px' }}>
                    <input type="submit" value="Get" />
                </div>
            </form>
        </div>
    );
}

export default GetCommission;

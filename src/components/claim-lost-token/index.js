import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { NFT_CONTRACT_ADDRESS } from '../../constants/contract-address';
import { claimLostToken } from '../../contracts/nft-contract';

const ClaimLostToken = () => {

    const [address, setAddress] = useState('');
  
    const submitData = async (event) => {
        event.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const res = await claimLostToken(NFT_CONTRACT_ADDRESS[4], signer, address);
        console.log({res});
    }


    return (
        <div style={{ textAlign: 'left'}}>
            <h3>Claim Lost Token</h3>
            <form onSubmit={submitData}>
                <div>
                    <p>ERC20 Address</p>
                    <input type="text" value={address} onChange={(evt) => setAddress(evt.target.value)} />
                </div>
                <div style={{ paddingTop: '16px' }}>
                    <input type="submit" value="Claim" />
                </div>
            </form>
        </div>
    );
}

export default ClaimLostToken;

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { abi } from '../../contracts/nft-contract.abi.json';
import { NFT_CONTRACT_ADDRESS } from '../../constants/contract-address';
import { offerToPayCommission, getCommission } from '../../contracts/nft-contract';
import { approveToken } from '../../contracts/erc20';

const OfferToPayCommission = () => {

    const [tokenId, setTokenId] = useState(0);
    const [amount, setAmount] = useState(0);
    
    const COMMISSION_TOKEN_ADDRESS = "0x022E292b44B5a146F2e8ee36Ff44D3dd863C915c";

    const submitData = async (event) => {
        event.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const res = await getCommission(NFT_CONTRACT_ADDRESS[4], signer, tokenId);

        await approveToken(res[0], signer, NFT_CONTRACT_ADDRESS[4], '1000');
        await offerToPayCommission(NFT_CONTRACT_ADDRESS[4], signer, tokenId, amount);
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

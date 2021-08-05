import { useEffect, useState } from 'react';
import { ethers, utils } from 'ethers';
import { abi } from '../../contracts/nft-contract.abi.json';
import { NFT_CONTRACT_ADDRESS } from '../../constants/contract-address';
import { getCommission } from '../../contracts/nft-contract';

const GetCommission = () => {

    const [tokenId, setTokenId] = useState('');
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState(false);
  
    const getData = async (event) => {
        event.preventDefault();
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const res = await getCommission(NFT_CONTRACT_ADDRESS[4], signer, tokenId);
            if (res[0]) {
                setStatus(true);
                setAmount(utils.formatUnits(res[1], 0));
                setAddress(res[0]);
                console.log({res});
            }
        } catch (e) {
            setStatus(false);
            console.log(e);
        }
        
    }


    return (
        <div style={{ textAlign: 'left'}}>
            <h3>Get Commission</h3>
            <form onSubmit={getData}>
                <div>
                    <p>Token ID</p>
                    <input type="text" value={tokenId} onChange={(evt) => setTokenId(evt.target.value)} />
                </div>
                <div style={{ paddingTop: '16px' }}>
                    <input type="submit" value="Get" />
                </div>
                { status && 
                    <div>
                        <p>Commission Token: {address}</p>
                        <p>Commission Amount: {amount}</p>
                    </div>
                }
                
            </form>
        </div>
    );
}

export default GetCommission;

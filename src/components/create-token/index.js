import { useState } from 'react';
import { ethers } from 'ethers';
import { abi } from '../../contracts/nft-contract.abi.json';
import { NFT_CONTRACT_ADDRESS } from '../../constants/contract-address';
import { create } from '../../contracts/nft-contract';

const CreateNFT = () => {

    const [uri, setUri] = useState('');
    const [token, setToken] = useState('');
    const [amount, setAmount] = useState(0);
    const [multiply, setMultiply] = useState(0);
    const [accrue, setAccrue] = useState(0);
    const [intervalSeconds, setIntervalSeconds] = useState(0);
    const [reduceCommission, setReduceCommission] = useState(0);

  
    const createToken = async (event) => {
        event.preventDefault();
        console.log('create Token');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS[4], abi, signer);
        const res = await create(NFT_CONTRACT_ADDRESS[4], signer, uri, 
            {
                token,
                amount,
                multiply,
                accrue,
                intervalSeconds,
                reduceCommission,
            }
        );

        console.log({res});

        contract.on("NewTokenAppear", async (author, tokenId) => {
            console.log({ author, tokenId });
        });
    }


    return (
        <div style={{ textAlign: 'left'}}>
            <h3>Create NFT Token</h3>
            <form onSubmit={createToken}>
                <div>
                    <p>Uri</p>
                    <input type="text" value={uri} onChange={(evt) => setUri(evt.target.value)} />
                </div>
                <div>
                    <p>Token</p>
                    <input type="text" value={token} onChange={(evt) => setToken(evt.target.value)} />
                </div>
                <div>
                    <p>Amount</p>
                    <input type="text" value={amount} onChange={(evt) => setAmount(evt.target.value)} />
                </div>
                <div>
                    <p>Multiply</p>
                    <input type="text" value={multiply} onChange={(evt) => setMultiply(evt.target.value)} />
                </div>
                <div>
                    <p>Accrue</p>
                    <input type="text" value={accrue} onChange={(evt) => setAccrue(evt.target.value)} />
                </div>
                <div>
                    <p>IntervalSeconds</p>
                    <input type="text" value={intervalSeconds} onChange={(evt) => setIntervalSeconds(evt.target.value)} />
                </div>
                <div>
                    <p>ReduceCommission</p>
                    <input type="text" value={reduceCommission} onChange={(evt) => setReduceCommission(evt.target.value)} />
                </div>
                <div style={{ paddingTop: '16px' }}>
                    <input type="submit" value="Create Token" />
                </div>
                
            </form>
        </div>
    );
}

export default CreateNFT;

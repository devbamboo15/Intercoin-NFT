import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from '../../contracts/nft-contract.abi.json';
import factoryAbi from '../../contracts/nft-factory.abi.json';
import { NFT_FACTORY_ADDRESS, NFT_CONTRACT_ADDRESS } from '../../constants/contract-address';
import { produce } from '../../contracts/nft-factory';

const DeployNFTContract = () => {

    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [deployStatus, setDeployStatus] = useState(false);
    const [contractAddress, setContractAddress] = useState('');
  
    const deployContract = async (event) => {
        event.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const factory = new ethers.Contract(NFT_FACTORY_ADDRESS[4], factoryAbi, signer);
        await produce(NFT_FACTORY_ADDRESS[4], signer, name, symbol, ['0x0000000000000000000000000000000000000000', 'owners']);

        factory.on("Produced", async (from, to) => {
            console.log('contract address', to);
            try {
                /*
                const nft = new ethers.Contract(to, abi, signer);
                await nft.initialize(name, symbol, ['0x6A482d254bb515674bC3d4Ef37D61353529ad1f4', 'owners']);
                */
                setDeployStatus(true);
                setContractAddress(to);
                NFT_CONTRACT_ADDRESS[4] = to;
            } catch (e) {
                console.log(e);
            }
        });
    }


    return (
        <div style={{ textAlign: 'left'}}>
            <h3>Deploy NFT Contract</h3>
            <form onSubmit={deployContract}>
                <div>
                    <p>Name</p>
                    <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} />
                </div>
                <div>
                    <p>Symbol</p>
                    <input type="text" value={symbol} onChange={(evt) => setSymbol(evt.target.value)} />
                </div>
                <div style={{ paddingTop: '16px' }}>
                    <input type="submit" value="Deploy Contract" />
                </div>
            </form>
            {
                deployStatus && 
                <p>
                    Contract is deployed successfully. Address is {contractAddress}
                </p>
            }
        </div>
    );
}

export default DeployNFTContract;

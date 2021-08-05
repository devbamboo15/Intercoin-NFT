import { ethers } from 'ethers';
import abi from './nft-factory.abi.json';

export async function produce(address, signer, name, symbol, communitySettings) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.produce(name, symbol, communitySettings);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

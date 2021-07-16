import { ethers } from 'ethers';
import abi from './nft-factory.abi.json';

export async function produce(address, signer) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.produce();
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

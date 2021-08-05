import { useEffect, useState } from 'react';
import { ethers, utils } from 'ethers';
import { abi } from '../../contracts/nft-contract.abi.json';
import { NFT_CONTRACT_ADDRESS } from '../../constants/contract-address';
import { tokensByAuthor } from '../../contracts/nft-contract';

const TokensByAuthor = () => {

    const [author, setAuthor] = useState('');
    const [tokens, setTokens] = useState([]);
  
    const submitData = async (event) => {
        event.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const res = await tokensByAuthor(NFT_CONTRACT_ADDRESS[4], signer, author);
        setTokens(res);
        console.log({res});
    }


    return (
        <div style={{ textAlign: 'left'}}>
            <h3>Tokens By Author</h3>
            <form onSubmit={submitData}>
                <div>
                    <p>Author</p>
                    <input type="text" value={author} onChange={(evt) => setAuthor(evt.target.value)} />
                </div>
                <div style={{ paddingTop: '16px' }}>
                    <input type="submit" value="Submit" />
                </div>
                {
                    tokens.forEach(element => {
                      return <span>{utils.formatUnits(element, 0)}</span>  
                    })
                }
            </form>
        </div>
    );
}

export default TokensByAuthor;

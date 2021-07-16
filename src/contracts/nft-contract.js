import { ethers, utils } from 'ethers';
import { abi } from './nft-contract.abi.json';

export async function create(address, signer, uri, commissionParams) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        console.log({ uri, commissionParams });
        const res = await contract.create("https://google.com", ['0x022E292b44B5a146F2e8ee36Ff44D3dd863C915c', 100, 7 , 3600, 25200, 1000 ]);
        return res;
    } catch (e) {
        console.log(e);
        return {};  
    }
}

export async function buyWithCoins(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const overrides = {
            value: utils.parseEther('0.01'),
        }
        const res = await contract.buy(tokenId, overrides);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function buyWithTokens(address, signer, tokenId, price) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.buy(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getCommission(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.getCommission(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function reduceCommission(address, signer, tokenId, percent) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.reduceCommission(tokenId, percent);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function claimLostToken(address, signer, erc20Address) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.claimLostToken(erc20Address);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function listForSale(address, signer, tokenId, amount, consumeToken) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.listForSale(tokenId, amount, consumeToken);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function removeFromSale(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.removeFromSale(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function offerToPayCommission(address, signer, tokenId, amount) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.offerToPayCommission(tokenId, amount);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function tokensByAuthor(address, signer, author) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.tokensByAuthor(author);
        return res;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function getOwner(address, signer) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.owner();
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getName(address, signer) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.name();
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getTokenAuthor(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.authorOf(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getOwnerBalance(address, signer, ownerAddress) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.balanceOf(ownerAddress);
        return res.toString();
    } catch (e) {
        console.log(e);
        return "0";
    }
}

export async function getApproved(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.getApproved(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function isApprovedForAll(address, signer, ownerAddress, operatorAddress) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.isApprovedForAll(ownerAddress, operatorAddress);
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function getTokenOwner(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.ownerOf(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return "";
    }
}

export async function supportsInterface(address, signer, interfaceId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.supportsInterface(interfaceId);
        return res;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function getSymbol(address, signer) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.symbol();
        return res;
    } catch (e) {
        console.log(e);
        return "";
    }
}

export async function getTokenByIndex(address, signer, index) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.tokenByIndex(index);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getTokenOfOwnerByIndex(address, signer, owner, index) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.tokenOfOwnerByIndex(owner, index);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getTokenUri(address, signer, tokenId) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.tokenURI(tokenId);
        return res;
    } catch (e) {
        console.log(e);
        return {};
    }
}

export async function getTokensByAuthor(address, signer, author) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.tokensByAuthor(author);
        return res;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function getTotalSupply(address, signer) {
    try {
        const contract = new ethers.Contract(address, abi, signer);
        const res = await contract.getTotalSupply();
        return res;
    } catch (e) {
        console.log(e);
        return [];
    }
}


const Web3 = require('web3');
const web3  = new Web3("https://rpc-mumbai.matic.today");

const Private_key = "7305ab402f3b933ee106c5af26d4841af5a6febe1e044e05b0f5d42fb4004730";
const from_Address = "0xbc7cA2d3C35B5615cbfD9f3B16869b7faD1FA69a";
const to_Address = "0xC9E6ACd323C2Ae48bDAa3ff4570b2eD8e218433D";

async function  poly_transaction(){
 
    var value = web3.utils.toWei('0.0001','ether');
    var signedTransaction = await web3.eth.accounts.signTransaction({
        to: to_Address,
        value: value,
        gas:200000
    },Private_key);

    web3.eth.sendSignedTransaction(signedTransaction.rawTransaction).then(
        (receipt)=>{
            console.log(receipt);
            console.log("contract at " + receipt.contractAddress );
        }
    )

}

poly_transaction();
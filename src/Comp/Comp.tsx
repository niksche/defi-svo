import Account from "../Account";
import SmartContract from "../SmartContract";



const Comp = async () => {
    const mySmartContract = await SmartContract();
    const accounts = await Account();
    if (accounts) {
        await mySmartContract.methods.payAndExtend(500).send({from: accounts[0]}).on('receipt', () => {
            console.log("I printed it");
        });
    }
    console.log("sign in metamask");
}
export  default Comp;
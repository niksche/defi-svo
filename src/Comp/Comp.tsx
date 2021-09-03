import Account from "../Account";
import SmartContract from "../SmartContract";



const Comp = async () => {
    const mySmartContract = await SmartContract();
    const accounts = await Account();
    await mySmartContract.methods.increment().send({from: accounts[0]}).on('receipt', () => {
        console.log("I printed it");
    });
}
export  default Comp;
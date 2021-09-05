import { Redirect } from "react-router-dom";
import Account from "../Account";
import SmartContract from "../SmartContract";



const Comp = async () => {
    const mySmartContract = await SmartContract();
    const accounts = await Account();
    if (accounts) {
        await mySmartContract.methods.payAndExtend().send({from: accounts[0]}).on('receipt', () => {
            return <Redirect to="/about" />
        });
    }
    console.log("sign in metamask");
}
export  default Comp;
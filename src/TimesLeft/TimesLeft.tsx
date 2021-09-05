import Account from "../Account";
import SmartContract from "../SmartContract";



const TimesLeft = async () => {
    const mySmartContract = await SmartContract();
    const accounts = await Account();
    if (accounts) {
        await mySmartContract.methods.seeTimeLeft().send({from: accounts[0]}).on('receipt', (data: any) => {
            console.log("Got it: ", data);
        });
    }
    // console.log("sign in metamask");
}
export  default TimesLeft;
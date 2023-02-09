// Create a new instance of web3 that uses the provider that is given to us by metamask.
import Web3 from 'web3';

// The code either runs on the server or the browser. In case of code running on the browser, window is defined hence we could 
// have simply used const web3 =new Web3(window.web3.currentProvider) but in case of next, to render fast the code first runs on 
// the server where window is not defined.

let web3;

// First we check if we are in the browser and then we check to see if metamask has already injected web3.
if (typeof window!= 'undefined' && typeof window.web3!='undefined') {
    web3=new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* the user is not running metamask.
    const provider=new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/88e699c6f2994081ae38dd6c3ec61356'
    );
    web3=new Web3(provider);
}

export default web3;
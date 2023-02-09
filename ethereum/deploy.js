const HDWalletProvider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const compiledFactory=require('./build/CampaignFactory.json');

const provider=new HDWalletProvider(
    'lizard story today brick lemon capable powder fan alpha doll demand lesson',
    'https://rinkeby.infura.io/v3/88e699c6f2994081ae38dd6c3ec61356'
);
const web3=new Web3(provider);

const deploy=async() => {
    const accounts=await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0]);

    //Result is gonna be an instance of our contract
    const result=await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data:compiledFactory.bytecode})
        .send({gas:1000000, from:accounts[0]});

    console.log('Contract deployed to ', result.options.address);
};

deploy();
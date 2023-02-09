const path=require('path');
const solc=require('solc');
const fs=require('fs-extra');

// Place all compiled contracts in the 'build' folder.
// Anytime we run compile.js, we go through the following steps:
// 1) Delete entire 'build' folder, 2) Read 'Campaign.sol' from the 'contracts' folder
// 3) Compile both contracts with solidity compiler, 4) Write output to build directory.

const buildPath=path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath=path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source=fs.readFileSync(campaignPath, 'utf8');
const output=solc.compile(source, 1).contracts;

// Ensure if directory exists otherwise create the directory->
fs.ensureDirSync(buildPath);

// Loop over the output object->
for(let contract in output){
    fs.outputJsonSync(
        // Windows does not allow file name to contain ':'
        path.resolve(buildPath, contract.replace(':', '')+'.json'),
        output[contract]
    );
}
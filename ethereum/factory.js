// We are not accessing the web3 library here, we are getting the instance that we created.
import web3 from './web3';
// ABI defined in CampaignFactory.json file
import CampaignFactory from './build/CampaignFactory.json';

const instance=new web3.eth.Contract(JSON.parse(CampaignFactory.interface), 0x78c7Ae5190525C4848d7908a6364ca6B0B8BbeA5);

export default instance;
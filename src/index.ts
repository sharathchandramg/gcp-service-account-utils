import { GCPServiceAccountUtils as GCPServiceAccountUtils } from "./gcpServiceAccountUtil";

let firebaseConfig = new GCPServiceAccountUtils(require('./../keys/' + 'development' + '/myworkadda-global-firebase-config.json'));
let publicKey = firebaseConfig.getPublicKey("562ebf184bfc83bb77cbaa1a42c0e50143412824").then(function(publicKey){
    console.log(publicKey);
}).catch(function(err){
});



export { GCPServiceAccountUtils }
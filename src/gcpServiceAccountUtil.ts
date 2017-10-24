export class GCPServiceAccountUtil {

    private _pathToServiceAccountConfigJson = null;
    

    constructor(pathToServiceAccountConfigJson : string){

        if(pathToServiceAccountConfigJson === "" || typeof pathToServiceAccountConfigJson == "undefined")
            throw new Error("parameter service account file is required");

        this._pathToServiceAccountConfigJson = pathToServiceAccountConfigJson;

        let configuration = require(this._pathToServiceAccountConfigJson);

        this._privateKey = configuration.private_key;
        this._audience = 'https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit';
        this._issuer = configuration.client_email;
        this._subject = configuration.client_email;

    }
    
    private _privateKey : string;
    public get privateKey() : string {
        return this._privateKey;
    }

    
    private _issuer : string;
    public get issuer() : string {
        return this._issuer;
    }

    private _subject : string;
    public get subject() : string {
        return this._subject;
    }

    private _audience : string;
    public get audience() : string {
        return this._audience;
    }

    public publicKey() : string{
        return "";
    }
}
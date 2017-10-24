export class GCPServiceAccountUtils {

    private _serviceAccount = null;
    

    constructor(serviceAccount){

        if(serviceAccount === null || typeof serviceAccount == "undefined")
            throw new Error("parameter serviceAccount is required");

        this._serviceAccount = serviceAccount;

        this._privateKey = this._serviceAccount.private_key;
        this._audience = 'https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit';
        this._issuer = this._serviceAccount.client_email;
        this._subject = this._serviceAccount.client_email;

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
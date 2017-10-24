const axios = require('axios')

export class GCPServiceAccountUtils {

    private _serviceAccount = null;


    constructor(serviceAccount) {

        if (serviceAccount === null || typeof serviceAccount == "undefined")
            throw new Error("parameter serviceAccount is required");

        this._serviceAccount = serviceAccount;

        this._privateKey = this._serviceAccount.private_key;
        this._audience = 'https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit';
        this._issuer = this._serviceAccount.client_email;
        this._subject = this._serviceAccount.client_email;
        this._clientCertificateUrl = this._serviceAccount.client_x509_cert_url;
        this._clientId = this._serviceAccount.client_id;
        this._projectId = this._serviceAccount.project_id;
        this._privateKeyId = this._serviceAccount.private_key_id;
    }

    private _privateKey: string;
    public get privateKey(): string {
        return this._privateKey;
    }

    private _issuer: string;
    public get issuer(): string {
        return this._issuer;
    }

    private _subject: string;
    public get subject(): string {
        return this._subject;
    }

    private _audience: string;
    public get audience(): string {
        return this._audience;
    }

    private _clientCertificateUrl: string;
    public get clientCertificateUrl(): string {
        return this._clientCertificateUrl;
    }

    private _clientId: string;
    public get clientId(): string {
        return this._clientId;
    }

    private _projectId: string;
    public get projectId(): string {
        return this._projectId;
    }

    private _privateKeyId: string;
    public get privateKeyId(): string {
        return this._privateKeyId;
    }

    public async getPublicKey(privateKeyId) {

        return new Promise((resolve, reject) => {
            axios.get(this.clientCertificateUrl).then(function (response) {
                let publicKey = response.data[privateKeyId];
                if (publicKey)
                    resolve(publicKey);
                else
                    reject(new Error("Unable to fetch the public key. There is no public key corresponding to the private key id " + privateKeyId))
            }).catch(function (err) {
                reject(err);
            });
        });
    }
}
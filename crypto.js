const { generateKeyPairSync, sign, verify } = crypto;


const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
});


const data = "Important message";
const signature = sign("sha256", Buffer.from(data), {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
});


const isVerified = verify("sha256", Buffer.from(data), {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
}, signature);

console.log(isVerified); 

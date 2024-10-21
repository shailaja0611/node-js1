const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // 256-bit key
const iv = crypto.randomBytes(16); // Initialization vector

// Encrypting
function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted
    };
}

// Decrypting
function decrypt(encryptedData) {
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), Buffer.from(encryptedData.iv, 'hex'));
    let decrypted = decipher.update(encryptedData.encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const encrypted = encrypt('Hello, World!');
console.log(encrypted);

const decrypted = decrypt(encrypted);
console.log(decrypted); // Outputs: Hello, World!

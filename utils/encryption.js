const crypto = require("crypto");
require("dotenv").config({ path: "../.env" });

// Set encryption algorithm
const algorithm = "aes-256-cbc";
const secret = `${process.env.ENCRYPTION_SECRET}`;

const encryptText = (text) => {
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, secret, iv);

  let encryptedData = cipher.update(text);
  encryptedData = Buffer.concat([encryptedData, cipher.final()]);

  console.log("IV");
  console.log(iv.toString("hex"));
  console.log("encryptedData");
  console.log(encryptedData.toString("hex"));

  return iv.toString("hex") + encryptedData.toString("hex");
};

const decryptText = (text) => {
  const iv = Buffer.from(text.substr(0, 32), "hex");

  // Convert initialize vector from hex to hex
  const encryptedData = Buffer.from(text.substr(32), "hex");

  // Decrypt the string using encryption algorithm and private key
  const decipher = crypto.createDecipheriv(algorithm, secret, iv);

  let decryptedData = decipher.update(encryptedData, "hex");
  decryptedData = Buffer.concat([decryptedData, decipher.final()]);
  return decryptedData.toString();
};

module.exports = {
  encryptText,
  decryptText,
};

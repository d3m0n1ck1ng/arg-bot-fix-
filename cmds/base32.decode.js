const base32 = require('thirty-two');
module.exports = {
  hits: ['b32de', 'base32de', 'base32decode'],
  handler: (msg, content) => {
    const res = {}
    res.commandName = "Base32 Decoding";
    res.output = base32.decode(content);
    return res;
  }
}

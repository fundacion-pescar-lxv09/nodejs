// Importacion Modulo Built-In
const os = require('os');
// Declaraciones
const user = os.userInfo().username;
const host = os.hostname();
// Metodos Implementados
const deviceInfo = () => `
DEVICE INFO:
    hostname: ${host},
    architecture: ${os.arch()},
    operating system: ${os.type()}
    username: ${user}
    homepath: ${os.userInfo().homedir}
    processor: ${os.cpus()[0].model}
    account: ${user}@${host}
`;
const compatibility = (cpuInfo) => {
    isOk = false;
    cpuInfo.forEach( ({model}) => {
        if (model.test(/[2-9]{1,3}\.\d{2,4}GHz$/)) isOk = true;
    })
    return isOk;
}
// Exportacion de Metodos
module.exports = { deviceInfo, compatibility }
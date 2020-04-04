const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()
const git = require('git-rev-sync')
require('dotenv').config()
let _user = ""
let _host = ""
let _password = ""

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  localRoot: __dirname + '/publish',
  remoteRoot: '/',
  include: ['**/*.*','.htaccess'],
  exclude: ['.DS_Store'],
  deleteRemote: true,
  forcePasv: true   // I don't know, but sometimes I have to go somewhere
}

for(let i = 0 ; i < config.user.length; i ++){
  console.log(config.user[i]);
  _user = _user + config.user[i]
}
for(i = 0 ; i < config.host.length; i ++){
  console.log(config.host[i]);
  _host = _host + config.host[i]
}
for(i = 0 ; i < config.password.length; i ++){
  console.log(config.password[i]);
  _password = _password + config.password[i]
}

console.log(_user+"@")
console.log(_host+"@")
console.log(_password+"@")

ftpDeploy.deploy(config)
  .then((res) => {
    console.log(`Deploy Complete ${git.short()} death.`)
  })
  .catch((err) => {
    throw err
  })

ftpDeploy.on('uploaded', (data) => {
  console.log(`uploded ${data.transferredFileCount}: ${data.filename}`) // same data as uploading event
})
const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()
const git = require('git-rev-sync')
require('dotenv').config()

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

console.log(config.user)
console.log(config.host)

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
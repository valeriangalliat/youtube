const { google } = require('googleapis')
const config = require('./config')
const state = require('./state')

function call (controller, method, params) {
  return new Promise((resolve, reject) => {
    this.client[controller][method](params, (err, data) => {
      if (err) {
        return reject(err)
      }

      resolve(data)
    })
  })
}

function asApi () {
  const client = google.youtube({
    version: 'v3',
    auth: config.apiKey
  })

  return { client, call }
}

function asUser () {
  const oauth2Client = new google.auth.OAuth2(config.clientId, config.clientSecret, 'urn:ietf:wg:oauth:2.0:oob')

  oauth2Client.setCredentials(state.token)

  const client = google.youtube({
    version: 'v3',
    auth: oauth2Client
  })

  return { client, call }
}

module.exports = {
  asApi,
  asUser
}

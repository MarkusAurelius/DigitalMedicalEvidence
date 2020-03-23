Create Verification:

const { Credentials } = require('uport-credentials');
Credentials.createIdentity();

{ did: 'did:ethr:0xa03f75ab7257fc72875622e04d05af674693d64e',
  privateKey:
   '8a0db6a822870ae3cde82af24bc5453ad0f2d89e950bd05e6dbe893fb7b41c28' }


   

   const express = require('express')
   const bodyParser = require('body-parser')
   const ngrok = require('ngrok')
   const decodeJWT = require('did-jwt').decodeJWT
   const { Credentials } = require('uport-credentials')
   const transports = require('uport-transports').transport
   const message = require('uport-transports').message.util
   
   let endpoint = ''
   const app = express();
   app.use(bodyParser.json({ type: '*/*' }))


   const credentials = new Credentials({
      appName: 'Create Verification Example', 
      did: 'did:ethr:0xa03f75ab7257fc72875622e04d05af674693d64e',
  privateKey:
   '8a0db6a822870ae3cde82af24bc5453ad0f2d89e950bd05e6dbe893fb7b41c28' })


      app.get('/', (req, res) => {
        credentials.createDisclosureRequest({
          notifications: true,
          callbackUrl: endpoint + '/callback'
        }).then(requestToken => {
          console.log(decodeJWT(requestToken))  //log request token to console
          const uri = message.paramsToQueryString(message.messageToURI(requestToken), {callback_type: 'post'})
          const qr =  transports.ui.getImageDataURI(uri)
          res.send(`<div><img src="${qr}"/></div>`)
        })
      })


      app.post('/callback', (req, res) => {
        const jwt = req.body.access_token
        credentials.authenticateDisclosureResponse(jwt).then(creds => {
          // take this time to perform custom authorization steps... then,
          // set up a push transport with the provided 
          // push token and public encryption key (boxPub)
          const push = transports.push.send(creds.pushToken, creds.boxPub)
      
          credentials.createVerification({
            sub: creds.did,
            exp: Math.floor(new Date().getTime() / 1000) + 30 * 24 * 60 * 60,
            //claim: {'Identity' : {'Last Seen' : `${new Date()}`}}
            claim: {'Corona Test' : {'Befund Corona Test' : `Positiv`}}
            
            // Note, the above is a complex (nested) claim. 
            // Also supported are simple claims:  claim: {'Key' : 'Value'}
          }).then(attestation => {
            console.log(`Encoded JWT sent to user: ${attestation}`)
            console.log(`Decodeded JWT sent to user: ${JSON.stringify(decodeJWT(attestation))}`)
            return push(attestation)  // *push* the notification to the user's uPort mobile app.
          }).then(res => {
            console.log(res)
            console.log('Push notification sent and should be recieved any moment...')
            console.log('Accept the push notification in the uPort mobile application')
            ngrok.disconnect()
          })
        })
      })
      
      
      // run the app server and tunneling service
      const server = app.listen(8088, () => {
        ngrok.connect(8088).then(ngrokUrl => {
          endpoint = ngrokUrl
          console.log(`Verification Service running, open at ${endpoint}`)
        })
      })


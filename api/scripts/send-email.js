const config = require('platformsh-config').config();
const http = require('http');

// Platform.sh
const projectUrl = `${config.getPrimaryRoute().url}`;
const email = config.variablesDef && config.variablesDef.EMAIL;

// HubSpot
const hubSpotProjectId = '6893032';
const hubSpotFormId = '1bb6b1b8-8f96-42b1-af03-42c01931686a';
const hubSpotPath = `/uploads/form/v2/${hubSpotProjectId}/${hubSpotFormId}?email=${email}&url=${projectUrl}`;

// Send request
const req = http.request({
    hostname: 'forms.hubspot.com',
    method: 'POST',
    path: hubSpotPath
}, (res) => {
    console.log(`statusCode from HubSpot: ${res.statusCode}`)
});

// Catch errors
req.on('error', (error) => {
    console.error(error)
});

// Ends the script
req.end();
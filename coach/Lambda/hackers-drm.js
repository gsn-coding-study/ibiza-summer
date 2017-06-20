'use strict';

console.log('Loading function');
const aws = require('aws-sdk');
const http = require('http');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });


exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    // Get the object from the event and show its content type
    const bucket = event.Records[0].s3.bucket.name;
    const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
        Bucket: bucket,
        Key: key,
    };

    //server address 
    const drmserver = 'http://52.79.224.248:8088';
    console.log('HOSTNAME GET: ' + drmserver);

//http get method
    http.get(drmserver + '/' + key, function(req, res){
      console.log("Got response: " + req.statusCode);
      context.succeed();
    }).on('error', function(e){
        console.log("Get error: " + e.message);
        context.done(null, 'FAILURE');
    });

    console.log('end request to ' + drmserver);

};

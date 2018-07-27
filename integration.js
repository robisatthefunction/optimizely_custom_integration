/* This snippet runs everytime a "campaign decision" is made. */
var decisionObject = window.optimizely.get('state').getDecisionObject({
  campaignId: campaignId,
  shouldCleanString: true
});


//Check to see if a decision has been made. This will be null if the user is part of the holdback group
if (decisionObject) {
  var experimentId = decisionObject.experiment.split(' ')[1].replace(/[()]/g, '');
  var variationName = decisionObject.variation.split(' ')[0];

  //Log to IQL
  var baseUrl = "//www.example.com/cmsapi/logging/optimizely";

  var logUrl = baseUrl + '?a=thJsv';
  logUrl += '&optExpIds=' + encodeURIComponent(experimentId);
  logUrl += '&optVarNames=' + encodeURIComponent(variationName) + '_snippetLogging';
  (new Image()).src = logUrl;

  /*//Back up Optimizely event to see if things work
  window.optimizely.push({
    "type": "event",
    "eventName": "integrationSuccess"
  });*/
}

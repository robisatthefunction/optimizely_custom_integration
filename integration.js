/* This snippet runs everytime a "campaign decision" is made. */
var utils = window.optimizely.get('utils');

//Wait until the tk and rpcLogUrl variables are available. They are required for when we log
utils.waitUntil(function() {
  console.log("waiting for tk");
  return window.tk;
}).then(function() {
  var decisionObject = window.optimizely.get('state').getDecisionObject({
    campaignId: campaignId,
    shouldCleanString: true
  });

  console.log(decisionObject);

  //Check to see if a decision has been made. This will be null if the user is part of the holdback group
  if (decisionObject) {
    var experimentId = decisionObject.experiment.split(' ')[1].replace(/[()]/g, '');
    var variationName = decisionObject.variation.split(' ')[0];

    //Log to IQL
    var tk = window.tk;
    var baseUrl = "//gdc.indeed.com/rpc/log";

    if (tk) {
      var logUrl = baseUrl + '?a=thJsv&tk=' + tk;
			logUrl += '&optExpIds=' + encodeURIComponent(experimentId);
      logUrl += '&optVarNames=' + encodeURIComponent(variationName) + '_loggedFromOptimizelySnippet';
      (new Image()).src = logUrl;
      //fire event to Optimizely that the experiment data was logged to IQL
      window.optimizely.push({
        "type": "event",
        "eventName": "integrationSuccess"
      });
      console.log("Logged: " + logUrl);
    }
  }
});

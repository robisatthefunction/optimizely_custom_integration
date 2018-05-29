var decisionObject = window.optimizely.get('state').getDecisionObject({
  campaignId: campaignId,
  shouldCleanString: true
});

if (decisionObject) {

var experimentId = decisionObject["experiment"].split(' ')[1].replace(/[()]/g, '');
var variationName = decisionObject["variation"].split(' ')[0];

console.log(experimentId, variationName);

//Other integration code

};

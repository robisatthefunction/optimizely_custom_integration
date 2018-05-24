var decisionObject = window.optimizely.get('state').getDecisionObject({
  campainId: campaignId,
  shouldCleanString: true
});

var experimentId = decision["experiment"].split(' ')[1].replace(/[()]/g, '');
var variationName = decision["variation"].split(' ')[0]

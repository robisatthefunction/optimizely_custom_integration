var campaignDecided = function(event) {

var state = window.optimizely.get('state');

console.log(event);
var campaignId = event.data.campaign.id;
console.log(campaignId);
var decisionObject = state.getDecisionObject({
  campaignId: campaignId,
  shouldCleanString: true
});

console.log(decisionObject);

var experimentId = decisionObject["experiment"].split(' ')[1].replace(/[()]/g, '');
var variationName = decisionObject["variation"].split(' ')[0];

console.log(experimentId, variationName);

//Other integration code

};

window["optimizely"] = window["optimizely"] || [];
window["optimizely"].push({
  type: "addListener",
  filter: {
    type: "lifecycle",
    name: "campaignDecided"
  },
  // Add the campaignDecided function as a handler.
  handler: campaignDecided
});

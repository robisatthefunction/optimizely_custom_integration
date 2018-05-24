var state = window.optimizely.get('state');

var decisionObject = state.getDecisionObject({
  campainId: campaignId,
  shouldCleanString: true
});

var allCampaigns = state.getCampaignStates({
  "isActive": true
})

if (!allCampaigns[campaignId].isCampaignHoldback) {

var experimentId = decision["experiment"].split(' ')[1].replace(/[()]/g, '');
var variationName = decision["variation"].split(' ')[0];

//Other integration code


}

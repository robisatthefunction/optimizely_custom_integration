var decisionObject = window.optimizely.get('state').getDecisionObject({
    campaignId: campaignId,
    shouldCleanString: true
  });

  console.log(decisionObject);

  //Check to see if a decision has been made. This will be null if the user is part of the holdback group
  if (decisionObject) {
    var experimentId = decisionObject.experiment.split(' ')[1].replace(/[()]/g, '');
    var variationName = decisionObject.variation.split(' ')[0];

    console.log(experimentId);
    console.log(variationName);
  }

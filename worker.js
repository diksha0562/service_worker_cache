console.log('============');
onmessage = function(e) {
    console.log('Message received from main script');
    var workerResult = 'Result: ' + e.data;
    console.log('Posting message back to main script',e.data);
    // postMessage(workerResult);
  }
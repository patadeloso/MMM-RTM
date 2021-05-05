const Log = require("logger");
const NodeHelper = require("node_helper");
const remember = require("./fetcher.js")

// add require of other javascripot components here
// var xxx = require('yyy') here

module.exports = NodeHelper.create({

	//init(){
	//	this.config = {};
	//	console.log("init module helper RememberTheMilk");
	//},

	start() {
		this.config = {};
		console.log('Starting module helper:' +this.name);
	},

	stop(){
		console.log('Stopping module helper: ' +this.name);
	},

	// handle messages from our module// each notification indicates a different messages
	// payload is a data structure that is different per message.. up to you to design this
	socketNotificationReceived(notification, payload) {
		console.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
		// if config message from module
		if (notification === "CONFIG") {
			// save payload config info
			this.config=payload
			this.sendTodayData()

			//wait 15 seconds, send a message back to module
			//setTimeout(()=> { this.sendSocketNotification("message_from_helper"," this is a test_message")}, 15000)


		}
		else if (notification === "GET_TODAY") {
			this.sendTodayData()
		}
		else if(notification === "????2") {
		}

	},

	sendTodayData () {
		var self = this;
		return remember
			.getToday(self.config)
			.then(data => {
 				//self.sendSocketNotification("TODAY", data)
				console.log("Data we are sending to browser: " + data)
 			})
 			.catch(err => {
 				console.error("RescueTime data could not be fetched:", err)
 			})
	}

});

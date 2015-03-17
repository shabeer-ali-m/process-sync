var ps = require('process-sync')

var demo = function(msg){
	//locking the process
	ps.lock();
	setTimeout(function(){
		console.log("Message : "+msg+" .Next message will come only after 3 seconds.");
		//unlocking the process
		ps.unlock();
	},3000);
}

//calling your process with process-queue
ps.process(demo,["My First Message"]);
ps.process(demo,["My Second Message"]);
ps.process(demo,["My Third Message"]);
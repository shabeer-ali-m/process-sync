var ps = require('process-sync')

var demo = function(){
	//locking the process
	ps.lock();
	setTimeout(function(){
		console.log("This is a demo message.Next message will come only after 3 seconds.");
		//unlocking the process
		ps.unlock();
	},3000);
}

//calling your process with process-queue
ps.process(demo);
ps.process(demo);
ps.process(demo);
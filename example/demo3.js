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

//setting your process sync as stack
ps.stack=true;
//locking the process at the beginning itself
ps.lock();
ps.process(demo,["My First Message"]);
ps.process(demo,["My Second Message"]);
ps.process(demo,["My Third Message"]);
//unlocking the process-sync after adding all process sync
ps.unlock();
# Process Sync
Process sync (ps) is a nodejs package to process your function in a Synchronous Queue. All the process will be in a queue and it will run one by one like [mutex].

# Features

  - Simple to Use
  - Light Weight
  - Zero Dependency 

# Working

The working of the Process Sync is very simple. While starting any process you can lock it, and once your process is done you can unlock it. So in between if any other process try to execute, it will automatically add to the process to the queue without running. Once you release the lock it will automatically start executing the next process which is in the queue.

### Version
1.0.0

### Example 1

These examples will demonstrate you how to use Process Sync. In this example we console 3 message with a interval of 3 seconds.
 
```javascript   
//including process-sync 
var ps = require('process-sync')

var demo = function(){
	/*
	* lock the process
	* This code will lock the process. So if any other process came it won’t execute it will add to a queue. Once you unlock the process the queued process will run simultaneously. 
	*/
	ps.lock();
	setTimeout(function(){
		console.log("This is a demo message. Next message will come only after 5 seconds.");
		/*
		* Unlocking the process
		* Once you finished your process you can release the lock so that the other process can run. if you didn’t unlocked the other process won’t run.
		*/
		ps.unlock();
	},3000);
}

/*
* Calling your process with process-queue
* ps.process(<function name>)
* This function is used to call your function through process queue.
*/
ps.process(demo);
ps.process(demo);
ps.process(demo);
```

### Example 2

This will demonstrate you how to convert your function to sync with arguments.
 
```javascript   
//including process-sync 
//var ps = require('process-sync')
var demo = function(msg){
	//locking the process
	ps.lock();
	setTimeout(function(){
		console.log("Message : "+msg+" .Next message will come only after 5 seconds.");
		//unlocking the process
		ps.unlock();
	},3000);
}

//calling your process with process-queue
ps.process(demo,["My First Message"]);
ps.process(demo,["My Second Message"]);
ps.process(demo,["My Third Message"]);
```


## License
MIT


[mutex]:http://en.wikipedia.org/wiki/Mutual_exclusion

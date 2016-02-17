/**
 * npm package process-sync
 * Developer by : Shabeer Ali M
 * Updated : 17 March 2015
 * Version : 1.0.1
 */
module.exports = {
	stack:false,
	lock_status:false,
	lock:function(){
		this.lock_status=true;
	},
	queue:[],
	process:function(callback,argument){
		if(this.lock_status==false){
			callback.apply(this,argument);
		}	
		else
		{
			this.queue.push([callback,argument]);
		}
	},
	unlock:function(){
		if(this.queue.length>0)
		{
			if(this.stack==false)
				p=this.queue.shift();
			else
				p=this.queue.pop();
			this.process(p[0],p[1]);
		}
		this.lock_status=false;
	}
}

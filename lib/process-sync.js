/**
 * npm package process-sync
 * Developer by : Shabeer Ali M
 * Updated : 17 March 2015
 * Version : 1.0.0
 */
module.exports = {
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
			p=this.queue.shift();
			this.lock_status=false;
			this.process(p[0],p[1]);
		}
	}
}
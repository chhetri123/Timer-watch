class Timer{ 
constructor(durationInput,startButton,pauseButton,restart,callbacks){
this.durationInput=durationInput;
this.pauseButton=pauseButton;
this.startButton=startButton;
    this.restart=restart;
 if (callbacks){
     this.onStart=callbacks.onStart;
     this.onTick=callbacks.onTick;
     this.onComplete=callbacks.onComplete;
 }   
    this.restart.addEventListener('click',this.reset);
    this.pauseButton.addEventListener('click',this.pause);
this.startButton.addEventListener('click',this.start);
    }
    
   reset=()=>{
       this.pause();
       this.duration=30;
       circle.setAttribute('stroke-dashoffset',0)
   }
start=()=>{
    if(this.onStart){
        this.onStart(this.duration);
    }
    
    this.tick(this.duration);
   this. time=setInterval(this.tick,50); 
};
pause=()=>{
    if(this.onTick){
        this.onTick(this.duration);
    }
    clearInterval(this.time)
    
}

 tick=()=>{
     if(this.duration<=0){
     this.pause();
         if(this.onComplete){
             this.onComplete();
         }
     }else{
         this.duration-=0.05;
         if(this.onTick){
        this.onTick(this.duration);
    }
     }
};

get duration(){
    return parseFloat(this.durationInput.value);
}


set duration(clock){
    
    this.durationInput.value=clock.toFixed(2);
}

}
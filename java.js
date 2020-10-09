
const durationInput=document.querySelector('#duration');
const startButton=document.querySelector('#start');
const pauseButton=document.querySelector('#pause');
const circle=document.querySelector('circle');
const restart=document.querySelector('#restart');


const perimeter=circle.getAttribute('r')*2*Math.PI;
circle.setAttribute('stroke-dasharray',perimeter)






let duration;

 
const timer=new Timer(durationInput,startButton,pauseButton,restart,{
    onStart(dur){
   duration=dur;
},
    onTick(rem){
        circle.setAttribute('stroke-dashoffset',perimeter*rem/duration-perimeter)

    },
    onComplete(){
        console.log('timer completed')
    }
    
});


















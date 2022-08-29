document.querySelector('.container').addEventListener("click", (e)=>{
  //play pause btn
  if (e.target.classList.contains('playBtn')) {
    e.target.classList.toggle('fa-pause');
    e.target.classList.toggle('fa-play');
    if(e.target.classList.contains('fa-play')){
      stop();
    }else{
      start();
    }
  }
  if (e.target.classList.contains('resetBtn')){
    stop();
    reset();
    playBtn.classList.add('fa-play')
    playBtn.classList.remove('fa-pause')
  }
  if (e.target.classList.contains('stopWatchBtn')) {
    count++;
    addTimeSlab(count);
    
  }
});

const min = document.querySelector('#min'),
sec = document.querySelector('#sec'),
playBtn = document.querySelector('.playBtn'),
stopWatch = document.querySelector('.stopWatch'),
timeslabContainer = document.querySelector('.timeslab-container'),
resetBtn = document.querySelector('.resetBtn');

let timer,count=0;

function start(){
  timer = setInterval(updateTime,1000);
  stopWatch.style.display='block';
}
function stop(){
  clearInterval(timer);
  stopWatch.style.display='none';
}
function reset(){
  sec.innerHTML='00';
  min.innerHTML='00';
  count = 0;
  timeslabContainer.innerHTML = '';
}
function updateTime(){
  let s=Number(sec.innerText),
  m=Number(min.innerText);
  s++;
  m = s>=60?m+1:m;
  s = s>=60?0:s;
  sec.innerHTML = s>=10? s:`0${s}`;
  min.innerHTML = m>=10? m:`0${m}`;
}
function addTimeSlab(i){
  let s=sec.innerText,
  m=min.innerText;
  let time = `<p class="timeslab">#${i} -> ${m} : ${s}</p>`
  timeslabContainer.innerHTML += time;
}
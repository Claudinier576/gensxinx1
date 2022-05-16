var time1 = document.getElementById('time1Table');
var time2Name = document.getElementById("Time2Name");
var time2 = document.getElementById('time2Table');
var time1Name = document.getElementById("Time1Name");


time1Name.addEventListener('change',()=>{

    if(time1Name.value.length){
        time1.innerHTML = time1Name.value;

    }else{
        time1.innerHTML = 'Time 1'
    }

});

time2Name.addEventListener('change',()=>{

    if(time2Name.value.length){
        time2.innerHTML = time2Name.value;

    }else{
        time2.innerHTML = 'Time 2'
    }

});
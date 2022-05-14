function CalcularTempos() {
    
    var team1Times = document.getElementsByClassName('TimeTeam1');
    var team2Times = document.getElementsByClassName('TimeTeam2');
    
    var team1 = document.getElementById('TempoTime1');
    var team2 = document.getElementById('TempoTime2');

    var TeamTime1 = 0; 
    var TeamTime2 = 0; 


    console.log(team1Times[0].value);
    console.log(team2Times[0].value);

    for (let i = 0; i < team1Times.length; i++) {
        TeamTime1 += team1Times[i].value ;

        console.log(team1Times[i].value);
        
        
        
    }
    for (let i = 0; i < team2Times.length; i++) {
        TeamTime2 += team2Times[i].value;
        
    }

    team1.innerHTML = TeamTime1;
    team2.innerHTML = TeamTime2;
    

} 


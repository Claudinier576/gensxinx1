function CalcularTempos() {
    
    var team1Times = document.getElementsByClassName('TimeTeam1');
    var team2Times = document.getElementsByClassName('TimeTeam2');
    
    var team1 = document.getElementById('TempoTime1');
    var team2 = document.getElementById('TempoTime2');

    var TeamTime1 = 0; 
    var TeamTime2 = 0; 

    var teste = "01:02";

    console.log(team1Times[0].value);
    console.log(team2Times[0].value);

    for (let i = 0; i < team1Times.length; i++) {
       
       // TeamTime1 += team1Times[i].value ;
       var somar = team1Times[i].value.split(":");
       var soma = parseFloat(somar[0])*60 + parseFloat(somar[1])
       TeamTime1 += soma

        
    }
    for (let i = 0; i < team2Times.length; i++) {
        var somar = team2Times[i].value.split(":");
        var soma = parseFloat(somar[0])*60 + parseFloat(somar[1])
        TeamTime2 += soma
    }

    team1.innerHTML = (TeamTime1/60);
    team2.innerHTML = TeamTime2/60;
    

} 


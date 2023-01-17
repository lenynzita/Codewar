let number = function(busStops){
let peopleOntheBus = 0;
for(let i = 0; i< busStops.lenght; i++){
    peopleOntheBus += busStops[i][0];
    peopleOntheBus -= busStops[i][1];
}
return peopleOntheBus;
}
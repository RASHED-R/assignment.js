function kilometerToMeter(km){

    var result = km*1000;
    return result;

}
var total = kilometerToMeter(10);
console.log( total);


function budgetCalculator(clock,mobile,laptop){
    var watchPrice=clock*50;
    var phonePrice= mobile*100;
    var lapPrice= laptop*500;
    return watchPrice+phonePrice+lapPrice;
}
var total2 = budgetCalculator(2,2,2);
console.log(total2);



function hotelCost(days){
    if(days<11){
        return days*100;
    }
    else if (days<20){
        var extraDays= days-10;
        return (extraDays*80)+(10*100);
    }
    else if( days>20){
        var firstTenDays=10*100;
        var secondTenDays=10*80;
        var extraDays2=days - 20;
        return firstTenDays+secondTenDays+(extraDays2*50);
    }
    
}
var hotelRent= hotelCost(35);
    console.log(hotelRent);




function megaFriend(friend){
    var lgth = 0;
var longest;

for (var i = 0; i < friend.length; i++) {
  if (friend[i].length > lgth) {
    var lgth = friend[i].length;
    longest = friend[i];
}

}
return longest;
}
var friend=['azad','khalid','rimu'];
var bondhu= megaFriend(friend);
console.log(bondhu);



   
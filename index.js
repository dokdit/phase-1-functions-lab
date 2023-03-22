function distanceFromHqInBlocks(street){
    return Math.abs(street-42)
}

function distanceFromHqInFeet(street){
    return 264 * distanceFromHqInBlocks(street)
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start-destination) * 264
}

function calculatesFarePrice(start,destination){
    let farePrice = 0
    let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400){
        farePrice = 0
    }else if (distance>400 && distance <= 2000){
        farePrice = (2*(distance-400))/100
    }else if(distance>2000 && distance<=2500){
        farePrice = 25
    }else{
        farePrice = "cannot travel that far"
    }
    return farePrice
}
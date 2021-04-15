function detectCollision(body1,body2){
    pos1=body1.body.position;
    pos2=body2.body.position;
    console.log("posx"+pos2.x-pos1.x);
    console.log("posy"+pos2.y-pos1.y);
    var distance=dist(pos1.x, pos1.y, pos2.x, pos2.y)
    console.log(distance);
    console.log("string"+(body1.r+body2.r));
    

    
    if (distance<=body1.r+body2.r){
        Body.setStatic(body2.body,false)
    }
}

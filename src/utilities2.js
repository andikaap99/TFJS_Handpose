//points for finger
const fingerJoints = {
    thumb:[0,1,2,3,4,5],
    indexFinger:[0,5,6,7,8],
    middleFinger:[0,9,10,11,12],
    ringFinger:[0,13,14,15,16],
    pinky:[0,17,18,19,20]
};

//drawing function
export const drawHand = (predictions, ctx) => {
    //check if have prediction
    if(predictions.length > 0) {
        //loop through each prediction
        predictions.forEach((predictions) => {
            //grab lanmarks
            const landmarks = predictions.landmarks;
            //loop through finger
            for(let j = 0; j < Object.keys(fingerJoints).length; j++) {
                const finger = Object.keys(fingerJoints)[j];
                //loop through pairs of join
                for(let k = 0; k < fingerJoints[finger].length-1; k++) {
                    const firstJoinIndex = fingerJoints[finger][k];
                    const secondJoinIndex = fingerJoints[finger][k+1];

                    //draw path
                    ctx.beginPath();
                    ctx.moveTo(
                        landmarks[firstJoinIndex][0],
                        landmarks[firstJoinIndex][1]
                    );
                    ctx.lineTo(
                        landmarks[secondJoinIndex][0],
                        landmarks[secondJoinIndex][1],
                    );
                    ctx.strokeStyle = "plum";
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }
            }


            //loop through landmarks and draw them
            for(let i = 0; i < landmarks.length; i++) {
                //get x point
                const x = landmarks[i][0];

                // get y point
                const y = landmarks[i][1];
                
                //start drawing
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, 3*Math.PI);

                //set line color
                ctx.fillStyle = "indigo";
                ctx.fill();
            }
        })
    }
}
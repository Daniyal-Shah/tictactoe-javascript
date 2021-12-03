

//settiing things to use
const boxes=[];
const selectedColor="gray";
const unselectedColor="white";

//Players
const player1={score:0, turn:true, sign:"X"}
const player2={score:0, turn:false, sign:"O"}

//Getting all boxes in a array
for(var i=0; i<9;i++)
{
    boxes[i] =document.querySelector(`.box-${i+1}`);
}

//at start box-1 always be the selected box
var selectedBox= boxes[0];
selectedBox.style.backgroundColor=selectedColor;


//key event for the game
this.onkeydown=(e)=>{

    //Key Left
    if(e.keyCode === 37)
    {
        for(var i=0;i<9;i++)
        {
            if(boxes[i]===selectedBox)
            {
                if( selectedBox ==boxes[0])
                {
                    selectedBox.style.backgroundColor=unselectedColor;
                    selectedBox= boxes[boxes.length-1];
                    selectedBox.style.backgroundColor=selectedColor;          
                    break;      
                }
                else
                {
                    selectedBox.style.backgroundColor=unselectedColor;
                    selectedBox= boxes[i-1];
                    selectedBox.style.backgroundColor=selectedColor;
                    break;
                }
                break;
            }
        }
    }
        //Key up
    else if(e.keyCode === 38)
    {
        for(var i=0;i<boxes.length;i++)
        {
            if(boxes[i]===selectedBox)
            {
                if(selectedBox=== boxes[0] |selectedBox=== boxes[1]|selectedBox=== boxes[2] )
                {
                    selectedBox.style.backgroundColor=unselectedColor;
                    selectedBox= boxes[i+Math.floor(boxes.length/3)];
                    selectedBox.style.backgroundColor=selectedColor;
                    break;
                }
                else
                {
                    selectedBox.style.backgroundColor=unselectedColor;
                    selectedBox= boxes[i-Math.floor(boxes.length/3)];
                    selectedBox.style.backgroundColor=selectedColor;
                    break;
                }


            }
        }
    }
        //Key right
    else if(e.keyCode === 39)
    {
        for(var i=0;i<boxes.length;i++)
        {
            if(boxes[i]===selectedBox)
            {
                if( selectedBox ==boxes[boxes.length-1])
                {
                    selectedBox.style.backgroundColor=unselectedColor;
                    selectedBox= boxes[0];
                    selectedBox.style.backgroundColor=selectedColor;         
                    break;       
                }
                else
                {
                    selectedBox.style.backgroundColor=unselectedColor;
                    selectedBox= boxes[i+1];
                    selectedBox.style.backgroundColor=selectedColor;

                    break;
                }

            }
        }

    }
        //Key down
    else if(e.keyCode === 40)
    {
        for(var i=0;i<boxes.length;i++)
        {
            if(boxes[i]===selectedBox)
            {
                if(selectedBox=== boxes[6] |selectedBox=== boxes[7]|selectedBox=== boxes[8] )
                {
                    selectedBox.style.backgroundColor=unselectedColor;
                    selectedBox= boxes[i-6];
                    selectedBox.style.backgroundColor=selectedColor;
                    break;
                }
                else{
                    selectedBox.style.backgroundColor=unselectedColor;
                    selectedBox= boxes[i+Math.floor(boxes.length/3)];
                    selectedBox.style.backgroundColor=selectedColor;
                    break;
                }

            }
        }
    }

    //Enter Key
    else if (e.keyCode===13)
    {
        if(player1.turn)
        {
            selectedBox.innerText= player1.sign;
            selectedBox.style.backgroundColor="red";

            for(var i=0;i<boxes.length;i++)
            {
                if(boxes[i] ===selectedBox)
                {
                    selectedBox=boxes[i+1];
                    selectedBox.style.backgroundColor=selectedColor
                    boxes.splice(i,1)
                    break;
                }
            }
            player1.turn=false;
            player2.turn=true;
        }
        else
        {
            selectedBox.innerText= player2.sign;
            selectedBox.style.backgroundColor="blue";

            for(var i=0;i<boxes.length;i++)
            {
                if(boxes[i] ===selectedBox)
                {
                    selectedBox=boxes[i+1]
                    selectedBox.style.backgroundColor=selectedColor
                    boxes.splice(i,1)
                    break;
                }
            }
            player1.turn=true;
            player2.turn=false;
        }

        console.log(boxes)

    }

    //Key else
    else{
        console.log(e.keyCode, "wrong key selection")
    }
    
}

document.getElementById("resetButton").addEventListener('click',()=>{

    //Getting all boxes in a array
    for(var i=0; i<9;i++)
    {
        boxes[i] =document.querySelector(`.box-${i+1}`);
    }

    boxes.forEach((box)=>{
        box.innerText="";
        box.style.backgroundColor=unselectedColor;

    });
    selectedBox= boxes[0];
    selectedBox.style.backgroundColor=selectedColor;
})



// const btns=document.querySelectorAll(".btn");

// console.log(btns)

// btns.forEach(element => {

//     element.addEventListener('click', ()=>{
//         element.innerHTML="clicked";
//         element.classList.remove("btn-primary")
//         element.classList.add("btn-success")
//     })    
// });

// if(document.querySelectorAll('.btn').clicked == true)
// {
//    console.log("button was clicked");
// }

// const btn=document.querySelector(".btn-synth");
// btn.addEventListener('click', (e)=>{

//     console.log(e.target);

// })    


// const input = document.querySelector("input");

// this.onkeydown=(e)=>{

//     if(e.keyCode === 37)
//     {
//         console.log("key left")
//     }
//     else if(e.keyCode === 38)
//     {
//         console.log("key up")
//     }
//     else if(e.keyCode === 39)
//     {
//         console.log("key right")
//     }
//     else if(e.keyCode === 40)
//     {
//         console.log("key down")
//     }
//     else{
//         console.log("other key")
//     }
    
// }






























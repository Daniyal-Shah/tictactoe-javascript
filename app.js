
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


// const addedButton= document.getElementById("addedButton");



// addedButton.addEventListener('click',()=>{
//     let inputValue =document.getElementById("inputValue");

//     let inputField =`<li class="list-group-item d-flex justify-content-between">
// ${inputValue.value} 

//         <img src="./close_black_24dp.svg" class="btn btnCancel" alt="">

//     </li>`;

//     inputValue.value="";
//     document.getElementById("listGroup").insertAdjacentHTML('beforeend',inputField);

//     const btnCancel= document.querySelectorAll(".btnCancel");
//     btnCancel.forEach((element)=>{
//         element.addEventListener('click',(e)=>
//         {
//             e.target.parentElement.remove();
//         })
//     })
// })






const boxes=[];
const selectedColor="gray";
const unselectedColor=""

for(var i=0; i<9;i++)

{
    boxes[i] =document.querySelector(`.box-${i+1}`);
}

var selectedBox= boxes[0];
selectedBox.style.backgroundColor=selectedColor;

document.getElementById("resetButton").addEventListener('click',()=>{

    boxes.forEach((box)=>{
        box.style.backgroundColor=unselectedColor;

    });
    
    selectedBox= boxes[0];
    selectedBox.style.backgroundColor=selectedColor;

})


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
                    selectedBox= boxes[8];
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
        for(var i=0;i<9;i++)
        {
            if(boxes[i]===selectedBox)
            {
                if(selectedBox=== boxes[0] |selectedBox=== boxes[1]|selectedBox=== boxes[2] )
                {
                    selectedBox.style.backgroundColor=unselectedColor;
                    selectedBox= boxes[i+6];
                    selectedBox.style.backgroundColor=selectedColor;
                    break;
                }
                else
                {
                    selectedBox.style.backgroundColor=unselectedColor;
                    selectedBox= boxes[i-3];
                    selectedBox.style.backgroundColor=selectedColor;
                    break;
                }


            }
        }
    }
        //Key right
    else if(e.keyCode === 39)
    {
        for(var i=0;i<9;i++)
        {
            if(boxes[i]===selectedBox)
            {
                if( selectedBox ==boxes[8])
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
                    console.log(selectedBox)
                    break;
                }

            }
        }

    }
        //Key down
    else if(e.keyCode === 40)
    {
        for(var i=0;i<9;i++)
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
                    selectedBox= boxes[i+3];
                    selectedBox.style.backgroundColor=selectedColor;
                    console.log(selectedBox)
                    break;
                }

            }
        }
    }
        //Key else
    else{
        console.log("wrong key selection")
    }
    
}

























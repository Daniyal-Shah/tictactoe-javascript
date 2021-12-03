
const addedButton= document.getElementById("addedButton");
var keyItem=1;

addedButton.addEventListener('click',()=>{
    let inputValue =document.getElementById("inputValue");

    let inputField =
    `<li class="list-group-item d-flex justify-content-between" id=${keyItem}>
        ${inputValue.value} 
        <img src="./close_black_24dp.svg" class="btn btnCancel" alt="">
    </li>`;

    localStorage.setItem(keyItem,inputValue.value );
    inputValue.value="";
    document.getElementById("listGroup").insertAdjacentHTML('beforeend',inputField);

    keyItem++;

    const btnCancel= document.querySelectorAll(".btnCancel");
    btnCancel.forEach((element)=>{
        element.addEventListener('click',(e)=>
        {
            e.target.parentElement.remove();
            localStorage.removeItem(e.target.parentElement.id)
        })
    })
})


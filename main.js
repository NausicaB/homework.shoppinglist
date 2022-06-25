let list = [
        {
            itemDescription: ''
        }
    ]

function draw(){

    if (list[0].itemDescription === "") {
        list.splice(0, 1);
    } 
    let tableHead = document.querySelector("#listItems thead")
    let tableBody = document.querySelector("#listItems tbody")
    let str = "";
    let str2 = `
        <tr>
            <th> Item description </th>
            <th> Action </th>
        </tr>
        `;

    for(let i = 0; i < list.length; i++){
        let elem = list[i];
            str +=` 
                <tr>
                <td id="item"> ${elem.itemDescription} </td>
                <td><button onclick="strikeThrough(${i})">Mark as buyed</button></td>
                </tr>  
            `
    }   
    tableHead.innerHTML = str2;
    tableBody.innerHTML = str;
}

function add(event) {
    event.preventDefault();


    
    let itemDescription = document.querySelector('#inputItem').value.trim();
    if (itemDescription === "") {
        error.classList.remove('hidden');
        return;
    }    
    error.classList.add('hidden');
    
    list.push({
        itemDescription: itemDescription,
    })
    draw();
    document.querySelector("form").reset();
}

function strikeThrough(idx){
    let elem = document.querySelectorAll('#item');
    elem[idx].className = 'strike';
}


function sortAsc() {

    list.sort(function(a, b) {
        let nameA = a.itemDescription.toLowerCase();
        let nameB = b.itemDescription.toLowerCase();
        if (nameA < nameB) {
            return -1;
        }
        else if (nameA === nameB) { 
            return 0;
        }
    });
    console.log(list);

    if (list.length > 1) {
        draw();
}

}

function sortDesc() {

    list.reverse(function(a, b) {
        let nameA = a.itemDescription.toLowerCase();
        let nameB = b.itemDescription.toLowerCase();            
        if (nameA > nameB) {
            return 1;
        }
        else if (nameA === nameB) { 
            return 0;
        } 
    });
    if (list.length > 1) {
        draw();
    }
}
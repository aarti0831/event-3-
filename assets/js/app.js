const bgcolor = document.getElementById('bgcolor')

function onFilter(e){

    let val = e.target.value;

    let allDivs = [...document.querySelectorAll(".all")]

    allDivs.forEach(d=>{
        d.classList.add('d-none')
    })

    let selectedDiv = [...document.getElementsByClassName(val)]

    selectedDiv.forEach(d=>{
        d.classList.remove('d-none')
    })

}

bgcolor.addEventListener('change',onFilter)
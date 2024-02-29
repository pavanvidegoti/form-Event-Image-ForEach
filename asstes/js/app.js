
let selectImage1 =document.getElementById('selectImage');
let allTeams = [...document.querySelectorAll(".all")];







const onChangeImage = (eve) =>{
    let val = eve.target.value;
    cl(val);

    allTeams.forEach (e => e.classList.add("d-none"));
    let selectTeam = [...document.querySelectorAll("."+val)];
    selectTeam.forEach(p => p.classList.remove("d-none"));
}





selectImage1.addEventListener("change",onChangeImage)






let loader = function(e){
    let file = e.target.files;
    let show = "<span>Archivo seleccionado: </span>" + file[0].name;

    let output = document.getElementById('selector');
    output.innerHTML = show;
    output.classList.add('active');
}

// Añadiendo evento de listener para el input
let fileInput = document.getElementById('userPhoto');
fileInput.addEventListener('change', loader);
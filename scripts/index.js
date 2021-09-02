let button = document.querySelector('button')
let input = document.querySelector('input')
let tela = document.querySelector('.tela')
let textHeader = document.querySelector('header')

let file;
button.addEventListener('click', function(){
    input.click()
})

input.addEventListener('change', function(){
    file = this.files[0]
    tela.classList.add('active')
    showFile()
    // change serve para quando vc cliclou ele vai se chamado so quando, sair__
    // então aqui vai clicar no input e vai abrir file quando escolhe o change vai se chamado
    // Por isso que a function show esta aqui.
})

tela.addEventListener("dragover", (event)=>{
    event.preventDefault()
    tela.classList.add('active')
    textHeader.textContent = 'Solte para atualizar'
    // dragover quando passa algum arquivo por cima

})
tela.addEventListener("dragleave", ()=>{
    tela.classList.remove('active')
    textHeader.textContent = "Arraste a imagem"
    // quando sair o arquivo de cima
})

tela.addEventListener("drop", (event)=>{
    event.preventDefault()
    file = event.dataTransfer.files[0]
    showFile()
    // drop e quando solta algum arquivo
})

function showFile(){
    let filetype = file.type
    let validar = ["image/jpeg", "image/jpg","image/png"]
    if(validar.includes(filetype)){
        let filereader = new FileReader() 
        // instaciando a class FileReader para usar seu metado result
        // que traz os dados do file
        filereader.onload = ()=>{
            let fileUrl = filereader.result
            let img = `<img src="${fileUrl}" açt="">`;
            tela.innerHTML = img
        }
        filereader.readAsDataURL(file) // oque a class vai ler
    }else{
        alert('O arquivo não e uma imagem')
        tela.classList.remove('active')
        textHeader.textContent = 'Arraste a imagem'
    }
}
const enderecoForm = document.querySelector(".form-body");
const cepInput = document.querySelector("#cep");
const ruaInput = document.querySelector("#rua");
const bairroInput = document.querySelector("#bairro");
const cidadeInput = document.querySelector('#cidade')
const estadoInput = document.querySelector("#estado")

cepInput.addEventListener("keypress", (e) => {
    const onlyNumbers = /[0-9]/;
    const tecla = String.fromCharCode(e.keyCode);

    if(!onlyNumbers.test(tecla)){
        e.preventDefault();
        return;
    }
});

cepInput.addEventListener("keyup", (e) =>{
    const inputValue = e.target.value;
    if (inputValue.length === 8){
        //fazer alguma coisa - rodar aplicação
        getEndereço(inputValue);
        
    }

});

const getEndereço = async (cep) =>{

    const apiURL = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fecth(apiURL);
    const data = await response.json();
    console.log(data);
}
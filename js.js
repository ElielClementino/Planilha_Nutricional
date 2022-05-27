var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = document.querySelector(".info-imc");
	var imc = peso/(altura*altura);
	tdImc.textContent = imc;

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if(!pesoEhValido){
  pesoEhValido = false;
  tdPeso.textContent = "Peso inválido!";
  }
	
  if(!alturaEhValida){
  alturaEhValida = false;
  tdAltura.textContent = "Altura inválida!";
  }
 
   }
function calculaImc(peso, altura) {
var imc = 0;
imc = peso / (altura * altura);

return imc.toFixed(2);
}
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

	var erros = validaPaciente(paciente);
	if(erros.length > 0 ){
		var messageErro = document.querySelector("mensagens-erro");
		messageErro.textContent= erro;
		return;
	}

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
});
function exibeMensagensDeErro(erros){
        var ul = document.querySelector("#mensagens-erro");
        erros.forEach(function(erro){
         var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);   
		  })
		 }
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
if (altura >= 0 || altura >= 3.00) {
		return true;
	}
	else{
		return false;
	}

function validaPeso(peso){
	if (peso >= 0 || peso >= 1000){
	return true;
}
 else{
	 return false;
	}
}

function validaPaciente(paciente){

var erros = [];

if (!validaPeso(paciente.peso)) 
	erros.push("Peso é inválido");

if (!validaAltura(paciente.altura)) 
	erros.push("Altura é inválida");
return erros;
}

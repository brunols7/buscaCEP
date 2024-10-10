window.onload = function(){

    const campoCEP = document.getElementById('txtCEP');
    
    campoCEP.addEventListener('blur', function() {

        const caixaCEP = campoCEP.value;

        if(caixaCEP.length == 8){
            const urlCEP = `https://viacep.com.br/ws/${caixaCEP}/json/`;

            fetch(urlCEP)
            .then(function(response){
                if(response.ok == false){
                    alert('Você não está conectado há internet!');
                }
                return response.json();
            })
            .then(function(data){

                if(('erro' in data) == true){
                    alert('CEP Inválido.')
                }else{
                    document.getElementById('txtRua').value = data.logradouro;
                    document.getElementById('txtBairro').value = data.bairro;
                }

            });
            
        }
    });

}


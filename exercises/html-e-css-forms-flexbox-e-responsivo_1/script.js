function creatingStates() {

    let Estados = {

        'AC': 'Acre',
        'AL': 'Alagoas',
        'AP': 'Amapá',
        'AM': 'Amazonas',
        'BA': 'Bahia',
        'CE': 'Ceará',
        'DF': 'Distrito Federal',
        'ES': 'Espírito Santo',
        'GO': 'Goiás',
        'MA': 'Maranhão',
        'MT': 'Mato Grosso',
        'MS': 'Mato Grosso do Sul',
        'MG': 'Minas Gerais',
        'PA': 'Pará',
        'PB': 'Paraíba',
        'PR': 'Paraná',
        'PE': 'Pernambuco',
        'PI': 'Piauí',
        'RJ': 'Rio de Janeiro',
        'RN': 'Rio Grande do Norte',
        'RS': 'Rio Grande do Sul',
        'RO': 'Rondônia',
        'RR': 'Roraima',
        'SC': 'Santa Catarina',
        'SP': 'São Paulo',
        'SE': 'Sergipe',
        'TO': 'Tocantins'
    }


    for (let index in Estados) {

        let StatesNames = document.createElement('option');
        const InputStates = document.getElementById('input-estado');
        StatesNames.value = index;
        StatesNames.innerText = Estados[index];
        InputStates.appendChild(StatesNames);



    }
    StatesNames.disabled = true;
}





creatingStates();


function StopExec() {
    document.getElementById('forms').addEventListener('click', function(event) {
        event.preventDefault();
    })
}

StopExec();

let botaoenviar = document.querySelector("#stop");


botaoenviar.addEventListener('click', function(event) {
            let data = document.querySelector('#data-ini').value;
            let dataarray = data.split('/');
            let dia = parseInt(datarray[0]);
            let mes = parseInt(dataarray[1]);
            let ano = parseInt(dataarray[2]);
            if (!(dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > ) {
                    alert('Erro na formatação da data');
                }
            }
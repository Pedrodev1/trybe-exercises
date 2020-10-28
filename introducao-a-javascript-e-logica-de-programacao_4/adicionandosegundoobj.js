let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim'
};


let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim'
};


for (let i in info) {
    if (i === "recorrente") {
        info2[i] = "Ambos recorrentes";
    } else {
        info2[i] = info[i] + " e " + info2[i]; // "" + ""
    }
    console.log(info2[i]);
}
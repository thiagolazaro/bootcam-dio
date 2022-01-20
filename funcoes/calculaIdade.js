function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 28
}

const pessoa2 = {
  nome: 'Carla',
  idade: 26,
};

const animal = {
    nome: 'Fiona',
    idade: 4,
    raca: 'Pug'
}

console.log(calculaIdade.call(pessoa1, 40));
console.log(calculaIdade.apply(pessoa2, [4]));
console.log(calculaIdade.apply(animal, [4]));

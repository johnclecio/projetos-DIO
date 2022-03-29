const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B',
  },
  {
    nome: 'Pedro',
    nota: 8,
    turma: '2B',
  },
  {
    nome: 'Thiago',
    nota: 7,
    turma: '3B',
  },
  {
    nome: 'Fernando',
    nota: 3,
    turma: '3A',
  }
 
];

function alunosAprovados(arr, media){
  let aprovados = [];

  for (let i = 0; i < arr.length; i++){

    const {nota, nome } = arr[i];

    if(nota >= media){
      aprovados.push(nome);
    }
  }
  return aprovados;
}

console.log(alunosAprovados(alunos, 5));
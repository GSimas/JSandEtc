class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.user = 'Gustavo';
    }

    mostraUser(){
        console.log(this.user);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUser();


//Arrow Functions

const arr = [5,4,3,2,1];

const newArr = arr.map(function(item,index){
    return index*2;
})

console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total + next;

})

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
})

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
})

console.log(find);

const newArr2 = arr.map(item => item*2)

console.log(newArr2);


//Object structure

const usuario = {
    nome: 'Ronaldo',
    idade: 20,
    endereco:{
        cidade: 'Pacaraima',
        estado: 'Roraima',
    },
};

const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome);

const resto = {...usuario, nome:'Guga'};

console.log(resto);

//Template Literals ${}

console.log(`Meu nome é ${nome}`);
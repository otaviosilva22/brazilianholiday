# Brazilian Holiday

Simples biblioteca para verificação de feriado a partir de data recebida.

<span><img src= "https://img.shields.io/badge/status-active-green">
<img src= "https://img.shields.io/badge/npm-2.0.1-blue">
<img src= "https://img.shields.io/badge/tests-pass-green"></span>

## Instalação

```sh
npm install brazilianholiday
```

## Métodos
<ul>
<li> <a href='#isHoliday'>isHoliday</a></li>
<li> <a href='#createHoliday'>createHoliday</a></li>
<li> <a href='#all'>all</a></li>
</ul>

### <span id='isHoliday'>isHoliday(date, uf = null) </span>
> Verifica se data é um feriado

~~~text
//PARAMS

date
- required: true
- type: string
- format: 'DD/MM/YYYY'

uf
- required: false
- type: string
- format: 'XX'

~~~

~~~javascript
const {brazilianHoliday} = require('brazilianholiday');

let date = '01/01/2023';

console.log(brazilianHoliday.isHoliday(date));

/*
{
  holiday: true,
  description: 'Confraternização Universal',
  date: '01/01/2024'
}
*/

date = '20/01/2023';

console.log(brazilianHoliday.isHoliday(date, 'AC'));

/*
{ 
    holiday: true, 
    description: 'Dia do Católico', 
    date: '20/01/2024' 
}
*/
~~~

### <span id='createHoliday'>createHoliday([objects])</span>
>Possibilita a criação de feriados locais/municipais. 

- Os feriados não são armazenados e cada requisição do método implica no <i>reset</i> daqueles já criados.

- Quando existir a necessidade de novos feriados, a requisição método createHoliday deve anteceder a consulta do método <a href='#isHoliday'>isHoliday</a>;

- Desde a versão 2.0.1 (versão em que a function foi disponibilizada), os feriados criados não consideram o estado para verificação na chamada da isHoliday, sendo estes considerados do âmbito nacional.

- O método retorna um <i>array</i> de objetos que faz referência aos feriados criados.

~~~text
//PARAMS

date
- required: true
- type: string
- format: 'DD/MM/YYYY'

uf
- required: true
- type: string
- format: 'XX'

city
- required: true
- type: string
- format: 'XXXXXX'

description
- required: true
- type: string
- format: 'XXXXXX'

uf
- required: true
- type: string
- format: 'XXXXXX'

moveable
- required: false
- type: boolean
- format: true || false
~~~

~~~javascript
const {brazilianHoliday} = require('brazilianholiday');

brazilianHoliday.createHoliday([
    {
        date: '15/05/2023', 
        city: 'Passos', 
        uf: 'MG', 
        description: 'Aniversário de Passos', 
        moveable: false
    },
    {
        date: '06/05/2023', 
        city: 'Passos', 
        uf: 'MG', 
        description: 'Aniversário de Passos', 
        moveable: false
    }
]);

console.log(brazilianHoliday.isHoliday('15/05/2023'))
/*
{
  holiday: true,
  description: 'Aniversário de Passos',
  date: '15/05/2023'
}
*/

~~~

### <span id='all'>all()</span>
> Retorna json completo de feriados.

~~~javascript
const {brazilianHoliday} = require('brazilianholiday');

console.log(brazilianHoliday.all());
/*
{
  moveable: [ Array ],
  national: [ Array ],
  state: [ Array ]
}
*/

~~~

## Histórico de Versões

* 2.0.1 [STABLE]
    * FEAT: function createHoliday
* 1.0.9 [STABLE]
    * FEAT: function all and test
* 1.0.8 [STABLE]
    * FEAT: function isHoliday
    

## Como Contribuir

Ajude-nos alimentando o arquivo .json com feriados móveis que variam a cada ano.

~~~json
"moveable": [
        {
            "year": "2024",
            "holidays": [
                {
                    "date": "12/02",
                    "description": "Carnaval"
                },
                {
                    "date": "13/02",
                    "description": "Carnaval"
                },
                {
                    "date": "29/03",
                    "description": "Paixão de Cristo"
                }
            ]
        }
    ]
~~~

## Licença:

MIT © Otávio Silva 2023

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/otaviosilva22/)](https://www.linkedin.com/in/otaviosilva22/)
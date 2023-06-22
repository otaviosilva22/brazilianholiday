# Brazilian Holiday

Simples biblioteca para verificação de feriado a partir de data recebida.

<span><img src= "https://img.shields.io/badge/status-active-green">
<img src= "https://img.shields.io/badge/npm-2.0.0-blue">
<img src= "https://img.shields.io/badge/tests-pass-green"></span>

## Instalação

```sh
npm install brazilianholiday
```

## Exemplo de Uso

### isHoliday(date, uf = null)
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

### all()
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

* 1.0.9 [ESTÁVEL]
    * FEAT: function all and test
* 1.0.8 [ESTÁVEL]
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
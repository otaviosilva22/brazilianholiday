# Brazilian Holiday

Simples biblioteca que retorna se determinada data é feriado.

## Instalação

```sh
npm install brazilianholiday --save
```

## Exemplo de Uso

### isHoliday(date, uf = null)
> Verifica se data é um feriado

~~~javascript
//PARÂMETROS

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

## Histórico de Versões

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
# Brazilian Holiday

Simples biblioteca que retorna se determinada data é feriado.

## Instalação

```sh
npm install brazilianholliday --save
```

## Exemplo de Uso

### isNational(date)
> Verifica se data é um feriado nacional.

~~~javascript
const {brazilianHoliday} = require('brazilianholiday');

let date = '01/01/2023';

console.log(brazilianHolidays.isNational(date));
/*
{
    holiday: true,
    date: "01/01",
    description: "Confraternização Universal"
}
*/
~~~

### isState(date, uf)
> Verifica se data é um feriado estadual

~~~javascript
const {brazilianHoliday} = require('brazilianholiday');

let date = '21/04/2023';

console.log(brazilianHolidays.isState(date, 'MG'));
/*
{
    holiday: true,
    date: '21/04/2023',
    description: 'Data Magna de Minas Gerais'
}
*/
~~~

## Histórico de Versões

* 1.0
    * FEAT: function isNational
* 1.0.4
    * FEAT: function isState

## Contribuidor:

Otávio Silva.

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/otaviosilva22/)](https://www.linkedin.com/in/otaviosilva22/)
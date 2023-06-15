# Brazilian Holidays
> Feriados Brasileiros

Simples biblioteca que retorna se determinada data é um feriado ou não.

## Instalação

```sh
npm install brazilian-hollidays --save
```

## Exemplo de Uso

### isNational()
> Verifica se data é um feriado nacional.

~~~javascript
const brazilianHolidays = require('brazilian-holidays');

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


## Histórico de Versões

* 1.0
    * FEAT: function isNational

## Contribuidor:

Otávio Silva.

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/otaviosilva22/)](https://www.linkedin.com/in/otaviosilva22/)
const commands = `
/start - перезапустить бота
/help - помощь
`
const text1 = `
Время работы:
---
Понедельник - выходной
Вторник - выходной
Среда - 9:00 - 22:00
Четверг - 9:00 - 22:00
Пятница - 9:00 - 22:00
Суббота - 8:00 - 22:00
Воскресение - 8:00 - 22:00
---
Впуск посетителей до 20:30
`
const text2 = `
Прейскурант:
---
1 час - 600 руб
1,5 часа - 800 руб
2 часа - 1000 руб
2,5 часа - 1200 руб
3 часа - 1350 руб
---
Дополнительная оплата сверх оплаченного времени:
15 мин - 100 руб
`
module.exports.commands = commands
module.exports.text1 = text1
module.exports.text2 = text2
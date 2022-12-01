const chalk = require("chalk")

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const mylog = (text, color) => {
return !color ? chalk.blue("[ VENOM CONSOLE ] ") + chalk.blue(text) : chalk.blue("[ VENOM CONSOLE ] ") + chalk.keyword(color)(text)
}

module.exports = {
color,
mylog
}

var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (searchElement, fromIndex) {
    if (fromIndex === undefined) {
        /*
        buscar searchElement dentro del arroz
        iterar element por element del arroz y comprobar si element es igual al searchElement
        si element es igual a searchElement, devolver true
        si no hemos encontrado el searchElement, devolver false
        */

        for (var i = 0; i < this.length; i++) {
            var element = this[i]

            if (element === searchElement) return true
        }

        return false
    } else {
        for (var i = fromIndex; i < this.length; i++) {
            var element = this[i]

            if (element === searchElement) return true
        }

        return false
    }

}

console.log('TEST Arroz.prototype.includes')

console.log('CASE check cars includes ferrari')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('ferrari')
console.log(contains)
// false

console.log('CASE check cars includes fiesta')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE check cars includes fiesta (2)')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars.length = 5
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE check cars includes lambo from index 1')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars.length = 5
var contains = cars.includes('lambo', 1)
console.log(contains)
// false

console.log('CASE check cars includes lambo from index 1')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars[5] = 'lambo'
cars.length = 6
var contains = cars.includes('lambo', 1)
console.log(contains)
// true
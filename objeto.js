const yo = {
    nombre: 'Angel',
    apellido: 'Pacheco',
    edad: '22',
    altura: '1.74',
    eresDesarrollador: true
}

const miEdad = yo.edad

const yoAmigos = [

    yo,

    {
        nombre: 'Samir',
        apellido: 'Narvaez',
        edad: '21',
        altura: '1.80',
        eresDesarrollador: false
    },
    {
        nombre: 'Melissa',
        apellido: 'Ibarrola',
        edad: '19',
        altura: '1.68',
        eresDesarrollador: false
    }
]

const edades = {...yoAmigos.sort((a, b) => a.edad + b.edad)}

console.log(edades)
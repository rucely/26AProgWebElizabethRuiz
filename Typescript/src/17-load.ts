import _ from 'lodash';

const data = [
    {
        username: 'maria',
        role: 'admin'
    },
    {
        username: 'canelita',
        role: 'seller'
    },
    {
        username: 'ely',
        role: 'seller'
    },
    {
        username: 'profe lemus',
        role: 'seller'
    }
]

const rta = _.groupBy(data, (item) => item.role)
console.log(rta)

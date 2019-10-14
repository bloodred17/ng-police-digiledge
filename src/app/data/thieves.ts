import { Thief } from '../interfaces/thief';
import { Gender } from '../interfaces/gender';

export let Thieves: Thief[] = [
    {
        name: 'Elaine Stone',
        id: '100',
        gender: Gender.female, 
        dob: new Date(123456789),
        addresses:[ 
            {
                house: 'Pratistha',
                street: 'Jakatnaka',
                landmark: 'Lake View',
                city: 'Surat',
                pocode: 395001,
                state: 'Gujarat',
                country: 'India'
            },
            {   
                house: 'Pragati Nagar',
                street: 'Jakatnaka',
                landmark: 'Lake View',
                city: 'Bangalore',
                pocode: 395007,
                state: 'Gujarat',
                country: 'India'
            },
            {
                house: 'Kings Palace',
                street: 'KIIT Road',
                landmark: 'Campus 6, KIIT',
                city: 'Bhubaneshwar',
                pocode: 751024,
                state: 'Odisha',
                country: 'India'
            }
        ],
        stateOfConviction: false
    },
    {
        name: 'Peyton Tyrell',
        // dob: ''
        gender: Gender.male,
        id: '101',
        dob: new Date(),
        addresses:[ 
            {
                house: 'Pratistha',
                street: 'Jakatnaka',
                landmark: 'Lake View',
                city: 'Tezpur',
                pocode: 395001,
                state: 'Gujarat',
                country: 'India'
            },
            {   
                house: 'Pragati Nagar',
                street: 'Jakatnaka',
                landmark: 'Lake View',
                city: 'Surat',
                pocode: 395007,
                state: 'Gujarat',
                country: 'India'
            },
            {
                house: 'Kings Palace',
                street: 'KIIT Road',
                landmark: 'Campus 6, KIIT',
                city: 'Bhubaneshwar',
                pocode: 751024,
                state: 'Odisha',
                country: 'India'
            }
        ],
        stateOfConviction: false
    },
    {
        name: 'Bess Braddock',
        dob: new Date(123498798797),
        gender: Gender.female,
        id: '102',
        addresses:[ 
            {
                house: 'Pratistha',
                street: 'Jakatnaka',
                landmark: 'Lake View',
                city: 'Kota',
                pocode: 395001,
                state: 'Gujarat',
                country: 'India'
            },
            {   
                house: 'Pragati Nagar',
                street: 'Jakatnaka',
                landmark: 'Lake View',
                city: 'Surat',
                pocode: 395007,
                state: 'Gujarat',
                country: 'India'
            },
            {
                house: 'Kings Palace',
                street: 'KIIT Road',
                landmark: 'Campus 6, KIIT',
                city: 'Bhubaneshwar',
                pocode: 751024,
                state: 'Odisha',
                country: 'India'
            }
        ],
        stateOfConviction: true
    }
]
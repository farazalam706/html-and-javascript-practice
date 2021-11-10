const personDetails = [
    {
        id: 1,
        name: "",
        gender: ''
    },
    {
        id: 2,
        name: "Faraz",
        gender: 'Male'
    },
    {
        id: 3,
        name: "Nousheen",
        gender: 'Female'
    },
    {
        id: 4,
        name: "Noureen",
        gender: 'Female',
    },
    {
        id: 5,
        name: "Imran",
        gender: 'Male'
    },
    {
        id: 6,
        name: "Chand",
        gender: 'Male'
    }
]

// const personDetails = [
//     {
//         id: 1,
//         name: "",
//         gender: ''
//     },
//     {
//         id: 2,
//         name: "",
//         gender: ''
//     },
//     {
//         id: 3,
//         name: "",
//         gender: ''
//     },
//     {
//         id: 4,
//         name: "",
//         gender: '',
//     },
//     {
//         id: 5,
//         name: "",
//         gender: ''
//     },
//     {
//         id: 6,
//         name: "",
//         gender: ''
//     }
// ]

let isCompleted = false;
const returnedArray = personDetails.map((person) => {
    if (person.name === "" || person.gender === "") {
        return true;
    } else {
        return false;
    }
})
console.log('returnedArray',returnedArray);

for (const i in returnedArray) {
    debugger
    if(i === true){
        isCompleted = true;
        break;
    }
}

console.log('isCompleted', isCompleted);


if(isCompleted) {
    alert("You haven't filled the form correctly.");
} else {
    alert('Filled completely!')
}   

// let isCompleted = false;
// for (let i = 0; i < personDetails.length; i++) {
//     if (personDetails[i].name === "" || personDetails[i].gender === "") {
//         isCompleted = true;
//         break;
//     }
// }
// if(isCompleted) {
//     alert("You haven't filled the form correctly.");
// } else {
//     alert('Filled completely!')
// }   
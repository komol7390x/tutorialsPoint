const users = [
    {name:"Komol",lastName:"Alimov"},
    {name:"Adham",lastName:"Salimov"},
    {name:"Abdurashid",lastName:"Azimov"}
]

function getUsers() {
    setTimeout(() => {
        console.log(users);
    }, 1000);
}
function addUser(user,callback) {
    setTimeout(() => {
        users.push(user)
        callback()
    },1000)
}

// addUser({ name: "Rashid", lastName: "Salimov" }, getUsers);

// ----------------------------------------------------------------

function userTop(id, callback) {
    const users = [
        { id: 1, name: "Komol" },
        { id: 2, name: "Ali" },
    ];
    
    const user = users.find((u) => u.id === id);
    
    if (user) {
        callback(null, user);
    } else {
        callback("User topilmadi", null);
    }
}


// userTop(1, function (xato, user) {
//     if (xato) {
//         console.log("Xatolik:", xato);
//     } else {
//         console.log("User:", user.name); // Komol
//     }
// });

// ----------------------------------------------------------------
function hisobla(a, b, amal, callback) {
    let res;
    if (amal == "+") {
        res=a+b
    } else if (amal == "-") {
        res=a-b
    } else if (amal == "*") {
        res=a*b
    }
    callback(res)
}
hisobla(3, 5, "+", function (natija) {
    console.log("Natija: "+natija);
})

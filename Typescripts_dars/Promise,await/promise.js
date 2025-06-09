const users = [
    { name: "Komol", lastName: "Alimov" },
    { name: "Adham", lastName: "Salimov" },
    { name: "Abdurashid", lastName: "Azimov" }
]

function getUsers() {
    setTimeout(() => {
        console.log(users);
    }, 1000);
}
function addUser(user) {
    return new Promise((resolve, reject) => {
        users.push(user)
        const check = user;
        if (check) {
            resolve()
        } else {
            reject("Nimadur xato")
        }
   })
}

addUser({ name: "Rashid", lastName: "Salimov" }).then(getUsers).catch((err)=>console.log(err));

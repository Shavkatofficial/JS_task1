/* Sizga users array beriladi, siz funksiya yasaysiz, 
 u funksiyaga users arrayni va telefon nomer kiritaman. 
 Va u menga returnida shu nomer kimga tegishliligini 
 chiqarib beradi. Agar yo'q bo'lsa bo'sh string qaytaradi.
*/
let users = [
    {
        name: "Avazbek",
        telNumber: "998911645099"
    },
    {
        name: "Umid",
        telNumber: "998911758585"
    },
    {
        name: "O'ktam",
        telNumber: "998911777767"
    },
    {
        name: "Valijon",
        telNumber: "998917777777"
    },
    {
        name: "Sarvar",
        telNumber: "998911222222"
    },
    {
        name: "Sardor",
        telNumber: "998911222322"
    },
    {
        name: "Toxir",
        telNumber: "998911645022"
    }
]



function findUser(array, number) {
    let userName = '';
    let user = array.find(user => user.telNumber === number)
    if (user) {
        userName = user.name
    };
    return userName
}


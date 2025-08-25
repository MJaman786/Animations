
let counterChild = document.querySelector(".counter-child");
let count = 0;

function increment() {
    let myDate = new Date();
    count = count + 1;
    // let custDate = myDate.toLocaleString('en-US', {
    //     hour:"2-digit",
    //     minute:"2-digit",
    //     second:"2-digit"
    // })
    // counterChild.innerText = `${custDate}`
    counterChild.innerText = `${count}`
}
increment()
setInterval(increment, 2000);
// counterChild.innerText = `2`

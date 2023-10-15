const main = document.querySelector('.nav_list-logo')
const user = document.querySelector('.nav_list1-usermenu')

user.addEventListener('click', () => {
    location.href = '/html/admin.html'
})

main.addEventListener("click", () => {
    location.href = '/html/main.html'
})
// shop cart button
const shop = document.querySelector('.shopcart')

let cnt = 0

shop.textContent = cnt
// 
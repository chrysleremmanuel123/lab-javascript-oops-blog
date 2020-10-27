/* Fill your code*/
const edit_blog = document.getElementById('edit')
const delete_blog = document.getElementById('delete')
const add_blog = document.getElementById('addBlog')
const popUp = document.getElementById('popupContact')
const end = document.getElementById('close')
class Blog {
    constructor(title, detail) {
        this.title = title
        this.detail = detail
    }

    addTitle() {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id", "blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
        this.addDescription()

    }
    addDescription() {
        var title_des = document.createElement('h3');
        title_des.setAttribute("id", "blog-description");
        console.log(title_des);
        document.getElementById('card-text').appendChild(title_des);
        title_des.innerHTML += this.detail;

    }

}
add_blog.addEventListener('click', function () {
    popUp.style.display = 'block'
}, false)


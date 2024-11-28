function addComment() {
    let form = document.getElementsByTagName("form")[0]
    let email = form.querySelector("#email")
    let text = form.getElementsByTagName("textarea")[0]
    let comment_list = document.getElementsByClassName("comments-list")[0]
    let comment = document.createElement("li")
    let email_section = document.createElement("p")
    email_section.className = "email_section"
    email_section.appendChild(document.createTextNode(email.value))
    let text_section = document.createTextNode(text.value)
    text_section.className = "text_section"
    comment.appendChild(email_section)
    comment.appendChild(text_section)
    comment_list.insertBefore(comment, comment_list.firstChild)
    email.value = ""
    text.value = ""
}
const openPostModal = document.querySelectorAll("[data-modal-control]");

for (let i = 0; i < openPostModal.length; i++) {
  openPostModal[i].addEventListener("click", (event) => {
    let captId = event.target.id;
    postModal(captId)
  });
}

function postModal(postId) {
  
  const body = document.querySelector("body");
  const modalWrapper = document.createElement("div");
  const modal = document.createElement("div");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  let userId = 0;
  
  for (let i = 0; i < posts.length; i++) {
    
    if (posts[i].id_post == postId) {
      
      title.innerText = posts[i].title;
      description.innerText = posts[i].text;
      userId = posts[i].user;

    }
    
  }
  const user = userModal(userId)
  
  
  modalWrapper.classList.add("show-modal");
  modal.classList.add("modal");
  title.classList.add("title");
  description.classList.add("description");

  modal.append(user, title, description);
  modalWrapper.appendChild(modal);
  body.appendChild(modalWrapper)
}

function userModal(UserId) {
  const wrapper = document.createElement("div");
  const user = document.createElement("div");
  const image = document.createElement("img");
  const userId = document.createElement("div");
  const closeBtn = document.createElement("p");
  const name = document.createElement("h4");
  const stack = document.createElement("p");

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === UserId) {
      name.innerText = users[i].user;
      image.src = users[i].img;
      stack.innerText = users[i].stack;
    }
  }
  closeBtn.innerText= "X";
  closeBtn.addEventListener("click", () =>{
  const modalClose = document.querySelector(".show-modal")
    modalClose.innerHTML = ""
    modalClose.classList.toggle("show-modal");
})

  wrapper.classList.add("wrapper-close");
  closeBtn.classList.add("close-button");
  user.classList.add("user");
  userId.classList.add("user-id");
  name.classList.add("name");
  stack.classList.add("stack");

  userId.append(name, stack);
  user.append(image, userId);
  wrapper.append(user, closeBtn)

  return wrapper
}

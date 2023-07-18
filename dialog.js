import { createLink } from "./Link.js";

const dialog = document.querySelector(".dialog");
const dialogOpen = dialog.querySelector(".dialog-openBtn");
const dialogClose = dialog.querySelector(".dialog-closeBtn");
const dialogBox = dialog.querySelector(".dialog-box");

const newName = dialog.querySelector("[name=name]");
const newHref = dialog.querySelector("[name=url]");
const newImage = dialog.querySelector("[name=image]");

dialogOpen.onclick = () => {
  dialogBox.showModal();
};
dialogClose.onclick = () => {
  var link = createLink({
    name: newName.value,
    href: newHref.value,
    image: newImage.value,
  });

  newName.value = newHref.value = newImage.value = "";
  dialogBox.close();
};

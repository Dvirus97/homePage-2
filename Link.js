import { ls } from "./localStorage.js";

class Link {
  constructor(name = "", href = "", image = "") {
    this.name = name;
    this.href = href;
    this.image = image;
  }
}

export let links = [
  new Link(
    "WhatsApp",
    "https://web.whatsapp.com/",
    "./public/images/WhatsApp.svg.webp"
  ),
  new Link(
    "Instagram",
    "https://www.instagram.com/dvircoh97/",
    "./public/images/instagram.webp"
  ),
  new Link(
    "Facebook",
    "https://www.facebook.com/Dvircoh/",
    "./public/images/facebook.png"
  ),
  new Link(
    "Netflix",
    "https://www.netflix.com/",
    "./public/images/netflix.png"
  ),
  new Link(
    "Youtube",
    "https://www.youtube.com/",
    "./public/images/youtube.ico"
  ),
  new Link(
    "Outlook",
    "https://outlook.office.com/mail/",
    "./public/images/outlook.png"
  ),
];

const linkList = document.querySelector(".link-list");
links = ls.load();
render();

function render() {
  linkList.innerHTML = "";
  links.forEach((link) => {
    linkList.append(createLinkElement(link));
  });
}

export function createLink({ name = "", href = "", image = "" } = {}) {
  var link = new Link(name, href, image);
  links.push(link);
  ls.save(links);
  render();
  return link;
}

export function removeLink(name) {
  ls.remove(name);
  links = links.filter((l) => l.name !== name);
  render();
}

export function createLinkElement(link = new Link()) {
  const div = document.createElement("div");
  div.classList.add("card");
  const img = document.createElement("img");
  img.src = link.image;
  const a = document.createElement("a");
  a.classList.add("link");
  a.setHTML(
    `<img class="link-image" src='${link.image}'/><div class="link-text">${link.name}</div>`
  );
  a.href = link.href;
  a.target = "_blank";
  const deleteBtn = document.createElement("button");
  deleteBtn.setHTML("X");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.onclick = () => removeLink(link.name);
  div.append(deleteBtn);

  div.append(a);
  return div;
}

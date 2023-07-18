const prePhone = document.querySelector("[name='per-phone']");
const phone = document.querySelector("[name='phone']");
const whatsappBtn = document.querySelector(".whatsappBtn");

whatsappBtn.onclick = (e) => {
  e.preventDefault();
  const full = prePhone.value + phone.value;
  window.open(`https://api.whatsapp.com/send?phone=${full}`, "_blank");
};

export {};

//send email

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Надсилається...";

  const serviceID = "default_service";
  const templateID = "template_zb3yjb9";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "ЛИСТ НАДІСЛАНО";
      alert("Надiслано!");
    },
    (err) => {
      btn.value = "ЛИСТ НАДІСЛАНО";
      alert(JSON.stringify(err));
    }
  );
});

//scroll

const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

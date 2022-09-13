// Task 2.0 - 2.3
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.classList.add("flex-around");

// Task 3.0 - 3.1
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
menuLinks.forEach((obj) => {
  const a = document.createElement("a");
  a.setAttribute("href", obj.href);
  a.textContent = obj.text;
  topMenuEl.appendChild(a);
});

// Task 1.0 - 1.3
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "#4a4e4d";
// mainEl.style.backgroundColor = 'var(--main-bg)' //Another way to add BG from CSS
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

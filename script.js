const ename = document.querySelector(".name");
const ecode = document.querySelector(".ecode");
const salary = document.querySelector(".salary");
const city = document.querySelector(".city");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: ename.value,
    ecode: ecode.value,
    salary: salary.value,
    city: city.value,
  };
  ename.value = "";
  ecode.value = "";
  salary.value = "";
  city.value = "";
  updateDOM(data);
});

const updateDOM = (data) => {
  const tBody = document.querySelector("tbody");

  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.textContent = data.name;
  tr.appendChild(td1);

  const td2 = document.createElement("td");
  td2.textContent = data.ecode;
  tr.appendChild(td2);

  const td3 = document.createElement("td");
  td3.textContent = data.salary;
  tr.appendChild(td3);

  const td4 = document.createElement("td");
  td4.textContent = data.city;
  tr.appendChild(td4);

  tBody.appendChild(tr);
};

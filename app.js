// `CONSENT=YES+RO.ro+V10; PREF=f1=50000000&al=en&f4=4000000&f5=20030&f6=80000;
// SID=wgfdPqBpZbg_RdRywyjULjQgdzB4-PEvpZaDWIX6aoY7nGdSi1Y4nEXmbDsp6IReGiIe_g.;
// APISID=dCMcPdpNZN_twbI7/AJjW2jhu1vkq9TjQp; SAPISID=6YnneA0RUMeD5nEe/AFHPBNpckg4K2FiT1;
//  __Secure-APISID=dCMcPdpNZN_twbI7/AJjW2jhu1vkq9TjQp; __Secure-3PAPISID=6YnneA0RUMeD5nEe/AFHPBNpckg4K2FiT1;
//  wide=1; SIDCC=AJi4QfFYEYvnA8MkFkuukGUAT3dNEDubCMObdMZ4X7mIXBI1HW45FgKa3hggTeoMZRzruZy4kiw`;

// document.cookie;

function getCookiesAsObject() {
  let cookieArray = document.cookie.split("; ");
  //   console.log(cookieArray);

  let cookiesObj = {};
  cookieArray.forEach((element) => {
    let cookieData = element.split("=");
    cookiesObj[cookieData[0]] = cookieData[1];
  });
  return cookiesObj;
}
//aici pun in cookiesObj tot ce este in functia getCookiesAsObject()
const cookiesObj = getCookiesAsObject();
// console.log(cookiesObj.language);

const radioBtns = document.getElementsByName("language");

// console.log(radioBtns);
for (let i = 0; i < radioBtns.length; i++) {
  //Aici se verifica daca radio btns are deja language checked
  if (radioBtns[i].value === cookiesObj.language) {
    radioBtns[i].checked = "checked";
  }
  radioBtns[i].addEventListener("click", (event) => {
    document.cookie = "language=" + event.target.value;
    // console.log(event.target);
  });
}

//Local Storage

// function local() {
//   const en = document.getElementById("en");
//   //   console.log(en);
//   const ro = document.getElementById("ro");
//   //   console.log(ro);

//   en.addEventListener("click", () => {
//     localStorage.setItem("lang", "en-Us");
//   });
//   ro.addEventListener("click", () => {
//     localStorage.setItem("lang", "ro-RO");
//   });
//   if (ro.value == localStorage.getItem("lang")) {
//     ro.checked = "checked";
//   } else if (en.value == localStorage.getItem("lang")) {
//     en.checked = "checked";
//   }
// }
// local();

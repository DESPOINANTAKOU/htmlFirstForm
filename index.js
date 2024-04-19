const nativeInput = document.getElementById("nativeInput");
const customInput = document.getElementById("customInput");
nativeInput.addEventListener("input", function () {
  customInput.value = nativeInput.value;
});
customInput.addEventListener("click", function () {
  nativeInput.click();
});


//setting the Date
const today = new Date();
console.log(today);
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();
const dateString = `${year}-${month}-${day}`;
// console.log(dateString);
// console.log(document.getElementById("customInput").value);
document.getElementById("customInput").value = dateString;

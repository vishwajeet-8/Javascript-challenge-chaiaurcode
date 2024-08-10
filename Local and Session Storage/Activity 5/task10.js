// Task 10: Write a function that clears all data from both localStorage and sessionStorage . Verify that both storages are empty.

localStorage.clear();
sessionStorage.clear();

if (localStorage.length === 0 && sessionStorage.length === 0) {
  document.getElementById("para").innerText = "Both storages are empty";
}

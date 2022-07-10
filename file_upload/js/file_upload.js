const form = document.querySelector("form");
const fileUpload = document.querySelector(".file_upload");
form.addEventListener("click", () => {
  fileUpload.click();
});
fileUpload.onchange = ({ target }) => {
  let file = target.files[0];
  if (file) {
    let fileName = file.name;
    Upload(fileName);
  }
  console.log(target);
};
function uploadFile(name) {}

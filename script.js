const optionMenus = document.querySelectorAll(".select-menu");

optionMenus.forEach((optionMenu) => {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const sBtn_text = selectBtn.querySelector(".sBtn-text");
  const options = optionMenu.querySelectorAll(".options .option");

  selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
    console.log("Button clicked");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      console.log(selectedOption);
      optionMenu.classList.remove("active");
      console.log("Option clicked");
    });
  });
});

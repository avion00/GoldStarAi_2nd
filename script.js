document.addEventListener("DOMContentLoaded", () => {
  // this is for view icons field
  const viewIcons = document.querySelectorAll(".visibleIconField");

  viewIcons.forEach((viewIcon) => {
    const visiableFields = viewIcon.querySelector(".visiable_fields");
    const visiableIcon = viewIcon.querySelector(".visiable_icon");
    const closeFields = viewIcon.querySelector(".close_fields");

    visiableIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      visiableFields.classList.toggle("active");
    });

    closeFields.addEventListener("click", () => {
      visiableFields.classList.remove("active");
    });

    document.addEventListener("click", (event) => {
      if (!viewIcon.contains(event.target)) {
        visiableFields.classList.remove("active");
      }
    });
  });

  // this is for advanced search field
  const filter = document.querySelectorAll(".filter");
  filter.forEach((filter) => {
    const advancedBtns = filter.querySelector(".advancedBtns");
    const advancedSearch = filter.querySelector(".advanced_search");

    advancedBtns.addEventListener("click", (event) => {
      event.stopPropagation();
      advancedSearch.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
      if (!filter.contains(event.target)) {
        advancedSearch.classList.remove("active");
      }
    });
  });
});

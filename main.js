const scrollFunction = () => {
    var myButton = document.querySelector("#goup")

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      myButton.style.opacity = 1;
      myButton.style.cursor = "pointer"
    } else {
      myButton.style.cursor = "context-menu"
      myButton.style.opacity = 0;
    }
  }
  scrollFunction()

  function toTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  document.querySelector("#goup").addEventListener("click", toTopFunction)
  window.addEventListener("scroll", scrollFunction)
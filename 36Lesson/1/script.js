const main = document.getElementById("main")

document.addEventListener("keydown", function(e){
  if(e.ctrlKey && e.code === "KeyE") {
      e.preventDefault();
      let textarea = document.createElement("TEXTAREA");
      textarea.classList.add("textarea-default")
      const text = e.target.textContent;
      const div = document.getElementById("text");
      div.remove();
      main.appendChild(textarea);
      textarea.value = text.trim();
  }

  if(e.ctrlKey && e.code === "KeyS") {
    e.preventDefault();
    const textarea = document.querySelector(".textarea-default")
    const text = textarea.value;
    textarea.remove()
    let div = document.createElement("DIV");
    main.appendChild(div);
    div.classList.add("main-text")
    div.id = "text";
    div.textContent = text;
  }
});
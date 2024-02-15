
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
// function flower(){
//     setTimeout(() => {
//         document.getElementsByClassName("flowers")[0].style.visibility = "visible"
//       }, 5000)
// }
// flower()
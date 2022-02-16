import Swal from "sweetalert2";

const show = {
  showSwal() {
    let button = $("#buttonShow");

    button.click(() => {
      Swal.fire("Any fool can use a computer");
    });
    console.log("Aqui é a home");
  },

  showConsole() {
    console.log("teste");
  },

  init() {
    this.showSwal();
  },
};

export default show;

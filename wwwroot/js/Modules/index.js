import Home from "./Home";
import Privacy from "./Privacy";

const imports = { Home, Privacy };

const modules = {
  initModules() {
    const required = $("body").attr("data-modules").replace(/\s/g, "");

    if (required.length > 0) {
      required.split(",").map((name) => imports[name].init());
    }
  },

  init() {
    this.initModules();
  },
};

export default modules;

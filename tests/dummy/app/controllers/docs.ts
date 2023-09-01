import Controller from "@ember/controller";

const DARK_MODE_CLASS = "dark";
const HTML = document.querySelector("html");
const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

export default class DocsController extends Controller {
  toggleDarkMode = () => {
    if (HTML === null) {
      return;
    }

    if (HTML.classList.contains(DARK_MODE_CLASS)) {
      localStorage.setItem("theme", THEME.LIGHT);
      HTML.classList.remove(DARK_MODE_CLASS);
    } else {
      localStorage.setItem("theme", THEME.DARK);
      HTML.classList.add(DARK_MODE_CLASS);
    }
  };
}

import setViewport from "./theme/viewport.js";
import darkTheme from "./theme/dark-theme.js";
import jForm from "./theme/form.js";

setViewport();
jForm();
darkTheme();

window.onresize = setViewport;
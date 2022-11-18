import setViewport from "./theme/viewport.js";
import darkTheme from "./theme/dark-theme.js";
import jForm from "./theme/form.js";
import { youtubeApi } from "./api/connect.js";

setViewport();
jForm();
darkTheme();

window.onresize = setViewport;

// youtubeApi("metallica");
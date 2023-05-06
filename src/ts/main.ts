import * as $ from "jquery";
import { Sidebar } from "./components/sidebar";
const initializers = [Sidebar];
for (const i of initializers) {
  new i().onInit();
}

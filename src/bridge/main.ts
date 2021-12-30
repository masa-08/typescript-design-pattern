import { Display } from "./display";
import { StringDisplayImpl } from "./stringDisplayImpl";
import { CountDisplay } from "./countDisplay";

const d1: Display = new Display(new StringDisplayImpl('Hello, Japan.'))
const d2: Display = new CountDisplay(new StringDisplayImpl('こんにちは、日本'))
const d3: CountDisplay = new CountDisplay(new StringDisplayImpl('Hello, world.'))
d1.display()
d2.display()
d3.multiDisplay(5)
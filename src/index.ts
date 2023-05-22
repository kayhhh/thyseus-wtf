import { CoreSchedule } from "thyseus";
import { world } from "./world.js";

world.runSchedule(CoreSchedule.Startup);

const loop = async () => {
  world.runSchedule(CoreSchedule.Main);
  requestAnimationFrame(loop);
};

requestAnimationFrame(loop);

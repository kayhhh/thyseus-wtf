import { DefaultSchedule, StartSchedule } from "thyseus";
import { world } from "./world.js";

await world.runSchedule(StartSchedule);

const loop = async () => {
  await world.runSchedule(DefaultSchedule);
  requestAnimationFrame(loop);
};

loop();

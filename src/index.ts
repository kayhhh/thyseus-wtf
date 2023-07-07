import { DefaultSchedule } from "thyseus";
import { world } from "./world.js";

const loop = async () => {
  console.log("--------- start loop ----------");

  await world.runSchedule(DefaultSchedule);
  requestAnimationFrame(loop);
};

loop();

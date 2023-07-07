import { World, applyCommands, run } from "thyseus";
import { clearEvents, readEvents, writeEvents } from "./systems.js";

export const world = await World.new()
  .addSystems(
    ...run.chain(writeEvents, readEvents, applyCommands),
    run(clearEvents).before(readEvents)
  )
  .build();

import { StartSchedule, World, applyCommands, run } from "thyseus";
import { initSystem, systemA } from "./systems.js";

export const world = await World.new()
  .addSystems(
    ...run.chain(systemA, applyCommands),
  )
  .addSystemsToSchedule(StartSchedule, initSystem)
  .build();

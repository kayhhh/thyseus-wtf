import { StartSchedule, World, applyCommands, run } from "thyseus";
import { startupSystem, systemA } from "./systems.js";

export const world = await World.new(
  {
    threads: navigator.hardwareConcurrency,
  },
  import.meta.url
)
  .addSystemsToSchedule(StartSchedule, startupSystem)
  .addSystems(run(applyCommands).last(), systemA)
  .build();

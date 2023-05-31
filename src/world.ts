import { StartSchedule, World } from "thyseus";
import { startupSystem, systemA } from "./systems.js";

export const world = await World.new()
  .addSystemsToSchedule(StartSchedule, startupSystem)
  .addSystems(systemA)
  .build();

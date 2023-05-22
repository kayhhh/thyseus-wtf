import { CoreSchedule, World } from "thyseus";
import { startupSystem, systemA } from "./systems.js";

export const world = await World.new()
  .addSystemsToSchedule(CoreSchedule.Startup, startupSystem)
  .addSystems(systemA)
  .build();

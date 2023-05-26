import { Commands, Entity, Query } from "thyseus";

export function startupSystem(commands: Commands) {
  commands.spawn();
  commands.spawn();
}

export function systemA(commands: Commands, entities: Query<Entity>) {
  const ids: bigint[] = [];

  for (const entity of entities) {
    ids.push(entity.id);

    console.log("😓", "despawning", entity.id);
    entity.despawn();

    commands.spawn();
  }

  console.log("🦹", "entity count", ids.length);
  // ! Grows over time, fibonacci sequence
  // 2, 3, 5, 8, 13, 21, 34, 55, 89

  // Stop the tab from crashing
  if (ids.length > 20) throw new Error("Too many entities");
}

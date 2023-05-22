import { Commands, Entity, Or, Query, Without, struct } from "thyseus";

@struct
class ComponentA {
  @struct.f32 declare a: number;
}

@struct
class ComponentB {
  @struct.f32 declare b: number;
}

export function startupSystem(commands: Commands) {
  commands.spawn();
}

export function systemA(
  entities: Query<Entity, Or<Without<ComponentA>, Without<ComponentB>>>
) {
  for (const entity of entities) {
    //! RangeError: Out of bounds index access in Vec.prototype.get()!
    entity.addType(ComponentA);
  }
}

import { Commands, Mut, Query, struct, u8 } from "thyseus";

@struct
class ComponentA {
  array: u8[] = [];
}

export function initSystem(commands: Commands) {
  commands.spawn(true).add(new ComponentA());
}

const bigArray = new Array(10000000).fill(0);

export function systemA(entities: Query<Mut<ComponentA>>) {
  for (const entity of entities) {
    console.log(entity.array.length);
    entity.array = bigArray;
  }
}


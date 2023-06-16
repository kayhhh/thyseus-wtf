import { Commands, Mut, Query, struct } from "thyseus";

@struct
class ComponentA {
  @struct.i16 declare value: number;
}

export function startupSystem(commands: Commands) {
  commands.spawn().addType(ComponentA);
}

export function systemA(compAs: Query<Mut<ComponentA>>) {
  for (const compA of compAs) {
    compA.value += 1;
    console.log(compA.value);
  }
}

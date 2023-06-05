import { Commands, Mut, Query, struct } from "thyseus";

@struct
class ComponentA {
  @struct.string declare value: string;
}

export function startupSystem(commands: Commands) {
  commands.spawn().addType(ComponentA);
}

export function systemA(compAs: Query<Mut<ComponentA>>) {
  for (const compA of compAs) {
    compA.value = "Hello World!";
    console.log(compA.value);
  }
}

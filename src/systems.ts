import { Commands, Entity, Query, With, initStruct, struct } from "thyseus";

@struct
class ComponentA {
  @struct.array({ type: "f32", length: 2 }) declare value: Float32Array;

  constructor() {
    initStruct(this);

    this.value.set([1, 2]);

    console.log("❤️ ComponentA constructor called");
  }
}

@struct
class ComponentB {
  @struct.substruct(ComponentA) declare compA: ComponentA;
}

export function startupSystem(commands: Commands) {
  const compB = new ComponentB();

  console.log("Setting compA value to [3, 4]");
  compB.compA.value.set([3, 4]);
  console.log("Reading compA value [0]", compB.compA.value[0]); // 1

  commands.spawn().add(compB);
}

export function systemA(
  commands: Commands,
  compAs: Query<Entity, With<ComponentA>>,
  compBs: Query<Entity, With<ComponentB>>
) {}

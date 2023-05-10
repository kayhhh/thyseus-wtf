import {
  Commands,
  CommandsDescriptor,
  CoreSchedule,
  Entity,
  Query,
  QueryDescriptor,
  World,
  struct,
} from "thyseus";

@struct
class ComponentA {
  @struct.f32 declare x: number;
}

function systemA(commands: Commands, entities: Query<[Entity, ComponentA]>) {
  let newX = 0;

  for (const [entity, { x }] of entities) {
    newX = x + 1;
    entity.despawn();
  }

  const compA = new ComponentA();
  compA.x = newX;

  commands.spawn().add(compA);
}

systemA.parameters = [
  CommandsDescriptor(),
  QueryDescriptor([Entity, ComponentA]),
];

const world = await World.new().addSystems(systemA).build();

world.runSchedule(CoreSchedule.Startup);

const loop = async () => {
  world.runSchedule(CoreSchedule.Main);
  requestAnimationFrame(loop);
};

requestAnimationFrame(loop);

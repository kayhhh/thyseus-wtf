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

function systemA(commands: Commands, entities: Query<Entity>) {
  //! After a few iterations, the length of the query will be 0 - why?
  console.log(entities.length);

  for (const entity of entities) {
    entity.despawn();
  }

  commands.spawn();
}

const world = await World.new().addSystems(systemA).build();
world.runSchedule(CoreSchedule.Startup);

const loop = async () => {
  world.runSchedule(CoreSchedule.Main);
  requestAnimationFrame(loop);
};

requestAnimationFrame(loop);

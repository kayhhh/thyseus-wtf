import { EventReader, EventWriter, struct } from "thyseus";

@struct
class ComponentA {
  @struct.i16 declare value: number;
}

export function writeEvents(writer: EventWriter<ComponentA>) {
  console.log("writer");

  const event = writer.create();
  event.value = 2;
  writer.clear();
}

export function readEvents(reader: EventReader<ComponentA>) {
  console.log("reader", reader.length);
}

export function clearEvents(writer: EventWriter<ComponentA>) {
  console.log("clear");

  writer.clearImmediate();
}

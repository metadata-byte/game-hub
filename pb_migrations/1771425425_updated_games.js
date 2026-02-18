/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // add field
  collection.fields.addAt(17, new Field({
    cascadeDelete: false,
    collectionId: "pbc_579055366",
    hidden: false,
    id: "relation1204091606",
    maxSelect: 999,
    minSelect: 0,
    name: "attachments",
    presentable: false,
    required: false,
    system: false,
    type: "relation"
  }));

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // remove field
  collection.fields.removeById("relation1204091606");

  return app.save(collection);
});

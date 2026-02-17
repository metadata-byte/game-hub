/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // add field
  collection.fields.addAt(9, new Field({
    cascadeDelete: false,
    collectionId: "pbc_2683869272",
    hidden: false,
    id: "relation2834031894",
    maxSelect: 999,
    minSelect: 0,
    name: "genres",
    presentable: false,
    required: false,
    system: false,
    type: "relation"
  }));

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // remove field
  collection.fields.removeById("relation2834031894");

  return app.save(collection);
});

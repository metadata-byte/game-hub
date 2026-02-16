/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // add field
  collection.fields.addAt(14, new Field({
    cascadeDelete: false,
    collectionId: "pbc_3866053794",
    hidden: false,
    id: "relation196169434",
    maxSelect: 999,
    minSelect: 0,
    name: "developers",
    presentable: false,
    required: false,
    system: false,
    type: "relation"
  }));

  // add field
  collection.fields.addAt(15, new Field({
    cascadeDelete: false,
    collectionId: "pbc_3866053794",
    hidden: false,
    id: "relation2217591675",
    maxSelect: 999,
    minSelect: 0,
    name: "publishers",
    presentable: false,
    required: false,
    system: false,
    type: "relation"
  }));

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // remove field
  collection.fields.removeById("relation196169434");

  // remove field
  collection.fields.removeById("relation2217591675");

  return app.save(collection);
});

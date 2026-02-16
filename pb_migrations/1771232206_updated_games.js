/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_BmSXrV2Rnh` ON `games` (`matchName`) WHERE `matchName` != ''"
    ]
  }, collection);

  // remove field
  collection.fields.removeById("relation263759661");

  // add field
  collection.fields.addAt(2, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "text3073665308",
    max: 0,
    min: 0,
    name: "matchName",
    pattern: "",
    presentable: false,
    primaryKey: false,
    required: false,
    system: false,
    type: "text"
  }));

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // update collection data
  unmarshal({ indexes: [] }, collection);

  // add field
  collection.fields.addAt(2, new Field({
    cascadeDelete: false,
    collectionId: "pbc_3790183659",
    hidden: false,
    id: "relation263759661",
    maxSelect: 999,
    minSelect: 0,
    name: "matchNames",
    presentable: false,
    required: false,
    system: false,
    type: "relation"
  }));

  // remove field
  collection.fields.removeById("text3073665308");

  return app.save(collection);
});

/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pbc_280535582");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_m6Z0PXl0R6` ON `linkTypes` (`code`)"
    ]
  }, collection);

  // add field
  collection.fields.addAt(2, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "text1997877400",
    max: 0,
    min: 1,
    name: "code",
    pattern: "",
    presentable: true,
    primaryKey: false,
    required: true,
    system: false,
    type: "text"
  }));

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_280535582");

  // update collection data
  unmarshal({ indexes: [] }, collection);

  // remove field
  collection.fields.removeById("text1997877400");

  return app.save(collection);
});

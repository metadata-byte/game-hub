/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pbc_2683869272");

  // update collection data
  unmarshal({
    indexes: [
      "CREATE UNIQUE INDEX `idx_GldWq0dNGV` ON `genres` (`name`)"
    ]
  }, collection);

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_2683869272");

  // update collection data
  unmarshal({ indexes: [] }, collection);

  return app.save(collection);
});

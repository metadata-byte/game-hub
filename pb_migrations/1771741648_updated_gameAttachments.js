/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pbc_579055366");

  // update field
  collection.fields.addAt(3, new Field({
    hidden: false,
    id: "file2961155532",
    maxSelect: 99,
    maxSize: 104857600,
    mimeTypes: [],
    name: "blob",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: [],
    type: "file"
  }));

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_579055366");

  // update field
  collection.fields.addAt(3, new Field({
    hidden: false,
    id: "file2961155532",
    maxSelect: 1,
    maxSize: 104857600,
    mimeTypes: [],
    name: "blob",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: [],
    type: "file"
  }));

  return app.save(collection);
});

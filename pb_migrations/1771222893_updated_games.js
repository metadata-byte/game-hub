/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // add field
  collection.fields.addAt(4, new Field({
    hidden: false,
    id: "date4215628054",
    max: "",
    min: "",
    name: "released",
    presentable: false,
    required: false,
    system: false,
    type: "date"
  }));

  // add field
  collection.fields.addAt(6, new Field({
    hidden: false,
    id: "file2366146245",
    maxSelect: 1,
    maxSize: 0,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/webp"
    ],
    name: "cover",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: [],
    type: "file"
  }));

  // add field
  collection.fields.addAt(8, new Field({
    hidden: false,
    id: "file445458195",
    maxSelect: 99,
    maxSize: 0,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/webp"
    ],
    name: "screenshots",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: [],
    type: "file"
  }));

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // remove field
  collection.fields.removeById("date4215628054");

  // remove field
  collection.fields.removeById("file2366146245");

  // remove field
  collection.fields.removeById("file445458195");

  return app.save(collection);
});

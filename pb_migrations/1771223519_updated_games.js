/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // add field
  collection.fields.addAt(5, new Field({
    convertURLs: true,
    hidden: false,
    id: "text3485334036",
    maxSize: 0,
    name: "note",
    presentable: false,
    required: false,
    system: false,
    type: "text"
  }));

  // add field
  collection.fields.addAt(6, new Field({
    hidden: false,
    id: "number3632866850",
    max: 100,
    min: 0,
    name: "rating",
    onlyInt: false,
    presentable: false,
    required: false,
    system: false,
    type: "number"
  }));

  // add field
  collection.fields.addAt(7, new Field({
    hidden: false,
    id: "number3226913054",
    max: null,
    min: 0,
    name: "ageRating",
    onlyInt: false,
    presentable: false,
    required: false,
    system: false,
    type: "number"
  }));

  // add field
  collection.fields.addAt(11, new Field({
    hidden: false,
    id: "file3160978512",
    maxSelect: 1,
    maxSize: 0,
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/gif",
      "image/webp"
    ],
    name: "background",
    presentable: false,
    protected: false,
    required: false,
    system: false,
    thumbs: [],
    type: "file"
  }));

  // add field
  collection.fields.addAt(13, new Field({
    cascadeDelete: false,
    collectionId: "pbc_449060851",
    hidden: false,
    id: "relation3514999064",
    maxSelect: 999,
    minSelect: 0,
    name: "links",
    presentable: false,
    required: false,
    system: false,
    type: "relation"
  }));

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // remove field
  collection.fields.removeById("text3485334036");

  // remove field
  collection.fields.removeById("number3632866850");

  // remove field
  collection.fields.removeById("number3226913054");

  // remove field
  collection.fields.removeById("file3160978512");

  // remove field
  collection.fields.removeById("relation3514999064");

  return app.save(collection);
});

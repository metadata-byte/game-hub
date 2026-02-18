/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pbc_280535582");

  // update field
  collection.fields.addAt(4, new Field({
    exceptDomains: [],
    hidden: false,
    id: "url4101391790",
    name: "url",
    onlyDomains: [],
    presentable: false,
    required: false,
    system: false,
    type: "url"
  }));

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_280535582");

  // update field
  collection.fields.addAt(4, new Field({
    exceptDomains: [],
    hidden: false,
    id: "url4101391790",
    name: "url",
    onlyDomains: [],
    presentable: false,
    required: true,
    system: false,
    type: "url"
  }));

  return app.save(collection);
});

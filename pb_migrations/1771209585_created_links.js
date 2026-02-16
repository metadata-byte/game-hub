/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = new Collection({
    createRule: null,
    deleteRule: null,
    fields: [
      {
        autogeneratePattern: "[a-z0-9]{15}",
        hidden: false,
        id: "text3208210256",
        max: 15,
        min: 15,
        name: "id",
        pattern: "^[a-z0-9]+$",
        presentable: false,
        primaryKey: true,
        required: true,
        system: true,
        type: "text"
      },
      {
        cascadeDelete: true,
        collectionId: "pbc_280535582",
        hidden: false,
        id: "relation2363381545",
        maxSelect: 1,
        minSelect: 0,
        name: "type",
        presentable: true,
        required: true,
        system: false,
        type: "relation"
      },
      {
        exceptDomains: [],
        hidden: false,
        id: "url4101391790",
        name: "url",
        onlyDomains: [],
        presentable: true,
        required: true,
        system: false,
        type: "url"
      },
      {
        hidden: false,
        id: "autodate2990389176",
        name: "created",
        onCreate: true,
        onUpdate: false,
        presentable: false,
        system: false,
        type: "autodate"
      },
      {
        hidden: false,
        id: "autodate3332085495",
        name: "updated",
        onCreate: true,
        onUpdate: true,
        presentable: false,
        system: false,
        type: "autodate"
      }
    ],
    id: "pbc_449060851",
    indexes: [],
    listRule: null,
    name: "links",
    system: false,
    type: "base",
    updateRule: null,
    viewRule: null
  });

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_449060851");

  return app.delete(collection);
});

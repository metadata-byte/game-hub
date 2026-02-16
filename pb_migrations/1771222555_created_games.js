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
        autogeneratePattern: "",
        hidden: false,
        id: "text1579384326",
        max: 0,
        min: 0,
        name: "name",
        pattern: "",
        presentable: true,
        primaryKey: false,
        required: true,
        system: false,
        type: "text"
      },
      {
        autogeneratePattern: "",
        hidden: false,
        id: "text3458754147",
        max: 0,
        min: 0,
        name: "summary",
        pattern: "",
        presentable: true,
        primaryKey: false,
        required: false,
        system: false,
        type: "text"
      },
      {
        convertURLs: true,
        hidden: false,
        id: "text1843675174",
        maxSize: 0,
        name: "description",
        presentable: false,
        required: false,
        system: false,
        type: "text"
      },
      {
        hidden: false,
        id: "file1704208859",
        maxSelect: 1,
        maxSize: 0,
        mimeTypes: [
          "image/jpeg",
          "image/png",
          "image/svg+xml",
          "image/gif",
          "image/webp"
        ],
        name: "icon",
        presentable: true,
        protected: false,
        required: false,
        system: false,
        thumbs: [],
        type: "file"
      },
      {
        hidden: false,
        id: "file1872607463",
        maxSelect: 1,
        maxSize: 0,
        mimeTypes: [
          "image/jpeg",
          "image/png",
          "image/svg+xml",
          "image/gif",
          "image/webp"
        ],
        name: "banner",
        presentable: false,
        protected: false,
        required: false,
        system: false,
        thumbs: [],
        type: "file"
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
    id: "pbc_879072730",
    indexes: [],
    listRule: null,
    name: "games",
    system: false,
    type: "base",
    updateRule: null,
    viewRule: null
  });

  return app.save(collection);
}, app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  return app.delete(collection);
});

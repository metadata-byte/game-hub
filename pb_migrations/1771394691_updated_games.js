/// <reference path="../pb_data/types.d.ts" />
migrate(app => {
  const collection = app.findCollectionByNameOrId("pbc_879072730");

  // add field
  collection.fields.addAt(9, new Field({
    hidden: false,
    id: "number822693228",
    max: null,
    min: null,
    name: "averagePlaytime",
    onlyInt: false,
    presentable: false,
    required: false,
    system: false,
    type: "number"
  }));

  // add field
  collection.fields.addAt(20, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "text3695638773",
    max: 0,
    min: 0,
    name: "launchExecutable",
    pattern: "",
    presentable: false,
    primaryKey: false,
    required: false,
    system: false,
    type: "text"
  }));

  // add field
  collection.fields.addAt(21, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "text207317514",
    max: 0,
    min: 0,
    name: "launchParameters",
    pattern: "",
    presentable: false,
    primaryKey: false,
    required: false,
    system: false,
    type: "text"
  }));

  // add field
  collection.fields.addAt(22, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "text135978009",
    max: 0,
    min: 0,
    name: "installerExecutable",
    pattern: "",
    presentable: false,
    primaryKey: false,
    required: false,
    system: false,
    type: "text"
  }));

  // add field
  collection.fields.addAt(23, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "text3624357606",
    max: 0,
    min: 0,
    name: "installerParameters",
    pattern: "",
    presentable: false,
    primaryKey: false,
    required: false,
    system: false,
    type: "text"
  }));

  // add field
  collection.fields.addAt(24, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "text300647",
    max: 0,
    min: 0,
    name: "uninstallerExecutable",
    pattern: "",
    presentable: false,
    primaryKey: false,
    required: false,
    system: false,
    type: "text"
  }));

  // add field
  collection.fields.addAt(25, new Field({
    autogeneratePattern: "",
    hidden: false,
    id: "text3491300504",
    max: 0,
    min: 0,
    name: "uninstallerParameters",
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

  // remove field
  collection.fields.removeById("number822693228");

  // remove field
  collection.fields.removeById("text3695638773");

  // remove field
  collection.fields.removeById("text207317514");

  // remove field
  collection.fields.removeById("text135978009");

  // remove field
  collection.fields.removeById("text3624357606");

  // remove field
  collection.fields.removeById("text300647");

  // remove field
  collection.fields.removeById("text3491300504");

  return app.save(collection);
});

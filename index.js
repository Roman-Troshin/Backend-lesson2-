const yargs = require("yargs");
const pkg = require("./package.json");
const { addNote, removeNote, printNotes } = require("./notes.controller");

yargs.version(pkg.version);

yargs.command({
  command: "add",
  describe: "Add new note to list",
  builder: {
    title: {
      type: "string",
      describe: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove command by id",
  builder: {
    idForRemove: {
      type: "string",
      describe: "id for remove",
      demandOption: true,
    },
  },
  async handler({ idForRemove }) {
    removeNote(idForRemove);
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    printNotes();
  },
});

yargs.parse();

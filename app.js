const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Adding notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.addNote(argv.title, argv.body),
});

yargs.command({
  command: "remove",
  describe: "Removing notes",
  builder: {
    title: {
      describe: " note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.removeNote(argv.title),
});

yargs.command({
  command: "read",
  describe: "Read the notes",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.readNotes(argv.title),
});

yargs.command({
  command: "list",
  describe: "Listing notes",
  handler() {
    notes.listNotes();
  },
});

yargs.parse();

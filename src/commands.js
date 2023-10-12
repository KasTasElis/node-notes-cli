import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv)).command(
  "add <note>",
  "Add a new note",
  (yargs) => {},
  () => {
    console.log("Adding a new note!", yargs);
  }
);

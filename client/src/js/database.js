import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Adding content to the database");

  //Creates connection to the JATE database and specifies the version being used
  const jateDb = await openDB("jate", 1);

  //Creates a new transaction and specifies the database and the privileges allowed.
  const newTx = jateDb.transaction("jate", "readwrite");

  //Opens up the object store
  const store = newTx.objectStore("jate");

  //Adds the content to the object store
  const request = store.add({ jate: content });

  //Confirms the request
  const result = await request;
  console.log("Data has been saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("Get all content from the database");
  //Creates connection to the JATE database and specifies the version being used
  const jateDb = await openDB("jate", 1);

  //Creates a new transaction and specifies the database and the privileges allowed.
  const newTx = jateDb.transaction("jate", "readonly");

  //Opens up the object store
  const store = newTx.objectStore("jate");

  //Retrieves all content from the database
  const request = store.getAll();

  //Confirms the request
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();

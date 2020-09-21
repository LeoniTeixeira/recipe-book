import Dexie from 'dexie';


const IndexedDB = new Dexie('recipesDB');
IndexedDB.version(1).stores({recipe: '++id'});

IndexedDB.open().catch((err) => {
    console.log(err.stack || err)
})

export default IndexedDB;
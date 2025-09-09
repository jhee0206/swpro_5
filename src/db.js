let db = null;
const DB_NAME = "DiaryDB";
const DB_VERSION = 1;
const STORE_NAME = "diary"; // 누락된 STORE_NAME 정의

export const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION); // request 선언 필수

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: "id" });
            }
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            console.log("Database opened successfully.");
            resolve(db);
        };

        request.onerror = (event) => {
            console.error("Database failed to open:", event.target.error);
            reject(event.target.error);
        };
    });
};

export const getDB = () => {
    if (!db) {
        throw new Error("Database is not initialized. Call initDB() first.");
    }
    return db;
};

export const addDiary = (entry) => {
    return new Promise((resolve, reject) => {
        try {
            const dbInstance = getDB();
            const transaction = dbInstance.transaction([STORE_NAME], "readwrite");
            const objectStore = transaction.objectStore(STORE_NAME);
            const request = objectStore.add(entry);

            request.onsuccess = () => {
                resolve("Diary entry added successfully.");
            };

            request.onerror = (event) => {
                console.error("Error adding diary entry:", event.target.error);
                reject(event.target.error);
            };
        } catch (err) {
            reject(err);
        }
    });
};

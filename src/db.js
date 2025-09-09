// src/db.js

let db = null;
const DB_NAME = "DiaryDB";
const DB_VERSION = 1;
const STORE_NAME = "diary";

export const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

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
        // initDB를 먼저 호출하도록 유도
        console.error("Database is not initialized. Call initDB() first.");
        // 여기서 바로 에러를 던지는 대신, initDB를 호출하고 프로미스를 반환할 수도 있습니다.
        // 하지만 앱 시작 시점에 initDB를 한 번만 호출하는 것이 더 안정적인 구조입니다.
        throw new Error("Database is not initialized.");
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

// [추가] 모든 일지를 가져오는 함수
export const getAllDiaries = () => {
    return new Promise((resolve, reject) => {
        try {
            const dbInstance = getDB();
            const transaction = dbInstance.transaction([STORE_NAME], "readonly");
            const objectStore = transaction.objectStore(STORE_NAME);
            const request = objectStore.getAll(); // getAll() 메서드로 모든 데이터 조회

            request.onsuccess = (event) => {
                // event.target.result에 모든 데이터가 배열로 담겨 반환됩니다.
                resolve(event.target.result);
            };

            request.onerror = (event) => {
                console.error("Error fetching all diaries:", event.target.error);
                reject(event.target.error);
            };
        } catch (err) {
            reject(err);
        }
    });
};

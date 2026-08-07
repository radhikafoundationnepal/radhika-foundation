import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";

const newsCollection = collection(db, "news");

export async function getNews() {
  const q = query(newsCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}

export async function addNews(
  title: string,
  description: string,
  image: string = ""
) {
  await addDoc(newsCollection, {
    title,
    description,
    image,
    createdAt: serverTimestamp(),
  });
}

export async function updateNews(
  id: string,
  title: string,
  description: string,
  image: string = ""
) {
  await updateDoc(doc(db, "news", id), {
    title,
    description,
    image,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteNews(id: string) {
  await deleteDoc(doc(db, "news", id));
}
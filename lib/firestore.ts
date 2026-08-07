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
const noticesCollection = collection(db, "notices");

export async function getNotices() {
  const q = query(
    noticesCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}

export async function addNotice(
  title: string,
  description: string,
  published: boolean
) {
  await addDoc(noticesCollection, {
    title,
    description,
    published,
    createdAt: serverTimestamp(),
  });
}

export async function updateNotice(
  id: string,
  title: string,
  description: string,
  published: boolean
) {
  await updateDoc(doc(db, "notices", id), {
    title,
    description,
    published,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteNotice(id: string) {
  await deleteDoc(doc(db, "notices", id));
}
export async function getPublishedNotices() {
  const q = query(
    noticesCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs
    .map((item) => ({
      id: item.id,
      ...item.data(),
    }))
    .filter((item) => item.published === true);
}
const galleryCollection = collection(db, "gallery");

export async function getGallery() {
  const q = query(
    galleryCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}

export async function addGalleryItem(
  title: string,
  image: string,
  published: boolean
) {
  await addDoc(galleryCollection, {
    title,
    image,
    published,
    createdAt: serverTimestamp(),
  });
}

export async function updateGalleryItem(
  id: string,
  title: string,
  image: string,
  published: boolean
) {
  await updateDoc(doc(db, "gallery", id), {
    title,
    image,
    published,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteGalleryItem(id: string) {
  await deleteDoc(doc(db, "gallery", id));
}

export async function getPublishedGallery() {
  const q = query(
    galleryCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs
    .map((item) => ({
      id: item.id,
      ...item.data(),
    }))
    .filter((item) => item.published === true);
}
const contactsCollection = collection(db, "contacts");

export async function addContactMessage(
  name: string,
  email: string,
  phone: string,
  message: string
) {
  await addDoc(contactsCollection, {
    name,
    email,
    phone,
    message,
    read: false,
    createdAt: serverTimestamp(),
  });
}

export async function getContactMessages() {
  const q = query(
    contactsCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
}

export async function markContactAsRead(id: string) {
  await updateDoc(doc(db, "contacts", id), {
    read: true,
  });
}

export async function deleteContactMessage(id: string) {
  await deleteDoc(doc(db, "contacts", id));
}
export async function getDashboardStats() {
  const [newsSnapshot, noticeSnapshot, gallerySnapshot, contactSnapshot] =
    await Promise.all([
      getDocs(collection(db, "news")),
      getDocs(collection(db, "notices")),
      getDocs(collection(db, "gallery")),
      getDocs(collection(db, "contacts")),
    ]);

  const unreadContacts = contactSnapshot.docs.filter(
    (item) => item.data().read === false
  ).length;

  return {
    news: newsSnapshot.size,
    notices: noticeSnapshot.size,
    gallery: gallerySnapshot.size,
    contacts: contactSnapshot.size,
    unreadContacts,
  };
}
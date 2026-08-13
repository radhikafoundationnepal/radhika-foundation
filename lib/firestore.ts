import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";

/* =========================================================
   TYPES
========================================================= */

export type NewsItem = {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  imageUrl?: string;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type NoticeItem = {
  id: string;
  title: string;
  description: string;
  published: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type GalleryItem = {
  id: string;
  title: string;
  image: string;
  published: boolean;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  read: boolean;
  createdAt?: unknown;
};

export type Volunteer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  area: string;
  message: string;
  status: string;
  createdAt?: unknown;
  updatedAt?: unknown;
};

export type DashboardStats = {
  news: number;
  notices: number;
  gallery: number;
  contacts: number;
  unreadContacts: number;
  volunteers: number;
  pendingVolunteers: number;
  approvedVolunteers: number;
  rejectedVolunteers: number;
};


/* =========================================================
   NEWS
========================================================= */

const newsCollection = collection(db, "news");


// Get all news
export async function getNews(): Promise<NewsItem[]> {
  const q = query(
    newsCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  })) as NewsItem[];
}


// Get single news by ID
export async function getNewsById(
  id: string
): Promise<NewsItem | null> {
  const newsRef = doc(db, "news", id);

  const snapshot = await getDoc(newsRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as NewsItem;
}


// Add news
export async function addNews(
  title: string,
  excerpt: string,
  content: string,
  imageUrl: string
) {
  await addDoc(newsCollection, {
    title,
    excerpt,
    content,
    imageUrl,
    createdAt: serverTimestamp(),
  });
}


// Update news
export async function updateNews(
  id: string,
  title: string,
  excerpt: string,
  content: string,
  imageUrl: string
) {
  await updateDoc(doc(db, "news", id), {
    title,
    excerpt,
    content,
    imageUrl,
    updatedAt: serverTimestamp(),
  });
}


// Delete news
export async function deleteNews(id: string) {
  await deleteDoc(doc(db, "news", id));
}


/* =========================================================
   NOTICES
========================================================= */

const noticesCollection = collection(db, "notices");


// Get all notices
export async function getNotices(): Promise<NoticeItem[]> {
  const q = query(
    noticesCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  })) as NoticeItem[];
}


// Add notice
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


// Update notice
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


// Delete notice
export async function deleteNotice(id: string) {
  await deleteDoc(doc(db, "notices", id));
}


// Get published notices only
export async function getPublishedNotices(): Promise<NoticeItem[]> {
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
    .filter(
      (item) =>
        (item as NoticeItem).published === true
    ) as NoticeItem[];
}


/* =========================================================
   GALLERY
========================================================= */

const galleryCollection = collection(db, "gallery");


// Get all gallery items
export async function getGallery(): Promise<GalleryItem[]> {
  const q = query(
    galleryCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  })) as GalleryItem[];
}


// Add gallery item
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


// Update gallery item
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


// Delete gallery item
export async function deleteGalleryItem(id: string) {
  await deleteDoc(doc(db, "gallery", id));
}


// Get published gallery only
export async function getPublishedGallery(): Promise<GalleryItem[]> {
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
    .filter(
      (item) =>
        (item as GalleryItem).published === true
    ) as GalleryItem[];
}


/* =========================================================
   CONTACT MESSAGES
========================================================= */

const contactsCollection = collection(db, "contacts");


// Add contact message
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


// Get contact messages
export async function getContactMessages(): Promise<ContactMessage[]> {
  const q = query(
    contactsCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  })) as ContactMessage[];
}


// Mark contact as read
export async function markContactAsRead(id: string) {
  await updateDoc(doc(db, "contacts", id), {
    read: true,
  });
}


// Delete contact message
export async function deleteContactMessage(id: string) {
  await deleteDoc(doc(db, "contacts", id));
}


/* =========================================================
   VOLUNTEERS
========================================================= */

const volunteersCollection = collection(db, "volunteers");


// Add volunteer
export async function addVolunteer(data: {
  name: string;
  phone: string;
  email: string;
  address: string;
  area: string;
  message: string;
}) {
  await addDoc(volunteersCollection, {
    name: data.name,
    phone: data.phone,
    email: data.email,
    address: data.address,
    area: data.area,
    message: data.message,
    status: "pending",
    createdAt: serverTimestamp(),
  });
}


// Get all volunteers
export async function getVolunteers(): Promise<Volunteer[]> {
  const q = query(
    volunteersCollection,
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  })) as Volunteer[];
}


// Update volunteer status
export async function updateVolunteerStatus(
  id: string,
  status: string
) {
  await updateDoc(doc(db, "volunteers", id), {
    status,
    updatedAt: serverTimestamp(),
  });
}


// Delete volunteer
export async function deleteVolunteer(id: string) {
  await deleteDoc(doc(db, "volunteers", id));
}


/* =========================================================
   DASHBOARD STATISTICS
========================================================= */

export async function getDashboardStats(): Promise<DashboardStats> {
  const [
    newsSnapshot,
    noticeSnapshot,
    gallerySnapshot,
    contactSnapshot,
    volunteerSnapshot,
  ] = await Promise.all([
    getDocs(collection(db, "news")),
    getDocs(collection(db, "notices")),
    getDocs(collection(db, "gallery")),
    getDocs(collection(db, "contacts")),
    getDocs(collection(db, "volunteers")),
  ]);


  // Count unread contact messages
  const unreadContacts = contactSnapshot.docs.filter(
    (item) => item.data().read === false
  ).length;


  // Count volunteers by status
  const pendingVolunteers = volunteerSnapshot.docs.filter(
    (item) =>
      (item.data().status as string) === "pending"
  ).length;


  const approvedVolunteers = volunteerSnapshot.docs.filter(
    (item) =>
      (item.data().status as string) === "approved"
  ).length;


  const rejectedVolunteers = volunteerSnapshot.docs.filter(
    (item) =>
      (item.data().status as string) === "rejected"
  ).length;


  return {
    news: newsSnapshot.size,
    notices: noticeSnapshot.size,
    gallery: gallerySnapshot.size,
    contacts: contactSnapshot.size,
    unreadContacts,

    volunteers: volunteerSnapshot.size,
    pendingVolunteers,
    approvedVolunteers,
    rejectedVolunteers,
  };
}
import { getFirestore, collection, doc, setDoc, getDocs, getDoc, deleteDoc, query, orderBy } from "firebase/firestore"; 
import { getApp } from "firebase/app";

const db = getFirestore(getApp());
const POSTS = "posts";

// Tüm yazıları getir
export async function getAllPosts() {
  const q = query(collection(db, POSTS), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Tek yazı
export async function getPostById(id) {
  const docRef = doc(db, POSTS, id);
  const snap = await getDoc(docRef);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

// Slug ile yazı
export async function getPostBySlug(slug) {
  const posts = await getAllPosts();
  return posts.find(p => p.slug === slug);
}

// Ekle / Güncelle
export async function upsertPost(post) {
  const id = post.id || crypto.getRandomValues(new Uint32Array(1))[0];
  const now = Date.now();
  const data = {
    title: post.title,
    slug: post.slug,
    content: post.content,
    published: post.published || false,
    createdAt: post.createdAt || now,
    updatedAt: now,
    category: post.category || "Genel"
  };
  await setDoc(doc(db, POSTS, id.toString()), data);
  return id.toString();
}

// Sil
export async function deletePost(id) {
  await deleteDoc(doc(db, POSTS, id.toString()));
}

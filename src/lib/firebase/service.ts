import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const firestote = getFirestore(app);

export async function retriveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestote, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

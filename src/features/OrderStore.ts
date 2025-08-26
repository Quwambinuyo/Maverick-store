import { where, query, collection, getDocs } from "firebase/firestore";

export const fetchUserOrders = async (db: any, userId: string) => {
  try {
    const allOrders = collection(db, "orders");
    const qry = query(allOrders, where("userId", "==", userId));
    const querySnapshot = await getDocs(qry);

    const orders = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return orders;
  } catch (error) {
    console.error("Error fetching user orders:", error);
    return [];
  }
};

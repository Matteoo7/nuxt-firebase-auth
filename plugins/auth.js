import { auth } from "@/store/index";

export default function({ store }) {
  auth.onAuthStateChanged(user => {
    let payload = "";
    if (user) payload = user.uid;

    store.dispatch("updateUser", payload);
  });
}

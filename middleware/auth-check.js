export default function({ store, redirect }) {
  if (!store.getters.isUserLoggedIn) {
    redirect("/");
  }

  // otherwise, carry on
}

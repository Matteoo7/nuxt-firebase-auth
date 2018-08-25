//======================================================
//									Vuex Config
//======================================================
import Vuex from "vuex";

//======================================================
//									Firebase Config
//======================================================
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

!firebase.apps.length
  ? firebase.initializeApp(process.env.FIREBASE_CONFIG)
  : "";
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
const DB = firebase.database();
const StoreDB = firebase.firestore();
StoreDB.settings({ timestampsInSnapshots: true });

//======================================================
//									STORE
//======================================================

const createStore = () => {
  return new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {}
  });
};

export default createStore;

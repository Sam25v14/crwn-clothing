import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";
import {
  firestoreInstance,
  convertColletionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import * as firestore from "firebase/firestore";

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection(
      firestoreInstance,
      "collections"
    );
    const snapshot = yield firestore.getDocs(collectionRef);
    const collectionsMap = yield call(convertColletionsSnapshotToMap, snapshot);

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}

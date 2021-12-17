import ShopActionTypes from "./shop.types";
import {
  firestoreInstance,
  convertColletionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import * as firestore from "firebase/firestore";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  });

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection(
      firestoreInstance,
      "collections"
    );

    dispatch(fetchCollectionsStart());

    firestore.getDocs(collectionRef).then((snapshot) => {
      const collectionsMap = convertColletionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};

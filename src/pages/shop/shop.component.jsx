import React from "react";
import { Route } from "react-router-dom";
import {
  firestoreInstance,
  convertColletionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import * as firestore from "firebase/firestore";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection(
      firestoreInstance,
      "collections"
    );

    // this.unsubscribeFromSnapshot = firestore.onSnapshot(
    //   collectionRef,
    //   async (snapshot) => {
    //     const collectionsMap = convertColletionsSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     this.setState({ loading: false });
    //   }
    // );

    firestore.getDocs(collectionRef).then((snapshot) => {
      const collectionsMap = convertColletionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-b3c40/databases/(default)/documents/collections"
    // ).then((response) => response.json()).then(collections => console.log(collections));
  }

  componentWillUnmount() {
    if (this.unsubscribeFromSnapshot) this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

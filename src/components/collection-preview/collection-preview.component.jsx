import React from 'react';

import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from 'react-router-dom';

import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default withRouter(CollectionPreview);
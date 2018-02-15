# contentful-redux

[![Build Status](https://travis-ci.org/leoschweizer/contentful-redux.svg?branch=master)](https://travis-ci.org/leoschweizer/contentful-redux)
[![codecov](https://codecov.io/gh/leoschweizer/contentful-redux/branch/master/graph/badge.svg)](https://codecov.io/gh/leoschweizer/contentful-redux)
[![npm](https://img.shields.io/npm/v/contentful-redux.svg)](https://www.npmjs.com/package/contentful-redux)
[![Greenkeeper badge](https://badges.greenkeeper.io/leoschweizer/contentful-redux.svg)](https://greenkeeper.io/)

This library provides an implementation of the [Contentful sync API](https://github.com/contentful/contentful.js/) for [redux](https://redux.js.org/) and [reselect](https://github.com/reactjs/reselect). If you are not already familiar with redux (and reselect), you should head over to those projects first before trying to integrate contentful-redux into your project.

## Installation
Using npm:
```
npm install --save contententful@5 contentful-redux
```
Using yarn:
```
yarn add contentful@5 contentful-redux
```

## Usage

1. Setup contentful-redux (`contentful.js`):
```javascript
import { createClient } from 'contentful';
import contentfulRedux from 'contentfulRedux';

export const { actions, reducer, middleware, selectors } = contentfulRedux({
    createClient,
    space: 'YOUR_SPACE_ID',
    accessToken: 'YOUR_ACCESS_TOKEN',
    stateSelector: state => state.contentful
});
```

2. Include the contentful reducer in your reducer:
```javascript
import { combineReducers } from 'redux';
import { reducer as contentful } from './contentful';

export const reducer = combineReducers({
    contentful,
    // your other reducers
});
```

3. Include the contentful middleware in your redux store configuration:
```javascript
import { applyMiddleware, createStore } from 'redux';
import { middleware as contentful } from './contentful';

export const configureStore = () => {
    return createStore(reducer, null, applyMiddleware(contentful));
};
```

4. Derive your reselect selectors from the base selectors provided by contentful-redux:
```javascript
import { createSelector } from 'reselect';
import { selectors } from './contentful';

export const myModelEntities = createSelector(
    selectors.entries, selectors.contentTypes,
    (entries, contentTypes) => entries.filter(each => each.__contentType__ === contentTypes.myModel)
);

5. Dispatch a sync action whenever you want:
```javascript
import { actions } from './contentful';
dispatch(actions.sync());
```


```

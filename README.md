# contentful-redux

[![Build Status](https://travis-ci.org/leoschweizer/contentful-redux.svg?branch=master)](https://travis-ci.org/leoschweizer/contentful-redux)
[![codecov](https://codecov.io/gh/leoschweizer/contentful-redux/branch/master/graph/badge.svg)](https://codecov.io/gh/leoschweizer/contentful-redux)
[![npm](https://img.shields.io/npm/v/contentful-redux.svg)](https://www.npmjs.com/package/contentful-redux)
[![Greenkeeper badge](https://badges.greenkeeper.io/leoschweizer/contentful-redux.svg)](https://greenkeeper.io/)

This library provides an implementation of the [Contentful sync API](https://github.com/contentful/contentful.js/) for [redux](https://redux.js.org/) and [reselect](https://github.com/reactjs/reselect). `contentful-redux` handles the complete synchronization workflow (including cyclic link resolution, localization, and incremental syncing) and lets you consume your contents from Contentful as easy-to-use selectors. 

If you are not already familiar with redux (and reselect), you should familiarize yourself with those first before trying to integrate contentful-redux into your project.

## Installation
`contentful-redux` is provided as a collection of CommonJS modules, which can be installed using npm:
```
npm install --save contententful@5 contentful-redux
```
or using yarn:
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
```

5. Dispatch a sync action whenever you want:
```javascript
import { actions } from './contentful';
dispatch(actions.sync());
```

## API Documentation

### `contentfulRedux(options)`

| Option           | Required  | Default | Description |
| ---------------- | --------- | ------- | ----------- |
| `accessToken`    | yes       | -       | Your contentful CDA access token |
| `clientParams`   | no        | `{}`    | Additional arguments to be passed to [`createClient`](https://contentful.github.io/contentful.js/contentful/5.1.1/contentful.html#.createClient) |
| `createClient`   | yes       | -       | The desired variant of the contentful.js client factory method |
| `localeSelector` | no        | `() => null`  | A selector returning the locale to be used, e.g.<br>`(state) => state.currentLocale`|
| `space`          | yes       | -       | The id of the contentful space to by synced |
| `stateSelector`  | yes       | -       | A selector returning the portion of the state which is managed by the contentful-redux reducer, e.g.<br>`(state) => state.contentful` |

### Action creators
The following redux action creators are provided by `contentful-redux`:

#### `sync([spaceId])`

| Argument  | Required  | Default         | Description |
| ----------| --------- | --------------  | ----------- |
| `spaceId` | no        | `options.space` | The id of the space to be synced. There **must** be a middleware installed wich is registered with the same space id |

### Selectors
The following reselect selectors are provided by `contentful-redux`:

| Selector        | Returns      | Description |
| --------------- | ------------ | ----------- |
| `assets`        | `array`      | A list of all known assets in the contentful space |
| `contentTypes`  | `object`     | A map from content type ids to the meta information about the corresponding content type |
| `defaultLocale` | `object`     | The locale which is defined as default of the contentful space |
| `entries`       | `array`      | A list of all known entries in the contentful space |
| `isSyncing`     | `boolean`    | `true` while a sync operation is in progress |
| `lastSync`      | `object`     | Meta-information about the results of the last sync attempt |
| `locales`       | `array`      | The locales which are defined for the contentful space |
| `space`         | `object`     | Meta-information about your contentful space |

## [Changelog](CHANGELOG.md)

## License

This software is licensed under the MIT License. [View the license](LICENSE).

Copyright © 2018 [Leo Schweizer](https://github.com/leoschweizer)

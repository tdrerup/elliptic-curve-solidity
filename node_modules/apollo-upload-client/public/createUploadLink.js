'use strict';

var _extends = require('@babel/runtime/helpers/extends');

var _require = require('@apollo/client/core'),
  ApolloLink = _require.ApolloLink,
  Observable = _require.Observable;

var _require2 = require('@apollo/client/link/http'),
  createSignalIfSupported = _require2.createSignalIfSupported,
  fallbackHttpConfig = _require2.fallbackHttpConfig,
  parseAndCheckHttpResponse = _require2.parseAndCheckHttpResponse,
  rewriteURIForGET = _require2.rewriteURIForGET,
  selectHttpOptionsAndBody = _require2.selectHttpOptionsAndBody,
  selectURI = _require2.selectURI,
  serializeFetchParameter = _require2.serializeFetchParameter;

var extractFiles = require('extract-files/public/extractFiles');

var formDataAppendFile = require('./formDataAppendFile');

var isExtractableFile = require('./isExtractableFile');

module.exports = function createUploadLink(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$uri = _ref.uri,
    fetchUri = _ref$uri === void 0 ? '/graphql' : _ref$uri,
    useGETForQueries = _ref.useGETForQueries,
    _ref$isExtractableFil = _ref.isExtractableFile,
    customIsExtractableFile =
      _ref$isExtractableFil === void 0
        ? isExtractableFile
        : _ref$isExtractableFil,
    CustomFormData = _ref.FormData,
    _ref$formDataAppendFi = _ref.formDataAppendFile,
    customFormDataAppendFile =
      _ref$formDataAppendFi === void 0
        ? formDataAppendFile
        : _ref$formDataAppendFi,
    customFetch = _ref.fetch,
    fetchOptions = _ref.fetchOptions,
    credentials = _ref.credentials,
    headers = _ref.headers,
    includeExtensions = _ref.includeExtensions;

  var linkConfig = {
    http: {
      includeExtensions: includeExtensions,
    },
    options: fetchOptions,
    credentials: credentials,
    headers: headers,
  };
  return new ApolloLink(function (operation) {
    var context = operation.getContext();
    var _context$clientAwaren = context.clientAwareness;
    _context$clientAwaren =
      _context$clientAwaren === void 0 ? {} : _context$clientAwaren;
    var name = _context$clientAwaren.name,
      version = _context$clientAwaren.version,
      headers = context.headers;
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: _extends(
        {},
        name && {
          'apollographql-client-name': name,
        },
        version && {
          'apollographql-client-version': version,
        },
        headers
      ),
    };

    var _selectHttpOptionsAnd = selectHttpOptionsAndBody(
        operation,
        fallbackHttpConfig,
        linkConfig,
        contextConfig
      ),
      options = _selectHttpOptionsAnd.options,
      body = _selectHttpOptionsAnd.body;

    var _extractFiles = extractFiles(body, '', customIsExtractableFile),
      clone = _extractFiles.clone,
      files = _extractFiles.files;

    var uri = selectURI(operation, fetchUri);

    if (files.size) {
      delete options.headers['content-type'];
      var RuntimeFormData = CustomFormData || FormData;
      var form = new RuntimeFormData();
      form.append('operations', serializeFetchParameter(clone, 'Payload'));
      var map = {};
      var i = 0;
      files.forEach(function (paths) {
        map[++i] = paths;
      });
      form.append('map', JSON.stringify(map));
      i = 0;
      files.forEach(function (paths, file) {
        customFormDataAppendFile(form, ++i, file);
      });
      options.body = form;
    } else {
      if (
        useGETForQueries &&
        !operation.query.definitions.some(function (definition) {
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation'
          );
        })
      )
        options.method = 'GET';

      if (options.method === 'GET') {
        var _rewriteURIForGET = rewriteURIForGET(uri, body),
          newURI = _rewriteURIForGET.newURI,
          parseError = _rewriteURIForGET.parseError;

        if (parseError)
          return new Observable(function (observer) {
            observer.error(parseError);
          });
        uri = newURI;
      } else options.body = serializeFetchParameter(clone, 'Payload');
    }

    var _createSignalIfSuppor = createSignalIfSupported(),
      controller = _createSignalIfSuppor.controller;

    if (controller) {
      if (options.signal)
        options.signal.addEventListener('abort', function () {
          controller.abort();
        });
      options.signal = controller.signal;
    }

    var runtimeFetch = customFetch || fetch;
    return new Observable(function (observer) {
      var cleaningUp;
      runtimeFetch(uri, options)
        .then(function (response) {
          operation.setContext({
            response: response,
          });
          return response;
        })
        .then(parseAndCheckHttpResponse(operation))
        .then(function (result) {
          observer.next(result);
          observer.complete();
        })
        .catch(function (error) {
          if (!cleaningUp) {
            if (error.result && error.result.errors && error.result.data)
              observer.next(error.result);
            observer.error(error);
          }
        });
      return function () {
        cleaningUp = true;
        if (controller) controller.abort();
      };
    });
  });
};

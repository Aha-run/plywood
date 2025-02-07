'use strict';

var { __assign, __awaiter, __extends, __generator } = require('tslib');

var hasOwnProp = require('has-own-prop');
var toArray = require('stream-to-array');

var readableStream = require('readable-stream');
var Readable = readableStream.Readable;
var Writable = readableStream.Writable;
var Transform = readableStream.Transform;
var PassThrough = readableStream.PassThrough;

var immutableClass = require('immutable-class');
var generalArraysEqual = immutableClass.generalArraysEqual;
var generalEqual = immutableClass.generalEqual;
var generalLookupsEqual = immutableClass.generalLookupsEqual;
var isImmutableClass = immutableClass.isImmutableClass;
var immutableEqual = immutableClass.immutableEqual;
var immutableArraysEqual = immutableClass.immutableArraysEqual;
var immutableLookupsEqual = immutableClass.immutableLookupsEqual;
var SimpleArray = immutableClass.SimpleArray;
var NamedArray = immutableClass.NamedArray;

var Chronoshift = require('chronoshift');
var Timezone = Chronoshift.Timezone;
var Duration = Chronoshift.Duration;
var moment = Chronoshift.moment;
var isDate = Chronoshift.isDate;
var parseISODate = Chronoshift.parseISODate;

var druidQueryToolkit = require('druid-query-toolkit');
var SqlColumn = druidQueryToolkit.SqlColumn;
var SqlExpression = druidQueryToolkit.SqlExpression;
var SqlFunction = druidQueryToolkit.SqlFunction;
var SqlCase = druidQueryToolkit.SqlCase;
var SqlQuery = druidQueryToolkit.SqlQuery;
var Introspect = druidQueryToolkit.Introspect;
var QueryResult = druidQueryToolkit.QueryResult;

var dummyObject = {};

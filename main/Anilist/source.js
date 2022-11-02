(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Sources = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeColor = void 0;
var BadgeColor;
(function (BadgeColor) {
    BadgeColor["BLUE"] = "default";
    BadgeColor["GREEN"] = "success";
    BadgeColor["GREY"] = "info";
    BadgeColor["YELLOW"] = "warning";
    BadgeColor["RED"] = "danger";
})(BadgeColor = exports.BadgeColor || (exports.BadgeColor = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSectionType = void 0;
var HomeSectionType;
(function (HomeSectionType) {
    HomeSectionType["singleRowNormal"] = "singleRowNormal";
    HomeSectionType["singleRowLarge"] = "singleRowLarge";
    HomeSectionType["doubleRow"] = "doubleRow";
    HomeSectionType["featured"] = "featured";
})(HomeSectionType = exports.HomeSectionType || (exports.HomeSectionType = {}));

},{}],4:[function(require,module,exports){
"use strict";
/**
 * Request objects hold information for a particular source (see sources for example)
 * This allows us to to use a generic api to make the calls against any source
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlEncodeObject = exports.convertTime = exports.Source = void 0;
class Source {
    constructor(cheerio) {
        this.cheerio = cheerio;
    }
    /**
     * @deprecated use {@link Source.getSearchResults getSearchResults} instead
     */
    searchRequest(query, metadata) {
        return this.getSearchResults(query, metadata);
    }
    /**
     * @deprecated use {@link Source.getSearchTags} instead
     */
    async getTags() {
        // @ts-ignore
        return this.getSearchTags?.();
    }
}
exports.Source = Source;
// Many sites use '[x] time ago' - Figured it would be good to handle these cases in general
function convertTime(timeAgo) {
    let time;
    let trimmed = Number((/\d*/.exec(timeAgo) ?? [])[0]);
    trimmed = (trimmed == 0 && timeAgo.includes('a')) ? 1 : trimmed;
    if (timeAgo.includes('minutes')) {
        time = new Date(Date.now() - trimmed * 60000);
    }
    else if (timeAgo.includes('hours')) {
        time = new Date(Date.now() - trimmed * 3600000);
    }
    else if (timeAgo.includes('days')) {
        time = new Date(Date.now() - trimmed * 86400000);
    }
    else if (timeAgo.includes('year') || timeAgo.includes('years')) {
        time = new Date(Date.now() - trimmed * 31556952000);
    }
    else {
        time = new Date(Date.now());
    }
    return time;
}
exports.convertTime = convertTime;
/**
 * When a function requires a POST body, it always should be defined as a JsonObject
 * and then passed through this function to ensure that it's encoded properly.
 * @param obj
 */
function urlEncodeObject(obj) {
    let ret = {};
    for (const entry of Object.entries(obj)) {
        ret[encodeURIComponent(entry[0])] = encodeURIComponent(entry[1]);
    }
    return ret;
}
exports.urlEncodeObject = urlEncodeObject;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentRating = exports.SourceIntents = void 0;
var SourceIntents;
(function (SourceIntents) {
    SourceIntents[SourceIntents["MANGA_CHAPTERS"] = 1] = "MANGA_CHAPTERS";
    SourceIntents[SourceIntents["MANGA_TRACKING"] = 2] = "MANGA_TRACKING";
    SourceIntents[SourceIntents["HOMEPAGE_SECTIONS"] = 4] = "HOMEPAGE_SECTIONS";
    SourceIntents[SourceIntents["COLLECTION_MANAGEMENT"] = 8] = "COLLECTION_MANAGEMENT";
    SourceIntents[SourceIntents["CLOUDFLARE_BYPASS_REQUIRED"] = 16] = "CLOUDFLARE_BYPASS_REQUIRED";
    SourceIntents[SourceIntents["SETTINGS_UI"] = 32] = "SETTINGS_UI";
})(SourceIntents = exports.SourceIntents || (exports.SourceIntents = {}));
/**
 * A content rating to be attributed to each source.
 */
var ContentRating;
(function (ContentRating) {
    ContentRating["EVERYONE"] = "EVERYONE";
    ContentRating["MATURE"] = "MATURE";
    ContentRating["ADULT"] = "ADULT";
})(ContentRating = exports.ContentRating || (exports.ContentRating = {}));

},{}],6:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Source"), exports);
__exportStar(require("./ByteArray"), exports);
__exportStar(require("./Badge"), exports);
__exportStar(require("./interfaces"), exports);
__exportStar(require("./SourceInfo"), exports);
__exportStar(require("./HomeSectionType"), exports);

},{"./Badge":1,"./ByteArray":2,"./HomeSectionType":3,"./Source":4,"./SourceInfo":5,"./interfaces":12}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],12:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./ChapterProviding"), exports);
__exportStar(require("./Searchable"), exports);
__exportStar(require("./Requestable"), exports);
__exportStar(require("./MangaProviding"), exports);
__exportStar(require("./MangaProgressProviding"), exports);

},{"./ChapterProviding":7,"./MangaProgressProviding":8,"./MangaProviding":9,"./Requestable":10,"./Searchable":11}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],51:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],52:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],53:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],55:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],56:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],57:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./DynamicUI/Exports/DUIBinding"), exports);
__exportStar(require("./DynamicUI/Exports/DUIForm"), exports);
__exportStar(require("./DynamicUI/Exports/DUIFormRow"), exports);
__exportStar(require("./DynamicUI/Exports/DUISection"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIHeader"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUILink"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIMultilineLabel"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUINavigationButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIOAuthButton"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISecureInputField"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISelect"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUIStepper"), exports);
__exportStar(require("./DynamicUI/Rows/Exports/DUISwitch"), exports);
__exportStar(require("./Exports/ChapterDetails"), exports);
__exportStar(require("./Exports/Chapter"), exports);
__exportStar(require("./Exports/Cookie"), exports);
__exportStar(require("./Exports/HomeSection"), exports);
__exportStar(require("./Exports/IconText"), exports);
__exportStar(require("./Exports/MangaInfo"), exports);
__exportStar(require("./Exports/MangaProgress"), exports);
__exportStar(require("./Exports/PartialSourceManga"), exports);
__exportStar(require("./Exports/MangaUpdates"), exports);
__exportStar(require("./Exports/PBCanvas"), exports);
__exportStar(require("./Exports/PBImage"), exports);
__exportStar(require("./Exports/PagedResults"), exports);
__exportStar(require("./Exports/RawData"), exports);
__exportStar(require("./Exports/Request"), exports);
__exportStar(require("./Exports/SourceInterceptor"), exports);
__exportStar(require("./Exports/RequestManager"), exports);
__exportStar(require("./Exports/Response"), exports);
__exportStar(require("./Exports/SearchField"), exports);
__exportStar(require("./Exports/SearchRequest"), exports);
__exportStar(require("./Exports/SourceCookieStore"), exports);
__exportStar(require("./Exports/SourceManga"), exports);
__exportStar(require("./Exports/SecureStateManager"), exports);
__exportStar(require("./Exports/SourceStateManager"), exports);
__exportStar(require("./Exports/Tag"), exports);
__exportStar(require("./Exports/TagSection"), exports);
__exportStar(require("./Exports/TrackedMangaChapterReadAction"), exports);
__exportStar(require("./Exports/TrackerActionQueue"), exports);

},{"./DynamicUI/Exports/DUIBinding":14,"./DynamicUI/Exports/DUIForm":15,"./DynamicUI/Exports/DUIFormRow":16,"./DynamicUI/Exports/DUISection":17,"./DynamicUI/Rows/Exports/DUIButton":18,"./DynamicUI/Rows/Exports/DUIHeader":19,"./DynamicUI/Rows/Exports/DUIInputField":20,"./DynamicUI/Rows/Exports/DUILabel":21,"./DynamicUI/Rows/Exports/DUILink":22,"./DynamicUI/Rows/Exports/DUIMultilineLabel":23,"./DynamicUI/Rows/Exports/DUINavigationButton":24,"./DynamicUI/Rows/Exports/DUIOAuthButton":25,"./DynamicUI/Rows/Exports/DUISecureInputField":26,"./DynamicUI/Rows/Exports/DUISelect":27,"./DynamicUI/Rows/Exports/DUIStepper":28,"./DynamicUI/Rows/Exports/DUISwitch":29,"./Exports/Chapter":30,"./Exports/ChapterDetails":31,"./Exports/Cookie":32,"./Exports/HomeSection":33,"./Exports/IconText":34,"./Exports/MangaInfo":35,"./Exports/MangaProgress":36,"./Exports/MangaUpdates":37,"./Exports/PBCanvas":38,"./Exports/PBImage":39,"./Exports/PagedResults":40,"./Exports/PartialSourceManga":41,"./Exports/RawData":42,"./Exports/Request":43,"./Exports/RequestManager":44,"./Exports/Response":45,"./Exports/SearchField":46,"./Exports/SearchRequest":47,"./Exports/SecureStateManager":48,"./Exports/SourceCookieStore":49,"./Exports/SourceInterceptor":50,"./Exports/SourceManga":51,"./Exports/SourceStateManager":52,"./Exports/Tag":53,"./Exports/TagSection":54,"./Exports/TrackedMangaChapterReadAction":55,"./Exports/TrackerActionQueue":56}],58:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./generated/_exports"), exports);
__exportStar(require("./base/index"), exports);
__exportStar(require("./compat/DyamicUI"), exports);

},{"./base/index":6,"./compat/DyamicUI":13,"./generated/_exports":57}],59:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackerSettings = exports.getdefaultStatus = void 0;
const getdefaultStatus = (stateManager) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    return (_a = (yield stateManager.retrieve('defaultStatus'))) !== null && _a !== void 0 ? _a : ['NONE'];
});
exports.getdefaultStatus = getdefaultStatus;
const trackerSettings = (stateManager) => {
    return App.createDUINavigationButton({
        id: 'tracker_settings',
        label: 'Tracker Settings',
        form: App.createDUIForm({
            onSubmit: (values) => __awaiter(void 0, void 0, void 0, function* () {
                yield Promise.all([
                    stateManager.store('defaultStatus', values.defaultStatus)
                ]);
            }),
            sections: () => {
                return Promise.resolve([
                    App.createDUISection({
                        id: 'settings',
                        isHidden: false,
                        rows: () => __awaiter(void 0, void 0, void 0, function* () {
                            return [
                                App.createDUISelect({
                                    id: 'defaultStatus',
                                    label: 'Default Status',
                                    allowsMultiselect: false,
                                    value: App.createDUIBinding({
                                        get: () => (0, exports.getdefaultStatus)(stateManager)
                                    }),
                                    labelResolver: (value) => __awaiter(void 0, void 0, void 0, function* () {
                                        switch (value) {
                                            case 'CURRENT': return 'Reading';
                                            case 'PLANNING': return 'Planned';
                                            case 'COMPLETED': return 'Completed';
                                            case 'DROPPED': return 'Dropped';
                                            case 'PAUSED': return 'On-Hold';
                                            case 'REPEATING': return 'Re-Reading';
                                            default: return 'None';
                                        }
                                    }),
                                    options: [
                                        'NONE',
                                        'CURRENT',
                                        'PLANNING',
                                        'COMPLETED',
                                        'DROPPED',
                                        'PAUSED',
                                        'REPEATING'
                                    ]
                                })
                            ];
                        })
                    })
                ]);
            }
        })
    });
};
exports.trackerSettings = trackerSettings;

},{}],60:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anilist = exports.AnilistInfo = void 0;
const types_1 = require("@paperback/types");
const graphql_queries_1 = require("./models/graphql-queries");
const anilist_result_1 = require("./models/anilist-result");
const AlSettings_1 = require("./AlSettings");
const ANILIST_GRAPHQL_ENDPOINT = 'https://graphql.anilist.co/';
const FALLBACK_IMAGE = 'https://via.placeholder.com/100x150';
exports.AnilistInfo = {
    name: 'Anilist',
    author: 'Faizan Durrani',
    contentRating: types_1.ContentRating.EVERYONE,
    icon: 'icon.png',
    version: '1.0.10',
    description: 'Anilist Tracker',
    authorWebsite: 'faizandurrani.github.io',
    websiteBaseURL: 'https://anilist.co',
    intents: types_1.SourceIntents.MANGA_TRACKING |
        types_1.SourceIntents.SETTINGS_UI
};
class Anilist {
    constructor() {
        this.requestManager = App.createRequestManager({
            requestsPerSecond: 2.5,
            requestTimeout: 20000,
            interceptor: {
                // Authorization injector
                interceptRequest: (request) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    const accessToken = yield this.accessToken.get();
                    request.headers = Object.assign(Object.assign(Object.assign({}, ((_a = request.headers) !== null && _a !== void 0 ? _a : {})), ({
                        'content-type': 'application/json',
                        'accept': 'application/json'
                    })), (accessToken != null ? {
                        'authorization': `Bearer ${accessToken}`
                    } : {}));
                    return request;
                }),
                interceptResponse: (response) => __awaiter(this, void 0, void 0, function* () {
                    return response;
                })
            }
        });
        this.stateManager = App.createSourceStateManager();
        this.accessToken = {
            get: () => __awaiter(this, void 0, void 0, function* () {
                return this.stateManager.keychain.retrieve('access_token');
            }),
            set: (token) => __awaiter(this, void 0, void 0, function* () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                yield this.stateManager.keychain.store('access_token', token);
                yield this.userInfo.refresh();
            }),
            isValid: () => __awaiter(this, void 0, void 0, function* () {
                return (yield this.accessToken.get()) != null;
            })
        };
        this.userInfo = {
            get: () => __awaiter(this, void 0, void 0, function* () {
                return this.stateManager.retrieve('userInfo');
            }),
            isLoggedIn: () => __awaiter(this, void 0, void 0, function* () {
                return (yield this.userInfo.get()) != null;
            }),
            refresh: () => __awaiter(this, void 0, void 0, function* () {
                var _b;
                const accessToken = yield this.accessToken.get();
                if (accessToken == null) {
                    return this.stateManager.store('userInfo', undefined);
                }
                const response = yield this.requestManager.schedule(App.createRequest({
                    url: ANILIST_GRAPHQL_ENDPOINT,
                    method: 'POST',
                    data: (0, graphql_queries_1.userProfileQuery)()
                }), 0);
                const userInfo = (_b = (0, anilist_result_1.AnilistResult)(response.data).data) === null || _b === void 0 ? void 0 : _b.Viewer;
                yield this.stateManager.store('userInfo', userInfo);
            })
        };
    }
    getSearchResults(query, metadata) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const pageInfo = metadata;
            // If there are no more results, we dont want to make extra calls to Anilist
            if ((pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.hasNextPage) === false) {
                return App.createPagedResults({ results: [], metadata: pageInfo });
            }
            const nextPage = ((_a = pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.currentPage) !== null && _a !== void 0 ? _a : 0) + 1;
            const response = yield this.requestManager.schedule(App.createRequest({
                url: ANILIST_GRAPHQL_ENDPOINT,
                method: 'POST',
                data: (0, graphql_queries_1.searchMangaQuery)(nextPage, (_b = query.title) !== null && _b !== void 0 ? _b : '')
            }), 1);
            const anilistPage = (_c = (0, anilist_result_1.AnilistResult)(response.data).data) === null || _c === void 0 ? void 0 : _c.Page;
            console.log(JSON.stringify(anilistPage, null, 2));
            return App.createPagedResults({
                results: (_d = anilistPage === null || anilistPage === void 0 ? void 0 : anilistPage.media.map(manga => {
                    var _a;
                    return App.createPartialSourceManga({
                        image: (_a = manga.coverImage.large) !== null && _a !== void 0 ? _a : '',
                        title: manga.title.userPreferred,
                        mangaId: manga.id.toString(),
                        subtitle: undefined
                    });
                })) !== null && _d !== void 0 ? _d : [],
                metadata: anilistPage === null || anilistPage === void 0 ? void 0 : anilistPage.pageInfo
            });
        });
    }
    getMangaProgress(mangaId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.requestManager.schedule(App.createRequest({
                url: ANILIST_GRAPHQL_ENDPOINT,
                method: 'POST',
                data: (0, graphql_queries_1.getMangaProgressQuery)(parseInt(mangaId))
            }), 1);
            const anilistManga = (_a = (0, anilist_result_1.AnilistResult)(response.data).data) === null || _a === void 0 ? void 0 : _a.Media;
            if (!(anilistManga === null || anilistManga === void 0 ? void 0 : anilistManga.mediaListEntry)) {
                return undefined;
            }
            return App.createMangaProgress({
                mangaId: mangaId,
                lastReadChapterNumber: (_b = anilistManga.mediaListEntry.progress) !== null && _b !== void 0 ? _b : 0,
                lastReadVolumeNumber: anilistManga.mediaListEntry.progressVolumes,
                trackedListName: anilistManga.mediaListEntry.status,
                userRating: anilistManga.mediaListEntry.score
            });
        });
    }
    getMangaProgressManagementForm(mangaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return App.createDUIForm({
                sections: () => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    const [response] = yield Promise.all([
                        this.requestManager.schedule(App.createRequest({
                            url: ANILIST_GRAPHQL_ENDPOINT,
                            method: 'POST',
                            data: (0, graphql_queries_1.getMangaProgressQuery)(parseInt(mangaId))
                        }), 1),
                        this.userInfo.refresh()
                    ]);
                    const anilistManga = (_a = (0, anilist_result_1.AnilistResult)(response.data).data) === null || _a === void 0 ? void 0 : _a.Media;
                    const user = yield this.userInfo.get();
                    if (user == null) {
                        return [
                            App.createDUISection({
                                id: 'notLoggedInSection',
                                isHidden: false,
                                rows: () => __awaiter(this, void 0, void 0, function* () {
                                    return [
                                        App.createDUILabel({
                                            id: 'notLoggedIn',
                                            label: 'Not Logged In'
                                        })
                                    ];
                                })
                            })
                        ];
                    }
                    if (anilistManga == null) {
                        throw new Error(`Unable to find Manga on Anilist with id ${mangaId}`);
                    }
                    return [
                        App.createDUISection({
                            id: 'userInfo',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                var _b, _c, _d;
                                return [
                                    App.createDUIHeader({
                                        id: 'header',
                                        imageUrl: (_c = (_b = user.avatar) === null || _b === void 0 ? void 0 : _b.large) !== null && _c !== void 0 ? _c : FALLBACK_IMAGE,
                                        title: (_d = user.name) !== null && _d !== void 0 ? _d : 'NOT LOGGED IN',
                                        subtitle: ''
                                    })
                                ];
                            })
                        }),
                        App.createDUISection({
                            id: 'information',
                            header: 'Information',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                var _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                                return [
                                    // This allows us to get the id when the form is submitted
                                    ...(anilistManga.mediaListEntry != null ? [App.createDUILabel({
                                            id: 'id',
                                            label: 'Entry ID',
                                            value: (_f = (_e = anilistManga.mediaListEntry) === null || _e === void 0 ? void 0 : _e.id) === null || _f === void 0 ? void 0 : _f.toString()
                                        })] : []),
                                    App.createDUILabel({
                                        id: 'mediaId',
                                        label: 'Manga ID',
                                        value: (_g = anilistManga.id) === null || _g === void 0 ? void 0 : _g.toString()
                                    }),
                                    App.createDUILabel({
                                        id: 'mangaTitle',
                                        label: 'Title',
                                        value: (_j = (_h = anilistManga.title) === null || _h === void 0 ? void 0 : _h.userPreferred) !== null && _j !== void 0 ? _j : 'N/A'
                                    }),
                                    App.createDUILabel({
                                        id: 'mangaPopularity',
                                        value: (_l = (_k = anilistManga.popularity) === null || _k === void 0 ? void 0 : _k.toString()) !== null && _l !== void 0 ? _l : 'N/A',
                                        label: 'Popularity'
                                    }),
                                    App.createDUILabel({
                                        id: 'mangaRating',
                                        value: (_o = (_m = anilistManga.averageScore) === null || _m === void 0 ? void 0 : _m.toString()) !== null && _o !== void 0 ? _o : 'N/A',
                                        label: 'Rating'
                                    }),
                                    App.createDUILabel({
                                        id: 'mangaStatus',
                                        value: (_p = anilistManga.status) !== null && _p !== void 0 ? _p : 'N/A',
                                        label: 'Status'
                                    }),
                                    App.createDUILabel({
                                        id: 'mangaIsAdult',
                                        value: (_r = (_q = anilistManga.isAdult) === null || _q === void 0 ? void 0 : _q.toString()) !== null && _r !== void 0 ? _r : 'N/A',
                                        label: 'Is Adult'
                                    })
                                ];
                            })
                        }),
                        App.createDUISection({
                            id: 'trackStatus',
                            header: 'Manga Status',
                            footer: 'Warning: Setting this to NONE will delete the listing from Anilist',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                return [
                                    App.createDUISelect({
                                        id: 'status',
                                        value: App.createDUIBinding({
                                            get: () => __awaiter(this, void 0, void 0, function* () {
                                                var _s;
                                                return ((_s = anilistManga.mediaListEntry) === null || _s === void 0 ? void 0 : _s.status)
                                                    ? [anilistManga.mediaListEntry.status]
                                                    : (yield (0, AlSettings_1.getdefaultStatus)(this.stateManager));
                                            })
                                        }),
                                        allowsMultiselect: false,
                                        label: 'Status',
                                        labelResolver: (value) => __awaiter(this, void 0, void 0, function* () {
                                            switch (value) {
                                                case 'CURRENT': return 'Reading';
                                                case 'PLANNING': return 'Planned';
                                                case 'COMPLETED': return 'Completed';
                                                case 'DROPPED': return 'Dropped';
                                                case 'PAUSED': return 'On-Hold';
                                                case 'REPEATING': return 'Re-Reading';
                                                default: return 'None';
                                            }
                                        }),
                                        options: [
                                            'NONE',
                                            'CURRENT',
                                            'PLANNING',
                                            'COMPLETED',
                                            'DROPPED',
                                            'PAUSED',
                                            'REPEATING'
                                        ]
                                    })
                                ];
                            })
                        }),
                        App.createDUISection({
                            id: 'manage',
                            header: 'Progress',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                return [
                                    App.createDUIStepper({
                                        id: 'progress',
                                        label: 'Chapter',
                                        value: App.createDUIBinding({
                                            get: () => __awaiter(this, void 0, void 0, function* () { var _t, _u; return (_u = (_t = anilistManga.mediaListEntry) === null || _t === void 0 ? void 0 : _t.progress) !== null && _u !== void 0 ? _u : 0; })
                                        }),
                                        min: 0,
                                        step: 1
                                    }),
                                    App.createDUIStepper({
                                        id: 'progressVolumes',
                                        label: 'Volume',
                                        value: App.createDUIBinding({
                                            get: () => __awaiter(this, void 0, void 0, function* () { var _v, _w; return (_w = (_v = anilistManga.mediaListEntry) === null || _v === void 0 ? void 0 : _v.progressVolumes) !== null && _w !== void 0 ? _w : 0; })
                                        }),
                                        min: 0,
                                        step: 1
                                    })
                                ];
                            })
                        }),
                        App.createDUISection({
                            id: 'rateSection',
                            header: 'Rating',
                            footer: 'This uses your rating preference set on AniList',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                var _x, _y, _z, _0;
                                return [
                                    App.createDUIStepper({
                                        id: 'score',
                                        label: 'Score',
                                        value: App.createDUIBinding({
                                            get: () => __awaiter(this, void 0, void 0, function* () { var _1, _2; return (_2 = (_1 = anilistManga.mediaListEntry) === null || _1 === void 0 ? void 0 : _1.score) !== null && _2 !== void 0 ? _2 : 0; })
                                        }),
                                        min: 0,
                                        max: this.scoreFormatLimit((_y = (_x = user.mediaListOptions) === null || _x === void 0 ? void 0 : _x.scoreFormat) !== null && _y !== void 0 ? _y : 'POINT_10'),
                                        step: ((_0 = (_z = user.mediaListOptions) === null || _z === void 0 ? void 0 : _z.scoreFormat) === null || _0 === void 0 ? void 0 : _0.includes('DECIMAL')) === true ? 0.1 : 1
                                    })
                                ];
                            })
                        }),
                        App.createDUISection({
                            id: 'mangaNotes',
                            header: 'Notes',
                            isHidden: false,
                            rows: () => __awaiter(this, void 0, void 0, function* () {
                                return [
                                    App.createDUIInputField({
                                        id: 'notes',
                                        label: 'Notes',
                                        value: App.createDUIBinding({ get: () => __awaiter(this, void 0, void 0, function* () { var _3, _4; return (_4 = (_3 = anilistManga.mediaListEntry) === null || _3 === void 0 ? void 0 : _3.notes) !== null && _4 !== void 0 ? _4 : ''; }) }),
                                    })
                                ];
                            })
                        })
                    ];
                }),
                onSubmit: (values) => __awaiter(this, void 0, void 0, function* () {
                    var _5, _6;
                    let mutation;
                    const status = (_6 = (_5 = values['status']) === null || _5 === void 0 ? void 0 : _5[0]) !== null && _6 !== void 0 ? _6 : '';
                    const id = values['id'] != null ? Number(values['id']) : undefined;
                    if (status == 'NONE' && id != null) {
                        mutation = (0, graphql_queries_1.deleteMangaProgressMutation)(id);
                    }
                    else {
                        mutation = (0, graphql_queries_1.saveMangaProgressMutation)({
                            id: id,
                            mediaId: Number(values['mediaId']),
                            status: status,
                            notes: values['notes'],
                            progress: values['progress'],
                            progressVolumes: values['progressVolumes'],
                            score: Number(values['score'])
                        });
                    }
                    console.log(JSON.stringify(mutation, null, 2));
                    yield this.requestManager.schedule(App.createRequest({
                        url: ANILIST_GRAPHQL_ENDPOINT,
                        method: 'POST',
                        data: mutation
                    }), 1);
                })
            });
        });
    }
    getMangaDetails(mangaId) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.requestManager.schedule(App.createRequest({
                url: ANILIST_GRAPHQL_ENDPOINT,
                method: 'POST',
                data: (0, graphql_queries_1.getMangaQuery)(parseInt(mangaId))
            }), 1);
            const anilistManga = (_a = (0, anilist_result_1.AnilistResult)(response.data).data) === null || _a === void 0 ? void 0 : _a.Media;
            if (anilistManga == null) {
                return Promise.reject();
            }
            return App.createSourceManga({
                id: mangaId,
                mangaInfo: App.createMangaInfo({
                    image: (_c = (_b = anilistManga.coverImage) === null || _b === void 0 ? void 0 : _b.extraLarge) !== null && _c !== void 0 ? _c : '',
                    titles: [
                        (_d = anilistManga.title) === null || _d === void 0 ? void 0 : _d.romaji,
                        (_e = anilistManga.title) === null || _e === void 0 ? void 0 : _e.english,
                        (_f = anilistManga.title) === null || _f === void 0 ? void 0 : _f.native
                    ].filter(x => x != null),
                    artist: (_m = (_l = (_k = (_j = (_h = (_g = anilistManga.staff) === null || _g === void 0 ? void 0 : _g.edges) === null || _h === void 0 ? void 0 : _h.find(x => { var _a; return ((_a = x === null || x === void 0 ? void 0 : x.role) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == 'art'; })) === null || _j === void 0 ? void 0 : _j.node) === null || _k === void 0 ? void 0 : _k.name) === null || _l === void 0 ? void 0 : _l.full) !== null && _m !== void 0 ? _m : 'Unknown',
                    author: (_t = (_s = (_r = (_q = (_p = (_o = anilistManga.staff) === null || _o === void 0 ? void 0 : _o.edges) === null || _p === void 0 ? void 0 : _p.find(x => { var _a; return ((_a = x === null || x === void 0 ? void 0 : x.role) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == 'story'; })) === null || _q === void 0 ? void 0 : _q.node) === null || _r === void 0 ? void 0 : _r.name) === null || _s === void 0 ? void 0 : _s.full) !== null && _t !== void 0 ? _t : 'Unknown',
                    desc: (anilistManga === null || anilistManga === void 0 ? void 0 : anilistManga.description) || '',
                    hentai: anilistManga.isAdult,
                    rating: anilistManga.averageScore,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    status: anilistManga.status,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    banner: anilistManga.bannerImage
                })
            });
        });
    }
    getSourceMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            return App.createDUISection({
                id: 'sourceMenu',
                header: 'Source Menu',
                isHidden: false,
                rows: () => __awaiter(this, void 0, void 0, function* () {
                    var _a, _b;
                    const isLoggedIn = yield this.userInfo.isLoggedIn();
                    if (isLoggedIn)
                        return [
                            (0, AlSettings_1.trackerSettings)(this.stateManager),
                            App.createDUILabel({
                                id: 'userInfo',
                                label: 'Logged-in as',
                                value: (_b = (_a = (yield this.userInfo.get())) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'ERROR'
                            }),
                            App.createDUIButton({
                                id: 'logout',
                                label: 'Logout',
                                onTap: () => __awaiter(this, void 0, void 0, function* () {
                                    yield this.accessToken.set(undefined);
                                })
                            })
                        ];
                    else
                        return [
                            (0, AlSettings_1.trackerSettings)(this.stateManager),
                            App.createDUIOAuthButton({
                                id: 'anilistLogin',
                                authorizeEndpoint: 'https://anilist.co/api/v2/oauth/authorize',
                                clientId: '5459',
                                label: 'Login with Anilist',
                                responseType: {
                                    type: 'token'
                                },
                                successHandler: (token) => __awaiter(this, void 0, void 0, function* () {
                                    yield this.accessToken.set(token);
                                })
                            })
                        ];
                })
            });
        });
    }
    processChapterReadActionQueue(actionQueue) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userInfo.refresh();
            const chapterReadActions = yield actionQueue.queuedChapterReadActions();
            for (const readAction of chapterReadActions) {
                try {
                    const params = {
                        mediaId: readAction.mangaId,
                        progress: Math.floor(readAction.chapterNumber),
                        progressVolumes: readAction.volumeNumber ? Math.floor(readAction.volumeNumber) : undefined
                    };
                    const response = yield this.requestManager.schedule(App.createRequest({
                        url: ANILIST_GRAPHQL_ENDPOINT,
                        method: 'POST',
                        data: (0, graphql_queries_1.saveMangaProgressMutation)(params)
                    }), 0);
                    if (response.status < 400) {
                        yield actionQueue.discardChapterReadAction(readAction);
                    }
                    else {
                        console.log(`action failed: ${response.data}`);
                        yield actionQueue.retryChapterReadAction(readAction);
                    }
                }
                catch (error) {
                    console.log(error);
                    yield actionQueue.retryChapterReadAction(readAction);
                }
            }
        });
    }
    scoreFormatLimit(format) {
        var _a;
        const extracted = (_a = /\d+/gi.exec(format)) === null || _a === void 0 ? void 0 : _a[0];
        return extracted != null ? Number(extracted) : undefined;
    }
}
exports.Anilist = Anilist;

},{"./AlSettings":59,"./models/anilist-result":61,"./models/graphql-queries":62,"@paperback/types":58}],61:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnilistResult = void 0;
function AnilistResult(json) {
    var _a, _b, _c;
    const result = typeof json == 'string' ? JSON.parse(json) : json;
    if ((_b = (_a = result.errors) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0 > 0) {
        (_c = result.errors) === null || _c === void 0 ? void 0 : _c.map(error => {
            console.log(`[ANILIST-ERROR(${error.status})] ${error.message}`);
        });
        throw new Error('Error while fetching data from Anilist, check logs for more info');
    }
    return result;
}
exports.AnilistResult = AnilistResult;

},{}],62:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMangaProgressMutation = exports.saveMangaProgressMutation = exports.getMangaProgressQuery = exports.getMangaQuery = exports.searchMangaQuery = exports.userProfileQuery = void 0;
const userProfileQuery = () => ({
    query: `{
        Viewer {
            id
            name
            mediaListOptions {
                scoreFormat
            }
            siteUrl
        }
    }`
});
exports.userProfileQuery = userProfileQuery;
const searchMangaQuery = (page, search) => ({
    query: `query($page: Int, $search: String) {
        Page(page: $page) {
            pageInfo {
                currentPage
                hasNextPage
            }
            media(type: MANGA, search: $search, format_not: NOVEL) {
                id
                title {
                    userPreferred
                }
                coverImage {
                    large
                }
            }
        }
    }`,
    variables: {
        page,
        search
    }
});
exports.searchMangaQuery = searchMangaQuery;
const getMangaQuery = (id) => ({
    query: `query($id: Int){
        Media(id: $id){
            id
            description(asHtml: false)
            title {
                romaji
                english
                native
            }
            coverImage{
                extraLarge
            }
            bannerImage
            averageScore
            isAdult
            popularity
            characters(sort: RELEVANCE, perPage: 25) {
                edges {
                    node {
                        image {
                            large
                        }
                        age
                    }
                    name
                    role
                }
            }
            staff {
                edges {
                    node {
                        name {
                            full
                        }
                        image {
                            large
                        }
                    }
                    role
                }
            }
            status
        }
    }`,
    variables: {
        id
    }
});
exports.getMangaQuery = getMangaQuery;
const getMangaProgressQuery = (id) => ({
    query: `query($id: Int) {
        Media(id: $id) {
            id
            mediaListEntry {
                id
                status
                progress
                progressVolumes
                private
                score
                notes
                advancedScores
            }
            title {
                romaji
                english
                native
                userPreferred
            }
            coverImage {
                extraLarge
            }
            bannerImage
            averageScore
            isAdult
            popularity
            status
        }
    }`,
    variables: { id }
});
exports.getMangaProgressQuery = getMangaProgressQuery;
const saveMangaProgressMutation = (variables) => ({
    query: `mutation($id: Int, $mediaId: Int, $status: MediaListStatus, $score: Float, $progress: Int, $progressVolumes: Int, $notes: String) {
        SaveMediaListEntry(id: $id, mediaId: $mediaId, status: $status, score: $score, progress: $progress, progressVolumes: $progressVolumes, notes: $notes){
            id
        }
    }`,
    variables: variables
});
exports.saveMangaProgressMutation = saveMangaProgressMutation;
const deleteMangaProgressMutation = (id) => ({
    query: `mutation($id: Int) {
        DeleteMediaListEntry(id: $id){
            deleted
        }
    }`,
    variables: { id }
});
exports.deleteMangaProgressMutation = deleteMangaProgressMutation;

},{}]},{},[60])(60)
});

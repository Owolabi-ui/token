/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/token_assets/src/index.jsx":
/*!****************************************!*\
  !*** ./src/token_assets/src/index.jsx ***!
  \****************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/zeke_owolabi/ic-projects/token/src/token_assets/src/index.jsx: Support for the experimental syntax 'jsx' isn't currently enabled (9:21):\n\n\u001b[0m \u001b[90m  7 |\u001b[39m   \u001b[36mconst\u001b[39m authClient \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m \u001b[33mAuthClient\u001b[39m\u001b[33m.\u001b[39mcreate()\u001b[33m;\u001b[39m\n \u001b[90m  8 |\u001b[39m   \u001b[36mif\u001b[39m (\u001b[36mawait\u001b[39m authClient\u001b[33m.\u001b[39misAuthenticated()) {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 |\u001b[39m     \u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\u001b[33m<\u001b[39m\u001b[33mApp\u001b[39m \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m document\u001b[33m.\u001b[39mgetElementById(\u001b[32m\"root\"\u001b[39m))\u001b[33m;\u001b[39m}\n \u001b[90m    |\u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 10 |\u001b[39m     \u001b[36melse\u001b[39m{ \u001b[36mawait\u001b[39m authClient\u001b[33m.\u001b[39mlogin({\n \u001b[90m 11 |\u001b[39m       identityProvider\u001b[33m:\u001b[39m \u001b[32m\"https://identity.ic0.app\"\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 12 |\u001b[39m       onSuccess\u001b[33m:\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\nAdd @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-jsx) to the 'plugins' section to enable parsing.\n\nIf you already added the plugin for this syntax to your config, it's possible that your config isn't being loaded.\nYou can re-run Babel with the BABEL_SHOW_CONFIG_FOR environment variable to show the loaded configuration:\n\tnpx cross-env BABEL_SHOW_CONFIG_FOR=/home/zeke_owolabi/ic-projects/token/src/token_assets/src/index.jsx <your build command>\nSee https://babeljs.io/docs/configuration#print-effective-configs for more info.\n\n    at constructor (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:359:19)\n    at Parser.raise (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:3266:19)\n    at Parser.expectOnePlugin (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:3300:18)\n    at Parser.parseExprAtom (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10945:18)\n    at Parser.parseExprSubscripts (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10619:23)\n    at Parser.parseUpdate (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10604:21)\n    at Parser.parseMaybeUnary (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10584:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10438:61)\n    at Parser.parseExprOps (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10443:23)\n    at Parser.parseMaybeConditional (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10420:23)\n    at Parser.parseMaybeAssign (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10383:21)\n    at /home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10353:39\n    at Parser.allowInAnd (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:11955:12)\n    at Parser.parseMaybeAssignAllowIn (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10353:17)\n    at Parser.parseExprListItem (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:11713:18)\n    at Parser.parseCallExpressionArguments (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10788:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10722:29)\n    at Parser.parseSubscript (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10659:19)\n    at Parser.parseSubscripts (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10632:19)\n    at Parser.parseExprSubscripts (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10623:17)\n    at Parser.parseUpdate (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10604:21)\n    at Parser.parseMaybeUnary (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10584:23)\n    at Parser.parseMaybeUnaryOrPrivate (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10438:61)\n    at Parser.parseExprOps (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10443:23)\n    at Parser.parseMaybeConditional (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10420:23)\n    at Parser.parseMaybeAssign (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10383:21)\n    at Parser.parseExpressionBase (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10337:23)\n    at /home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10333:39\n    at Parser.allowInAnd (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:11950:16)\n    at Parser.parseExpression (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10333:17)\n    at Parser.parseStatementContent (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12394:23)\n    at Parser.parseStatementLike (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12261:17)\n    at Parser.parseStatementListItem (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12241:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12814:61)\n    at Parser.parseBlockBody (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12807:10)\n    at Parser.parseBlock (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12795:10)\n    at Parser.parseStatementContent (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12351:21)\n    at Parser.parseStatementLike (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12261:17)\n    at Parser.parseStatementOrSloppyAnnexBFunctionDeclaration (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12251:17)\n    at Parser.parseIfStatement (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12628:28)\n    at Parser.parseStatementContent (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12290:21)\n    at Parser.parseStatementLike (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12261:17)\n    at Parser.parseStatementListItem (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12241:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12814:61)\n    at Parser.parseBlockBody (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12807:10)\n    at Parser.parseBlock (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:12795:10)\n    at Parser.parseFunctionBody (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:11638:24)\n    at Parser.parseArrowExpression (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:11613:10)\n    at Parser.parseAsyncArrowFromCallExpression (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10800:10)\n    at Parser.parseCoverCallAndAsyncArrowHead (/home/zeke_owolabi/ic-projects/token/node_modules/@babel/parser/lib/index.js:10730:27)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/token_assets/src/index.jsx"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
const CHUNK_PUBLIC_PATH = "server/pages/index.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_03457d._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_material_b3ae8c._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_@mui_system_esm_9865d8._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_b1be41._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__aad309._.js");
runtime.loadChunk("server/chunks/ssr/_cf1730._.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/src/pages/index.js [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/src/pages/_document.js [ssr] (ecmascript)\", INNER_APP => \"[project]/src/pages/_app.js [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;

//optimize_simple_ReturnsOptimization.js: Testing logic.

define([
	"optimize",
	"fs-extra",
	"path",
	"promise",
	"file"
], function(
	optimize,
	fs,
	path,
	promise,
	file
) {
	return {
		"Async": true,
		"Name":"optimize_simple_ReturnsOptimization",
		"Input": "",
		"Function": function() {
			return promise(async function( resolve ) {
				async function cleanup() {
					await fs.remove("simple.min.js");
				}
				optimize().then(function() {
					file.get("simple.min.js").then(async function( body ) {
						await cleanup();
						resolve( body );
					}).catch( resolve ).finally(async function() { await cleanup(); });
				}).catch( resolve ).finally(async function() { await cleanup(); });
			});
		},
		"Debug": false,
		"ExpectedOutput": "define(\"simple.dep\",[],function(){return\"abc\"}),define(\"simple\",[\"dep\"],function(e){console.log(e)});"
	};
});

//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
        "scopeOptimization": "lib/scope_optimization.min",
        "fs": "empty:",
        "child_process": "empty:",
        "promise": "lib/promise.min",
        "file": "lib/file.min",
        "rsvp": "lib/rsvp.min"
    },
    exclude: [ "fs", "child_process" ],
    name: "optimize",
    out: "optimize.min.js"
})

//optimize.js: Functional Logic.

define(["scopeOptimization", "fs", "child_process", "promise", "file" ], function( scopeOptimization, fs, child, promise, file ) {
  return function( Input ) {
    return promise(async function( resolve, reject ) {
      //check if build.js exists.
      try {
        if ( fs.existsSync("build.js") == false ) {
          throw new Error("optimize - Error: A build file does not exist.");
        } else if (fs.existsSync("r.js") == false) {
          throw new Error("optimize - Error: An r.js file does not exist.");
        } else {
          child.exec("node r.js -o build.js", function( error, stdout, stderr ) {
            console.log( stdout );
            if ( error ) {
              reject( stderr );
            } else {
              file.get("build.js").then(function( body ) {
                let match = new RegExp(/out:\s*"(.+)"/).exec( body );
                if ( match != null ) {
                  file.get( match[1] ).then(function( body ) {
                    return file.update({
                      Name: match[1],
                      Body: scopeOptimization( body )
                    });
                  }).then( resolve ).catch( reject );
                } else {
                  reject( new Error("optimize - Error: An outfile was not defined in build.js") );
                }
              }).catch(function( error ) {
                reject( error );
              });
            }
          });
        }
      } catch ( error ) {
        reject( error );
      }
      //check if r.js exists.
      //Run the optimization.
      //Get the optimization.
      //Scope the optimization.
      //Update the optimization file.
    });
    
  };
});

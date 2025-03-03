// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(moduleArg) => Promise<Module>
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module != 'undefined' ? Module : {};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == 'object';
var ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope != 'undefined';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == 'object' && typeof process.versions == 'object' && typeof process.versions.node == 'string' && process.type != 'renderer';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (ENVIRONMENT_IS_NODE) {

}

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// include: /var/folders/vx/_yqhb9nd4mscl67tlm2_g_8c0000gn/T/tmpox9fvh3o.js

  Module['expectedDataFileDownloads'] ??= 0;
  Module['expectedDataFileDownloads']++;
  (() => {
    // Do not attempt to redownload the virtual filesystem data when in a pthread or a Wasm Worker context.
    var isPthread = typeof ENVIRONMENT_IS_PTHREAD != 'undefined' && ENVIRONMENT_IS_PTHREAD;
    var isWasmWorker = typeof ENVIRONMENT_IS_WASM_WORKER != 'undefined' && ENVIRONMENT_IS_WASM_WORKER;
    if (isPthread || isWasmWorker) return;
    var isNode = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
    function loadPackage(metadata) {

      var PACKAGE_PATH = '';
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + '/');
      } else if (typeof process === 'undefined' && typeof location !== 'undefined') {
        // web worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/');
      }
      var PACKAGE_NAME = 'docs/index.data';
      var REMOTE_PACKAGE_BASE = 'index.data';
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];

      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        if (isNode) {
          require('fs').readFile(packageName, (err, contents) => {
            if (err) {
              errback(err);
            } else {
              callback(contents.buffer);
            }
          });
          return;
        }
        Module['dataFileDownloads'] ??= {};
        fetch(packageName)
          .catch((cause) => Promise.reject(new Error(`Network Error: ${packageName}`, {cause}))) // If fetch fails, rewrite the error to include the failing URL & the cause.
          .then((response) => {
            if (!response.ok) {
              return Promise.reject(new Error(`${response.status}: ${response.url}`));
            }

            if (!response.body && response.arrayBuffer) { // If we're using the polyfill, readers won't be available...
              return response.arrayBuffer().then(callback);
            }

            const reader = response.body.getReader();
            const iterate = () => reader.read().then(handleChunk).catch((cause) => {
              return Promise.reject(new Error(`Unexpected error while handling : ${response.url} ${cause}`, {cause}));
            });

            const chunks = [];
            const headers = response.headers;
            const total = Number(headers.get('Content-Length') ?? packageSize);
            let loaded = 0;

            const handleChunk = ({done, value}) => {
              if (!done) {
                chunks.push(value);
                loaded += value.length;
                Module['dataFileDownloads'][packageName] = {loaded, total};

                let totalLoaded = 0;
                let totalSize = 0;

                for (const download of Object.values(Module['dataFileDownloads'])) {
                  totalLoaded += download.loaded;
                  totalSize += download.total;
                }

                Module['setStatus']?.(`Downloading data... (${totalLoaded}/${totalSize})`);
                return iterate();
              } else {
                const packageData = new Uint8Array(chunks.map((c) => c.length).reduce((a, b) => a + b, 0));
                let offset = 0;
                for (const chunk of chunks) {
                  packageData.set(chunk, offset);
                  offset += chunk.length;
                }
                callback(packageData.buffer);
              }
            };

            Module['setStatus']?.('Downloading data...');
            return iterate();
          });
      };

      function handleError(error) {
        console.error('package error:', error);
      };

      var fetchedCallback = null;
      var fetched = Module['getPreloadedPackage'] ? Module['getPreloadedPackage'](REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE) : null;

      if (!fetched) fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, (data) => {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);

    function runWithFS(Module) {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
Module['FS_createPath']("/", "assets", true, true);
Module['FS_createPath']("/assets", "kenney_pixel-platformer", true, true);
Module['FS_createPath']("/assets/kenney_pixel-platformer", "Tilemap", true, true);
Module['FS_createPath']("/assets/kenney_pixel-platformer", "Tiles", true, true);
Module['FS_createPath']("/assets/kenney_pixel-platformer/Tiles", "Backgrounds", true, true);
Module['FS_createPath']("/assets/kenney_pixel-platformer/Tiles", "Characters", true, true);
Module['FS_createPath']("/assets", "kenney_ui-pack", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack", "Font", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack", "PNG", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG", "Blue", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Blue", "Default", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Blue", "Double", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG", "Extra", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Extra", "Default", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Extra", "Double", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG", "Green", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Green", "Default", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Green", "Double", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG", "Grey", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Grey", "Default", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Grey", "Double", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG", "Red", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Red", "Default", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Red", "Double", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG", "Yellow", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Yellow", "Default", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/PNG/Yellow", "Double", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack", "Sounds", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack", "Vector", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/Vector", "Blue", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/Vector", "Extra", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/Vector", "Green", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/Vector", "Grey", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/Vector", "Red", true, true);
Module['FS_createPath']("/assets/kenney_ui-pack/Vector", "Yellow", true, true);

      /** @constructor */
      function DataRequest(start, end, audio) {
        this.start = start;
        this.end = end;
        this.audio = audio;
      }
      DataRequest.prototype = {
        requests: {},
        open: function(mode, name) {
          this.name = name;
          this.requests[name] = this;
          Module['addRunDependency'](`fp ${this.name}`);
        },
        send: function() {},
        onload: function() {
          var byteArray = this.byteArray.subarray(this.start, this.end);
          this.finish(byteArray);
        },
        finish: function(byteArray) {
          var that = this;
          // canOwn this data in the filesystem, it is a slide into the heap that will never change
          Module['FS_createDataFile'](this.name, null, byteArray, true, true, true);
          Module['removeRunDependency'](`fp ${that.name}`);
          this.requests[this.name] = null;
        }
      };

      var files = metadata['files'];
      for (var i = 0; i < files.length; ++i) {
        new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio'] || 0).open('GET', files[i]['filename']);
      }

      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer.constructor.name === ArrayBuffer.name, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;
          var files = metadata['files'];
          for (var i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }          Module['removeRunDependency']('datafile_docs/index.data');

      };
      Module['addRunDependency']('datafile_docs/index.data');

      Module['preloadResults'] ??= {};

      Module['preloadResults'][PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }

    }
    if (Module['calledRun']) {
      runWithFS(Module);
    } else {
      (Module['preRun'] ??= []).push(runWithFS); // FS is not initialized yet, wait for it
    }

    }
    loadPackage({"files": [{"filename": "/assets/kenney_pixel-platformer/.DS_Store", "start": 0, "end": 6148}, {"filename": "/assets/kenney_pixel-platformer/License.txt", "start": 6148, "end": 6858}, {"filename": "/assets/kenney_pixel-platformer/Preview.png", "start": 6858, "end": 61616}, {"filename": "/assets/kenney_pixel-platformer/SampleA.png", "start": 61616, "end": 81466}, {"filename": "/assets/kenney_pixel-platformer/SampleB.png", "start": 81466, "end": 99069}, {"filename": "/assets/kenney_pixel-platformer/Tilemap/mobs.json", "start": 99069, "end": 99628}, {"filename": "/assets/kenney_pixel-platformer/Tilemap/mobs.png", "start": 99628, "end": 101273}, {"filename": "/assets/kenney_pixel-platformer/Tilemap/tilemap-backgrounds.png", "start": 101273, "end": 101942}, {"filename": "/assets/kenney_pixel-platformer/Tilemap/tilemap-backgrounds_packed.png", "start": 101942, "end": 102463}, {"filename": "/assets/kenney_pixel-platformer/Tilemap/tilemap-characters.png", "start": 102463, "end": 104459}, {"filename": "/assets/kenney_pixel-platformer/Tilemap/tilemap-characters_packed.png", "start": 104459, "end": 106449}, {"filename": "/assets/kenney_pixel-platformer/Tilemap/tilemap.png", "start": 106449, "end": 112629}, {"filename": "/assets/kenney_pixel-platformer/Tilemap/tilemap_packed.json", "start": 112629, "end": 125635}, {"filename": "/assets/kenney_pixel-platformer/Tilemap/tilemap_packed.png", "start": 125635, "end": 131548}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0000.png", "start": 131548, "end": 131648}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0001.png", "start": 131648, "end": 131748}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0002.png", "start": 131748, "end": 131848}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0003.png", "start": 131848, "end": 131948}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0004.png", "start": 131948, "end": 132048}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0005.png", "start": 132048, "end": 132148}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0006.png", "start": 132148, "end": 132248}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0007.png", "start": 132248, "end": 132348}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0008.png", "start": 132348, "end": 132505}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0009.png", "start": 132505, "end": 132687}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0010.png", "start": 132687, "end": 132839}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0011.png", "start": 132839, "end": 133015}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0012.png", "start": 133015, "end": 133186}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0013.png", "start": 133186, "end": 133363}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0014.png", "start": 133363, "end": 133527}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0015.png", "start": 133527, "end": 133706}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0016.png", "start": 133706, "end": 133806}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0017.png", "start": 133806, "end": 133906}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0018.png", "start": 133906, "end": 134006}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0019.png", "start": 134006, "end": 134106}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0020.png", "start": 134106, "end": 134206}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0021.png", "start": 134206, "end": 134306}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0022.png", "start": 134306, "end": 134406}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Backgrounds/tile_0023.png", "start": 134406, "end": 134506}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0000.png", "start": 134506, "end": 134760}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0001.png", "start": 134760, "end": 135009}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0002.png", "start": 135009, "end": 135261}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0003.png", "start": 135261, "end": 135513}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0004.png", "start": 135513, "end": 135771}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0005.png", "start": 135771, "end": 136026}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0006.png", "start": 136026, "end": 136280}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0007.png", "start": 136280, "end": 136529}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0008.png", "start": 136529, "end": 136782}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0009.png", "start": 136782, "end": 137033}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0010.png", "start": 137033, "end": 137281}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0011.png", "start": 137281, "end": 137465}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0012.png", "start": 137465, "end": 137664}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0013.png", "start": 137664, "end": 137859}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0014.png", "start": 137859, "end": 138053}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0015.png", "start": 138053, "end": 138275}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0016.png", "start": 138275, "end": 138499}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0017.png", "start": 138499, "end": 138707}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0018.png", "start": 138707, "end": 138906}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0019.png", "start": 138906, "end": 139103}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0020.png", "start": 139103, "end": 139285}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0021.png", "start": 139285, "end": 139516}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0022.png", "start": 139516, "end": 139744}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0023.png", "start": 139744, "end": 139961}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0024.png", "start": 139961, "end": 140203}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0025.png", "start": 140203, "end": 140421}, {"filename": "/assets/kenney_pixel-platformer/Tiles/Characters/tile_0026.png", "start": 140421, "end": 140655}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0000.png", "start": 140655, "end": 140845}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0001.png", "start": 140845, "end": 141029}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0002.png", "start": 141029, "end": 141191}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0003.png", "start": 141191, "end": 141380}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0004.png", "start": 141380, "end": 141522}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0005.png", "start": 141522, "end": 141664}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0006.png", "start": 141664, "end": 141837}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0007.png", "start": 141837, "end": 142020}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0008.png", "start": 142020, "end": 142182}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0009.png", "start": 142182, "end": 142341}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0010.png", "start": 142341, "end": 142530}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0011.png", "start": 142530, "end": 142719}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0012.png", "start": 142719, "end": 142911}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0013.png", "start": 142911, "end": 143091}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0014.png", "start": 143091, "end": 143280}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0015.png", "start": 143280, "end": 143469}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0016.png", "start": 143469, "end": 143667}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0017.png", "start": 143667, "end": 143845}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0018.png", "start": 143845, "end": 144005}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0019.png", "start": 144005, "end": 144174}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0020.png", "start": 144174, "end": 144359}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0021.png", "start": 144359, "end": 144538}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0022.png", "start": 144538, "end": 144695}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0023.png", "start": 144695, "end": 144882}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0024.png", "start": 144882, "end": 145020}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0025.png", "start": 145020, "end": 145166}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0026.png", "start": 145166, "end": 145350}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0027.png", "start": 145350, "end": 145525}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0028.png", "start": 145525, "end": 145695}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0029.png", "start": 145695, "end": 145854}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0030.png", "start": 145854, "end": 146040}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0031.png", "start": 146040, "end": 146225}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0032.png", "start": 146225, "end": 146378}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0033.png", "start": 146378, "end": 146547}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0034.png", "start": 146547, "end": 146725}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0035.png", "start": 146725, "end": 146907}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0036.png", "start": 146907, "end": 147093}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0037.png", "start": 147093, "end": 147240}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0038.png", "start": 147240, "end": 147340}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0039.png", "start": 147340, "end": 147487}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0040.png", "start": 147487, "end": 147674}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0041.png", "start": 147674, "end": 147856}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0042.png", "start": 147856, "end": 148017}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0043.png", "start": 148017, "end": 148198}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0044.png", "start": 148198, "end": 148374}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0045.png", "start": 148374, "end": 148566}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0046.png", "start": 148566, "end": 148725}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0047.png", "start": 148725, "end": 148923}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0048.png", "start": 148923, "end": 149106}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0049.png", "start": 149106, "end": 149240}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0050.png", "start": 149240, "end": 149424}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0051.png", "start": 149424, "end": 149582}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0052.png", "start": 149582, "end": 149739}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0053.png", "start": 149739, "end": 149911}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0054.png", "start": 149911, "end": 150050}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0055.png", "start": 150050, "end": 150193}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0056.png", "start": 150193, "end": 150351}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0057.png", "start": 150351, "end": 150517}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0058.png", "start": 150517, "end": 150669}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0059.png", "start": 150669, "end": 150832}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0060.png", "start": 150832, "end": 151014}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0061.png", "start": 151014, "end": 151192}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0062.png", "start": 151192, "end": 151340}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0063.png", "start": 151340, "end": 151521}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0064.png", "start": 151521, "end": 151729}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0065.png", "start": 151729, "end": 151923}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0066.png", "start": 151923, "end": 152132}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0067.png", "start": 152132, "end": 152313}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0068.png", "start": 152313, "end": 152489}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0069.png", "start": 152489, "end": 152670}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0070.png", "start": 152670, "end": 152824}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0071.png", "start": 152824, "end": 152945}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0072.png", "start": 152945, "end": 153120}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0073.png", "start": 153120, "end": 153250}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0074.png", "start": 153250, "end": 153406}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0075.png", "start": 153406, "end": 153552}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0076.png", "start": 153552, "end": 153726}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0077.png", "start": 153726, "end": 153920}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0078.png", "start": 153920, "end": 154099}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0079.png", "start": 154099, "end": 154283}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0080.png", "start": 154283, "end": 154468}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0081.png", "start": 154468, "end": 154645}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0082.png", "start": 154645, "end": 154805}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0083.png", "start": 154805, "end": 154988}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0084.png", "start": 154988, "end": 155178}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0085.png", "start": 155178, "end": 155368}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0086.png", "start": 155368, "end": 155552}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0087.png", "start": 155552, "end": 155749}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0088.png", "start": 155749, "end": 155946}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0089.png", "start": 155946, "end": 156085}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0090.png", "start": 156085, "end": 156256}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0091.png", "start": 156256, "end": 156395}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0092.png", "start": 156395, "end": 156568}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0093.png", "start": 156568, "end": 156737}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0094.png", "start": 156737, "end": 156907}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0095.png", "start": 156907, "end": 157073}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0096.png", "start": 157073, "end": 157283}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0097.png", "start": 157283, "end": 157471}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0098.png", "start": 157471, "end": 157665}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0099.png", "start": 157665, "end": 157858}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0100.png", "start": 157858, "end": 158041}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0101.png", "start": 158041, "end": 158218}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0102.png", "start": 158218, "end": 158369}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0103.png", "start": 158369, "end": 158549}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0104.png", "start": 158549, "end": 158676}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0105.png", "start": 158676, "end": 158857}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0106.png", "start": 158857, "end": 159017}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0107.png", "start": 159017, "end": 159195}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0108.png", "start": 159195, "end": 159382}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0109.png", "start": 159382, "end": 159562}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0110.png", "start": 159562, "end": 159713}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0111.png", "start": 159713, "end": 159912}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0112.png", "start": 159912, "end": 160110}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0113.png", "start": 160110, "end": 160282}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0114.png", "start": 160282, "end": 160451}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0115.png", "start": 160451, "end": 160598}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0116.png", "start": 160598, "end": 160760}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0117.png", "start": 160760, "end": 160956}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0118.png", "start": 160956, "end": 161112}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0119.png", "start": 161112, "end": 161268}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0120.png", "start": 161268, "end": 161408}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0121.png", "start": 161408, "end": 161547}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0122.png", "start": 161547, "end": 161695}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0123.png", "start": 161695, "end": 161838}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0124.png", "start": 161838, "end": 162007}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0125.png", "start": 162007, "end": 162186}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0126.png", "start": 162186, "end": 162382}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0127.png", "start": 162382, "end": 162568}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0128.png", "start": 162568, "end": 162770}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0129.png", "start": 162770, "end": 162967}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0130.png", "start": 162967, "end": 163138}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0131.png", "start": 163138, "end": 163267}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0132.png", "start": 163267, "end": 163432}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0133.png", "start": 163432, "end": 163589}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0134.png", "start": 163589, "end": 163755}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0135.png", "start": 163755, "end": 163923}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0136.png", "start": 163923, "end": 164111}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0137.png", "start": 164111, "end": 164304}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0138.png", "start": 164304, "end": 164475}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0139.png", "start": 164475, "end": 164628}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0140.png", "start": 164628, "end": 164796}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0141.png", "start": 164796, "end": 164958}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0142.png", "start": 164958, "end": 165109}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0143.png", "start": 165109, "end": 165272}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0144.png", "start": 165272, "end": 165436}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0145.png", "start": 165436, "end": 165638}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0146.png", "start": 165638, "end": 165794}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0147.png", "start": 165794, "end": 165961}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0148.png", "start": 165961, "end": 166129}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0149.png", "start": 166129, "end": 166283}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0150.png", "start": 166283, "end": 166426}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0151.png", "start": 166426, "end": 166587}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0152.png", "start": 166587, "end": 166733}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0153.png", "start": 166733, "end": 166920}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0154.png", "start": 166920, "end": 167092}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0155.png", "start": 167092, "end": 167274}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0156.png", "start": 167274, "end": 167439}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0157.png", "start": 167439, "end": 167572}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0158.png", "start": 167572, "end": 167732}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0159.png", "start": 167732, "end": 167897}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0160.png", "start": 167897, "end": 168045}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0161.png", "start": 168045, "end": 168191}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0162.png", "start": 168191, "end": 168347}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0163.png", "start": 168347, "end": 168493}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0164.png", "start": 168493, "end": 168634}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0165.png", "start": 168634, "end": 168782}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0166.png", "start": 168782, "end": 168933}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0167.png", "start": 168933, "end": 169081}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0168.png", "start": 169081, "end": 169233}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0169.png", "start": 169233, "end": 169387}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0170.png", "start": 169387, "end": 169540}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0171.png", "start": 169540, "end": 169689}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0172.png", "start": 169689, "end": 169861}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0173.png", "start": 169861, "end": 170009}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0174.png", "start": 170009, "end": 170156}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0175.png", "start": 170156, "end": 170316}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0176.png", "start": 170316, "end": 170473}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0177.png", "start": 170473, "end": 170630}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0178.png", "start": 170630, "end": 170788}, {"filename": "/assets/kenney_pixel-platformer/Tiles/tile_0179.png", "start": 170788, "end": 170952}, {"filename": "/assets/kenney_pixel-platformer/Tilesheet (Backgrounds).txt", "start": 170952, "end": 171187}, {"filename": "/assets/kenney_pixel-platformer/Tilesheet (Characters).txt", "start": 171187, "end": 171422}, {"filename": "/assets/kenney_pixel-platformer/Tilesheet (Tiles).txt", "start": 171422, "end": 171659}, {"filename": "/assets/kenney_pixel-platformer/Visit Kenney.url", "start": 171659, "end": 171704}, {"filename": "/assets/kenney_pixel-platformer/Visit Patreon.url", "start": 171704, "end": 171759}, {"filename": "/assets/kenney_ui-pack/Font/Kenney Future Narrow.ttf", "start": 171759, "end": 205939}, {"filename": "/assets/kenney_ui-pack/Font/Kenney Future.ttf", "start": 205939, "end": 240099}, {"filename": "/assets/kenney_ui-pack/License.txt", "start": 240099, "end": 240664}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_basic_e.png", "start": 240664, "end": 241086}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_basic_e_small.png", "start": 241086, "end": 241464}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_basic_n.png", "start": 241464, "end": 241855}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_basic_n_small.png", "start": 241855, "end": 242157}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_basic_s.png", "start": 242157, "end": 242571}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_basic_s_small.png", "start": 242571, "end": 242903}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_basic_w.png", "start": 242903, "end": 243305}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_basic_w_small.png", "start": 243305, "end": 243704}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_decorative_e.png", "start": 243704, "end": 244270}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_decorative_e_small.png", "start": 244270, "end": 244729}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_decorative_n.png", "start": 244729, "end": 245240}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_decorative_n_small.png", "start": 245240, "end": 245645}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_decorative_s.png", "start": 245645, "end": 246175}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_decorative_s_small.png", "start": 246175, "end": 246599}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_decorative_w.png", "start": 246599, "end": 247161}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/arrow_decorative_w_small.png", "start": 247161, "end": 247645}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_rectangle_border.png", "start": 247645, "end": 247983}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_rectangle_depth_border.png", "start": 247983, "end": 248394}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_rectangle_depth_flat.png", "start": 248394, "end": 248777}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_rectangle_depth_gloss.png", "start": 248777, "end": 249150}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_rectangle_depth_gradient.png", "start": 249150, "end": 249732}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_rectangle_depth_line.png", "start": 249732, "end": 250143}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_rectangle_flat.png", "start": 250143, "end": 250458}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_rectangle_gloss.png", "start": 250458, "end": 250764}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_rectangle_gradient.png", "start": 250764, "end": 251292}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_rectangle_line.png", "start": 251292, "end": 251630}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_round_border.png", "start": 251630, "end": 253113}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_round_depth_border.png", "start": 253113, "end": 254901}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_round_depth_flat.png", "start": 254901, "end": 256202}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_round_depth_gloss.png", "start": 256202, "end": 257412}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_round_depth_gradient.png", "start": 257412, "end": 258983}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_round_depth_line.png", "start": 258983, "end": 260673}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_round_flat.png", "start": 260673, "end": 261696}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_round_gloss.png", "start": 261696, "end": 262654}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_round_gradient.png", "start": 262654, "end": 263948}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_round_line.png", "start": 263948, "end": 265361}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_square_border.png", "start": 265361, "end": 265667}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_square_depth_border.png", "start": 265667, "end": 266042}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_square_depth_flat.png", "start": 266042, "end": 266397}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_square_depth_gloss.png", "start": 266397, "end": 266734}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_square_depth_gradient.png", "start": 266734, "end": 267309}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_square_depth_line.png", "start": 267309, "end": 267683}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_square_flat.png", "start": 267683, "end": 267969}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_square_gloss.png", "start": 267969, "end": 268237}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_square_gradient.png", "start": 268237, "end": 268753}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/button_square_line.png", "start": 268753, "end": 269057}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_round_color.png", "start": 269057, "end": 269636}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_round_grey.png", "start": 269636, "end": 270215}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_round_grey_circle.png", "start": 270215, "end": 270989}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_round_round_circle.png", "start": 270989, "end": 271756}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_square_color.png", "start": 271756, "end": 272036}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_square_color_checkmark.png", "start": 272036, "end": 272591}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_square_color_cross.png", "start": 272591, "end": 273124}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_square_color_square.png", "start": 273124, "end": 273443}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_square_grey.png", "start": 273443, "end": 273723}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_square_grey_checkmark.png", "start": 273723, "end": 274282}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_square_grey_cross.png", "start": 274282, "end": 274821}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/check_square_grey_square.png", "start": 274821, "end": 275142}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/icon_checkmark.png", "start": 275142, "end": 275519}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/icon_circle.png", "start": 275519, "end": 275831}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/icon_cross.png", "start": 275831, "end": 276181}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/icon_outline_checkmark.png", "start": 276181, "end": 276558}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/icon_outline_circle.png", "start": 276558, "end": 276870}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/icon_outline_cross.png", "start": 276870, "end": 277222}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/icon_outline_square.png", "start": 277222, "end": 277357}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/icon_square.png", "start": 277357, "end": 277499}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_hangle.png", "start": 277499, "end": 277794}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_horizontal_color.png", "start": 277794, "end": 278177}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_horizontal_color_section.png", "start": 278177, "end": 278497}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_horizontal_color_section_wide.png", "start": 278497, "end": 278833}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_horizontal_grey.png", "start": 278833, "end": 279216}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_horizontal_grey_section.png", "start": 279216, "end": 279537}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_horizontal_grey_section_wide.png", "start": 279537, "end": 279873}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_vertical_color.png", "start": 279873, "end": 280252}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_vertical_color_section.png", "start": 280252, "end": 280560}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_vertical_color_section_wide.png", "start": 280560, "end": 280876}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_vertical_grey.png", "start": 280876, "end": 281255}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_vertical_grey_section.png", "start": 281255, "end": 281563}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/slide_vertical_grey_section_wide.png", "start": 281563, "end": 281879}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/star.png", "start": 281879, "end": 283386}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/star_outline.png", "start": 283386, "end": 284341}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Default/star_outline_depth.png", "start": 284341, "end": 285509}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_basic_e.png", "start": 285509, "end": 286146}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_basic_e_small.png", "start": 286146, "end": 286669}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_basic_n.png", "start": 286669, "end": 287291}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_basic_n_small.png", "start": 287291, "end": 287762}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_basic_s.png", "start": 287762, "end": 288456}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_basic_s_small.png", "start": 288456, "end": 288989}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_basic_w.png", "start": 288989, "end": 289628}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_basic_w_small.png", "start": 289628, "end": 290177}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_decorative_e.png", "start": 290177, "end": 291036}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_decorative_e_small.png", "start": 291036, "end": 291733}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_decorative_n.png", "start": 291733, "end": 292613}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_decorative_n_small.png", "start": 292613, "end": 293262}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_decorative_s.png", "start": 293262, "end": 294213}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_decorative_s_small.png", "start": 294213, "end": 294897}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_decorative_w.png", "start": 294897, "end": 295799}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/arrow_decorative_w_small.png", "start": 295799, "end": 296520}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_rectangle_border.png", "start": 296520, "end": 297212}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_rectangle_depth_border.png", "start": 297212, "end": 298031}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_rectangle_depth_flat.png", "start": 298031, "end": 298816}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_rectangle_depth_gloss.png", "start": 298816, "end": 299564}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_rectangle_depth_gradient.png", "start": 299564, "end": 300644}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_rectangle_depth_line.png", "start": 300644, "end": 301461}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_rectangle_flat.png", "start": 301461, "end": 302122}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_rectangle_gloss.png", "start": 302122, "end": 302745}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_rectangle_gradient.png", "start": 302745, "end": 303714}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_rectangle_line.png", "start": 303714, "end": 304402}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_round_border.png", "start": 304402, "end": 307191}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_round_depth_border.png", "start": 307191, "end": 310550}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_round_depth_flat.png", "start": 310550, "end": 313026}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_round_depth_gloss.png", "start": 313026, "end": 315289}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_round_depth_gradient.png", "start": 315289, "end": 318098}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_round_depth_line.png", "start": 318098, "end": 321329}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_round_flat.png", "start": 321329, "end": 323192}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_round_gloss.png", "start": 323192, "end": 324927}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_round_gradient.png", "start": 324927, "end": 327245}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_round_line.png", "start": 327245, "end": 329914}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_square_border.png", "start": 329914, "end": 330458}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_square_depth_border.png", "start": 330458, "end": 331144}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_square_depth_flat.png", "start": 331144, "end": 331796}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_square_depth_gloss.png", "start": 331796, "end": 332426}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_square_depth_gradient.png", "start": 332426, "end": 333382}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_square_depth_line.png", "start": 333382, "end": 334066}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_square_flat.png", "start": 334066, "end": 334590}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_square_gloss.png", "start": 334590, "end": 335093}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_square_gradient.png", "start": 335093, "end": 335917}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/button_square_line.png", "start": 335917, "end": 336458}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_round_color.png", "start": 336458, "end": 337498}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_round_grey.png", "start": 337498, "end": 338539}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_round_grey_circle.png", "start": 338539, "end": 339926}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_round_round_circle.png", "start": 339926, "end": 341304}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_square_color.png", "start": 341304, "end": 341770}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_square_color_checkmark.png", "start": 341770, "end": 342720}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_square_color_cross.png", "start": 342720, "end": 343621}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_square_color_square.png", "start": 343621, "end": 344156}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_square_grey.png", "start": 344156, "end": 344622}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_square_grey_checkmark.png", "start": 344622, "end": 345580}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_square_grey_cross.png", "start": 345580, "end": 346489}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/check_square_grey_square.png", "start": 346489, "end": 347028}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/icon_checkmark.png", "start": 347028, "end": 347611}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/icon_circle.png", "start": 347611, "end": 348077}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/icon_cross.png", "start": 348077, "end": 348593}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/icon_outline_checkmark.png", "start": 348593, "end": 349178}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/icon_outline_circle.png", "start": 349178, "end": 349643}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/icon_outline_cross.png", "start": 349643, "end": 350159}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/icon_outline_square.png", "start": 350159, "end": 350342}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/icon_square.png", "start": 350342, "end": 350525}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_hangle.png", "start": 350525, "end": 350965}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_horizontal_color.png", "start": 350965, "end": 351579}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_horizontal_color_section.png", "start": 351579, "end": 352011}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_horizontal_color_section_wide.png", "start": 352011, "end": 352450}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_horizontal_grey.png", "start": 352450, "end": 353064}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_horizontal_grey_section.png", "start": 353064, "end": 353494}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_horizontal_grey_section_wide.png", "start": 353494, "end": 353933}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_vertical_color.png", "start": 353933, "end": 354544}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_vertical_color_section.png", "start": 354544, "end": 355005}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_vertical_color_section_wide.png", "start": 355005, "end": 355479}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_vertical_grey.png", "start": 355479, "end": 356090}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_vertical_grey_section.png", "start": 356090, "end": 356551}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/slide_vertical_grey_section_wide.png", "start": 356551, "end": 357024}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/star.png", "start": 357024, "end": 359885}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/star_outline.png", "start": 359885, "end": 361685}, {"filename": "/assets/kenney_ui-pack/PNG/Blue/Double/star_outline_depth.png", "start": 361685, "end": 363826}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/button_rectangle_depth_line.png", "start": 363826, "end": 364225}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/button_rectangle_line.png", "start": 364225, "end": 364552}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/button_round_depth_line.png", "start": 364552, "end": 366014}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/button_round_line.png", "start": 366014, "end": 367190}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/button_square_depth_line.png", "start": 367190, "end": 367552}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/button_square_line.png", "start": 367552, "end": 367844}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/divider.png", "start": 367844, "end": 367933}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/divider_edges.png", "start": 367933, "end": 368054}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_arrow_down_dark.png", "start": 368054, "end": 368291}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_arrow_down_light.png", "start": 368291, "end": 368542}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_arrow_down_outline.png", "start": 368542, "end": 368899}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_arrow_up_dark.png", "start": 368899, "end": 369142}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_arrow_up_light.png", "start": 369142, "end": 369418}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_arrow_up_outline.png", "start": 369418, "end": 369776}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_play_dark.png", "start": 369776, "end": 370099}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_play_light.png", "start": 370099, "end": 370422}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_play_outline.png", "start": 370422, "end": 370911}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_repeat_dark.png", "start": 370911, "end": 371346}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_repeat_light.png", "start": 371346, "end": 371781}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/icon_repeat_outline.png", "start": 371781, "end": 372475}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/input_outline_rectangle.png", "start": 372475, "end": 372819}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/input_outline_square.png", "start": 372819, "end": 373135}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/input_rectangle.png", "start": 373135, "end": 373490}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Default/input_square.png", "start": 373490, "end": 373809}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/button_rectangle_depth_line.png", "start": 373809, "end": 374600}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/button_rectangle_line.png", "start": 374600, "end": 375270}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/button_round_depth_line.png", "start": 375270, "end": 378063}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/button_round_line.png", "start": 378063, "end": 380271}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/button_square_depth_line.png", "start": 380271, "end": 380932}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/button_square_line.png", "start": 380932, "end": 381465}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/divider.png", "start": 381465, "end": 381573}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/divider_edges.png", "start": 381573, "end": 381736}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_arrow_down_dark.png", "start": 381736, "end": 382135}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_arrow_down_light.png", "start": 382135, "end": 382534}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_arrow_down_outline.png", "start": 382534, "end": 383126}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_arrow_up_dark.png", "start": 383126, "end": 383530}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_arrow_up_light.png", "start": 383530, "end": 383934}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_arrow_up_outline.png", "start": 383934, "end": 384495}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_play_dark.png", "start": 384495, "end": 384984}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_play_light.png", "start": 384984, "end": 385473}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_play_outline.png", "start": 385473, "end": 386305}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_repeat_dark.png", "start": 386305, "end": 387038}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_repeat_light.png", "start": 387038, "end": 387771}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/icon_repeat_outline.png", "start": 387771, "end": 389057}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/input_outline_rectangle.png", "start": 389057, "end": 389702}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/input_outline_square.png", "start": 389702, "end": 390230}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/input_rectangle.png", "start": 390230, "end": 390910}, {"filename": "/assets/kenney_ui-pack/PNG/Extra/Double/input_square.png", "start": 390910, "end": 391473}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_basic_e.png", "start": 391473, "end": 391895}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_basic_e_small.png", "start": 391895, "end": 392273}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_basic_n.png", "start": 392273, "end": 392664}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_basic_n_small.png", "start": 392664, "end": 392966}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_basic_s.png", "start": 392966, "end": 393380}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_basic_s_small.png", "start": 393380, "end": 393712}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_basic_w.png", "start": 393712, "end": 394114}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_basic_w_small.png", "start": 394114, "end": 394513}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_decorative_e.png", "start": 394513, "end": 395079}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_decorative_e_small.png", "start": 395079, "end": 395538}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_decorative_n.png", "start": 395538, "end": 396049}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_decorative_n_small.png", "start": 396049, "end": 396454}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_decorative_s.png", "start": 396454, "end": 396984}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_decorative_s_small.png", "start": 396984, "end": 397408}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_decorative_w.png", "start": 397408, "end": 397970}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/arrow_decorative_w_small.png", "start": 397970, "end": 398454}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_rectangle_border.png", "start": 398454, "end": 398792}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_rectangle_depth_border.png", "start": 398792, "end": 399203}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_rectangle_depth_flat.png", "start": 399203, "end": 399586}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_rectangle_depth_gloss.png", "start": 399586, "end": 399959}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_rectangle_depth_gradient.png", "start": 399959, "end": 400529}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_rectangle_depth_line.png", "start": 400529, "end": 400940}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_rectangle_flat.png", "start": 400940, "end": 401254}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_rectangle_gloss.png", "start": 401254, "end": 401560}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_rectangle_gradient.png", "start": 401560, "end": 402074}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_rectangle_line.png", "start": 402074, "end": 402412}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_round_border.png", "start": 402412, "end": 403899}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_round_depth_border.png", "start": 403899, "end": 405692}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_round_depth_flat.png", "start": 405692, "end": 406993}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_round_depth_gloss.png", "start": 406993, "end": 408202}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_round_depth_gradient.png", "start": 408202, "end": 409640}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_round_depth_line.png", "start": 409640, "end": 411330}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_round_flat.png", "start": 411330, "end": 412353}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_round_gloss.png", "start": 412353, "end": 413311}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_round_gradient.png", "start": 413311, "end": 414476}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_round_line.png", "start": 414476, "end": 415889}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_square_border.png", "start": 415889, "end": 416195}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_square_depth_border.png", "start": 416195, "end": 416570}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_square_depth_flat.png", "start": 416570, "end": 416925}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_square_depth_gloss.png", "start": 416925, "end": 417262}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_square_depth_gradient.png", "start": 417262, "end": 417806}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_square_depth_line.png", "start": 417806, "end": 418180}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_square_flat.png", "start": 418180, "end": 418466}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_square_gloss.png", "start": 418466, "end": 418734}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_square_gradient.png", "start": 418734, "end": 419222}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/button_square_line.png", "start": 419222, "end": 419526}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_round_color.png", "start": 419526, "end": 420105}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_round_grey.png", "start": 420105, "end": 420684}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_round_grey_circle.png", "start": 420684, "end": 421458}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_round_round_circle.png", "start": 421458, "end": 422230}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_square_color.png", "start": 422230, "end": 422510}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_square_color_checkmark.png", "start": 422510, "end": 423065}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_square_color_cross.png", "start": 423065, "end": 423598}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_square_color_square.png", "start": 423598, "end": 423917}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_square_grey.png", "start": 423917, "end": 424197}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_square_grey_checkmark.png", "start": 424197, "end": 424756}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_square_grey_cross.png", "start": 424756, "end": 425295}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/check_square_grey_square.png", "start": 425295, "end": 425616}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/icon_checkmark.png", "start": 425616, "end": 425993}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/icon_circle.png", "start": 425993, "end": 426305}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/icon_cross.png", "start": 426305, "end": 426655}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/icon_outline_checkmark.png", "start": 426655, "end": 427032}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/icon_outline_circle.png", "start": 427032, "end": 427344}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/icon_outline_cross.png", "start": 427344, "end": 427695}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/icon_outline_square.png", "start": 427695, "end": 427830}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/icon_square.png", "start": 427830, "end": 427967}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_hangle.png", "start": 427967, "end": 428262}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_horizontal_color.png", "start": 428262, "end": 428645}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_horizontal_color_section.png", "start": 428645, "end": 428966}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_horizontal_color_section_wide.png", "start": 428966, "end": 429302}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_horizontal_grey.png", "start": 429302, "end": 429685}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_horizontal_grey_section.png", "start": 429685, "end": 430006}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_horizontal_grey_section_wide.png", "start": 430006, "end": 430342}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_vertical_color.png", "start": 430342, "end": 430721}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_vertical_color_section.png", "start": 430721, "end": 431029}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_vertical_color_section_wide.png", "start": 431029, "end": 431345}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_vertical_grey.png", "start": 431345, "end": 431724}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_vertical_grey_section.png", "start": 431724, "end": 432032}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/slide_vertical_grey_section_wide.png", "start": 432032, "end": 432348}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/star.png", "start": 432348, "end": 433871}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/star_outline.png", "start": 433871, "end": 434826}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Default/star_outline_depth.png", "start": 434826, "end": 435994}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_basic_e.png", "start": 435994, "end": 436631}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_basic_e_small.png", "start": 436631, "end": 437154}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_basic_n.png", "start": 437154, "end": 437777}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_basic_n_small.png", "start": 437777, "end": 438249}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_basic_s.png", "start": 438249, "end": 438943}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_basic_s_small.png", "start": 438943, "end": 439476}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_basic_w.png", "start": 439476, "end": 440115}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_basic_w_small.png", "start": 440115, "end": 440665}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_decorative_e.png", "start": 440665, "end": 441525}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_decorative_e_small.png", "start": 441525, "end": 442222}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_decorative_n.png", "start": 442222, "end": 443102}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_decorative_n_small.png", "start": 443102, "end": 443751}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_decorative_s.png", "start": 443751, "end": 444702}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_decorative_s_small.png", "start": 444702, "end": 445386}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_decorative_w.png", "start": 445386, "end": 446287}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/arrow_decorative_w_small.png", "start": 446287, "end": 447008}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_rectangle_border.png", "start": 447008, "end": 447701}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_rectangle_depth_border.png", "start": 447701, "end": 448522}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_rectangle_depth_flat.png", "start": 448522, "end": 449307}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_rectangle_depth_gloss.png", "start": 449307, "end": 450055}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_rectangle_depth_gradient.png", "start": 450055, "end": 451111}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_rectangle_depth_line.png", "start": 451111, "end": 451928}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_rectangle_flat.png", "start": 451928, "end": 452588}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_rectangle_gloss.png", "start": 452588, "end": 453211}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_rectangle_gradient.png", "start": 453211, "end": 454170}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_rectangle_line.png", "start": 454170, "end": 454858}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_round_border.png", "start": 454858, "end": 457652}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_round_depth_border.png", "start": 457652, "end": 461019}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_round_depth_flat.png", "start": 461019, "end": 463495}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_round_depth_gloss.png", "start": 463495, "end": 465758}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_round_depth_gradient.png", "start": 465758, "end": 468419}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_round_depth_line.png", "start": 468419, "end": 471650}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_round_flat.png", "start": 471650, "end": 473513}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_round_gloss.png", "start": 473513, "end": 475248}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_round_gradient.png", "start": 475248, "end": 477397}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_round_line.png", "start": 477397, "end": 480066}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_square_border.png", "start": 480066, "end": 480610}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_square_depth_border.png", "start": 480610, "end": 481295}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_square_depth_flat.png", "start": 481295, "end": 481947}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_square_depth_gloss.png", "start": 481947, "end": 482577}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_square_depth_gradient.png", "start": 482577, "end": 483503}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_square_depth_line.png", "start": 483503, "end": 484187}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_square_flat.png", "start": 484187, "end": 484710}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_square_gloss.png", "start": 484710, "end": 485212}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_square_gradient.png", "start": 485212, "end": 486026}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/button_square_line.png", "start": 486026, "end": 486567}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_round_color.png", "start": 486567, "end": 487607}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_round_grey.png", "start": 487607, "end": 488648}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_round_grey_circle.png", "start": 488648, "end": 490034}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_round_round_circle.png", "start": 490034, "end": 491416}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_square_color.png", "start": 491416, "end": 491882}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_square_color_checkmark.png", "start": 491882, "end": 492837}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_square_color_cross.png", "start": 492837, "end": 493744}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_square_color_square.png", "start": 493744, "end": 494280}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_square_grey.png", "start": 494280, "end": 494746}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_square_grey_checkmark.png", "start": 494746, "end": 495704}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_square_grey_cross.png", "start": 495704, "end": 496612}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/check_square_grey_square.png", "start": 496612, "end": 497150}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/icon_checkmark.png", "start": 497150, "end": 497735}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/icon_circle.png", "start": 497735, "end": 498200}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/icon_cross.png", "start": 498200, "end": 498716}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/icon_outline_checkmark.png", "start": 498716, "end": 499301}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/icon_outline_circle.png", "start": 499301, "end": 499767}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/icon_outline_cross.png", "start": 499767, "end": 500283}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/icon_outline_square.png", "start": 500283, "end": 500466}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/icon_square.png", "start": 500466, "end": 500649}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_hangle.png", "start": 500649, "end": 501089}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_horizontal_color.png", "start": 501089, "end": 501703}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_horizontal_color_section.png", "start": 501703, "end": 502134}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_horizontal_color_section_wide.png", "start": 502134, "end": 502573}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_horizontal_grey.png", "start": 502573, "end": 503187}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_horizontal_grey_section.png", "start": 503187, "end": 503617}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_horizontal_grey_section_wide.png", "start": 503617, "end": 504056}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_vertical_color.png", "start": 504056, "end": 504667}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_vertical_color_section.png", "start": 504667, "end": 505128}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_vertical_color_section_wide.png", "start": 505128, "end": 505602}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_vertical_grey.png", "start": 505602, "end": 506213}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_vertical_grey_section.png", "start": 506213, "end": 506674}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/slide_vertical_grey_section_wide.png", "start": 506674, "end": 507147}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/star.png", "start": 507147, "end": 510002}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/star_outline.png", "start": 510002, "end": 511802}, {"filename": "/assets/kenney_ui-pack/PNG/Green/Double/star_outline_depth.png", "start": 511802, "end": 513943}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_basic_e.png", "start": 513943, "end": 514365}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_basic_e_small.png", "start": 514365, "end": 514743}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_basic_n.png", "start": 514743, "end": 515131}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_basic_n_small.png", "start": 515131, "end": 515433}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_basic_s.png", "start": 515433, "end": 515844}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_basic_s_small.png", "start": 515844, "end": 516176}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_basic_w.png", "start": 516176, "end": 516578}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_basic_w_small.png", "start": 516578, "end": 516977}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_decorative_e.png", "start": 516977, "end": 517540}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_decorative_e_small.png", "start": 517540, "end": 517995}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_decorative_n.png", "start": 517995, "end": 518506}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_decorative_n_small.png", "start": 518506, "end": 518908}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_decorative_s.png", "start": 518908, "end": 519438}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_decorative_s_small.png", "start": 519438, "end": 519862}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_decorative_w.png", "start": 519862, "end": 520421}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/arrow_decorative_w_small.png", "start": 520421, "end": 520900}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_rectangle_border.png", "start": 520900, "end": 521235}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_rectangle_depth_border.png", "start": 521235, "end": 521643}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_rectangle_depth_flat.png", "start": 521643, "end": 522026}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_rectangle_depth_gloss.png", "start": 522026, "end": 522399}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_rectangle_depth_gradient.png", "start": 522399, "end": 523022}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_rectangle_depth_line.png", "start": 523022, "end": 523431}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_rectangle_flat.png", "start": 523431, "end": 523746}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_rectangle_gloss.png", "start": 523746, "end": 524052}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_rectangle_gradient.png", "start": 524052, "end": 524626}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_rectangle_line.png", "start": 524626, "end": 524961}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_round_border.png", "start": 524961, "end": 526241}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_round_depth_border.png", "start": 526241, "end": 527821}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_round_depth_flat.png", "start": 527821, "end": 529116}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_round_depth_gloss.png", "start": 529116, "end": 530322}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_round_depth_gradient.png", "start": 530322, "end": 531838}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_round_depth_line.png", "start": 531838, "end": 533519}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_round_flat.png", "start": 533519, "end": 534537}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_round_gloss.png", "start": 534537, "end": 535490}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_round_gradient.png", "start": 535490, "end": 536719}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_round_line.png", "start": 536719, "end": 538120}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_square_border.png", "start": 538120, "end": 538422}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_square_depth_border.png", "start": 538422, "end": 538795}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_square_depth_flat.png", "start": 538795, "end": 539150}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_square_depth_gloss.png", "start": 539150, "end": 539487}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_square_depth_gradient.png", "start": 539487, "end": 540083}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_square_depth_line.png", "start": 540083, "end": 540455}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_square_flat.png", "start": 540455, "end": 540741}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_square_gloss.png", "start": 540741, "end": 541009}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_square_gradient.png", "start": 541009, "end": 541545}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/button_square_line.png", "start": 541545, "end": 541847}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_round_color.png", "start": 541847, "end": 542420}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_round_grey.png", "start": 542420, "end": 542999}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_round_grey_circle.png", "start": 542999, "end": 543770}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_round_round_circle.png", "start": 543770, "end": 544442}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_square_color.png", "start": 544442, "end": 544722}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_square_color_checkmark.png", "start": 544722, "end": 545240}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_square_color_cross.png", "start": 545240, "end": 545751}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_square_color_square.png", "start": 545751, "end": 546067}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_square_grey.png", "start": 546067, "end": 546347}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_square_grey_checkmark.png", "start": 546347, "end": 546903}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_square_grey_cross.png", "start": 546903, "end": 547436}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/check_square_grey_square.png", "start": 547436, "end": 547755}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/icon_checkmark.png", "start": 547755, "end": 548132}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/icon_circle.png", "start": 548132, "end": 548445}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/icon_cross.png", "start": 548445, "end": 548795}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/icon_outline_checkmark.png", "start": 548795, "end": 549172}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/icon_outline_circle.png", "start": 549172, "end": 549485}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/icon_outline_cross.png", "start": 549485, "end": 549835}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/icon_outline_square.png", "start": 549835, "end": 549970}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/icon_square.png", "start": 549970, "end": 550112}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_hangle.png", "start": 550112, "end": 550407}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_horizontal_color.png", "start": 550407, "end": 550790}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_horizontal_color_section.png", "start": 550790, "end": 551111}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_horizontal_color_section_wide.png", "start": 551111, "end": 551447}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_horizontal_grey.png", "start": 551447, "end": 551830}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_horizontal_grey_section.png", "start": 551830, "end": 552151}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_horizontal_grey_section_wide.png", "start": 552151, "end": 552487}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_vertical_color.png", "start": 552487, "end": 552866}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_vertical_color_section.png", "start": 552866, "end": 553174}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_vertical_color_section_wide.png", "start": 553174, "end": 553490}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_vertical_grey.png", "start": 553490, "end": 553869}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_vertical_grey_section.png", "start": 553869, "end": 554177}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/slide_vertical_grey_section_wide.png", "start": 554177, "end": 554493}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/star.png", "start": 554493, "end": 556059}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/star_outline.png", "start": 556059, "end": 557014}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Default/star_outline_depth.png", "start": 557014, "end": 558182}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_basic_e.png", "start": 558182, "end": 558819}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_basic_e_small.png", "start": 558819, "end": 559342}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_basic_n.png", "start": 559342, "end": 559964}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_basic_n_small.png", "start": 559964, "end": 560435}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_basic_s.png", "start": 560435, "end": 561129}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_basic_s_small.png", "start": 561129, "end": 561662}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_basic_w.png", "start": 561662, "end": 562297}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_basic_w_small.png", "start": 562297, "end": 562846}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_decorative_e.png", "start": 562846, "end": 563700}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_decorative_e_small.png", "start": 563700, "end": 564393}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_decorative_n.png", "start": 564393, "end": 565269}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_decorative_n_small.png", "start": 565269, "end": 565918}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_decorative_s.png", "start": 565918, "end": 566866}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_decorative_s_small.png", "start": 566866, "end": 567550}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_decorative_w.png", "start": 567550, "end": 568447}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/arrow_decorative_w_small.png", "start": 568447, "end": 569165}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_rectangle_border.png", "start": 569165, "end": 569856}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_rectangle_depth_border.png", "start": 569856, "end": 570674}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_rectangle_depth_flat.png", "start": 570674, "end": 571460}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_rectangle_depth_gloss.png", "start": 571460, "end": 572208}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_rectangle_depth_gradient.png", "start": 572208, "end": 573339}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_rectangle_depth_line.png", "start": 573339, "end": 574157}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_rectangle_flat.png", "start": 574157, "end": 574817}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_rectangle_gloss.png", "start": 574817, "end": 575442}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_rectangle_gradient.png", "start": 575442, "end": 576488}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_rectangle_line.png", "start": 576488, "end": 577178}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_round_border.png", "start": 577178, "end": 579666}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_round_depth_border.png", "start": 579666, "end": 582718}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_round_depth_flat.png", "start": 582718, "end": 585188}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_round_depth_gloss.png", "start": 585188, "end": 587446}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_round_depth_gradient.png", "start": 587446, "end": 590200}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_round_depth_line.png", "start": 590200, "end": 593424}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_round_flat.png", "start": 593424, "end": 595281}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_round_gloss.png", "start": 595281, "end": 597009}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_round_gradient.png", "start": 597009, "end": 599247}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_round_line.png", "start": 599247, "end": 601910}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_square_border.png", "start": 601910, "end": 602452}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_square_depth_border.png", "start": 602452, "end": 603131}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_square_depth_flat.png", "start": 603131, "end": 603783}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_square_depth_gloss.png", "start": 603783, "end": 604412}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_square_depth_gradient.png", "start": 604412, "end": 605429}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_square_depth_line.png", "start": 605429, "end": 606111}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_square_flat.png", "start": 606111, "end": 606635}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_square_gloss.png", "start": 606635, "end": 607138}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_square_gradient.png", "start": 607138, "end": 608059}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/button_square_line.png", "start": 608059, "end": 608599}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_round_color.png", "start": 608599, "end": 609633}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_round_grey.png", "start": 609633, "end": 610674}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_round_grey_circle.png", "start": 610674, "end": 612056}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_round_round_circle.png", "start": 612056, "end": 613269}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_square_color.png", "start": 613269, "end": 613735}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_square_color_checkmark.png", "start": 613735, "end": 614625}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_square_color_cross.png", "start": 614625, "end": 615466}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_square_color_square.png", "start": 615466, "end": 615998}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_square_grey.png", "start": 615998, "end": 616464}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_square_grey_checkmark.png", "start": 616464, "end": 617419}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_square_grey_cross.png", "start": 617419, "end": 618326}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/check_square_grey_square.png", "start": 618326, "end": 618862}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/icon_checkmark.png", "start": 618862, "end": 619447}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/icon_circle.png", "start": 619447, "end": 619913}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/icon_cross.png", "start": 619913, "end": 620429}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/icon_outline_checkmark.png", "start": 620429, "end": 621013}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/icon_outline_circle.png", "start": 621013, "end": 621479}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/icon_outline_cross.png", "start": 621479, "end": 621995}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/icon_outline_square.png", "start": 621995, "end": 622178}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/icon_square.png", "start": 622178, "end": 622361}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_hangle.png", "start": 622361, "end": 622802}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_horizontal_color.png", "start": 622802, "end": 623416}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_horizontal_color_section.png", "start": 623416, "end": 623846}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_horizontal_color_section_wide.png", "start": 623846, "end": 624285}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_horizontal_grey.png", "start": 624285, "end": 624899}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_horizontal_grey_section.png", "start": 624899, "end": 625329}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_horizontal_grey_section_wide.png", "start": 625329, "end": 625768}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_vertical_color.png", "start": 625768, "end": 626379}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_vertical_color_section.png", "start": 626379, "end": 626840}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_vertical_color_section_wide.png", "start": 626840, "end": 627314}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_vertical_grey.png", "start": 627314, "end": 627925}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_vertical_grey_section.png", "start": 627925, "end": 628386}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/slide_vertical_grey_section_wide.png", "start": 628386, "end": 628859}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/star.png", "start": 628859, "end": 631730}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/star_outline.png", "start": 631730, "end": 633530}, {"filename": "/assets/kenney_ui-pack/PNG/Grey/Double/star_outline_depth.png", "start": 633530, "end": 635671}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_basic_e.png", "start": 635671, "end": 636093}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_basic_e_small.png", "start": 636093, "end": 636471}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_basic_n.png", "start": 636471, "end": 636862}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_basic_n_small.png", "start": 636862, "end": 637164}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_basic_s.png", "start": 637164, "end": 637578}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_basic_s_small.png", "start": 637578, "end": 637910}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_basic_w.png", "start": 637910, "end": 638312}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_basic_w_small.png", "start": 638312, "end": 638711}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_decorative_e.png", "start": 638711, "end": 639277}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_decorative_e_small.png", "start": 639277, "end": 639736}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_decorative_n.png", "start": 639736, "end": 640247}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_decorative_n_small.png", "start": 640247, "end": 640652}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_decorative_s.png", "start": 640652, "end": 641182}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_decorative_s_small.png", "start": 641182, "end": 641606}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_decorative_w.png", "start": 641606, "end": 642168}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/arrow_decorative_w_small.png", "start": 642168, "end": 642652}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_rectangle_border.png", "start": 642652, "end": 642990}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_rectangle_depth_border.png", "start": 642990, "end": 643401}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_rectangle_depth_flat.png", "start": 643401, "end": 643785}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_rectangle_depth_gloss.png", "start": 643785, "end": 644158}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_rectangle_depth_gradient.png", "start": 644158, "end": 644800}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_rectangle_depth_line.png", "start": 644800, "end": 645211}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_rectangle_flat.png", "start": 645211, "end": 645526}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_rectangle_gloss.png", "start": 645526, "end": 645832}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_rectangle_gradient.png", "start": 645832, "end": 646422}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_rectangle_line.png", "start": 646422, "end": 646760}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_round_border.png", "start": 646760, "end": 648247}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_round_depth_border.png", "start": 648247, "end": 650040}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_round_depth_flat.png", "start": 650040, "end": 651341}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_round_depth_gloss.png", "start": 651341, "end": 652551}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_round_depth_gradient.png", "start": 652551, "end": 654122}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_round_depth_line.png", "start": 654122, "end": 655812}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_round_flat.png", "start": 655812, "end": 656835}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_round_gloss.png", "start": 656835, "end": 657793}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_round_gradient.png", "start": 657793, "end": 659061}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_round_line.png", "start": 659061, "end": 660474}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_square_border.png", "start": 660474, "end": 660780}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_square_depth_border.png", "start": 660780, "end": 661155}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_square_depth_flat.png", "start": 661155, "end": 661510}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_square_depth_gloss.png", "start": 661510, "end": 661847}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_square_depth_gradient.png", "start": 661847, "end": 662462}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_square_depth_line.png", "start": 662462, "end": 662836}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_square_flat.png", "start": 662836, "end": 663122}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_square_gloss.png", "start": 663122, "end": 663390}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_square_gradient.png", "start": 663390, "end": 663902}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/button_square_line.png", "start": 663902, "end": 664206}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_round_color.png", "start": 664206, "end": 664785}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_round_grey.png", "start": 664785, "end": 665364}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_round_grey_circle.png", "start": 665364, "end": 666138}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_round_round_circle.png", "start": 666138, "end": 666909}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_square_color.png", "start": 666909, "end": 667189}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_square_color_checkmark.png", "start": 667189, "end": 667745}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_square_color_cross.png", "start": 667745, "end": 668279}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_square_color_square.png", "start": 668279, "end": 668598}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_square_grey.png", "start": 668598, "end": 668878}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_square_grey_checkmark.png", "start": 668878, "end": 669437}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_square_grey_cross.png", "start": 669437, "end": 669976}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/check_square_grey_square.png", "start": 669976, "end": 670297}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/icon_checkmark.png", "start": 670297, "end": 670674}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/icon_circle.png", "start": 670674, "end": 670987}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/icon_cross.png", "start": 670987, "end": 671337}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/icon_outline_checkmark.png", "start": 671337, "end": 671714}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/icon_outline_circle.png", "start": 671714, "end": 672027}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/icon_outline_cross.png", "start": 672027, "end": 672379}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/icon_outline_square.png", "start": 672379, "end": 672511}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/icon_square.png", "start": 672511, "end": 672648}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_hangle.png", "start": 672648, "end": 672945}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_horizontal_color.png", "start": 672945, "end": 673328}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_horizontal_color_section.png", "start": 673328, "end": 673649}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_horizontal_color_section_wide.png", "start": 673649, "end": 673985}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_horizontal_grey.png", "start": 673985, "end": 674368}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_horizontal_grey_section.png", "start": 674368, "end": 674689}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_horizontal_grey_section_wide.png", "start": 674689, "end": 675025}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_vertical_color.png", "start": 675025, "end": 675404}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_vertical_color_section.png", "start": 675404, "end": 675712}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_vertical_color_section_wide.png", "start": 675712, "end": 676028}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_vertical_grey.png", "start": 676028, "end": 676407}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_vertical_grey_section.png", "start": 676407, "end": 676715}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/slide_vertical_grey_section_wide.png", "start": 676715, "end": 677031}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/star.png", "start": 677031, "end": 678586}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/star_outline.png", "start": 678586, "end": 679541}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Default/star_outline_depth.png", "start": 679541, "end": 680709}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_basic_e.png", "start": 680709, "end": 681346}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_basic_e_small.png", "start": 681346, "end": 681868}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_basic_n.png", "start": 681868, "end": 682490}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_basic_n_small.png", "start": 682490, "end": 682962}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_basic_s.png", "start": 682962, "end": 683656}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_basic_s_small.png", "start": 683656, "end": 684189}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_basic_w.png", "start": 684189, "end": 684828}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_basic_w_small.png", "start": 684828, "end": 685378}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_decorative_e.png", "start": 685378, "end": 686236}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_decorative_e_small.png", "start": 686236, "end": 686933}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_decorative_n.png", "start": 686933, "end": 687813}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_decorative_n_small.png", "start": 687813, "end": 688462}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_decorative_s.png", "start": 688462, "end": 689413}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_decorative_s_small.png", "start": 689413, "end": 690097}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_decorative_w.png", "start": 690097, "end": 690998}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/arrow_decorative_w_small.png", "start": 690998, "end": 691719}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_rectangle_border.png", "start": 691719, "end": 692412}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_rectangle_depth_border.png", "start": 692412, "end": 693233}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_rectangle_depth_flat.png", "start": 693233, "end": 694018}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_rectangle_depth_gloss.png", "start": 694018, "end": 694765}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_rectangle_depth_gradient.png", "start": 694765, "end": 695902}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_rectangle_depth_line.png", "start": 695902, "end": 696719}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_rectangle_flat.png", "start": 696719, "end": 697379}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_rectangle_gloss.png", "start": 697379, "end": 698002}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_rectangle_gradient.png", "start": 698002, "end": 699039}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_rectangle_line.png", "start": 699039, "end": 699727}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_round_border.png", "start": 699727, "end": 702521}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_round_depth_border.png", "start": 702521, "end": 705887}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_round_depth_flat.png", "start": 705887, "end": 708363}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_round_depth_gloss.png", "start": 708363, "end": 710627}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_round_depth_gradient.png", "start": 710627, "end": 713469}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_round_depth_line.png", "start": 713469, "end": 716700}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_round_flat.png", "start": 716700, "end": 718563}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_round_gloss.png", "start": 718563, "end": 720297}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_round_gradient.png", "start": 720297, "end": 722652}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_round_line.png", "start": 722652, "end": 725321}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_square_border.png", "start": 725321, "end": 725865}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_square_depth_border.png", "start": 725865, "end": 726550}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_square_depth_flat.png", "start": 726550, "end": 727202}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_square_depth_gloss.png", "start": 727202, "end": 727831}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_square_depth_gradient.png", "start": 727831, "end": 728852}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_square_depth_line.png", "start": 728852, "end": 729536}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_square_flat.png", "start": 729536, "end": 730059}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_square_gloss.png", "start": 730059, "end": 730561}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_square_gradient.png", "start": 730561, "end": 731475}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/button_square_line.png", "start": 731475, "end": 732017}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_round_color.png", "start": 732017, "end": 733058}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_round_grey.png", "start": 733058, "end": 734099}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_round_grey_circle.png", "start": 734099, "end": 735486}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_round_round_circle.png", "start": 735486, "end": 736869}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_square_color.png", "start": 736869, "end": 737335}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_square_color_checkmark.png", "start": 737335, "end": 738290}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_square_color_cross.png", "start": 738290, "end": 739198}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_square_color_square.png", "start": 739198, "end": 739733}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_square_grey.png", "start": 739733, "end": 740199}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_square_grey_checkmark.png", "start": 740199, "end": 741158}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_square_grey_cross.png", "start": 741158, "end": 742067}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/check_square_grey_square.png", "start": 742067, "end": 742605}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/icon_checkmark.png", "start": 742605, "end": 743189}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/icon_circle.png", "start": 743189, "end": 743655}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/icon_cross.png", "start": 743655, "end": 744171}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/icon_outline_checkmark.png", "start": 744171, "end": 744756}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/icon_outline_circle.png", "start": 744756, "end": 745222}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/icon_outline_cross.png", "start": 745222, "end": 745738}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/icon_outline_square.png", "start": 745738, "end": 745921}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/icon_square.png", "start": 745921, "end": 746104}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_hangle.png", "start": 746104, "end": 746544}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_horizontal_color.png", "start": 746544, "end": 747158}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_horizontal_color_section.png", "start": 747158, "end": 747590}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_horizontal_color_section_wide.png", "start": 747590, "end": 748029}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_horizontal_grey.png", "start": 748029, "end": 748643}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_horizontal_grey_section.png", "start": 748643, "end": 749073}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_horizontal_grey_section_wide.png", "start": 749073, "end": 749512}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_vertical_color.png", "start": 749512, "end": 750123}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_vertical_color_section.png", "start": 750123, "end": 750584}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_vertical_color_section_wide.png", "start": 750584, "end": 751057}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_vertical_grey.png", "start": 751057, "end": 751668}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_vertical_grey_section.png", "start": 751668, "end": 752129}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/slide_vertical_grey_section_wide.png", "start": 752129, "end": 752602}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/star.png", "start": 752602, "end": 755462}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/star_outline.png", "start": 755462, "end": 757262}, {"filename": "/assets/kenney_ui-pack/PNG/Red/Double/star_outline_depth.png", "start": 757262, "end": 759403}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_basic_e.png", "start": 759403, "end": 759825}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_basic_e_small.png", "start": 759825, "end": 760203}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_basic_n.png", "start": 760203, "end": 760594}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_basic_n_small.png", "start": 760594, "end": 760896}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_basic_s.png", "start": 760896, "end": 761310}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_basic_s_small.png", "start": 761310, "end": 761642}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_basic_w.png", "start": 761642, "end": 762044}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_basic_w_small.png", "start": 762044, "end": 762443}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_decorative_e.png", "start": 762443, "end": 763009}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_decorative_e_small.png", "start": 763009, "end": 763468}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_decorative_n.png", "start": 763468, "end": 763979}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_decorative_n_small.png", "start": 763979, "end": 764383}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_decorative_s.png", "start": 764383, "end": 764913}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_decorative_s_small.png", "start": 764913, "end": 765337}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_decorative_w.png", "start": 765337, "end": 765899}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/arrow_decorative_w_small.png", "start": 765899, "end": 766382}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_rectangle_border.png", "start": 766382, "end": 766720}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_rectangle_depth_border.png", "start": 766720, "end": 767132}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_rectangle_depth_flat.png", "start": 767132, "end": 767515}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_rectangle_depth_gloss.png", "start": 767515, "end": 767888}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_rectangle_depth_gradient.png", "start": 767888, "end": 768530}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_rectangle_depth_line.png", "start": 768530, "end": 768941}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_rectangle_flat.png", "start": 768941, "end": 769256}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_rectangle_gloss.png", "start": 769256, "end": 769562}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_rectangle_gradient.png", "start": 769562, "end": 770152}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_rectangle_line.png", "start": 770152, "end": 770490}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_round_border.png", "start": 770490, "end": 771978}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_round_depth_border.png", "start": 771978, "end": 773769}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_round_depth_flat.png", "start": 773769, "end": 775069}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_round_depth_gloss.png", "start": 775069, "end": 776278}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_round_depth_gradient.png", "start": 776278, "end": 777924}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_round_depth_line.png", "start": 777924, "end": 779614}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_round_flat.png", "start": 779614, "end": 780637}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_round_gloss.png", "start": 780637, "end": 781595}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_round_gradient.png", "start": 781595, "end": 782949}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_round_line.png", "start": 782949, "end": 784362}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_square_border.png", "start": 784362, "end": 784668}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_square_depth_border.png", "start": 784668, "end": 785043}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_square_depth_flat.png", "start": 785043, "end": 785398}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_square_depth_gloss.png", "start": 785398, "end": 785735}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_square_depth_gradient.png", "start": 785735, "end": 786350}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_square_depth_line.png", "start": 786350, "end": 786724}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_square_flat.png", "start": 786724, "end": 787010}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_square_gloss.png", "start": 787010, "end": 787278}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_square_gradient.png", "start": 787278, "end": 787810}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/button_square_line.png", "start": 787810, "end": 788114}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_round_color.png", "start": 788114, "end": 788693}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_round_grey.png", "start": 788693, "end": 789272}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_round_grey_circle.png", "start": 789272, "end": 790046}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_round_round_circle.png", "start": 790046, "end": 790789}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_square_color.png", "start": 790789, "end": 791069}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_square_color_checkmark.png", "start": 791069, "end": 791567}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_square_color_cross.png", "start": 791567, "end": 792068}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_square_color_square.png", "start": 792068, "end": 792386}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_square_grey.png", "start": 792386, "end": 792666}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_square_grey_checkmark.png", "start": 792666, "end": 793225}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_square_grey_cross.png", "start": 793225, "end": 793764}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/check_square_grey_square.png", "start": 793764, "end": 794085}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/icon_checkmark.png", "start": 794085, "end": 794462}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/icon_circle.png", "start": 794462, "end": 794775}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/icon_cross.png", "start": 794775, "end": 795125}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/icon_outline_checkmark.png", "start": 795125, "end": 795502}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/icon_outline_circle.png", "start": 795502, "end": 795814}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/icon_outline_cross.png", "start": 795814, "end": 796165}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/icon_outline_square.png", "start": 796165, "end": 796293}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/icon_square.png", "start": 796293, "end": 796423}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_hangle.png", "start": 796423, "end": 796720}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_horizontal_color.png", "start": 796720, "end": 797102}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_horizontal_color_section.png", "start": 797102, "end": 797423}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_horizontal_color_section_wide.png", "start": 797423, "end": 797759}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_horizontal_grey.png", "start": 797759, "end": 798142}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_horizontal_grey_section.png", "start": 798142, "end": 798463}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_horizontal_grey_section_wide.png", "start": 798463, "end": 798799}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_vertical_color.png", "start": 798799, "end": 799178}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_vertical_color_section.png", "start": 799178, "end": 799486}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_vertical_color_section_wide.png", "start": 799486, "end": 799802}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_vertical_grey.png", "start": 799802, "end": 800181}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_vertical_grey_section.png", "start": 800181, "end": 800489}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/slide_vertical_grey_section_wide.png", "start": 800489, "end": 800805}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/star.png", "start": 800805, "end": 802398}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/star_outline.png", "start": 802398, "end": 803353}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Default/star_outline_depth.png", "start": 803353, "end": 804521}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_basic_e.png", "start": 804521, "end": 805159}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_basic_e_small.png", "start": 805159, "end": 805682}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_basic_n.png", "start": 805682, "end": 806304}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_basic_n_small.png", "start": 806304, "end": 806776}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_basic_s.png", "start": 806776, "end": 807470}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_basic_s_small.png", "start": 807470, "end": 808003}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_basic_w.png", "start": 808003, "end": 808642}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_basic_w_small.png", "start": 808642, "end": 809192}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_decorative_e.png", "start": 809192, "end": 810052}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_decorative_e_small.png", "start": 810052, "end": 810749}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_decorative_n.png", "start": 810749, "end": 811629}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_decorative_n_small.png", "start": 811629, "end": 812278}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_decorative_s.png", "start": 812278, "end": 813229}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_decorative_s_small.png", "start": 813229, "end": 813913}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_decorative_w.png", "start": 813913, "end": 814814}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/arrow_decorative_w_small.png", "start": 814814, "end": 815535}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_rectangle_border.png", "start": 815535, "end": 816228}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_rectangle_depth_border.png", "start": 816228, "end": 817048}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_rectangle_depth_flat.png", "start": 817048, "end": 817832}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_rectangle_depth_gloss.png", "start": 817832, "end": 818580}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_rectangle_depth_gradient.png", "start": 818580, "end": 819880}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_rectangle_depth_line.png", "start": 819880, "end": 820697}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_rectangle_flat.png", "start": 820697, "end": 821357}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_rectangle_gloss.png", "start": 821357, "end": 821980}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_rectangle_gradient.png", "start": 821980, "end": 823201}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_rectangle_line.png", "start": 823201, "end": 823890}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_round_border.png", "start": 823890, "end": 826684}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_round_depth_border.png", "start": 826684, "end": 830050}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_round_depth_flat.png", "start": 830050, "end": 832526}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_round_depth_gloss.png", "start": 832526, "end": 834789}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_round_depth_gradient.png", "start": 834789, "end": 837833}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_round_depth_line.png", "start": 837833, "end": 841064}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_round_flat.png", "start": 841064, "end": 842927}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_round_gloss.png", "start": 842927, "end": 844661}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_round_gradient.png", "start": 844661, "end": 847212}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_round_line.png", "start": 847212, "end": 849881}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_square_border.png", "start": 849881, "end": 850425}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_square_depth_border.png", "start": 850425, "end": 851110}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_square_depth_flat.png", "start": 851110, "end": 851762}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_square_depth_gloss.png", "start": 851762, "end": 852392}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_square_depth_gradient.png", "start": 852392, "end": 853588}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_square_depth_line.png", "start": 853588, "end": 854271}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_square_flat.png", "start": 854271, "end": 854794}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_square_gloss.png", "start": 854794, "end": 855296}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_square_gradient.png", "start": 855296, "end": 856407}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/button_square_line.png", "start": 856407, "end": 856949}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_round_color.png", "start": 856949, "end": 857989}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_round_grey.png", "start": 857989, "end": 859030}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_round_grey_circle.png", "start": 859030, "end": 860417}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_round_round_circle.png", "start": 860417, "end": 861733}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_square_color.png", "start": 861733, "end": 862198}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_square_color_checkmark.png", "start": 862198, "end": 863069}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_square_color_cross.png", "start": 863069, "end": 863918}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_square_color_square.png", "start": 863918, "end": 864453}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_square_grey.png", "start": 864453, "end": 864919}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_square_grey_checkmark.png", "start": 864919, "end": 865877}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_square_grey_cross.png", "start": 865877, "end": 866785}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/check_square_grey_square.png", "start": 866785, "end": 867324}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/icon_checkmark.png", "start": 867324, "end": 867909}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/icon_circle.png", "start": 867909, "end": 868375}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/icon_cross.png", "start": 868375, "end": 868891}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/icon_outline_checkmark.png", "start": 868891, "end": 869474}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/icon_outline_circle.png", "start": 869474, "end": 869940}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/icon_outline_cross.png", "start": 869940, "end": 870456}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/icon_outline_square.png", "start": 870456, "end": 870639}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/icon_square.png", "start": 870639, "end": 870822}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_hangle.png", "start": 870822, "end": 871262}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_horizontal_color.png", "start": 871262, "end": 871876}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_horizontal_color_section.png", "start": 871876, "end": 872308}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_horizontal_color_section_wide.png", "start": 872308, "end": 872747}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_horizontal_grey.png", "start": 872747, "end": 873361}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_horizontal_grey_section.png", "start": 873361, "end": 873791}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_horizontal_grey_section_wide.png", "start": 873791, "end": 874230}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_vertical_color.png", "start": 874230, "end": 874841}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_vertical_color_section.png", "start": 874841, "end": 875301}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_vertical_color_section_wide.png", "start": 875301, "end": 875775}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_vertical_grey.png", "start": 875775, "end": 876386}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_vertical_grey_section.png", "start": 876386, "end": 876847}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/slide_vertical_grey_section_wide.png", "start": 876847, "end": 877320}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/star.png", "start": 877320, "end": 880220}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/star_outline.png", "start": 880220, "end": 882020}, {"filename": "/assets/kenney_ui-pack/PNG/Yellow/Double/star_outline_depth.png", "start": 882020, "end": 884161}, {"filename": "/assets/kenney_ui-pack/Preview.png", "start": 884161, "end": 913069}, {"filename": "/assets/kenney_ui-pack/Sample.png", "start": 913069, "end": 943698}, {"filename": "/assets/kenney_ui-pack/Sounds/click-a.ogg", "start": 943698, "end": 954643, "audio": 1}, {"filename": "/assets/kenney_ui-pack/Sounds/click-b.ogg", "start": 954643, "end": 960800, "audio": 1}, {"filename": "/assets/kenney_ui-pack/Sounds/switch-a.ogg", "start": 960800, "end": 970233, "audio": 1}, {"filename": "/assets/kenney_ui-pack/Sounds/switch-b.ogg", "start": 970233, "end": 980371, "audio": 1}, {"filename": "/assets/kenney_ui-pack/Sounds/tap-a.ogg", "start": 980371, "end": 987414, "audio": 1}, {"filename": "/assets/kenney_ui-pack/Sounds/tap-b.ogg", "start": 987414, "end": 993533, "audio": 1}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_basic_e.svg", "start": 993533, "end": 994888}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_basic_e_small.svg", "start": 994888, "end": 995917}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_basic_n.svg", "start": 995917, "end": 997375}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_basic_n_small.svg", "start": 997375, "end": 998459}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_basic_s.svg", "start": 998459, "end": 999891}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_basic_s_small.svg", "start": 999891, "end": 1000960}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_basic_w.svg", "start": 1000960, "end": 1002361}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_basic_w_small.svg", "start": 1002361, "end": 1003373}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_decorative_e.svg", "start": 1003373, "end": 1005853}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_decorative_e_small.svg", "start": 1005853, "end": 1007388}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_decorative_n.svg", "start": 1007388, "end": 1009986}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_decorative_n_small.svg", "start": 1009986, "end": 1011690}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_decorative_s.svg", "start": 1011690, "end": 1014162}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_decorative_s_small.svg", "start": 1014162, "end": 1015749}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_decorative_w.svg", "start": 1015749, "end": 1018306}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/arrow_decorative_w_small.svg", "start": 1018306, "end": 1019910}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_rectangle_border.svg", "start": 1019910, "end": 1021010}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_rectangle_depth_border.svg", "start": 1021010, "end": 1023336}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_rectangle_depth_flat.svg", "start": 1023336, "end": 1024338}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_rectangle_depth_gloss.svg", "start": 1024338, "end": 1025224}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_rectangle_depth_gradient.svg", "start": 1025224, "end": 1026536}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_rectangle_depth_line.svg", "start": 1026536, "end": 1028817}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_rectangle_flat.svg", "start": 1028817, "end": 1029671}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_rectangle_gloss.svg", "start": 1029671, "end": 1030409}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_rectangle_gradient.svg", "start": 1030409, "end": 1031575}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_rectangle_line.svg", "start": 1031575, "end": 1032630}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_round_border.svg", "start": 1032630, "end": 1034931}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_round_depth_border.svg", "start": 1034931, "end": 1038009}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_round_depth_flat.svg", "start": 1038009, "end": 1039781}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_round_depth_gloss.svg", "start": 1039781, "end": 1041198}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_round_depth_gradient.svg", "start": 1041198, "end": 1043258}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_round_depth_line.svg", "start": 1043258, "end": 1046293}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_round_flat.svg", "start": 1046293, "end": 1047302}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_round_gloss.svg", "start": 1047302, "end": 1048177}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_round_gradient.svg", "start": 1048177, "end": 1049651}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_round_line.svg", "start": 1049651, "end": 1051431}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_square_border.svg", "start": 1051431, "end": 1052505}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_square_depth_border.svg", "start": 1052505, "end": 1054716}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_square_depth_flat.svg", "start": 1054716, "end": 1056589}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_square_depth_gloss.svg", "start": 1056589, "end": 1057426}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_square_depth_gradient.svg", "start": 1057426, "end": 1058724}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_square_depth_line.svg", "start": 1058724, "end": 1060890}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_square_flat.svg", "start": 1060890, "end": 1062097}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_square_gloss.svg", "start": 1062097, "end": 1063338}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_square_gradient.svg", "start": 1063338, "end": 1065325}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/button_square_line.svg", "start": 1065325, "end": 1066354}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_round_color.svg", "start": 1066354, "end": 1067339}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_round_grey.svg", "start": 1067339, "end": 1068324}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_round_grey_circle.svg", "start": 1068324, "end": 1069983}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_round_round_circle.svg", "start": 1069983, "end": 1071644}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_square_color.svg", "start": 1071644, "end": 1072286}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_square_color_checkmark.svg", "start": 1072286, "end": 1073896}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_square_color_cross.svg", "start": 1073896, "end": 1075874}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_square_color_square.svg", "start": 1075874, "end": 1076749}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_square_grey.svg", "start": 1076749, "end": 1077391}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_square_grey_checkmark.svg", "start": 1077391, "end": 1079001}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_square_grey_cross.svg", "start": 1079001, "end": 1080979}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/check_square_grey_square.svg", "start": 1080979, "end": 1081854}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/icon_checkmark.svg", "start": 1081854, "end": 1082850}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/icon_circle.svg", "start": 1082850, "end": 1083590}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/icon_cross.svg", "start": 1083590, "end": 1084993}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/icon_outline_checkmark.svg", "start": 1084993, "end": 1085989}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/icon_outline_circle.svg", "start": 1085989, "end": 1086737}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/icon_outline_cross.svg", "start": 1086737, "end": 1088140}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/icon_outline_square.svg", "start": 1088140, "end": 1088492}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/icon_square.svg", "start": 1088492, "end": 1088844}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_hangle.svg", "start": 1088844, "end": 1090046}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_horizontal_color.svg", "start": 1090046, "end": 1091140}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_horizontal_color_section.svg", "start": 1091140, "end": 1092064}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_horizontal_color_section_wide.svg", "start": 1092064, "end": 1092982}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_horizontal_grey.svg", "start": 1092982, "end": 1094076}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_horizontal_grey_section.svg", "start": 1094076, "end": 1095000}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_horizontal_grey_section_wide.svg", "start": 1095000, "end": 1095918}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_vertical_color.svg", "start": 1095918, "end": 1096999}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_vertical_color_section.svg", "start": 1096999, "end": 1097911}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_vertical_color_section_wide.svg", "start": 1097911, "end": 1098821}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_vertical_grey.svg", "start": 1098821, "end": 1099902}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_vertical_grey_section.svg", "start": 1099902, "end": 1100813}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/slide_vertical_grey_section_wide.svg", "start": 1100813, "end": 1101723}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/star.svg", "start": 1101723, "end": 1104188}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/star_outline.svg", "start": 1104188, "end": 1106905}, {"filename": "/assets/kenney_ui-pack/Vector/Blue/star_outline_depth.svg", "start": 1106905, "end": 1108227}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/button_rectangle_depth_line.svg", "start": 1108227, "end": 1110117}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/button_rectangle_line.svg", "start": 1110117, "end": 1111055}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/button_round_depth_line.svg", "start": 1111055, "end": 1113369}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/button_round_line.svg", "start": 1113369, "end": 1114700}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/button_square_depth_line.svg", "start": 1114700, "end": 1116495}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/button_square_line.svg", "start": 1116495, "end": 1117393}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/divider.svg", "start": 1117393, "end": 1117668}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/divider_edges.svg", "start": 1117668, "end": 1117941}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_arrow_down_dark.svg", "start": 1117941, "end": 1118296}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_arrow_down_light.svg", "start": 1118296, "end": 1118651}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_arrow_down_outline.svg", "start": 1118651, "end": 1119488}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_arrow_up_dark.svg", "start": 1119488, "end": 1119864}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_arrow_up_light.svg", "start": 1119864, "end": 1120240}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_arrow_up_outline.svg", "start": 1120240, "end": 1121167}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_play_dark.svg", "start": 1121167, "end": 1121587}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_play_light.svg", "start": 1121587, "end": 1122007}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_play_outline.svg", "start": 1122007, "end": 1123010}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_repeat_dark.svg", "start": 1123010, "end": 1123826}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_repeat_light.svg", "start": 1123826, "end": 1124642}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/icon_repeat_outline.svg", "start": 1124642, "end": 1126938}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/input_outline_rectangle.svg", "start": 1126938, "end": 1127711}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/input_outline_square.svg", "start": 1127711, "end": 1128474}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/input_rectangle.svg", "start": 1128474, "end": 1129299}, {"filename": "/assets/kenney_ui-pack/Vector/Extra/input_square.svg", "start": 1129299, "end": 1130085}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_basic_e.svg", "start": 1130085, "end": 1131440}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_basic_e_small.svg", "start": 1131440, "end": 1132469}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_basic_n.svg", "start": 1132469, "end": 1133927}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_basic_n_small.svg", "start": 1133927, "end": 1135011}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_basic_s.svg", "start": 1135011, "end": 1136443}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_basic_s_small.svg", "start": 1136443, "end": 1137512}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_basic_w.svg", "start": 1137512, "end": 1138913}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_basic_w_small.svg", "start": 1138913, "end": 1139925}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_decorative_e.svg", "start": 1139925, "end": 1142405}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_decorative_e_small.svg", "start": 1142405, "end": 1143940}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_decorative_n.svg", "start": 1143940, "end": 1146538}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_decorative_n_small.svg", "start": 1146538, "end": 1148242}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_decorative_s.svg", "start": 1148242, "end": 1150714}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_decorative_s_small.svg", "start": 1150714, "end": 1152301}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_decorative_w.svg", "start": 1152301, "end": 1154858}, {"filename": "/assets/kenney_ui-pack/Vector/Green/arrow_decorative_w_small.svg", "start": 1154858, "end": 1156462}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_rectangle_border.svg", "start": 1156462, "end": 1157562}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_rectangle_depth_border.svg", "start": 1157562, "end": 1159888}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_rectangle_depth_flat.svg", "start": 1159888, "end": 1160890}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_rectangle_depth_gloss.svg", "start": 1160890, "end": 1161776}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_rectangle_depth_gradient.svg", "start": 1161776, "end": 1163093}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_rectangle_depth_line.svg", "start": 1163093, "end": 1165374}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_rectangle_flat.svg", "start": 1165374, "end": 1166228}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_rectangle_gloss.svg", "start": 1166228, "end": 1166966}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_rectangle_gradient.svg", "start": 1166966, "end": 1168133}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_rectangle_line.svg", "start": 1168133, "end": 1169188}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_round_border.svg", "start": 1169188, "end": 1171489}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_round_depth_border.svg", "start": 1171489, "end": 1174567}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_round_depth_flat.svg", "start": 1174567, "end": 1176339}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_round_depth_gloss.svg", "start": 1176339, "end": 1177756}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_round_depth_gradient.svg", "start": 1177756, "end": 1179819}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_round_depth_line.svg", "start": 1179819, "end": 1182854}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_round_flat.svg", "start": 1182854, "end": 1183863}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_round_gloss.svg", "start": 1183863, "end": 1184738}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_round_gradient.svg", "start": 1184738, "end": 1186214}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_round_line.svg", "start": 1186214, "end": 1187994}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_square_border.svg", "start": 1187994, "end": 1189068}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_square_depth_border.svg", "start": 1189068, "end": 1191279}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_square_depth_flat.svg", "start": 1191279, "end": 1193151}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_square_depth_gloss.svg", "start": 1193151, "end": 1193988}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_square_depth_gradient.svg", "start": 1193988, "end": 1195288}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_square_depth_line.svg", "start": 1195288, "end": 1197454}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_square_flat.svg", "start": 1197454, "end": 1198661}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_square_gloss.svg", "start": 1198661, "end": 1199902}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_square_gradient.svg", "start": 1199902, "end": 1201893}, {"filename": "/assets/kenney_ui-pack/Vector/Green/button_square_line.svg", "start": 1201893, "end": 1202922}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_round_color.svg", "start": 1202922, "end": 1203907}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_round_grey.svg", "start": 1203907, "end": 1204892}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_round_grey_circle.svg", "start": 1204892, "end": 1206551}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_round_round_circle.svg", "start": 1206551, "end": 1208212}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_square_color.svg", "start": 1208212, "end": 1208854}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_square_color_checkmark.svg", "start": 1208854, "end": 1210464}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_square_color_cross.svg", "start": 1210464, "end": 1212442}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_square_color_square.svg", "start": 1212442, "end": 1213317}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_square_grey.svg", "start": 1213317, "end": 1213959}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_square_grey_checkmark.svg", "start": 1213959, "end": 1215569}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_square_grey_cross.svg", "start": 1215569, "end": 1217547}, {"filename": "/assets/kenney_ui-pack/Vector/Green/check_square_grey_square.svg", "start": 1217547, "end": 1218422}, {"filename": "/assets/kenney_ui-pack/Vector/Green/icon_checkmark.svg", "start": 1218422, "end": 1219418}, {"filename": "/assets/kenney_ui-pack/Vector/Green/icon_circle.svg", "start": 1219418, "end": 1220158}, {"filename": "/assets/kenney_ui-pack/Vector/Green/icon_cross.svg", "start": 1220158, "end": 1221561}, {"filename": "/assets/kenney_ui-pack/Vector/Green/icon_outline_checkmark.svg", "start": 1221561, "end": 1222557}, {"filename": "/assets/kenney_ui-pack/Vector/Green/icon_outline_circle.svg", "start": 1222557, "end": 1223305}, {"filename": "/assets/kenney_ui-pack/Vector/Green/icon_outline_cross.svg", "start": 1223305, "end": 1224708}, {"filename": "/assets/kenney_ui-pack/Vector/Green/icon_outline_square.svg", "start": 1224708, "end": 1225060}, {"filename": "/assets/kenney_ui-pack/Vector/Green/icon_square.svg", "start": 1225060, "end": 1225412}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_hangle.svg", "start": 1225412, "end": 1226614}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_horizontal_color.svg", "start": 1226614, "end": 1227708}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_horizontal_color_section.svg", "start": 1227708, "end": 1228632}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_horizontal_color_section_wide.svg", "start": 1228632, "end": 1229550}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_horizontal_grey.svg", "start": 1229550, "end": 1230644}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_horizontal_grey_section.svg", "start": 1230644, "end": 1231568}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_horizontal_grey_section_wide.svg", "start": 1231568, "end": 1232486}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_vertical_color.svg", "start": 1232486, "end": 1233567}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_vertical_color_section.svg", "start": 1233567, "end": 1234478}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_vertical_color_section_wide.svg", "start": 1234478, "end": 1235387}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_vertical_grey.svg", "start": 1235387, "end": 1236468}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_vertical_grey_section.svg", "start": 1236468, "end": 1237380}, {"filename": "/assets/kenney_ui-pack/Vector/Green/slide_vertical_grey_section_wide.svg", "start": 1237380, "end": 1238289}, {"filename": "/assets/kenney_ui-pack/Vector/Green/star.svg", "start": 1238289, "end": 1240754}, {"filename": "/assets/kenney_ui-pack/Vector/Green/star_outline.svg", "start": 1240754, "end": 1243471}, {"filename": "/assets/kenney_ui-pack/Vector/Green/star_outline_depth.svg", "start": 1243471, "end": 1244793}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_basic_e.svg", "start": 1244793, "end": 1246148}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_basic_e_small.svg", "start": 1246148, "end": 1247177}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_basic_n.svg", "start": 1247177, "end": 1248635}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_basic_n_small.svg", "start": 1248635, "end": 1249719}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_basic_s.svg", "start": 1249719, "end": 1251151}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_basic_s_small.svg", "start": 1251151, "end": 1252220}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_basic_w.svg", "start": 1252220, "end": 1253621}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_basic_w_small.svg", "start": 1253621, "end": 1254633}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_decorative_e.svg", "start": 1254633, "end": 1257113}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_decorative_e_small.svg", "start": 1257113, "end": 1258648}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_decorative_n.svg", "start": 1258648, "end": 1261246}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_decorative_n_small.svg", "start": 1261246, "end": 1262950}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_decorative_s.svg", "start": 1262950, "end": 1265422}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_decorative_s_small.svg", "start": 1265422, "end": 1267009}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_decorative_w.svg", "start": 1267009, "end": 1269566}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/arrow_decorative_w_small.svg", "start": 1269566, "end": 1271170}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_rectangle_border.svg", "start": 1271170, "end": 1272180}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_rectangle_depth_border.svg", "start": 1272180, "end": 1274416}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_rectangle_depth_flat.svg", "start": 1274416, "end": 1275418}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_rectangle_depth_gloss.svg", "start": 1275418, "end": 1276304}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_rectangle_depth_gradient.svg", "start": 1276304, "end": 1277620}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_rectangle_depth_line.svg", "start": 1277620, "end": 1279856}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_rectangle_flat.svg", "start": 1279856, "end": 1280710}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_rectangle_gloss.svg", "start": 1280710, "end": 1281448}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_rectangle_gradient.svg", "start": 1281448, "end": 1282616}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_rectangle_line.svg", "start": 1282616, "end": 1283626}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_round_border.svg", "start": 1283626, "end": 1285837}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_round_depth_border.svg", "start": 1285837, "end": 1288828}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_round_depth_flat.svg", "start": 1288828, "end": 1290600}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_round_depth_gloss.svg", "start": 1290600, "end": 1292017}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_round_depth_gradient.svg", "start": 1292017, "end": 1294080}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_round_depth_line.svg", "start": 1294080, "end": 1297068}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_round_flat.svg", "start": 1297068, "end": 1298077}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_round_gloss.svg", "start": 1298077, "end": 1298952}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_round_gradient.svg", "start": 1298952, "end": 1300428}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_round_line.svg", "start": 1300428, "end": 1302173}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_square_border.svg", "start": 1302173, "end": 1303157}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_square_depth_border.svg", "start": 1303157, "end": 1305278}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_square_depth_flat.svg", "start": 1305278, "end": 1307150}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_square_depth_gloss.svg", "start": 1307150, "end": 1307987}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_square_depth_gradient.svg", "start": 1307987, "end": 1309289}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_square_depth_line.svg", "start": 1309289, "end": 1311410}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_square_flat.svg", "start": 1311410, "end": 1312617}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_square_gloss.svg", "start": 1312617, "end": 1313858}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_square_gradient.svg", "start": 1313858, "end": 1315850}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/button_square_line.svg", "start": 1315850, "end": 1316834}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_round_color.svg", "start": 1316834, "end": 1317819}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_round_grey.svg", "start": 1317819, "end": 1318804}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_round_grey_circle.svg", "start": 1318804, "end": 1320463}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_round_round_circle.svg", "start": 1320463, "end": 1322124}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_square_color.svg", "start": 1322124, "end": 1322766}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_square_color_checkmark.svg", "start": 1322766, "end": 1324376}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_square_color_cross.svg", "start": 1324376, "end": 1326354}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_square_color_square.svg", "start": 1326354, "end": 1327229}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_square_grey.svg", "start": 1327229, "end": 1327871}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_square_grey_checkmark.svg", "start": 1327871, "end": 1329481}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_square_grey_cross.svg", "start": 1329481, "end": 1331459}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/check_square_grey_square.svg", "start": 1331459, "end": 1332334}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/icon_checkmark.svg", "start": 1332334, "end": 1333330}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/icon_circle.svg", "start": 1333330, "end": 1334070}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/icon_cross.svg", "start": 1334070, "end": 1335473}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/icon_outline_checkmark.svg", "start": 1335473, "end": 1336469}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/icon_outline_circle.svg", "start": 1336469, "end": 1337217}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/icon_outline_cross.svg", "start": 1337217, "end": 1338620}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/icon_outline_square.svg", "start": 1338620, "end": 1338972}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/icon_square.svg", "start": 1338972, "end": 1339324}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_hangle.svg", "start": 1339324, "end": 1340526}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_horizontal_color.svg", "start": 1340526, "end": 1341620}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_horizontal_color_section.svg", "start": 1341620, "end": 1342544}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_horizontal_color_section_wide.svg", "start": 1342544, "end": 1343463}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_horizontal_grey.svg", "start": 1343463, "end": 1344557}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_horizontal_grey_section.svg", "start": 1344557, "end": 1345481}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_horizontal_grey_section_wide.svg", "start": 1345481, "end": 1346399}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_vertical_color.svg", "start": 1346399, "end": 1347480}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_vertical_color_section.svg", "start": 1347480, "end": 1348392}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_vertical_color_section_wide.svg", "start": 1348392, "end": 1349302}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_vertical_grey.svg", "start": 1349302, "end": 1350383}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_vertical_grey_section.svg", "start": 1350383, "end": 1351295}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/slide_vertical_grey_section_wide.svg", "start": 1351295, "end": 1352204}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/star.svg", "start": 1352204, "end": 1354669}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/star_outline.svg", "start": 1354669, "end": 1357386}, {"filename": "/assets/kenney_ui-pack/Vector/Grey/star_outline_depth.svg", "start": 1357386, "end": 1358708}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_basic_e.svg", "start": 1358708, "end": 1360063}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_basic_e_small.svg", "start": 1360063, "end": 1361092}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_basic_n.svg", "start": 1361092, "end": 1362550}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_basic_n_small.svg", "start": 1362550, "end": 1363634}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_basic_s.svg", "start": 1363634, "end": 1365066}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_basic_s_small.svg", "start": 1365066, "end": 1366135}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_basic_w.svg", "start": 1366135, "end": 1367536}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_basic_w_small.svg", "start": 1367536, "end": 1368548}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_decorative_e.svg", "start": 1368548, "end": 1371028}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_decorative_e_small.svg", "start": 1371028, "end": 1372563}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_decorative_n.svg", "start": 1372563, "end": 1375161}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_decorative_n_small.svg", "start": 1375161, "end": 1376865}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_decorative_s.svg", "start": 1376865, "end": 1379337}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_decorative_s_small.svg", "start": 1379337, "end": 1380924}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_decorative_w.svg", "start": 1380924, "end": 1383481}, {"filename": "/assets/kenney_ui-pack/Vector/Red/arrow_decorative_w_small.svg", "start": 1383481, "end": 1385085}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_rectangle_border.svg", "start": 1385085, "end": 1386185}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_rectangle_depth_border.svg", "start": 1386185, "end": 1388511}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_rectangle_depth_flat.svg", "start": 1388511, "end": 1389513}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_rectangle_depth_gloss.svg", "start": 1389513, "end": 1390399}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_rectangle_depth_gradient.svg", "start": 1390399, "end": 1391715}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_rectangle_depth_line.svg", "start": 1391715, "end": 1393996}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_rectangle_flat.svg", "start": 1393996, "end": 1394850}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_rectangle_gloss.svg", "start": 1394850, "end": 1395588}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_rectangle_gradient.svg", "start": 1395588, "end": 1396756}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_rectangle_line.svg", "start": 1396756, "end": 1397811}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_round_border.svg", "start": 1397811, "end": 1400112}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_round_depth_border.svg", "start": 1400112, "end": 1403190}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_round_depth_flat.svg", "start": 1403190, "end": 1404962}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_round_depth_gloss.svg", "start": 1404962, "end": 1406379}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_round_depth_gradient.svg", "start": 1406379, "end": 1408442}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_round_depth_line.svg", "start": 1408442, "end": 1411477}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_round_flat.svg", "start": 1411477, "end": 1412486}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_round_gloss.svg", "start": 1412486, "end": 1413361}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_round_gradient.svg", "start": 1413361, "end": 1414837}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_round_line.svg", "start": 1414837, "end": 1416617}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_square_border.svg", "start": 1416617, "end": 1417691}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_square_depth_border.svg", "start": 1417691, "end": 1419902}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_square_depth_flat.svg", "start": 1419902, "end": 1421774}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_square_depth_gloss.svg", "start": 1421774, "end": 1422611}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_square_depth_gradient.svg", "start": 1422611, "end": 1423912}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_square_depth_line.svg", "start": 1423912, "end": 1426078}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_square_flat.svg", "start": 1426078, "end": 1427285}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_square_gloss.svg", "start": 1427285, "end": 1428526}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_square_gradient.svg", "start": 1428526, "end": 1430517}, {"filename": "/assets/kenney_ui-pack/Vector/Red/button_square_line.svg", "start": 1430517, "end": 1431546}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_round_color.svg", "start": 1431546, "end": 1432531}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_round_grey.svg", "start": 1432531, "end": 1433516}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_round_grey_circle.svg", "start": 1433516, "end": 1435175}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_round_round_circle.svg", "start": 1435175, "end": 1436836}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_square_color.svg", "start": 1436836, "end": 1437478}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_square_color_checkmark.svg", "start": 1437478, "end": 1439088}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_square_color_cross.svg", "start": 1439088, "end": 1441066}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_square_color_square.svg", "start": 1441066, "end": 1441941}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_square_grey.svg", "start": 1441941, "end": 1442583}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_square_grey_checkmark.svg", "start": 1442583, "end": 1444193}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_square_grey_cross.svg", "start": 1444193, "end": 1446171}, {"filename": "/assets/kenney_ui-pack/Vector/Red/check_square_grey_square.svg", "start": 1446171, "end": 1447046}, {"filename": "/assets/kenney_ui-pack/Vector/Red/icon_checkmark.svg", "start": 1447046, "end": 1448042}, {"filename": "/assets/kenney_ui-pack/Vector/Red/icon_circle.svg", "start": 1448042, "end": 1448782}, {"filename": "/assets/kenney_ui-pack/Vector/Red/icon_cross.svg", "start": 1448782, "end": 1450185}, {"filename": "/assets/kenney_ui-pack/Vector/Red/icon_outline_checkmark.svg", "start": 1450185, "end": 1451181}, {"filename": "/assets/kenney_ui-pack/Vector/Red/icon_outline_circle.svg", "start": 1451181, "end": 1451929}, {"filename": "/assets/kenney_ui-pack/Vector/Red/icon_outline_cross.svg", "start": 1451929, "end": 1453332}, {"filename": "/assets/kenney_ui-pack/Vector/Red/icon_outline_square.svg", "start": 1453332, "end": 1453684}, {"filename": "/assets/kenney_ui-pack/Vector/Red/icon_square.svg", "start": 1453684, "end": 1454036}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_hangle.svg", "start": 1454036, "end": 1455238}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_horizontal_color.svg", "start": 1455238, "end": 1456332}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_horizontal_color_section.svg", "start": 1456332, "end": 1457256}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_horizontal_color_section_wide.svg", "start": 1457256, "end": 1458174}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_horizontal_grey.svg", "start": 1458174, "end": 1459268}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_horizontal_grey_section.svg", "start": 1459268, "end": 1460192}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_horizontal_grey_section_wide.svg", "start": 1460192, "end": 1461110}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_vertical_color.svg", "start": 1461110, "end": 1462191}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_vertical_color_section.svg", "start": 1462191, "end": 1463102}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_vertical_color_section_wide.svg", "start": 1463102, "end": 1464011}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_vertical_grey.svg", "start": 1464011, "end": 1465092}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_vertical_grey_section.svg", "start": 1465092, "end": 1466004}, {"filename": "/assets/kenney_ui-pack/Vector/Red/slide_vertical_grey_section_wide.svg", "start": 1466004, "end": 1466913}, {"filename": "/assets/kenney_ui-pack/Vector/Red/star.svg", "start": 1466913, "end": 1469378}, {"filename": "/assets/kenney_ui-pack/Vector/Red/star_outline.svg", "start": 1469378, "end": 1472095}, {"filename": "/assets/kenney_ui-pack/Vector/Red/star_outline_depth.svg", "start": 1472095, "end": 1473417}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_basic_e.svg", "start": 1473417, "end": 1474772}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_basic_e_small.svg", "start": 1474772, "end": 1475801}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_basic_n.svg", "start": 1475801, "end": 1477259}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_basic_n_small.svg", "start": 1477259, "end": 1478343}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_basic_s.svg", "start": 1478343, "end": 1479775}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_basic_s_small.svg", "start": 1479775, "end": 1480844}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_basic_w.svg", "start": 1480844, "end": 1482245}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_basic_w_small.svg", "start": 1482245, "end": 1483257}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_decorative_e.svg", "start": 1483257, "end": 1485737}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_decorative_e_small.svg", "start": 1485737, "end": 1487272}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_decorative_n.svg", "start": 1487272, "end": 1489870}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_decorative_n_small.svg", "start": 1489870, "end": 1491574}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_decorative_s.svg", "start": 1491574, "end": 1494046}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_decorative_s_small.svg", "start": 1494046, "end": 1495633}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_decorative_w.svg", "start": 1495633, "end": 1498190}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/arrow_decorative_w_small.svg", "start": 1498190, "end": 1499794}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_rectangle_border.svg", "start": 1499794, "end": 1500894}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_rectangle_depth_border.svg", "start": 1500894, "end": 1503220}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_rectangle_depth_flat.svg", "start": 1503220, "end": 1504222}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_rectangle_depth_gloss.svg", "start": 1504222, "end": 1505108}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_rectangle_depth_gradient.svg", "start": 1505108, "end": 1506423}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_rectangle_depth_line.svg", "start": 1506423, "end": 1508704}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_rectangle_flat.svg", "start": 1508704, "end": 1509558}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_rectangle_gloss.svg", "start": 1509558, "end": 1510296}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_rectangle_gradient.svg", "start": 1510296, "end": 1511465}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_rectangle_line.svg", "start": 1511465, "end": 1512520}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_round_border.svg", "start": 1512520, "end": 1514821}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_round_depth_border.svg", "start": 1514821, "end": 1517899}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_round_depth_flat.svg", "start": 1517899, "end": 1519671}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_round_depth_gloss.svg", "start": 1519671, "end": 1521088}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_round_depth_gradient.svg", "start": 1521088, "end": 1523151}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_round_depth_line.svg", "start": 1523151, "end": 1526184}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_round_flat.svg", "start": 1526184, "end": 1527193}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_round_gloss.svg", "start": 1527193, "end": 1528068}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_round_gradient.svg", "start": 1528068, "end": 1529544}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_round_line.svg", "start": 1529544, "end": 1531379}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_square_border.svg", "start": 1531379, "end": 1532453}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_square_depth_border.svg", "start": 1532453, "end": 1534664}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_square_depth_flat.svg", "start": 1534664, "end": 1536536}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_square_depth_gloss.svg", "start": 1536536, "end": 1537373}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_square_depth_gradient.svg", "start": 1537373, "end": 1538675}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_square_depth_line.svg", "start": 1538675, "end": 1540841}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_square_flat.svg", "start": 1540841, "end": 1542048}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_square_gloss.svg", "start": 1542048, "end": 1543289}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_square_gradient.svg", "start": 1543289, "end": 1545279}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/button_square_line.svg", "start": 1545279, "end": 1546308}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_round_color.svg", "start": 1546308, "end": 1547293}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_round_grey.svg", "start": 1547293, "end": 1548278}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_round_grey_circle.svg", "start": 1548278, "end": 1549937}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_round_round_circle.svg", "start": 1549937, "end": 1551598}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_square_color.svg", "start": 1551598, "end": 1552240}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_square_color_checkmark.svg", "start": 1552240, "end": 1553850}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_square_color_cross.svg", "start": 1553850, "end": 1555828}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_square_color_square.svg", "start": 1555828, "end": 1556703}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_square_grey.svg", "start": 1556703, "end": 1557345}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_square_grey_checkmark.svg", "start": 1557345, "end": 1558955}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_square_grey_cross.svg", "start": 1558955, "end": 1560933}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/check_square_grey_square.svg", "start": 1560933, "end": 1561808}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/icon_checkmark.svg", "start": 1561808, "end": 1562804}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/icon_circle.svg", "start": 1562804, "end": 1563544}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/icon_cross.svg", "start": 1563544, "end": 1564947}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/icon_outline_checkmark.svg", "start": 1564947, "end": 1565943}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/icon_outline_circle.svg", "start": 1565943, "end": 1566691}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/icon_outline_cross.svg", "start": 1566691, "end": 1568094}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/icon_outline_square.svg", "start": 1568094, "end": 1568446}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/icon_square.svg", "start": 1568446, "end": 1568798}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_hangle.svg", "start": 1568798, "end": 1570000}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_horizontal_color.svg", "start": 1570000, "end": 1571094}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_horizontal_color_section.svg", "start": 1571094, "end": 1572018}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_horizontal_color_section_wide.svg", "start": 1572018, "end": 1572936}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_horizontal_grey.svg", "start": 1572936, "end": 1574030}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_horizontal_grey_section.svg", "start": 1574030, "end": 1574954}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_horizontal_grey_section_wide.svg", "start": 1574954, "end": 1575872}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_vertical_color.svg", "start": 1575872, "end": 1576953}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_vertical_color_section.svg", "start": 1576953, "end": 1577864}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_vertical_color_section_wide.svg", "start": 1577864, "end": 1578773}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_vertical_grey.svg", "start": 1578773, "end": 1579854}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_vertical_grey_section.svg", "start": 1579854, "end": 1580766}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/slide_vertical_grey_section_wide.svg", "start": 1580766, "end": 1581675}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/star.svg", "start": 1581675, "end": 1584140}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/star_outline.svg", "start": 1584140, "end": 1586857}, {"filename": "/assets/kenney_ui-pack/Vector/Yellow/star_outline_depth.svg", "start": 1586857, "end": 1588179}, {"filename": "/assets/kenney_ui-pack/Visit Kenney.url", "start": 1588179, "end": 1588224}, {"filename": "/assets/kenney_ui-pack/Visit Patreon.url", "start": 1588224, "end": 1588279}, {"filename": "/assets/level_01.json", "start": 1588279, "end": 1595781}, {"filename": "/assets/level_02.json", "start": 1595781, "end": 1603390}], "remote_package_size": 1603390});

  })();

// end include: /var/folders/vx/_yqhb9nd4mscl67tlm2_g_8c0000gn/T/tmpox9fvh3o.js
// include: /var/folders/vx/_yqhb9nd4mscl67tlm2_g_8c0000gn/T/tmpk_6h15bs.js

    // All the pre-js content up to here must remain later on, we need to run
    // it.
    if (Module['$ww'] || (typeof ENVIRONMENT_IS_PTHREAD != 'undefined' && ENVIRONMENT_IS_PTHREAD)) Module['preRun'] = [];
    var necessaryPreJSTasks = Module['preRun'].slice();
  // end include: /var/folders/vx/_yqhb9nd4mscl67tlm2_g_8c0000gn/T/tmpk_6h15bs.js
// include: /var/folders/vx/_yqhb9nd4mscl67tlm2_g_8c0000gn/T/tmp258c_3kd.js

    if (!Module['preRun']) throw 'Module.preRun should exist because file support used it; did a pre-js delete it?';
    necessaryPreJSTasks.forEach((task) => {
      if (Module['preRun'].indexOf(task) < 0) throw 'All preRun tasks that exist before user pre-js code should remain after; did you replace Module or modify Module.preRun?';
    });
  // end include: /var/folders/vx/_yqhb9nd4mscl67tlm2_g_8c0000gn/T/tmp258c_3kd.js


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var readAsync, readBinary;

if (ENVIRONMENT_IS_NODE) {
  if (typeof process == 'undefined' || !process.release || process.release.name !== 'node') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  var nodeVersion = process.versions.node;
  var numericVersion = nodeVersion.split('.').slice(0, 3);
  numericVersion = (numericVersion[0] * 10000) + (numericVersion[1] * 100) + (numericVersion[2].split('-')[0] * 1);
  var minVersion = 160000;
  if (numericVersion < 160000) {
    throw new Error('This emscripten-generated code requires node v16.0.0 (detected v' + nodeVersion + ')');
  }

  // These modules will usually be used on Node.js. Load them eagerly to avoid
  // the complexity of lazy-loading.
  var fs = require('fs');
  var nodePath = require('path');

  scriptDirectory = __dirname + '/';

// include: node_shell_read.js
readBinary = (filename) => {
  // We need to re-wrap `file://` strings to URLs.
  filename = isFileURI(filename) ? new URL(filename) : filename;
  var ret = fs.readFileSync(filename);
  assert(Buffer.isBuffer(ret));
  return ret;
};

readAsync = async (filename, binary = true) => {
  // See the comment in the `readBinary` function.
  filename = isFileURI(filename) ? new URL(filename) : filename;
  var ret = fs.readFileSync(filename, binary ? undefined : 'utf8');
  assert(binary ? Buffer.isBuffer(ret) : typeof ret == 'string');
  return ret;
};
// end include: node_shell_read.js
  if (!Module['thisProgram'] && process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\/g, '/');
  }

  arguments_ = process.argv.slice(2);

  if (typeof module != 'undefined') {
    module['exports'] = Module;
  }

  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };

} else
if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process == 'object' && typeof require === 'function') || typeof window == 'object' || typeof WorkerGlobalScope != 'undefined') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.startsWith('blob:')) {
    scriptDirectory = '';
  } else {
    scriptDirectory = scriptDirectory.slice(0, scriptDirectory.replace(/[?#].*/, '').lastIndexOf('/')+1);
  }

  if (!(typeof window == 'object' || typeof WorkerGlobalScope != 'undefined')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  {
// include: web_or_worker_shell_read.js
if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = async (url) => {
    // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
    // See https://github.com/github/fetch/pull/92#issuecomment-140665932
    // Cordova or Electron apps are typically loaded from a file:// url.
    // So use XHR on webview if URL is a file URL.
    if (isFileURI(url)) {
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = () => {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            resolve(xhr.response);
            return;
          }
          reject(xhr.status);
        };
        xhr.onerror = reject;
        xhr.send(null);
      });
    }
    var response = await fetch(url, { credentials: 'same-origin' });
    if (response.ok) {
      return response.arrayBuffer();
    }
    throw new Error(response.status + ' : ' + response.url);
  };
// end include: web_or_worker_shell_read.js
  }
} else
{
  throw new Error('environment detection error');
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.error.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used.
moduleOverrides = null;
checkIncomingModuleAPI();

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];legacyModuleProp('arguments', 'arguments_');

if (Module['thisProgram']) thisProgram = Module['thisProgram'];legacyModuleProp('thisProgram', 'thisProgram');

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] == 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] == 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] == 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] == 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] == 'undefined', 'Module.read option was removed');
assert(typeof Module['readAsync'] == 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] == 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] == 'undefined', 'Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)');
assert(typeof Module['TOTAL_MEMORY'] == 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
legacyModuleProp('asm', 'wasmExports');
legacyModuleProp('readAsync', 'readAsync');
legacyModuleProp('readBinary', 'readBinary');
legacyModuleProp('setWindowTitle', 'setWindowTitle');
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var FETCHFS = 'FETCHFS is no longer included by default; build with -lfetchfs.js';
var ICASEFS = 'ICASEFS is no longer included by default; build with -licasefs.js';
var JSFILEFS = 'JSFILEFS is no longer included by default; build with -ljsfilefs.js';
var OPFS = 'OPFS is no longer included by default; build with -lopfs.js';

var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';

assert(!ENVIRONMENT_IS_SHELL, 'shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.');

// end include: shell.js

// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary = Module['wasmBinary'];legacyModuleProp('wasmBinary', 'wasmBinary');

if (typeof WebAssembly != 'object') {
  err('no native wasm support detected');
}

// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

// In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
// don't define it at all in release modes.  This matches the behaviour of
// MINIMAL_RUNTIME.
// TODO(sbc): Make this the default even without STRICT enabled.
/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed' + (text ? ': ' + text : ''));
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/* BigInt64Array type is not correctly defined in closure
/** not-@type {!BigInt64Array} */
  HEAP64,
/* BigUint64Array type is not correctly defined in closure
/** not-t@type {!BigUint64Array} */
  HEAPU64,
/** @type {!Float64Array} */
  HEAPF64;

var runtimeInitialized = false;

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */
var isFileURI = (filename) => filename.startsWith('file://');

// include: runtime_shared.js
// include: runtime_stack_check.js
// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // If the stack ends at address zero we write our cookies 4 bytes into the
  // stack.  This prevents interference with SAFE_HEAP and ASAN which also
  // monitor writes to address zero.
  if (max == 0) {
    max += 4;
  }
  // The stack grow downwards towards _emscripten_stack_get_end.
  // We write cookies to the final two words in the stack and detect if they are
  // ever overwritten.
  HEAPU32[((max)>>2)] = 0x02135467;
  HEAPU32[(((max)+(4))>>2)] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAPU32[((0)>>2)] = 1668509029;
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  // See writeStackCookie().
  if (max == 0) {
    max += 4;
  }
  var cookie1 = HEAPU32[((max)>>2)];
  var cookie2 = HEAPU32[(((max)+(4))>>2)];
  if (cookie1 != 0x02135467 || cookie2 != 0x89BACDFE) {
    abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`);
  }
  // Also test the global address 0 for integrity.
  if (HEAPU32[((0)>>2)] != 0x63736d65 /* 'emsc' */) {
    abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
  }
}
// end include: runtime_stack_check.js
// include: runtime_exceptions.js
// end include: runtime_exceptions.js
// include: runtime_debug.js
// Endianness check
(() => {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
})();

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)');
}

function legacyModuleProp(prop, newName, incoming=true) {
  if (!Object.getOwnPropertyDescriptor(Module, prop)) {
    Object.defineProperty(Module, prop, {
      configurable: true,
      get() {
        let extra = incoming ? ' (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)' : '';
        abort(`\`Module.${prop}\` has been replaced by \`${newName}\`` + extra);

      }
    });
  }
}

function ignoredModuleProp(prop) {
  if (Object.getOwnPropertyDescriptor(Module, prop)) {
    abort(`\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`);
  }
}

// forcing the filesystem exports a few things by default
function isExportedByForceFilesystem(name) {
  return name === 'FS_createPath' ||
         name === 'FS_createDataFile' ||
         name === 'FS_createPreloadedFile' ||
         name === 'FS_unlink' ||
         name === 'addRunDependency' ||
         // The old FS has some functionality that WasmFS lacks.
         name === 'FS_createLazyFile' ||
         name === 'FS_createDevice' ||
         name === 'removeRunDependency';
}

/**
 * Intercept access to a global symbol.  This enables us to give informative
 * warnings/errors when folks attempt to use symbols they did not include in
 * their build, or no symbols that no longer exist.
 */
function hookGlobalSymbolAccess(sym, func) {
  if (typeof globalThis != 'undefined' && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get() {
        func();
        return undefined;
      }
    });
  }
}

function missingGlobal(sym, msg) {
  hookGlobalSymbolAccess(sym, () => {
    warnOnce(`\`${sym}\` is not longer defined by emscripten. ${msg}`);
  });
}

missingGlobal('buffer', 'Please use HEAP8.buffer or wasmMemory.buffer');
missingGlobal('asm', 'Please use wasmExports instead');

function missingLibrarySymbol(sym) {
  hookGlobalSymbolAccess(sym, () => {
    // Can't `abort()` here because it would break code that does runtime
    // checks.  e.g. `if (typeof SDL === 'undefined')`.
    var msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
    // DEFAULT_LIBRARY_FUNCS_TO_INCLUDE requires the name as it appears in
    // library.js, which means $name for a JS name with no prefix, or name
    // for a JS name like _name.
    var librarySymbol = sym;
    if (!librarySymbol.startsWith('_')) {
      librarySymbol = '$' + sym;
    }
    msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
    if (isExportedByForceFilesystem(sym)) {
      msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
    }
    warnOnce(msg);
  });

  // Any symbol that is not included from the JS library is also (by definition)
  // not exported on the Module object.
  unexportedRuntimeSymbol(sym);
}

function unexportedRuntimeSymbol(sym) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Object.defineProperty(Module, sym, {
      configurable: true,
      get() {
        var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        abort(msg);
      }
    });
  }
}

// Used by XXXXX_DEBUG settings to output debug messages.
function dbg(...args) {
  // TODO(sbc): Make this configurable somehow.  Its not always convenient for
  // logging to show up as warnings.
  console.warn(...args);
}
// end include: runtime_debug.js
// include: memoryprofiler.js
// end include: memoryprofiler.js


function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module['HEAP8'] = HEAP8 = new Int8Array(b);
  Module['HEAP16'] = HEAP16 = new Int16Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(b);
  Module['HEAP32'] = HEAP32 = new Int32Array(b);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(b);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(b);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(b);
  Module['HEAP64'] = HEAP64 = new BigInt64Array(b);
  Module['HEAPU64'] = HEAPU64 = new BigUint64Array(b);
}

// end include: runtime_shared.js
assert(!Module['STACK_SIZE'], 'STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time')

assert(typeof Int32Array != 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it, or set INITIAL_MEMORY
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally');
assert(!Module['INITIAL_MEMORY'], 'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically');

function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(onPreRuns);
}

function initRuntime() {
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  checkStackCookie();

  if (!Module['noFSInit'] && !FS.initialized) FS.init();
TTY.init();

  wasmExports['__wasm_call_ctors']();

  FS.ignorePermissions = false;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(onPostRuns);
}

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};
var runDependencyWatcher = null;

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  Module['monitorRunDependencies']?.(runDependencies);

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval != 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(() => {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err(`dependency: ${dep}`);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  Module['monitorRunDependencies']?.(runDependencies);

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  Module['onAbort']?.(what);

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // definition for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

function createExportWrapper(name, nargs) {
  return (...args) => {
    assert(runtimeInitialized, `native function \`${name}\` called before runtime initialization`);
    var f = wasmExports[name];
    assert(f, `exported native function \`${name}\` not found`);
    // Only assert for too many arguments. Too few can be valid since the missing arguments will be zero filled.
    assert(args.length <= nargs, `native function \`${name}\` called with ${args.length} args but expects ${nargs}`);
    return f(...args);
  };
}

var wasmBinaryFile;
function findWasmBinary() {
    return locateFile('index.wasm');
}

function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw 'both async and sync fetching of the wasm failed';
}

async function getWasmBinary(binaryFile) {
  // If we don't have the binary yet, load it asynchronously using readAsync.
  if (!wasmBinary) {
    // Fetch the binary using readAsync
    try {
      var response = await readAsync(binaryFile);
      return new Uint8Array(response);
    } catch {
      // Fall back to getBinarySync below;
    }
  }

  // Otherwise, getBinarySync should be able to get it synchronously
  return getBinarySync(binaryFile);
}

async function instantiateArrayBuffer(binaryFile, imports) {
  try {
    var binary = await getWasmBinary(binaryFile);
    var instance = await WebAssembly.instantiate(binary, imports);
    return instance;
  } catch (reason) {
    err(`failed to asynchronously prepare wasm: ${reason}`);

    // Warn on some common problems.
    if (isFileURI(wasmBinaryFile)) {
      err(`warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
    }
    abort(reason);
  }
}

async function instantiateAsync(binary, binaryFile, imports) {
  if (!binary && typeof WebAssembly.instantiateStreaming == 'function'
      // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
      && !isFileURI(binaryFile)
      // Avoid instantiateStreaming() on Node.js environment for now, as while
      // Node.js v18.1.0 implements it, it does not have a full fetch()
      // implementation yet.
      //
      // Reference:
      //   https://github.com/emscripten-core/emscripten/pull/16917
      && !ENVIRONMENT_IS_NODE
     ) {
    try {
      var response = fetch(binaryFile, { credentials: 'same-origin' });
      var instantiationResult = await WebAssembly.instantiateStreaming(response, imports);
      return instantiationResult;
    } catch (reason) {
      // We expect the most common failure cause to be a bad MIME type for the binary,
      // in which case falling back to ArrayBuffer instantiation should work.
      err(`wasm streaming compile failed: ${reason}`);
      err('falling back to ArrayBuffer instantiation');
      // fall back of instantiateArrayBuffer below
    };
  }
  return instantiateArrayBuffer(binaryFile, imports);
}

function getWasmImports() {
  // prepare imports
  return {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  }
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
async function createWasm() {
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;

    

    wasmMemory = wasmExports['memory'];
    
    assert(wasmMemory, 'memory not found in wasm exports');
    updateMemoryViews();

    wasmTable = wasmExports['__indirect_function_table'];
    
    assert(wasmTable, 'table not found in wasm exports');

    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    return receiveInstance(result['instance']);
  }

  var info = getWasmImports();

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {
    return new Promise((resolve, reject) => {
      try {
        Module['instantiateWasm'](info, (mod, inst) => {
          receiveInstance(mod, inst);
          resolve(mod.exports);
        });
      } catch(e) {
        err(`Module.instantiateWasm callback failed with error: ${e}`);
        reject(e);
      }
    });
  }

  wasmBinaryFile ??= findWasmBinary();

    var result = await instantiateAsync(wasmBinary, wasmBinaryFile, info);
    var exports = receiveInstantiationResult(result);
    return exports;
}

// === Body ===

var ASM_CONSTS = {
  152952: () => { if (document.fullscreenElement) return 1; },  
 152998: () => { return document.getElementById('canvas').width; },  
 153050: () => { return parseInt(document.getElementById('canvas').style.width); },  
 153118: () => { document.exitFullscreen(); },  
 153145: () => { setTimeout(function() { Module.requestFullscreen(false, false); }, 100); },  
 153218: () => { if (document.fullscreenElement) return 1; },  
 153264: () => { return document.getElementById('canvas').width; },  
 153316: () => { return screen.width; },  
 153341: () => { document.exitFullscreen(); },  
 153368: () => { setTimeout(function() { Module.requestFullscreen(false, true); setTimeout(function() { canvas.style.width="unset"; }, 100); }, 100); },  
 153501: () => { return window.innerWidth; },  
 153527: () => { return window.innerHeight; },  
 153554: () => { if (document.fullscreenElement) return 1; },  
 153600: () => { return document.getElementById('canvas').width; },  
 153652: () => { return parseInt(document.getElementById('canvas').style.width); },  
 153720: () => { if (document.fullscreenElement) return 1; },  
 153766: () => { return document.getElementById('canvas').width; },  
 153818: () => { return screen.width; },  
 153843: () => { return window.innerWidth; },  
 153869: () => { return window.innerHeight; },  
 153896: () => { if (document.fullscreenElement) return 1; },  
 153942: () => { return document.getElementById('canvas').width; },  
 153994: () => { return screen.width; },  
 154019: () => { document.exitFullscreen(); },  
 154046: () => { if (document.fullscreenElement) return 1; },  
 154092: () => { return document.getElementById('canvas').width; },  
 154144: () => { return parseInt(document.getElementById('canvas').style.width); },  
 154212: () => { document.exitFullscreen(); },  
 154239: ($0) => { document.getElementById('canvas').style.opacity = $0; },  
 154297: () => { return screen.width; },  
 154322: () => { return screen.height; },  
 154348: () => { return window.screenX; },  
 154375: () => { return window.screenY; },  
 154402: ($0) => { navigator.clipboard.writeText(UTF8ToString($0)); },  
 154455: ($0) => { document.getElementById("canvas").style.cursor = UTF8ToString($0); },  
 154526: () => { document.getElementById('canvas').style.cursor = 'none'; },  
 154583: ($0, $1, $2, $3) => { try { navigator.getGamepads()[$0].vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: $3, weakMagnitude: $1, strongMagnitude: $2 }); } catch (e) { try { navigator.getGamepads()[$0].hapticActuators[0].pulse($2, $3); } catch (e) { } } },  
 154839: ($0) => { document.getElementById('canvas').style.cursor = UTF8ToString($0); },  
 154910: () => { if (document.fullscreenElement) return 1; },  
 154956: () => { return window.innerWidth; },  
 154982: () => { return window.innerHeight; },  
 155009: () => { if (document.pointerLockElement) return 1; }
};

// end include: preamble.js


  class ExitStatus {
      name = 'ExitStatus';
      constructor(status) {
        this.message = `Program terminated with exit(${status})`;
        this.status = status;
      }
    }

  var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    };
  var onPostRuns = [];
  var addOnPostRun = (cb) => onPostRuns.unshift(cb);

  var onPreRuns = [];
  var addOnPreRun = (cb) => onPreRuns.unshift(cb);


  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[ptr];
      case 'i8': return HEAP8[ptr];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP64[((ptr)>>3)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort(`invalid type for getValue: ${type}`);
    }
  }

  var noExitRuntime = Module['noExitRuntime'] || true;

  var ptrToString = (ptr) => {
      assert(typeof ptr === 'number');
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      ptr >>>= 0;
      return '0x' + ptr.toString(16).padStart(8, '0');
    };

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[ptr] = value; break;
      case 'i8': HEAP8[ptr] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': HEAP64[((ptr)>>3)] = BigInt(value); break;
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort(`invalid type for setValue: ${type}`);
    }
  }

  var stackRestore = (val) => __emscripten_stack_restore(val);

  var stackSave = () => _emscripten_stack_get_current();

  var warnOnce = (text) => {
      warnOnce.shown ||= {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
        err(text);
      }
    };

  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder() : undefined;
  
    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number=} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */
  var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead = NaN) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.  Also, use the length info to avoid running tiny
      // strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation,
      // so that undefined/NaN means Infinity)
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte ' + ptrToString(u0) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    };
  
    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */
  var UTF8ToString = (ptr, maxBytesToRead) => {
      assert(typeof ptr == 'number', `UTF8ToString expects a number (got ${typeof ptr})`);
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    };
  var ___assert_fail = (condition, filename, line, func) =>
      abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);

  var PATH = {
  isAbs:(path) => path.charAt(0) === '/',
  splitPath:(filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
  normalizeArray:(parts, allowAboveRoot) => {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },
  normalize:(path) => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.slice(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter((p) => !!p), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },
  dirname:(path) => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.slice(0, -1);
        }
        return root + dir;
      },
  basename:(path) => path && path.match(/([^\/]+|\/)\/*$/)[1],
  join:(...paths) => PATH.normalize(paths.join('/')),
  join2:(l, r) => PATH.normalize(l + '/' + r),
  };
  
  var initRandomFill = () => {
      // This block is not needed on v19+ since crypto.getRandomValues is builtin
      if (ENVIRONMENT_IS_NODE) {
        var nodeCrypto = require('crypto');
        return (view) => nodeCrypto.randomFillSync(view);
      }
  
      return (view) => crypto.getRandomValues(view);
    };
  var randomFill = (view) => {
      // Lazily init on the first invocation.
      (randomFill = initRandomFill())(view);
    };
  
  
  
  var PATH_FS = {
  resolve:(...args) => {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? args[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path != 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = PATH.isAbs(path);
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter((p) => !!p), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },
  relative:(from, to) => {
        from = PATH_FS.resolve(from).slice(1);
        to = PATH_FS.resolve(to).slice(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      },
  };
  
  
  
  var FS_stdin_getChar_buffer = [];
  
  var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var c = str.charCodeAt(i); // possibly a lead surrogate
        if (c <= 0x7F) {
          len++;
        } else if (c <= 0x7FF) {
          len += 2;
        } else if (c >= 0xD800 && c <= 0xDFFF) {
          len += 4; ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
  
  var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      assert(typeof str === 'string', `stringToUTF8Array expects a string (got ${typeof str})`);
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0))
        return 0;
  
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
        var u = str.charCodeAt(i); // possibly a lead surrogate
        if (u >= 0xD800 && u <= 0xDFFF) {
          var u1 = str.charCodeAt(++i);
          u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
        }
        if (u <= 0x7F) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 0x7FF) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 0xC0 | (u >> 6);
          heap[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0xFFFF) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 0xE0 | (u >> 12);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          if (u > 0x10FFFF) warnOnce('Invalid Unicode code point ' + ptrToString(u) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
          heap[outIdx++] = 0xF0 | (u >> 18);
          heap[outIdx++] = 0x80 | ((u >> 12) & 63);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        }
      }
      // Null-terminate the pointer to the buffer.
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
  /** @type {function(string, boolean=, number=)} */
  var intArrayFromString = (stringy, dontAddNull, length) => {
      var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      if (dontAddNull) u8array.length = numBytesWritten;
      return u8array;
    };
  var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var result = null;
        if (ENVIRONMENT_IS_NODE) {
          // we will read data by chunks of BUFSIZE
          var BUFSIZE = 256;
          var buf = Buffer.alloc(BUFSIZE);
          var bytesRead = 0;
  
          // For some reason we must suppress a closure warning here, even though
          // fd definitely exists on process.stdin, and is even the proper way to
          // get the fd of stdin,
          // https://github.com/nodejs/help/issues/2136#issuecomment-523649904
          // This started to happen after moving this logic out of library_tty.js,
          // so it is related to the surrounding code in some unclear manner.
          /** @suppress {missingProperties} */
          var fd = process.stdin.fd;
  
          try {
            bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
          } catch(e) {
            // Cross-platform differences: on Windows, reading EOF throws an
            // exception, but on other OSes, reading EOF returns 0. Uniformize
            // behavior by treating the EOF exception to return 0.
            if (e.toString().includes('EOF')) bytesRead = 0;
            else throw e;
          }
  
          if (bytesRead > 0) {
            result = buf.slice(0, bytesRead).toString('utf-8');
          }
        } else
        if (typeof window != 'undefined' &&
          typeof window.prompt == 'function') {
          // Browser.
          result = window.prompt('Input: ');  // returns null on cancel
          if (result !== null) {
            result += '\n';
          }
        } else
        {}
        if (!result) {
          return null;
        }
        FS_stdin_getChar_buffer = intArrayFromString(result, true);
      }
      return FS_stdin_getChar_buffer.shift();
    };
  var TTY = {
  ttys:[],
  init() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process.stdin.setEncoding('utf8');
        // }
      },
  shutdown() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process.stdin.pause();
        // }
      },
  register(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
  stream_ops:{
  open(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
  close(stream) {
          // flush any pending line data
          stream.tty.ops.fsync(stream.tty);
        },
  fsync(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
  read(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.atime = Date.now();
          }
          return bytesRead;
        },
  write(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.mtime = stream.node.ctime = Date.now();
          }
          return i;
        },
  },
  default_tty_ops:{
  get_char(tty) {
          return FS_stdin_getChar();
        },
  put_char(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },
  fsync(tty) {
          if (tty.output?.length > 0) {
            out(UTF8ArrayToString(tty.output));
            tty.output = [];
          }
        },
  ioctl_tcgets(tty) {
          // typical setting
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              0x03, 0x1c, 0x7f, 0x15, 0x04, 0x00, 0x01, 0x00, 0x11, 0x13, 0x1a, 0x00,
              0x12, 0x0f, 0x17, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
              0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ]
          };
        },
  ioctl_tcsets(tty, optional_actions, data) {
          // currently just ignore
          return 0;
        },
  ioctl_tiocgwinsz(tty) {
          return [24, 80];
        },
  },
  default_tty1_ops:{
  put_char(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
  fsync(tty) {
          if (tty.output?.length > 0) {
            err(UTF8ArrayToString(tty.output));
            tty.output = [];
          }
        },
  },
  };
  
  
  var zeroMemory = (address, size) => {
      HEAPU8.fill(0, address, address + size);
    };
  
  var alignMemory = (size, alignment) => {
      assert(alignment, "alignment argument is required");
      return Math.ceil(size / alignment) * alignment;
    };
  var mmapAlloc = (size) => {
      abort('internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported');
    };
  var MEMFS = {
  ops_table:null,
  mount(mount) {
        return MEMFS.createNode(null, '/', 16895, 0);
      },
  createNode(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        MEMFS.ops_table ||= {
          dir: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              lookup: MEMFS.node_ops.lookup,
              mknod: MEMFS.node_ops.mknod,
              rename: MEMFS.node_ops.rename,
              unlink: MEMFS.node_ops.unlink,
              rmdir: MEMFS.node_ops.rmdir,
              readdir: MEMFS.node_ops.readdir,
              symlink: MEMFS.node_ops.symlink
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek
            }
          },
          file: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: {
              llseek: MEMFS.stream_ops.llseek,
              read: MEMFS.stream_ops.read,
              write: MEMFS.stream_ops.write,
              allocate: MEMFS.stream_ops.allocate,
              mmap: MEMFS.stream_ops.mmap,
              msync: MEMFS.stream_ops.msync
            }
          },
          link: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr,
              readlink: MEMFS.node_ops.readlink
            },
            stream: {}
          },
          chrdev: {
            node: {
              getattr: MEMFS.node_ops.getattr,
              setattr: MEMFS.node_ops.setattr
            },
            stream: FS.chrdev_stream_ops
          }
        };
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.atime = node.mtime = node.ctime = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.atime = parent.mtime = parent.ctime = node.atime;
        }
        return node;
      },
  getFileDataAsTypedArray(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },
  expandFileStorage(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },
  resizeFileStorage(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },
  node_ops:{
  getattr(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.atime);
          attr.mtime = new Date(node.mtime);
          attr.ctime = new Date(node.ctime);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
  setattr(node, attr) {
          for (const key of ["mode", "atime", "mtime", "ctime"]) {
            if (attr[key] != null) {
              node[key] = attr[key];
            }
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
  lookup(parent, name) {
          throw new FS.ErrnoError(44);
        },
  mknod(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
  rename(old_node, new_dir, new_name) {
          var new_node;
          try {
            new_node = FS.lookupNode(new_dir, new_name);
          } catch (e) {}
          if (new_node) {
            if (FS.isDir(old_node.mode)) {
              // if we're overwriting a directory at new_name, make sure it's empty.
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
            FS.hashRemoveNode(new_node);
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          new_dir.contents[new_name] = old_node;
          old_node.name = new_name;
          new_dir.ctime = new_dir.mtime = old_node.parent.ctime = old_node.parent.mtime = Date.now();
        },
  unlink(parent, name) {
          delete parent.contents[name];
          parent.ctime = parent.mtime = Date.now();
        },
  rmdir(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.ctime = parent.mtime = Date.now();
        },
  readdir(node) {
          return ['.', '..', ...Object.keys(node.contents)];
        },
  symlink(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 0o777 | 40960, 0);
          node.link = oldpath;
          return node;
        },
  readlink(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        },
  },
  stream_ops:{
  read(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },
  write(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
  
          if (!length) return 0;
          var node = stream.node;
          node.mtime = node.ctime = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
  llseek(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
  allocate(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },
  mmap(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents && contents.buffer === HEAP8.buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the
            // buffer we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            if (contents) {
              // Try to avoid unnecessary slices.
              if (position > 0 || position + length < contents.length) {
                if (contents.subarray) {
                  contents = contents.subarray(position, position + length);
                } else {
                  contents = Array.prototype.slice.call(contents, position, position + length);
                }
              }
              HEAP8.set(contents, ptr);
            }
          }
          return { ptr, allocated };
        },
  msync(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        },
  },
  };
  
  var asyncLoad = async (url) => {
      var arrayBuffer = await readAsync(url);
      assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
      return new Uint8Array(arrayBuffer);
    };
  
  
  var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
      FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
    };
  
  var preloadPlugins = Module['preloadPlugins'] || [];
  var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
      // Ensure plugins are ready.
      if (typeof Browser != 'undefined') Browser.init();
  
      var handled = false;
      preloadPlugins.forEach((plugin) => {
        if (handled) return;
        if (plugin['canHandle'](fullname)) {
          plugin['handle'](byteArray, fullname, finish, onerror);
          handled = true;
        }
      });
      return handled;
    };
  var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
      // TODO we should allow people to just pass in a complete filename instead
      // of parent and name being that we just join them anyways
      var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
      var dep = getUniqueRunDependency(`cp ${fullname}`); // might have several active requests for the same fullname
      function processData(byteArray) {
        function finish(byteArray) {
          preFinish?.();
          if (!dontCreateFile) {
            FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
          }
          onload?.();
          removeRunDependency(dep);
        }
        if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
          onerror?.();
          removeRunDependency(dep);
        })) {
          return;
        }
        finish(byteArray);
      }
      addRunDependency(dep);
      if (typeof url == 'string') {
        asyncLoad(url).then(processData, onerror);
      } else {
        processData(url);
      }
    };
  
  var FS_modeStringToFlags = (str) => {
      var flagModes = {
        'r': 0,
        'r+': 2,
        'w': 512 | 64 | 1,
        'w+': 512 | 64 | 2,
        'a': 1024 | 64 | 1,
        'a+': 1024 | 64 | 2,
      };
      var flags = flagModes[str];
      if (typeof flags == 'undefined') {
        throw new Error(`Unknown file open mode: ${str}`);
      }
      return flags;
    };
  
  var FS_getMode = (canRead, canWrite) => {
      var mode = 0;
      if (canRead) mode |= 292 | 73;
      if (canWrite) mode |= 146;
      return mode;
    };
  
  
  
  
  
  
  var strError = (errno) => UTF8ToString(_strerror(errno));
  
  var ERRNO_CODES = {
      'EPERM': 63,
      'ENOENT': 44,
      'ESRCH': 71,
      'EINTR': 27,
      'EIO': 29,
      'ENXIO': 60,
      'E2BIG': 1,
      'ENOEXEC': 45,
      'EBADF': 8,
      'ECHILD': 12,
      'EAGAIN': 6,
      'EWOULDBLOCK': 6,
      'ENOMEM': 48,
      'EACCES': 2,
      'EFAULT': 21,
      'ENOTBLK': 105,
      'EBUSY': 10,
      'EEXIST': 20,
      'EXDEV': 75,
      'ENODEV': 43,
      'ENOTDIR': 54,
      'EISDIR': 31,
      'EINVAL': 28,
      'ENFILE': 41,
      'EMFILE': 33,
      'ENOTTY': 59,
      'ETXTBSY': 74,
      'EFBIG': 22,
      'ENOSPC': 51,
      'ESPIPE': 70,
      'EROFS': 69,
      'EMLINK': 34,
      'EPIPE': 64,
      'EDOM': 18,
      'ERANGE': 68,
      'ENOMSG': 49,
      'EIDRM': 24,
      'ECHRNG': 106,
      'EL2NSYNC': 156,
      'EL3HLT': 107,
      'EL3RST': 108,
      'ELNRNG': 109,
      'EUNATCH': 110,
      'ENOCSI': 111,
      'EL2HLT': 112,
      'EDEADLK': 16,
      'ENOLCK': 46,
      'EBADE': 113,
      'EBADR': 114,
      'EXFULL': 115,
      'ENOANO': 104,
      'EBADRQC': 103,
      'EBADSLT': 102,
      'EDEADLOCK': 16,
      'EBFONT': 101,
      'ENOSTR': 100,
      'ENODATA': 116,
      'ETIME': 117,
      'ENOSR': 118,
      'ENONET': 119,
      'ENOPKG': 120,
      'EREMOTE': 121,
      'ENOLINK': 47,
      'EADV': 122,
      'ESRMNT': 123,
      'ECOMM': 124,
      'EPROTO': 65,
      'EMULTIHOP': 36,
      'EDOTDOT': 125,
      'EBADMSG': 9,
      'ENOTUNIQ': 126,
      'EBADFD': 127,
      'EREMCHG': 128,
      'ELIBACC': 129,
      'ELIBBAD': 130,
      'ELIBSCN': 131,
      'ELIBMAX': 132,
      'ELIBEXEC': 133,
      'ENOSYS': 52,
      'ENOTEMPTY': 55,
      'ENAMETOOLONG': 37,
      'ELOOP': 32,
      'EOPNOTSUPP': 138,
      'EPFNOSUPPORT': 139,
      'ECONNRESET': 15,
      'ENOBUFS': 42,
      'EAFNOSUPPORT': 5,
      'EPROTOTYPE': 67,
      'ENOTSOCK': 57,
      'ENOPROTOOPT': 50,
      'ESHUTDOWN': 140,
      'ECONNREFUSED': 14,
      'EADDRINUSE': 3,
      'ECONNABORTED': 13,
      'ENETUNREACH': 40,
      'ENETDOWN': 38,
      'ETIMEDOUT': 73,
      'EHOSTDOWN': 142,
      'EHOSTUNREACH': 23,
      'EINPROGRESS': 26,
      'EALREADY': 7,
      'EDESTADDRREQ': 17,
      'EMSGSIZE': 35,
      'EPROTONOSUPPORT': 66,
      'ESOCKTNOSUPPORT': 137,
      'EADDRNOTAVAIL': 4,
      'ENETRESET': 39,
      'EISCONN': 30,
      'ENOTCONN': 53,
      'ETOOMANYREFS': 141,
      'EUSERS': 136,
      'EDQUOT': 19,
      'ESTALE': 72,
      'ENOTSUP': 138,
      'ENOMEDIUM': 148,
      'EILSEQ': 25,
      'EOVERFLOW': 61,
      'ECANCELED': 11,
      'ENOTRECOVERABLE': 56,
      'EOWNERDEAD': 62,
      'ESTRPIPE': 135,
    };
  var FS = {
  root:null,
  mounts:[],
  devices:{
  },
  streams:[],
  nextInode:1,
  nameTable:null,
  currentPath:"/",
  initialized:false,
  ignorePermissions:true,
  ErrnoError:class extends Error {
        name = 'ErrnoError';
        // We set the `name` property to be able to identify `FS.ErrnoError`
        // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
        // - when using PROXYFS, an error can come from an underlying FS
        // as different FS objects have their own FS.ErrnoError each,
        // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
        // we'll use the reliable test `err.name == "ErrnoError"` instead
        constructor(errno) {
          super(runtimeInitialized ? strError(errno) : '');
          this.errno = errno;
          for (var key in ERRNO_CODES) {
            if (ERRNO_CODES[key] === errno) {
              this.code = key;
              break;
            }
          }
        }
      },
  filesystems:null,
  syncFSRequests:0,
  readFiles:{
  },
  FSStream:class {
        shared = {};
        get object() {
          return this.node;
        }
        set object(val) {
          this.node = val;
        }
        get isRead() {
          return (this.flags & 2097155) !== 1;
        }
        get isWrite() {
          return (this.flags & 2097155) !== 0;
        }
        get isAppend() {
          return (this.flags & 1024);
        }
        get flags() {
          return this.shared.flags;
        }
        set flags(val) {
          this.shared.flags = val;
        }
        get position() {
          return this.shared.position;
        }
        set position(val) {
          this.shared.position = val;
        }
      },
  FSNode:class {
        node_ops = {};
        stream_ops = {};
        readMode = 292 | 73;
        writeMode = 146;
        mounted = null;
        constructor(parent, name, mode, rdev) {
          if (!parent) {
            parent = this;  // root node sets parent to itself
          }
          this.parent = parent;
          this.mount = parent.mount;
          this.id = FS.nextInode++;
          this.name = name;
          this.mode = mode;
          this.rdev = rdev;
          this.atime = this.mtime = this.ctime = Date.now();
        }
        get read() {
          return (this.mode & this.readMode) === this.readMode;
        }
        set read(val) {
          val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
        }
        get write() {
          return (this.mode & this.writeMode) === this.writeMode;
        }
        set write(val) {
          val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
        }
        get isFolder() {
          return FS.isDir(this.mode);
        }
        get isDevice() {
          return FS.isChrdev(this.mode);
        }
      },
  lookupPath(path, opts = {}) {
        if (!path) {
          throw new FS.ErrnoError(44);
        }
        opts.follow_mount ??= true
  
        if (!PATH.isAbs(path)) {
          path = FS.cwd() + '/' + path;
        }
  
        // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
        linkloop: for (var nlinks = 0; nlinks < 40; nlinks++) {
          // split the absolute path
          var parts = path.split('/').filter((p) => !!p);
  
          // start at the root
          var current = FS.root;
          var current_path = '/';
  
          for (var i = 0; i < parts.length; i++) {
            var islast = (i === parts.length-1);
            if (islast && opts.parent) {
              // stop resolving
              break;
            }
  
            if (parts[i] === '.') {
              continue;
            }
  
            if (parts[i] === '..') {
              current_path = PATH.dirname(current_path);
              current = current.parent;
              continue;
            }
  
            current_path = PATH.join2(current_path, parts[i]);
            try {
              current = FS.lookupNode(current, parts[i]);
            } catch (e) {
              // if noent_okay is true, suppress a ENOENT in the last component
              // and return an object with an undefined node. This is needed for
              // resolving symlinks in the path when creating a file.
              if ((e?.errno === 44) && islast && opts.noent_okay) {
                return { path: current_path };
              }
              throw e;
            }
  
            // jump to the mount's root node if this is a mountpoint
            if (FS.isMountpoint(current) && (!islast || opts.follow_mount)) {
              current = current.mounted.root;
            }
  
            // by default, lookupPath will not follow a symlink if it is the final path component.
            // setting opts.follow = true will override this behavior.
            if (FS.isLink(current.mode) && (!islast || opts.follow)) {
              if (!current.node_ops.readlink) {
                throw new FS.ErrnoError(52);
              }
              var link = current.node_ops.readlink(current);
              if (!PATH.isAbs(link)) {
                link = PATH.dirname(current_path) + '/' + link;
              }
              path = link + '/' + parts.slice(i + 1).join('/');
              continue linkloop;
            }
          }
          return { path: current_path, node: current };
        }
        throw new FS.ErrnoError(32);
      },
  getPath(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? `${mount}/${path}` : mount + path;
          }
          path = path ? `${node.name}/${path}` : node.name;
          node = node.parent;
        }
      },
  hashName(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },
  hashAddNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
  hashRemoveNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
  lookupNode(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },
  createNode(parent, name, mode, rdev) {
        assert(typeof parent == 'object')
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },
  destroyNode(node) {
        FS.hashRemoveNode(node);
      },
  isRoot(node) {
        return node === node.parent;
      },
  isMountpoint(node) {
        return !!node.mounted;
      },
  isFile(mode) {
        return (mode & 61440) === 32768;
      },
  isDir(mode) {
        return (mode & 61440) === 16384;
      },
  isLink(mode) {
        return (mode & 61440) === 40960;
      },
  isChrdev(mode) {
        return (mode & 61440) === 8192;
      },
  isBlkdev(mode) {
        return (mode & 61440) === 24576;
      },
  isFIFO(mode) {
        return (mode & 61440) === 4096;
      },
  isSocket(mode) {
        return (mode & 49152) === 49152;
      },
  flagsToPermissionString(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },
  nodePermissions(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
  mayLookup(dir) {
        if (!FS.isDir(dir.mode)) return 54;
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },
  mayCreate(dir, name) {
        if (!FS.isDir(dir.mode)) {
          return 54;
        }
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },
  mayDelete(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
  mayOpen(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' // opening for write
              || (flags & (512 | 64))) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
  checkOpExists(op, err) {
        if (!op) {
          throw new FS.ErrnoError(err);
        }
        return op;
      },
  MAX_OPEN_FDS:4096,
  nextfd() {
        for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
  getStreamChecked(fd) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        return stream;
      },
  getStream:(fd) => FS.streams[fd],
  createStream(stream, fd = -1) {
        assert(fd >= -1);
  
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        if (fd == -1) {
          fd = FS.nextfd();
        }
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
  closeStream(fd) {
        FS.streams[fd] = null;
      },
  dupStream(origStream, fd = -1) {
        var stream = FS.createStream(origStream, fd);
        stream.stream_ops?.dup?.(stream);
        return stream;
      },
  doSetAttr(stream, node, attr) {
        var setattr = stream?.stream_ops.setattr;
        var arg = setattr ? stream : node;
        setattr ??= node.node_ops.setattr;
        FS.checkOpExists(setattr, 63)
        setattr(arg, attr);
      },
  chrdev_stream_ops:{
  open(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          stream.stream_ops.open?.(stream);
        },
  llseek() {
          throw new FS.ErrnoError(70);
        },
  },
  major:(dev) => ((dev) >> 8),
  minor:(dev) => ((dev) & 0xff),
  makedev:(ma, mi) => ((ma) << 8 | (mi)),
  registerDevice(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
  getDevice:(dev) => FS.devices[dev],
  getMounts(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push(...m.mounts);
        }
  
        return mounts;
      },
  syncfs(populate, callback) {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
  mount(type, opts, mountpoint) {
        if (typeof type == 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type,
          opts,
          mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },
  unmount(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach((hash) => {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },
  lookup(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
  mknod(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name) {
          throw new FS.ErrnoError(28);
        }
        if (name === '.' || name === '..') {
          throw new FS.ErrnoError(20);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
  statfs(path) {
        return FS.statfsNode(FS.lookupPath(path, {follow: true}).node);
      },
  statfsStream(stream) {
        // We keep a separate statfsStream function because noderawfs overrides
        // it. In noderawfs, stream.node is sometimes null. Instead, we need to
        // look at stream.path.
        return FS.statfsNode(stream.node);
      },
  statfsNode(node) {
        // NOTE: None of the defaults here are true. We're just returning safe and
        //       sane values. Currently nodefs and rawfs replace these defaults,
        //       other file systems leave them alone.
        var rtn = {
          bsize: 4096,
          frsize: 4096,
          blocks: 1e6,
          bfree: 5e5,
          bavail: 5e5,
          files: FS.nextInode,
          ffree: FS.nextInode - 1,
          fsid: 42,
          flags: 2,
          namelen: 255,
        };
  
        if (node.node_ops.statfs) {
          Object.assign(rtn, node.node_ops.statfs(node.mount.opts.root));
        }
        return rtn;
      },
  create(path, mode = 0o666) {
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
  mkdir(path, mode = 0o777) {
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
  mkdirTree(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },
  mkdev(path, mode, dev) {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 0o666;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
  symlink(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
  rename(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existent directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
          // update old node (we do this here to avoid each backend
          // needing to)
          old_node.parent = new_dir;
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },
  rmdir(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },
  readdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        var readdir = FS.checkOpExists(node.node_ops.readdir, 54);
        return readdir(node);
      },
  unlink(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },
  readlink(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return link.node_ops.readlink(link);
      },
  stat(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        var getattr = FS.checkOpExists(node.node_ops.getattr, 63);
        return getattr(node);
      },
  fstat(fd) {
        var stream = FS.getStreamChecked(fd);
        var node = stream.node;
        var getattr = stream.stream_ops.getattr;
        var arg = getattr ? stream : node;
        getattr ??= node.node_ops.getattr;
        FS.checkOpExists(getattr, 63)
        return getattr(arg);
      },
  lstat(path) {
        return FS.stat(path, true);
      },
  doChmod(stream, node, mode, dontFollow) {
        FS.doSetAttr(stream, node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          ctime: Date.now(),
          dontFollow
        });
      },
  chmod(path, mode, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doChmod(null, node, mode, dontFollow);
      },
  lchmod(path, mode) {
        FS.chmod(path, mode, true);
      },
  fchmod(fd, mode) {
        var stream = FS.getStreamChecked(fd);
        FS.doChmod(stream, stream.node, mode, false);
      },
  doChown(stream, node, dontFollow) {
        FS.doSetAttr(stream, node, {
          timestamp: Date.now(),
          dontFollow
          // we ignore the uid / gid for now
        });
      },
  chown(path, uid, gid, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doChown(null, node, dontFollow);
      },
  lchown(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
  fchown(fd, uid, gid) {
        var stream = FS.getStreamChecked(fd);
        FS.doChown(stream, stream.node, false);
      },
  doTruncate(stream, node, len) {
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.doSetAttr(stream, node, {
          size: len,
          timestamp: Date.now()
        });
      },
  truncate(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        FS.doTruncate(null, node, len);
      },
  ftruncate(fd, len) {
        var stream = FS.getStreamChecked(fd);
        if (len < 0 || (stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.doTruncate(stream, stream.node, len);
      },
  utime(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        var setattr = FS.checkOpExists(node.node_ops.setattr, 63);
        setattr(node, {
          atime: atime,
          mtime: mtime
        });
      },
  open(path, flags, mode = 0o666) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == 'string' ? FS_modeStringToFlags(flags) : flags;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        var isDirPath;
        if (typeof path == 'object') {
          node = path;
        } else {
          isDirPath = path.endsWith("/");
          // noent_okay makes it so that if the final component of the path
          // doesn't exist, lookupPath returns `node: undefined`. `path` will be
          // updated to point to the target of all symlinks.
          var lookup = FS.lookupPath(path, {
            follow: !(flags & 131072),
            noent_okay: true
          });
          node = lookup.node;
          path = lookup.path;
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else if (isDirPath) {
            throw new FS.ErrnoError(31);
          } else {
            // node doesn't exist, try to create it
            // Ignore the permission bits here to ensure we can `open` this new
            // file below. We use chmod below the apply the permissions once the
            // file is open.
            node = FS.mknod(path, mode | 0o777, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512) && !created) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        });
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (created) {
          FS.chmod(node, mode & 0o777);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },
  close(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
  isClosed(stream) {
        return stream.fd === null;
      },
  llseek(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
  read(stream, buffer, offset, length, position) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },
  write(stream, buffer, offset, length, position, canOwn) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },
  allocate(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
  mmap(stream, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        if (!length) {
          throw new FS.ErrnoError(28);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },
  msync(stream, buffer, offset, length, mmapFlags) {
        assert(offset >= 0);
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },
  ioctl(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
  readFile(path, opts = {}) {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error(`Invalid encoding type "${opts.encoding}"`);
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
  writeFile(path, data, opts = {}) {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },
  cwd:() => FS.currentPath,
  chdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
  createDefaultDirectories() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },
  createDefaultDevices() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
          llseek: () => 0,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        // use a buffer to avoid overhead of individual crypto calls per byte
        var randomBuffer = new Uint8Array(1024), randomLeft = 0;
        var randomByte = () => {
          if (randomLeft === 0) {
            randomFill(randomBuffer);
            randomLeft = randomBuffer.byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice('/dev', 'random', randomByte);
        FS.createDevice('/dev', 'urandom', randomByte);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },
  createSpecialDirectories() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount() {
            var node = FS.createNode(proc_self, 'fd', 16895, 73);
            node.stream_ops = {
              llseek: MEMFS.stream_ops.llseek,
            };
            node.node_ops = {
              lookup(parent, name) {
                var fd = +name;
                var stream = FS.getStreamChecked(fd);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: () => stream.path },
                  id: fd + 1,
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              },
              readdir() {
                return Array.from(FS.streams.entries())
                  .filter(([k, v]) => v)
                  .map(([k, v]) => k.toString());
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },
  createStandardStreams(input, output, error) {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (input) {
          FS.createDevice('/dev', 'stdin', input);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (output) {
          FS.createDevice('/dev', 'stdout', null, output);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (error) {
          FS.createDevice('/dev', 'stderr', null, error);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
        assert(stdin.fd === 0, `invalid handle for stdin (${stdin.fd})`);
        assert(stdout.fd === 1, `invalid handle for stdout (${stdout.fd})`);
        assert(stderr.fd === 2, `invalid handle for stderr (${stderr.fd})`);
      },
  staticInit() {
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },
  init(input, output, error) {
        assert(!FS.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.initialized = true;
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        input ??= Module['stdin'];
        output ??= Module['stdout'];
        error ??= Module['stderr'];
  
        FS.createStandardStreams(input, output, error);
      },
  quit() {
        FS.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        _fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
  findObject(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },
  analyzePath(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },
  createPath(parent, path, canRead, canWrite) {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },
  createFile(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        var path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS_getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data == 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
      },
  createDevice(parent, name, input, output) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(!!input, !!output);
        FS.createDevice.major ??= 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open(stream) {
            stream.seekable = false;
          },
          close(stream) {
            // flush any pending line data
            if (output?.buffer?.length) {
              output(10);
            }
          },
          read(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.atime = Date.now();
            }
            return bytesRead;
          },
          write(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.mtime = stream.node.ctime = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
  forceLoadFile(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else { // Command-line.
          try {
            obj.contents = readBinary(obj.url);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
      },
  createLazyFile(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array).
        // Actual getting is abstracted away for eventual reuse.
        class LazyUint8Array {
          lengthKnown = false;
          chunks = []; // Loaded chunks. Index is the chunk number
          get(idx) {
            if (idx > this.length-1 || idx < 0) {
              return undefined;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = (idx / this.chunkSize)|0;
            return this.getter(chunkNum)[chunkOffset];
          }
          setDataGetter(getter) {
            this.getter = getter;
          }
          cacheLength() {
            // Find length
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
            var chunkSize = 1024*1024; // Chunk size in bytes
  
            if (!hasByteServing) chunkSize = datalength;
  
            // Function to get a range from the remote URL.
            var doXHR = (from, to) => {
              if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
              if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
              // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
              var xhr = new XMLHttpRequest();
              xhr.open('GET', url, false);
              if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
              // Some hints to the browser that we want binary data.
              xhr.responseType = 'arraybuffer';
              if (xhr.overrideMimeType) {
                xhr.overrideMimeType('text/plain; charset=x-user-defined');
              }
  
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
              if (xhr.response !== undefined) {
                return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
              }
              return intArrayFromString(xhr.responseText || '', true);
            };
            var lazyArray = this;
            lazyArray.setDataGetter((chunkNum) => {
              var start = chunkNum * chunkSize;
              var end = (chunkNum+1) * chunkSize - 1; // including this byte
              end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
                lazyArray.chunks[chunkNum] = doXHR(start, end);
              }
              if (typeof lazyArray.chunks[chunkNum] == 'undefined') throw new Error('doXHR failed!');
              return lazyArray.chunks[chunkNum];
            });
  
            if (usesGzip || !datalength) {
              // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
              chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
              datalength = this.getter(0).length;
              chunkSize = datalength;
              out("LazyFiles on gzip forces download of the whole file when length is accessed");
            }
  
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true;
          }
          get length() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._length;
          }
          get chunkSize() {
            if (!this.lengthKnown) {
              this.cacheLength();
            }
            return this._chunkSize;
          }
        }
  
        if (typeof XMLHttpRequest != 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          var fn = node.stream_ops[key];
          stream_ops[key] = (...args) => {
            FS.forceLoadFile(node);
            return fn(...args);
          };
        });
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        // use a custom read function
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position)
        };
        // use a custom mmap function
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc(length);
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      },
  absolutePath() {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },
  createFolder() {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },
  createLink() {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },
  joinPath() {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },
  mmapAlloc() {
        abort('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
      },
  standardizePath() {
        abort('FS.standardizePath has been removed; use PATH.normalize instead');
      },
  };
  
  var SYSCALLS = {
  DEFAULT_POLLMASK:5,
  calculateAt(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return dir + '/' + path;
      },
  writeStat(buf, stat) {
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(4))>>2)] = stat.mode;
        HEAPU32[(((buf)+(8))>>2)] = stat.nlink;
        HEAP32[(((buf)+(12))>>2)] = stat.uid;
        HEAP32[(((buf)+(16))>>2)] = stat.gid;
        HEAP32[(((buf)+(20))>>2)] = stat.rdev;
        HEAP64[(((buf)+(24))>>3)] = BigInt(stat.size);
        HEAP32[(((buf)+(32))>>2)] = 4096;
        HEAP32[(((buf)+(36))>>2)] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        HEAP64[(((buf)+(40))>>3)] = BigInt(Math.floor(atime / 1000));
        HEAPU32[(((buf)+(48))>>2)] = (atime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(56))>>3)] = BigInt(Math.floor(mtime / 1000));
        HEAPU32[(((buf)+(64))>>2)] = (mtime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(72))>>3)] = BigInt(Math.floor(ctime / 1000));
        HEAPU32[(((buf)+(80))>>2)] = (ctime % 1000) * 1000 * 1000;
        HEAP64[(((buf)+(88))>>3)] = BigInt(stat.ino);
        return 0;
      },
  writeStatFs(buf, stats) {
        HEAP32[(((buf)+(4))>>2)] = stats.bsize;
        HEAP32[(((buf)+(40))>>2)] = stats.bsize;
        HEAP32[(((buf)+(8))>>2)] = stats.blocks;
        HEAP32[(((buf)+(12))>>2)] = stats.bfree;
        HEAP32[(((buf)+(16))>>2)] = stats.bavail;
        HEAP32[(((buf)+(20))>>2)] = stats.files;
        HEAP32[(((buf)+(24))>>2)] = stats.ffree;
        HEAP32[(((buf)+(28))>>2)] = stats.fsid;
        HEAP32[(((buf)+(44))>>2)] = stats.flags;  // ST_NOSUID
        HEAP32[(((buf)+(36))>>2)] = stats.namelen;
      },
  doMsync(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          // MAP_PRIVATE calls need not to be synced back to underlying fs
          return 0;
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },
  getStreamFromFD(fd) {
        var stream = FS.getStreamChecked(fd);
        return stream;
      },
  varargs:undefined,
  getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
  };
  function ___syscall_faccessat(dirfd, path, amode, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      assert(flags === 0 || flags == 512);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (amode & ~7) {
        // need a valid mode
        return -28;
      }
      var lookup = FS.lookupPath(path, { follow: true });
      var node = lookup.node;
      if (!node) {
        return -44;
      }
      var perms = '';
      if (amode & 4) perms += 'r';
      if (amode & 2) perms += 'w';
      if (amode & 1) perms += 'x';
      if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
        return -2;
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  /** @suppress {duplicate } */
  var syscallGetVarargI = () => {
      assert(SYSCALLS.varargs != undefined);
      // the `+` prepended here is necessary to convince the JSCompiler that varargs is indeed a number.
      var ret = HEAP32[((+SYSCALLS.varargs)>>2)];
      SYSCALLS.varargs += 4;
      return ret;
    };
  var syscallGetVarargP = syscallGetVarargI;
  
  
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = syscallGetVarargI();
          if (arg < 0) {
            return -28;
          }
          while (FS.streams[arg]) {
            arg++;
          }
          var newStream;
          newStream = FS.dupStream(stream, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = syscallGetVarargI();
          stream.flags |= arg;
          return 0;
        }
        case 12: {
          var arg = syscallGetVarargP();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 13:
        case 14:
          return 0; // Pretend that the locking is successful.
      }
      return -28;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
      assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    };
  function ___syscall_getcwd(buf, size) {
  try {
  
      if (size === 0) return -28;
      var cwd = FS.cwd();
      var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
      if (size < cwdLengthInBytes) return -68;
      stringToUTF8(cwd, buf, size);
      return cwdLengthInBytes;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21505: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcgets) {
            var termios = stream.tty.ops.ioctl_tcgets(stream);
            var argp = syscallGetVarargP();
            HEAP32[((argp)>>2)] = termios.c_iflag || 0;
            HEAP32[(((argp)+(4))>>2)] = termios.c_oflag || 0;
            HEAP32[(((argp)+(8))>>2)] = termios.c_cflag || 0;
            HEAP32[(((argp)+(12))>>2)] = termios.c_lflag || 0;
            for (var i = 0; i < 32; i++) {
              HEAP8[(argp + i)+(17)] = termios.c_cc[i] || 0;
            }
            return 0;
          }
          return 0;
        }
        case 21510:
        case 21511:
        case 21512: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcsets) {
            var argp = syscallGetVarargP();
            var c_iflag = HEAP32[((argp)>>2)];
            var c_oflag = HEAP32[(((argp)+(4))>>2)];
            var c_cflag = HEAP32[(((argp)+(8))>>2)];
            var c_lflag = HEAP32[(((argp)+(12))>>2)];
            var c_cc = []
            for (var i = 0; i < 32; i++) {
              c_cc.push(HEAP8[(argp + i)+(17)]);
            }
            return stream.tty.ops.ioctl_tcsets(stream.tty, op, { c_iflag, c_oflag, c_cflag, c_lflag, c_cc });
          }
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = syscallGetVarargP();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = syscallGetVarargP();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tiocgwinsz) {
            var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
            var argp = syscallGetVarargP();
            HEAP16[((argp)>>1)] = winsize[0];
            HEAP16[(((argp)+(2))>>1)] = winsize[1];
          }
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        case 21515: {
          if (!stream.tty) return -59;
          return 0;
        }
        default: return -28; // not supported
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  
  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      var mode = varargs ? syscallGetVarargI() : 0;
      return FS.open(path, flags, mode).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var __abort_js = () =>
      abort('native code called abort()');

  var _emscripten_get_now = () => performance.now();
  
  var _emscripten_date_now = () => Date.now();
  
  var nowIsMonotonic = 1;
  
  var checkWasiClock = (clock_id) => clock_id >= 0 && clock_id <= 3;
  
  var INT53_MAX = 9007199254740992;
  
  var INT53_MIN = -9007199254740992;
  var bigintToI53Checked = (num) => (num < INT53_MIN || num > INT53_MAX) ? NaN : Number(num);
  function _clock_time_get(clk_id, ignored_precision, ptime) {
    ignored_precision = bigintToI53Checked(ignored_precision);
  
    
      if (!checkWasiClock(clk_id)) {
        return 28;
      }
      var now;
      // all wasi clocks but realtime are monotonic
      if (clk_id === 0) {
        now = _emscripten_date_now();
      } else if (nowIsMonotonic) {
        now = _emscripten_get_now();
      } else {
        return 52;
      }
      // "now" is in ms, and wasi times are in ns.
      var nsec = Math.round(now * 1000 * 1000);
      HEAP64[((ptime)>>3)] = BigInt(nsec);
      return 0;
    ;
  }

  var readEmAsmArgsArray = [];
  var readEmAsmArgs = (sigPtr, buf) => {
      // Nobody should have mutated _readEmAsmArgsArray underneath us to be something else than an array.
      assert(Array.isArray(readEmAsmArgsArray));
      // The input buffer is allocated on the stack, so it must be stack-aligned.
      assert(buf % 16 == 0);
      readEmAsmArgsArray.length = 0;
      var ch;
      // Most arguments are i32s, so shift the buffer pointer so it is a plain
      // index into HEAP32.
      while (ch = HEAPU8[sigPtr++]) {
        var chr = String.fromCharCode(ch);
        var validChars = ['d', 'f', 'i', 'p'];
        // In WASM_BIGINT mode we support passing i64 values as bigint.
        validChars.push('j');
        assert(validChars.includes(chr), `Invalid character ${ch}("${chr}") in readEmAsmArgs! Use only [${validChars}], and do not specify "v" for void return argument.`);
        // Floats are always passed as doubles, so all types except for 'i'
        // are 8 bytes and require alignment.
        var wide = (ch != 105);
        wide &= (ch != 112);
        buf += wide && (buf % 8) ? 4 : 0;
        readEmAsmArgsArray.push(
          // Special case for pointers under wasm64 or CAN_ADDRESS_2GB mode.
          ch == 112 ? HEAPU32[((buf)>>2)] :
          ch == 106 ? HEAP64[((buf)>>3)] :
          ch == 105 ?
            HEAP32[((buf)>>2)] :
            HEAPF64[((buf)>>3)]
        );
        buf += wide ? 8 : 4;
      }
      return readEmAsmArgsArray;
    };
  var runEmAsmFunction = (code, sigPtr, argbuf) => {
      var args = readEmAsmArgs(sigPtr, argbuf);
      assert(ASM_CONSTS.hasOwnProperty(code), `No EM_ASM constant found at address ${code}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`);
      return ASM_CONSTS[code](...args);
    };
  var _emscripten_asm_const_int = (code, sigPtr, argbuf) => {
      return runEmAsmFunction(code, sigPtr, argbuf);
    };


  var onExits = [];
  var addOnExit = (cb) => onExits.unshift(cb);
  var JSEvents = {
  memcpy(target, src, size) {
        HEAP8.set(HEAP8.subarray(src, src + size), target);
      },
  removeAllEventListeners() {
        while (JSEvents.eventHandlers.length) {
          JSEvents._removeHandler(JSEvents.eventHandlers.length - 1);
        }
        JSEvents.deferredCalls = [];
      },
  inEventHandler:0,
  deferredCalls:[],
  deferCall(targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
          if (arrA.length != arrB.length) return false;
  
          for (var i in arrA) {
            if (arrA[i] != arrB[i]) return false;
          }
          return true;
        }
        // Test if the given call was already queued, and if so, don't add it again.
        for (var call of JSEvents.deferredCalls) {
          if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
            return;
          }
        }
        JSEvents.deferredCalls.push({
          targetFunction,
          precedence,
          argsList
        });
  
        JSEvents.deferredCalls.sort((x,y) => x.precedence < y.precedence);
      },
  removeDeferredCalls(targetFunction) {
        JSEvents.deferredCalls = JSEvents.deferredCalls.filter((call) => call.targetFunction != targetFunction);
      },
  canPerformEventHandlerRequests() {
        if (navigator.userActivation) {
          // Verify against transient activation status from UserActivation API
          // whether it is possible to perform a request here without needing to defer. See
          // https://developer.mozilla.org/en-US/docs/Web/Security/User_activation#transient_activation
          // and https://caniuse.com/mdn-api_useractivation
          // At the time of writing, Firefox does not support this API: https://bugzilla.mozilla.org/show_bug.cgi?id=1791079
          return navigator.userActivation.isActive;
        }
  
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
      },
  runDeferredCalls() {
        if (!JSEvents.canPerformEventHandlerRequests()) {
          return;
        }
        var deferredCalls = JSEvents.deferredCalls;
        JSEvents.deferredCalls = [];
        for (var call of deferredCalls) {
          call.targetFunction(...call.argsList);
        }
      },
  eventHandlers:[],
  removeAllHandlersOnTarget:(target, eventTypeString) => {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
          if (JSEvents.eventHandlers[i].target == target &&
            (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
             JSEvents._removeHandler(i--);
           }
        }
      },
  _removeHandler(i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1);
      },
  registerOrRemoveHandler(eventHandler) {
        if (!eventHandler.target) {
          err('registerOrRemoveHandler: the target element for event handler registration does not exist, when processing the following event handler registration:');
          console.dir(eventHandler);
          return -4;
        }
        if (eventHandler.callbackfunc) {
          eventHandler.eventListenerFunc = function(event) {
            // Increment nesting count for the event handler.
            ++JSEvents.inEventHandler;
            JSEvents.currentEventHandler = eventHandler;
            // Process any old deferred calls the user has placed.
            JSEvents.runDeferredCalls();
            // Process the actual event, calls back to user C code handler.
            eventHandler.handlerFunc(event);
            // Process any new deferred calls that were placed right now from this event handler.
            JSEvents.runDeferredCalls();
            // Out of event handler - restore nesting count.
            --JSEvents.inEventHandler;
          };
  
          eventHandler.target.addEventListener(eventHandler.eventTypeString,
                                               eventHandler.eventListenerFunc,
                                               eventHandler.useCapture);
          JSEvents.eventHandlers.push(eventHandler);
        } else {
          for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == eventHandler.target
             && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
               JSEvents._removeHandler(i--);
             }
          }
        }
        return 0;
      },
  getNodeNameForTarget(target) {
        if (!target) return '';
        if (target == window) return '#window';
        if (target == screen) return '#screen';
        return target?.nodeName || '';
      },
  fullscreenEnabled() {
        return document.fullscreenEnabled
        // Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitFullscreenEnabled.
        // TODO: If Safari at some point ships with unprefixed version, update the version check above.
        || document.webkitFullscreenEnabled
         ;
      },
  };
  
  var maybeCStringToJsString = (cString) => {
      // "cString > 2" checks if the input is a number, and isn't of the special
      // values we accept here, EMSCRIPTEN_EVENT_TARGET_* (which map to 0, 1, 2).
      // In other words, if cString > 2 then it's a pointer to a valid place in
      // memory, and points to a C string.
      return cString > 2 ? UTF8ToString(cString) : cString;
    };
  
  /** @type {Object} */
  var specialHTMLTargets = [0, typeof document != 'undefined' ? document : 0, typeof window != 'undefined' ? window : 0];
  var findEventTarget = (target) => {
      target = maybeCStringToJsString(target);
      var domElement = specialHTMLTargets[target] || (typeof document != 'undefined' ? document.querySelector(target) : null);
      return domElement;
    };
  
  var getBoundingClientRect = (e) => specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : {'left':0,'top':0};
  var _emscripten_get_element_css_size = (target, width, height) => {
      target = findEventTarget(target);
      if (!target) return -4;
  
      var rect = getBoundingClientRect(target);
      HEAPF64[((width)>>3)] = rect.width;
      HEAPF64[((height)>>3)] = rect.height;
  
      return 0;
    };

  
  var fillGamepadEventData = (eventStruct, e) => {
      HEAPF64[((eventStruct)>>3)] = e.timestamp;
      for (var i = 0; i < e.axes.length; ++i) {
        HEAPF64[(((eventStruct+i*8)+(16))>>3)] = e.axes[i];
      }
      for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof e.buttons[i] == 'object') {
          HEAPF64[(((eventStruct+i*8)+(528))>>3)] = e.buttons[i].value;
        } else {
          HEAPF64[(((eventStruct+i*8)+(528))>>3)] = e.buttons[i];
        }
      }
      for (var i = 0; i < e.buttons.length; ++i) {
        if (typeof e.buttons[i] == 'object') {
          HEAP8[(eventStruct+i)+(1040)] = e.buttons[i].pressed;
        } else {
          // Assigning a boolean to HEAP32, that's ok, but Closure would like to warn about it:
          /** @suppress {checkTypes} */
          HEAP8[(eventStruct+i)+(1040)] = e.buttons[i] == 1;
        }
      }
      HEAP8[(eventStruct)+(1104)] = e.connected;
      HEAP32[(((eventStruct)+(1108))>>2)] = e.index;
      HEAP32[(((eventStruct)+(8))>>2)] = e.axes.length;
      HEAP32[(((eventStruct)+(12))>>2)] = e.buttons.length;
      stringToUTF8(e.id, eventStruct + 1112, 64);
      stringToUTF8(e.mapping, eventStruct + 1176, 64);
    };
  var _emscripten_get_gamepad_status = (index, gamepadState) => {
      if (!JSEvents.lastGamepadState) throw 'emscripten_get_gamepad_status() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!';
      // INVALID_PARAM is returned on a Gamepad index that never was there.
      if (index < 0 || index >= JSEvents.lastGamepadState.length) return -5;
  
      // NO_DATA is returned on a Gamepad index that was removed.
      // For previously disconnected gamepads there should be an empty slot (null/undefined/false) at the index.
      // This is because gamepads must keep their original position in the array.
      // For example, removing the first of two gamepads produces [null/undefined/false, gamepad].
      if (!JSEvents.lastGamepadState[index]) return -7;
  
      fillGamepadEventData(gamepadState, JSEvents.lastGamepadState[index]);
      return 0;
    };


  var _emscripten_get_num_gamepads = () => {
      if (!JSEvents.lastGamepadState) throw 'emscripten_get_num_gamepads() can only be called after having first called emscripten_sample_gamepad_data() and that function has returned EMSCRIPTEN_RESULT_SUCCESS!';
      // N.B. Do not call emscripten_get_num_gamepads() unless having first called emscripten_sample_gamepad_data(), and that has returned EMSCRIPTEN_RESULT_SUCCESS.
      // Otherwise the following line will throw an exception.
      return JSEvents.lastGamepadState.length;
    };

  var GLctx;
  
  var webgl_enable_ANGLE_instanced_arrays = (ctx) => {
      // Extension available in WebGL 1 from Firefox 26 and Google Chrome 30 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('ANGLE_instanced_arrays');
      // Because this extension is a core function in WebGL 2, assign the extension entry points in place of
      // where the core functions will reside in WebGL 2. This way the calling code can call these without
      // having to dynamically branch depending if running against WebGL 1 or WebGL 2.
      if (ext) {
        ctx['vertexAttribDivisor'] = (index, divisor) => ext['vertexAttribDivisorANGLE'](index, divisor);
        ctx['drawArraysInstanced'] = (mode, first, count, primcount) => ext['drawArraysInstancedANGLE'](mode, first, count, primcount);
        ctx['drawElementsInstanced'] = (mode, count, type, indices, primcount) => ext['drawElementsInstancedANGLE'](mode, count, type, indices, primcount);
        return 1;
      }
    };
  
  var webgl_enable_OES_vertex_array_object = (ctx) => {
      // Extension available in WebGL 1 from Firefox 25 and WebKit 536.28/desktop Safari 6.0.3 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('OES_vertex_array_object');
      if (ext) {
        ctx['createVertexArray'] = () => ext['createVertexArrayOES']();
        ctx['deleteVertexArray'] = (vao) => ext['deleteVertexArrayOES'](vao);
        ctx['bindVertexArray'] = (vao) => ext['bindVertexArrayOES'](vao);
        ctx['isVertexArray'] = (vao) => ext['isVertexArrayOES'](vao);
        return 1;
      }
    };
  
  var webgl_enable_WEBGL_draw_buffers = (ctx) => {
      // Extension available in WebGL 1 from Firefox 28 onwards. Core feature in WebGL 2.
      var ext = ctx.getExtension('WEBGL_draw_buffers');
      if (ext) {
        ctx['drawBuffers'] = (n, bufs) => ext['drawBuffersWEBGL'](n, bufs);
        return 1;
      }
    };
  
  var webgl_enable_EXT_polygon_offset_clamp = (ctx) =>
      !!(ctx.extPolygonOffsetClamp = ctx.getExtension('EXT_polygon_offset_clamp'));
  
  var webgl_enable_EXT_clip_control = (ctx) =>
      !!(ctx.extClipControl = ctx.getExtension('EXT_clip_control'));
  
  var webgl_enable_WEBGL_polygon_mode = (ctx) =>
      !!(ctx.webglPolygonMode = ctx.getExtension('WEBGL_polygon_mode'));
  
  var webgl_enable_WEBGL_multi_draw = (ctx) =>
      // Closure is expected to be allowed to minify the '.multiDrawWebgl' property, so not accessing it quoted.
      !!(ctx.multiDrawWebgl = ctx.getExtension('WEBGL_multi_draw'));
  
  var getEmscriptenSupportedExtensions = (ctx) => {
      // Restrict the list of advertised extensions to those that we actually
      // support.
      var supportedExtensions = [
        // WebGL 1 extensions
        'ANGLE_instanced_arrays',
        'EXT_blend_minmax',
        'EXT_disjoint_timer_query',
        'EXT_frag_depth',
        'EXT_shader_texture_lod',
        'EXT_sRGB',
        'OES_element_index_uint',
        'OES_fbo_render_mipmap',
        'OES_standard_derivatives',
        'OES_texture_float',
        'OES_texture_half_float',
        'OES_texture_half_float_linear',
        'OES_vertex_array_object',
        'WEBGL_color_buffer_float',
        'WEBGL_depth_texture',
        'WEBGL_draw_buffers',
        // WebGL 1 and WebGL 2 extensions
        'EXT_clip_control',
        'EXT_color_buffer_half_float',
        'EXT_depth_clamp',
        'EXT_float_blend',
        'EXT_polygon_offset_clamp',
        'EXT_texture_compression_bptc',
        'EXT_texture_compression_rgtc',
        'EXT_texture_filter_anisotropic',
        'KHR_parallel_shader_compile',
        'OES_texture_float_linear',
        'WEBGL_blend_func_extended',
        'WEBGL_compressed_texture_astc',
        'WEBGL_compressed_texture_etc',
        'WEBGL_compressed_texture_etc1',
        'WEBGL_compressed_texture_s3tc',
        'WEBGL_compressed_texture_s3tc_srgb',
        'WEBGL_debug_renderer_info',
        'WEBGL_debug_shaders',
        'WEBGL_lose_context',
        'WEBGL_multi_draw',
        'WEBGL_polygon_mode'
      ];
      // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.
      return (ctx.getSupportedExtensions() || []).filter(ext => supportedExtensions.includes(ext));
    };
  
  
  var GL = {
  counter:1,
  buffers:[],
  programs:[],
  framebuffers:[],
  renderbuffers:[],
  textures:[],
  shaders:[],
  vaos:[],
  contexts:[],
  offscreenCanvases:{
  },
  queries:[],
  stringCache:{
  },
  unpackAlignment:4,
  unpackRowLength:0,
  recordError:(errorCode) => {
        if (!GL.lastError) {
          GL.lastError = errorCode;
        }
      },
  getNewId:(table) => {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
          table[i] = null;
        }
        return ret;
      },
  genObject:(n, buffers, createFunction, objectTable
        ) => {
        for (var i = 0; i < n; i++) {
          var buffer = GLctx[createFunction]();
          var id = buffer && GL.getNewId(objectTable);
          if (buffer) {
            buffer.name = id;
            objectTable[id] = buffer;
          } else {
            GL.recordError(0x502 /* GL_INVALID_OPERATION */);
          }
          HEAP32[(((buffers)+(i*4))>>2)] = id;
        }
      },
  getSource:(shader, count, string, length) => {
        var source = '';
        for (var i = 0; i < count; ++i) {
          var len = length ? HEAPU32[(((length)+(i*4))>>2)] : undefined;
          source += UTF8ToString(HEAPU32[(((string)+(i*4))>>2)], len);
        }
        return source;
      },
  createContext:(/** @type {HTMLCanvasElement} */ canvas, webGLContextAttributes) => {
  
        // BUG: Workaround Safari WebGL issue: After successfully acquiring WebGL
        // context on a canvas, calling .getContext() will always return that
        // context independent of which 'webgl' or 'webgl2'
        // context version was passed. See:
        //   https://bugs.webkit.org/show_bug.cgi?id=222758
        // and:
        //   https://github.com/emscripten-core/emscripten/issues/13295.
        // TODO: Once the bug is fixed and shipped in Safari, adjust the Safari
        // version field in above check.
        if (!canvas.getContextSafariWebGL2Fixed) {
          canvas.getContextSafariWebGL2Fixed = canvas.getContext;
          /** @type {function(this:HTMLCanvasElement, string, (Object|null)=): (Object|null)} */
          function fixedGetContext(ver, attrs) {
            var gl = canvas.getContextSafariWebGL2Fixed(ver, attrs);
            return ((ver == 'webgl') == (gl instanceof WebGLRenderingContext)) ? gl : null;
          }
          canvas.getContext = fixedGetContext;
        }
  
        var ctx =
          (canvas.getContext("webgl", webGLContextAttributes)
            // https://caniuse.com/#feat=webgl
            );
  
        if (!ctx) return 0;
  
        var handle = GL.registerContext(ctx, webGLContextAttributes);
  
        return handle;
      },
  registerContext:(ctx, webGLContextAttributes) => {
        // without pthreads a context is just an integer ID
        var handle = GL.getNewId(GL.contexts);
  
        var context = {
          handle,
          attributes: webGLContextAttributes,
          version: webGLContextAttributes.majorVersion,
          GLctx: ctx
        };
  
        // Store the created context object so that we can access the context
        // given a canvas without having to pass the parameters again.
        if (ctx.canvas) ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault == 'undefined' || webGLContextAttributes.enableExtensionsByDefault) {
          GL.initExtensions(context);
        }
  
        return handle;
      },
  makeContextCurrent:(contextHandle) => {
  
        // Active Emscripten GL layer context object.
        GL.currentContext = GL.contexts[contextHandle];
        // Active WebGL context object.
        Module['ctx'] = GLctx = GL.currentContext?.GLctx;
        return !(contextHandle && !GLctx);
      },
  getContext:(contextHandle) => {
        return GL.contexts[contextHandle];
      },
  deleteContext:(contextHandle) => {
        if (GL.currentContext === GL.contexts[contextHandle]) {
          GL.currentContext = null;
        }
        if (typeof JSEvents == 'object') {
          // Release all JS event handlers on the DOM element that the GL context is
          // associated with since the context is now deleted.
          JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
        }
        // Make sure the canvas object no longer refers to the context object so
        // there are no GC surprises.
        if (GL.contexts[contextHandle]?.GLctx.canvas) {
          GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
        }
        GL.contexts[contextHandle] = null;
      },
  initExtensions:(context) => {
        // If this function is called without a specific context object, init the
        // extensions of the currently active context.
        context ||= GL.currentContext;
  
        if (context.initExtensionsDone) return;
        context.initExtensionsDone = true;
  
        var GLctx = context.GLctx;
  
        // Detect the presence of a few extensions manually, ction GL interop
        // layer itself will need to know if they exist.
  
        // Extensions that are available in both WebGL 1 and WebGL 2
        webgl_enable_WEBGL_multi_draw(GLctx);
        webgl_enable_EXT_polygon_offset_clamp(GLctx);
        webgl_enable_EXT_clip_control(GLctx);
        webgl_enable_WEBGL_polygon_mode(GLctx);
        // Extensions that are only available in WebGL 1 (the calls will be no-ops
        // if called on a WebGL 2 context active)
        webgl_enable_ANGLE_instanced_arrays(GLctx);
        webgl_enable_OES_vertex_array_object(GLctx);
        webgl_enable_WEBGL_draw_buffers(GLctx);
        {
          GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
        }
  
        getEmscriptenSupportedExtensions(GLctx).forEach((ext) => {
          // WEBGL_lose_context, WEBGL_debug_renderer_info and WEBGL_debug_shaders
          // are not enabled by default.
          if (!ext.includes('lose_context') && !ext.includes('debug')) {
            // Call .getExtension() to enable that extension permanently.
            GLctx.getExtension(ext);
          }
        });
      },
  };
  /** @suppress {duplicate } */
  var _glActiveTexture = (x0) => GLctx.activeTexture(x0);
  var _emscripten_glActiveTexture = _glActiveTexture;

  /** @suppress {duplicate } */
  var _glAttachShader = (program, shader) => {
      GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
    };
  var _emscripten_glAttachShader = _glAttachShader;

  /** @suppress {duplicate } */
  var _glBeginQueryEXT = (target, id) => {
      GLctx.disjointTimerQueryExt['beginQueryEXT'](target, GL.queries[id]);
    };
  var _emscripten_glBeginQueryEXT = _glBeginQueryEXT;

  
  /** @suppress {duplicate } */
  var _glBindAttribLocation = (program, index, name) => {
      GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name));
    };
  var _emscripten_glBindAttribLocation = _glBindAttribLocation;

  /** @suppress {duplicate } */
  var _glBindBuffer = (target, buffer) => {
  
      GLctx.bindBuffer(target, GL.buffers[buffer]);
    };
  var _emscripten_glBindBuffer = _glBindBuffer;

  /** @suppress {duplicate } */
  var _glBindFramebuffer = (target, framebuffer) => {
  
      GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer]);
  
    };
  var _emscripten_glBindFramebuffer = _glBindFramebuffer;

  /** @suppress {duplicate } */
  var _glBindRenderbuffer = (target, renderbuffer) => {
      GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
    };
  var _emscripten_glBindRenderbuffer = _glBindRenderbuffer;

  /** @suppress {duplicate } */
  var _glBindTexture = (target, texture) => {
      GLctx.bindTexture(target, GL.textures[texture]);
    };
  var _emscripten_glBindTexture = _glBindTexture;

  
  /** @suppress {duplicate } */
  var _glBindVertexArray = (vao) => {
      GLctx.bindVertexArray(GL.vaos[vao]);
    };
  /** @suppress {duplicate } */
  var _glBindVertexArrayOES = _glBindVertexArray;
  var _emscripten_glBindVertexArrayOES = _glBindVertexArrayOES;

  /** @suppress {duplicate } */
  var _glBlendColor = (x0, x1, x2, x3) => GLctx.blendColor(x0, x1, x2, x3);
  var _emscripten_glBlendColor = _glBlendColor;

  /** @suppress {duplicate } */
  var _glBlendEquation = (x0) => GLctx.blendEquation(x0);
  var _emscripten_glBlendEquation = _glBlendEquation;

  /** @suppress {duplicate } */
  var _glBlendEquationSeparate = (x0, x1) => GLctx.blendEquationSeparate(x0, x1);
  var _emscripten_glBlendEquationSeparate = _glBlendEquationSeparate;

  /** @suppress {duplicate } */
  var _glBlendFunc = (x0, x1) => GLctx.blendFunc(x0, x1);
  var _emscripten_glBlendFunc = _glBlendFunc;

  /** @suppress {duplicate } */
  var _glBlendFuncSeparate = (x0, x1, x2, x3) => GLctx.blendFuncSeparate(x0, x1, x2, x3);
  var _emscripten_glBlendFuncSeparate = _glBlendFuncSeparate;

  /** @suppress {duplicate } */
  var _glBufferData = (target, size, data, usage) => {
  
      // N.b. here first form specifies a heap subarray, second form an integer
      // size, so the ?: code here is polymorphic. It is advised to avoid
      // randomly mixing both uses in calling code, to avoid any potential JS
      // engine JIT issues.
      GLctx.bufferData(target, data ? HEAPU8.subarray(data, data+size) : size, usage);
    };
  var _emscripten_glBufferData = _glBufferData;

  /** @suppress {duplicate } */
  var _glBufferSubData = (target, offset, size, data) => {
      GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data+size));
    };
  var _emscripten_glBufferSubData = _glBufferSubData;

  /** @suppress {duplicate } */
  var _glCheckFramebufferStatus = (x0) => GLctx.checkFramebufferStatus(x0);
  var _emscripten_glCheckFramebufferStatus = _glCheckFramebufferStatus;

  /** @suppress {duplicate } */
  var _glClear = (x0) => GLctx.clear(x0);
  var _emscripten_glClear = _glClear;

  /** @suppress {duplicate } */
  var _glClearColor = (x0, x1, x2, x3) => GLctx.clearColor(x0, x1, x2, x3);
  var _emscripten_glClearColor = _glClearColor;

  /** @suppress {duplicate } */
  var _glClearDepthf = (x0) => GLctx.clearDepth(x0);
  var _emscripten_glClearDepthf = _glClearDepthf;

  /** @suppress {duplicate } */
  var _glClearStencil = (x0) => GLctx.clearStencil(x0);
  var _emscripten_glClearStencil = _glClearStencil;

  /** @suppress {duplicate } */
  var _glClipControlEXT = (origin, depth) => {
      GLctx.extClipControl['clipControlEXT'](origin, depth);
    };
  var _emscripten_glClipControlEXT = _glClipControlEXT;

  /** @suppress {duplicate } */
  var _glColorMask = (red, green, blue, alpha) => {
      GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
    };
  var _emscripten_glColorMask = _glColorMask;

  /** @suppress {duplicate } */
  var _glCompileShader = (shader) => {
      GLctx.compileShader(GL.shaders[shader]);
    };
  var _emscripten_glCompileShader = _glCompileShader;

  /** @suppress {duplicate } */
  var _glCompressedTexImage2D = (target, level, internalFormat, width, height, border, imageSize, data) => {
      // `data` may be null here, which means "allocate uniniitalized space but
      // don't upload" in GLES parlance, but `compressedTexImage2D` requires the
      // final data parameter, so we simply pass a heap view starting at zero
      // effectively uploading whatever happens to be near address zero.  See
      // https://github.com/emscripten-core/emscripten/issues/19300.
      GLctx.compressedTexImage2D(target, level, internalFormat, width, height, border, HEAPU8.subarray((data), data+imageSize));
    };
  var _emscripten_glCompressedTexImage2D = _glCompressedTexImage2D;

  /** @suppress {duplicate } */
  var _glCompressedTexSubImage2D = (target, level, xoffset, yoffset, width, height, format, imageSize, data) => {
      GLctx.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, HEAPU8.subarray((data), data+imageSize));
    };
  var _emscripten_glCompressedTexSubImage2D = _glCompressedTexSubImage2D;

  /** @suppress {duplicate } */
  var _glCopyTexImage2D = (x0, x1, x2, x3, x4, x5, x6, x7) => GLctx.copyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7);
  var _emscripten_glCopyTexImage2D = _glCopyTexImage2D;

  /** @suppress {duplicate } */
  var _glCopyTexSubImage2D = (x0, x1, x2, x3, x4, x5, x6, x7) => GLctx.copyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7);
  var _emscripten_glCopyTexSubImage2D = _glCopyTexSubImage2D;

  /** @suppress {duplicate } */
  var _glCreateProgram = () => {
      var id = GL.getNewId(GL.programs);
      var program = GLctx.createProgram();
      // Store additional information needed for each shader program:
      program.name = id;
      // Lazy cache results of
      // glGetProgramiv(GL_ACTIVE_UNIFORM_MAX_LENGTH/GL_ACTIVE_ATTRIBUTE_MAX_LENGTH/GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH)
      program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
      program.uniformIdCounter = 1;
      GL.programs[id] = program;
      return id;
    };
  var _emscripten_glCreateProgram = _glCreateProgram;

  /** @suppress {duplicate } */
  var _glCreateShader = (shaderType) => {
      var id = GL.getNewId(GL.shaders);
      GL.shaders[id] = GLctx.createShader(shaderType);
  
      return id;
    };
  var _emscripten_glCreateShader = _glCreateShader;

  /** @suppress {duplicate } */
  var _glCullFace = (x0) => GLctx.cullFace(x0);
  var _emscripten_glCullFace = _glCullFace;

  /** @suppress {duplicate } */
  var _glDeleteBuffers = (n, buffers) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((buffers)+(i*4))>>2)];
        var buffer = GL.buffers[id];
  
        // From spec: "glDeleteBuffers silently ignores 0's and names that do not
        // correspond to existing buffer objects."
        if (!buffer) continue;
  
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
  
      }
    };
  var _emscripten_glDeleteBuffers = _glDeleteBuffers;

  /** @suppress {duplicate } */
  var _glDeleteFramebuffers = (n, framebuffers) => {
      for (var i = 0; i < n; ++i) {
        var id = HEAP32[(((framebuffers)+(i*4))>>2)];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer) continue; // GL spec: "glDeleteFramebuffers silently ignores 0s and names that do not correspond to existing framebuffer objects".
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null;
      }
    };
  var _emscripten_glDeleteFramebuffers = _glDeleteFramebuffers;

  /** @suppress {duplicate } */
  var _glDeleteProgram = (id) => {
      if (!id) return;
      var program = GL.programs[id];
      if (!program) {
        // glDeleteProgram actually signals an error when deleting a nonexisting
        // object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteProgram(program);
      program.name = 0;
      GL.programs[id] = null;
    };
  var _emscripten_glDeleteProgram = _glDeleteProgram;

  /** @suppress {duplicate } */
  var _glDeleteQueriesEXT = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((ids)+(i*4))>>2)];
        var query = GL.queries[id];
        if (!query) continue; // GL spec: "unused names in ids are ignored, as is the name zero."
        GLctx.disjointTimerQueryExt['deleteQueryEXT'](query);
        GL.queries[id] = null;
      }
    };
  var _emscripten_glDeleteQueriesEXT = _glDeleteQueriesEXT;

  /** @suppress {duplicate } */
  var _glDeleteRenderbuffers = (n, renderbuffers) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((renderbuffers)+(i*4))>>2)];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer) continue; // GL spec: "glDeleteRenderbuffers silently ignores 0s and names that do not correspond to existing renderbuffer objects".
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null;
      }
    };
  var _emscripten_glDeleteRenderbuffers = _glDeleteRenderbuffers;

  /** @suppress {duplicate } */
  var _glDeleteShader = (id) => {
      if (!id) return;
      var shader = GL.shaders[id];
      if (!shader) {
        // glDeleteShader actually signals an error when deleting a nonexisting
        // object, unlike some other GL delete functions.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      GLctx.deleteShader(shader);
      GL.shaders[id] = null;
    };
  var _emscripten_glDeleteShader = _glDeleteShader;

  /** @suppress {duplicate } */
  var _glDeleteTextures = (n, textures) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((textures)+(i*4))>>2)];
        var texture = GL.textures[id];
        // GL spec: "glDeleteTextures silently ignores 0s and names that do not
        // correspond to existing textures".
        if (!texture) continue;
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null;
      }
    };
  var _emscripten_glDeleteTextures = _glDeleteTextures;

  
  /** @suppress {duplicate } */
  var _glDeleteVertexArrays = (n, vaos) => {
      for (var i = 0; i < n; i++) {
        var id = HEAP32[(((vaos)+(i*4))>>2)];
        GLctx.deleteVertexArray(GL.vaos[id]);
        GL.vaos[id] = null;
      }
    };
  /** @suppress {duplicate } */
  var _glDeleteVertexArraysOES = _glDeleteVertexArrays;
  var _emscripten_glDeleteVertexArraysOES = _glDeleteVertexArraysOES;

  /** @suppress {duplicate } */
  var _glDepthFunc = (x0) => GLctx.depthFunc(x0);
  var _emscripten_glDepthFunc = _glDepthFunc;

  /** @suppress {duplicate } */
  var _glDepthMask = (flag) => {
      GLctx.depthMask(!!flag);
    };
  var _emscripten_glDepthMask = _glDepthMask;

  /** @suppress {duplicate } */
  var _glDepthRangef = (x0, x1) => GLctx.depthRange(x0, x1);
  var _emscripten_glDepthRangef = _glDepthRangef;

  /** @suppress {duplicate } */
  var _glDetachShader = (program, shader) => {
      GLctx.detachShader(GL.programs[program], GL.shaders[shader]);
    };
  var _emscripten_glDetachShader = _glDetachShader;

  /** @suppress {duplicate } */
  var _glDisable = (x0) => GLctx.disable(x0);
  var _emscripten_glDisable = _glDisable;

  /** @suppress {duplicate } */
  var _glDisableVertexAttribArray = (index) => {
      GLctx.disableVertexAttribArray(index);
    };
  var _emscripten_glDisableVertexAttribArray = _glDisableVertexAttribArray;

  /** @suppress {duplicate } */
  var _glDrawArrays = (mode, first, count) => {
  
      GLctx.drawArrays(mode, first, count);
  
    };
  var _emscripten_glDrawArrays = _glDrawArrays;

  
  /** @suppress {duplicate } */
  var _glDrawArraysInstanced = (mode, first, count, primcount) => {
      GLctx.drawArraysInstanced(mode, first, count, primcount);
    };
  /** @suppress {duplicate } */
  var _glDrawArraysInstancedANGLE = _glDrawArraysInstanced;
  var _emscripten_glDrawArraysInstancedANGLE = _glDrawArraysInstancedANGLE;

  
  var tempFixedLengthArray = [];
  
  /** @suppress {duplicate } */
  var _glDrawBuffers = (n, bufs) => {
  
      var bufArray = tempFixedLengthArray[n];
      for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[(((bufs)+(i*4))>>2)];
      }
  
      GLctx.drawBuffers(bufArray);
    };
  /** @suppress {duplicate } */
  var _glDrawBuffersWEBGL = _glDrawBuffers;
  var _emscripten_glDrawBuffersWEBGL = _glDrawBuffersWEBGL;

  /** @suppress {duplicate } */
  var _glDrawElements = (mode, count, type, indices) => {
  
      GLctx.drawElements(mode, count, type, indices);
  
    };
  var _emscripten_glDrawElements = _glDrawElements;

  
  /** @suppress {duplicate } */
  var _glDrawElementsInstanced = (mode, count, type, indices, primcount) => {
      GLctx.drawElementsInstanced(mode, count, type, indices, primcount);
    };
  /** @suppress {duplicate } */
  var _glDrawElementsInstancedANGLE = _glDrawElementsInstanced;
  var _emscripten_glDrawElementsInstancedANGLE = _glDrawElementsInstancedANGLE;

  /** @suppress {duplicate } */
  var _glEnable = (x0) => GLctx.enable(x0);
  var _emscripten_glEnable = _glEnable;

  /** @suppress {duplicate } */
  var _glEnableVertexAttribArray = (index) => {
      GLctx.enableVertexAttribArray(index);
    };
  var _emscripten_glEnableVertexAttribArray = _glEnableVertexAttribArray;

  /** @suppress {duplicate } */
  var _glEndQueryEXT = (target) => {
      GLctx.disjointTimerQueryExt['endQueryEXT'](target);
    };
  var _emscripten_glEndQueryEXT = _glEndQueryEXT;

  /** @suppress {duplicate } */
  var _glFinish = () => GLctx.finish();
  var _emscripten_glFinish = _glFinish;

  /** @suppress {duplicate } */
  var _glFlush = () => GLctx.flush();
  var _emscripten_glFlush = _glFlush;

  /** @suppress {duplicate } */
  var _glFramebufferRenderbuffer = (target, attachment, renderbuffertarget, renderbuffer) => {
      GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget,
                                         GL.renderbuffers[renderbuffer]);
    };
  var _emscripten_glFramebufferRenderbuffer = _glFramebufferRenderbuffer;

  /** @suppress {duplicate } */
  var _glFramebufferTexture2D = (target, attachment, textarget, texture, level) => {
      GLctx.framebufferTexture2D(target, attachment, textarget,
                                      GL.textures[texture], level);
    };
  var _emscripten_glFramebufferTexture2D = _glFramebufferTexture2D;

  /** @suppress {duplicate } */
  var _glFrontFace = (x0) => GLctx.frontFace(x0);
  var _emscripten_glFrontFace = _glFrontFace;

  /** @suppress {duplicate } */
  var _glGenBuffers = (n, buffers) => {
      GL.genObject(n, buffers, 'createBuffer', GL.buffers
        );
    };
  var _emscripten_glGenBuffers = _glGenBuffers;

  /** @suppress {duplicate } */
  var _glGenFramebuffers = (n, ids) => {
      GL.genObject(n, ids, 'createFramebuffer', GL.framebuffers
        );
    };
  var _emscripten_glGenFramebuffers = _glGenFramebuffers;

  /** @suppress {duplicate } */
  var _glGenQueriesEXT = (n, ids) => {
      for (var i = 0; i < n; i++) {
        var query = GLctx.disjointTimerQueryExt['createQueryEXT']();
        if (!query) {
          GL.recordError(0x502 /* GL_INVALID_OPERATION */);
          while (i < n) HEAP32[(((ids)+(i++*4))>>2)] = 0;
          return;
        }
        var id = GL.getNewId(GL.queries);
        query.name = id;
        GL.queries[id] = query;
        HEAP32[(((ids)+(i*4))>>2)] = id;
      }
    };
  var _emscripten_glGenQueriesEXT = _glGenQueriesEXT;

  /** @suppress {duplicate } */
  var _glGenRenderbuffers = (n, renderbuffers) => {
      GL.genObject(n, renderbuffers, 'createRenderbuffer', GL.renderbuffers
        );
    };
  var _emscripten_glGenRenderbuffers = _glGenRenderbuffers;

  /** @suppress {duplicate } */
  var _glGenTextures = (n, textures) => {
      GL.genObject(n, textures, 'createTexture', GL.textures
        );
    };
  var _emscripten_glGenTextures = _glGenTextures;

  
  /** @suppress {duplicate } */
  var _glGenVertexArrays = (n, arrays) => {
      GL.genObject(n, arrays, 'createVertexArray', GL.vaos
        );
    };
  /** @suppress {duplicate } */
  var _glGenVertexArraysOES = _glGenVertexArrays;
  var _emscripten_glGenVertexArraysOES = _glGenVertexArraysOES;

  /** @suppress {duplicate } */
  var _glGenerateMipmap = (x0) => GLctx.generateMipmap(x0);
  var _emscripten_glGenerateMipmap = _glGenerateMipmap;

  
  var __glGetActiveAttribOrUniform = (funcName, program, index, bufSize, length, size, type, name) => {
      program = GL.programs[program];
      var info = GLctx[funcName](program, index);
      if (info) {
        // If an error occurs, nothing will be written to length, size and type and name.
        var numBytesWrittenExclNull = name && stringToUTF8(info.name, name, bufSize);
        if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
        if (size) HEAP32[((size)>>2)] = info.size;
        if (type) HEAP32[((type)>>2)] = info.type;
      }
    };
  
  /** @suppress {duplicate } */
  var _glGetActiveAttrib = (program, index, bufSize, length, size, type, name) =>
      __glGetActiveAttribOrUniform('getActiveAttrib', program, index, bufSize, length, size, type, name);
  var _emscripten_glGetActiveAttrib = _glGetActiveAttrib;

  
  /** @suppress {duplicate } */
  var _glGetActiveUniform = (program, index, bufSize, length, size, type, name) =>
      __glGetActiveAttribOrUniform('getActiveUniform', program, index, bufSize, length, size, type, name);
  var _emscripten_glGetActiveUniform = _glGetActiveUniform;

  /** @suppress {duplicate } */
  var _glGetAttachedShaders = (program, maxCount, count, shaders) => {
      var result = GLctx.getAttachedShaders(GL.programs[program]);
      var len = result.length;
      if (len > maxCount) {
        len = maxCount;
      }
      HEAP32[((count)>>2)] = len;
      for (var i = 0; i < len; ++i) {
        var id = GL.shaders.indexOf(result[i]);
        HEAP32[(((shaders)+(i*4))>>2)] = id;
      }
    };
  var _emscripten_glGetAttachedShaders = _glGetAttachedShaders;

  
  /** @suppress {duplicate } */
  var _glGetAttribLocation = (program, name) =>
      GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name));
  var _emscripten_glGetAttribLocation = _glGetAttribLocation;

  var readI53FromI64 = (ptr) => {
      return HEAPU32[((ptr)>>2)] + HEAP32[(((ptr)+(4))>>2)] * 4294967296;
    };
  
  var readI53FromU64 = (ptr) => {
      return HEAPU32[((ptr)>>2)] + HEAPU32[(((ptr)+(4))>>2)] * 4294967296;
    };
  var writeI53ToI64 = (ptr, num) => {
      HEAPU32[((ptr)>>2)] = num;
      var lower = HEAPU32[((ptr)>>2)];
      HEAPU32[(((ptr)+(4))>>2)] = (num - lower)/4294967296;
      var deserialized = (num >= 0) ? readI53FromU64(ptr) : readI53FromI64(ptr);
      var offset = ((ptr)>>2);
      if (deserialized != num) warnOnce(`writeI53ToI64() out of range: serialized JS Number ${num} to Wasm heap as bytes lo=${ptrToString(HEAPU32[offset])}, hi=${ptrToString(HEAPU32[offset+1])}, which deserializes back to ${deserialized} instead!`);
    };
  
  var emscriptenWebGLGet = (name_, p, type) => {
      // Guard against user passing a null pointer.
      // Note that GLES2 spec does not say anything about how passing a null
      // pointer should be treated.  Testing on desktop core GL 3, the application
      // crashes on glGetIntegerv to a null pointer, but better to report an error
      // instead of doing anything random.
      if (!p) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var ret = undefined;
      switch (name_) { // Handle a few trivial GLES values
        case 0x8DFA: // GL_SHADER_COMPILER
          ret = 1;
          break;
        case 0x8DF8: // GL_SHADER_BINARY_FORMATS
          if (type != 0 && type != 1) {
            GL.recordError(0x500); // GL_INVALID_ENUM
          }
          // Do not write anything to the out pointer, since no binary formats are
          // supported.
          return;
        case 0x8DF9: // GL_NUM_SHADER_BINARY_FORMATS
          ret = 0;
          break;
        case 0x86A2: // GL_NUM_COMPRESSED_TEXTURE_FORMATS
          // WebGL doesn't have GL_NUM_COMPRESSED_TEXTURE_FORMATS (it's obsolete
          // since GL_COMPRESSED_TEXTURE_FORMATS returns a JS array that can be
          // queried for length), so implement it ourselves to allow C++ GLES2
          // code get the length.
          var formats = GLctx.getParameter(0x86A3 /*GL_COMPRESSED_TEXTURE_FORMATS*/);
          ret = formats ? formats.length : 0;
          break;
  
      }
  
      if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof result) {
          case "number":
            ret = result;
            break;
          case "boolean":
            ret = result ? 1 : 0;
            break;
          case "string":
            GL.recordError(0x500); // GL_INVALID_ENUM
            return;
          case "object":
            if (result === null) {
              // null is a valid result for some (e.g., which buffer is bound -
              // perhaps nothing is bound), but otherwise can mean an invalid
              // name_, which we need to report as an error
              switch (name_) {
                case 0x8894: // ARRAY_BUFFER_BINDING
                case 0x8B8D: // CURRENT_PROGRAM
                case 0x8895: // ELEMENT_ARRAY_BUFFER_BINDING
                case 0x8CA6: // FRAMEBUFFER_BINDING or DRAW_FRAMEBUFFER_BINDING
                case 0x8CA7: // RENDERBUFFER_BINDING
                case 0x8069: // TEXTURE_BINDING_2D
                case 0x85B5: // WebGL 2 GL_VERTEX_ARRAY_BINDING, or WebGL 1 extension OES_vertex_array_object GL_VERTEX_ARRAY_BINDING_OES
                case 0x8514: { // TEXTURE_BINDING_CUBE_MAP
                  ret = 0;
                  break;
                }
                default: {
                  GL.recordError(0x500); // GL_INVALID_ENUM
                  return;
                }
              }
            } else if (result instanceof Float32Array ||
                       result instanceof Uint32Array ||
                       result instanceof Int32Array ||
                       result instanceof Array) {
              for (var i = 0; i < result.length; ++i) {
                switch (type) {
                  case 0: HEAP32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 2: HEAPF32[(((p)+(i*4))>>2)] = result[i]; break;
                  case 4: HEAP8[(p)+(i)] = result[i] ? 1 : 0; break;
                }
              }
              return;
            } else {
              try {
                ret = result.name | 0;
              } catch(e) {
                GL.recordError(0x500); // GL_INVALID_ENUM
                err(`GL_INVALID_ENUM in glGet${type}v: Unknown object returned from WebGL getParameter(${name_})! (error: ${e})`);
                return;
              }
            }
            break;
          default:
            GL.recordError(0x500); // GL_INVALID_ENUM
            err(`GL_INVALID_ENUM in glGet${type}v: Native code calling glGet${type}v(${name_}) and it returns ${result} of type ${typeof(result)}!`);
            return;
        }
      }
  
      switch (type) {
        case 1: writeI53ToI64(p, ret); break;
        case 0: HEAP32[((p)>>2)] = ret; break;
        case 2:   HEAPF32[((p)>>2)] = ret; break;
        case 4: HEAP8[p] = ret ? 1 : 0; break;
      }
    };
  
  /** @suppress {duplicate } */
  var _glGetBooleanv = (name_, p) => emscriptenWebGLGet(name_, p, 4);
  var _emscripten_glGetBooleanv = _glGetBooleanv;

  /** @suppress {duplicate } */
  var _glGetBufferParameteriv = (target, value, data) => {
      if (!data) {
        // GLES2 specification does not specify how to behave if data is a null
        // pointer. Since calling this function does not make sense if data ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((data)>>2)] = GLctx.getBufferParameter(target, value);
    };
  var _emscripten_glGetBufferParameteriv = _glGetBufferParameteriv;

  /** @suppress {duplicate } */
  var _glGetError = () => {
      var error = GLctx.getError() || GL.lastError;
      GL.lastError = 0/*GL_NO_ERROR*/;
      return error;
    };
  var _emscripten_glGetError = _glGetError;

  
  /** @suppress {duplicate } */
  var _glGetFloatv = (name_, p) => emscriptenWebGLGet(name_, p, 2);
  var _emscripten_glGetFloatv = _glGetFloatv;

  /** @suppress {duplicate } */
  var _glGetFramebufferAttachmentParameteriv = (target, attachment, pname, params) => {
      var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
      if (result instanceof WebGLRenderbuffer ||
          result instanceof WebGLTexture) {
        result = result.name | 0;
      }
      HEAP32[((params)>>2)] = result;
    };
  var _emscripten_glGetFramebufferAttachmentParameteriv = _glGetFramebufferAttachmentParameteriv;

  
  /** @suppress {duplicate } */
  var _glGetIntegerv = (name_, p) => emscriptenWebGLGet(name_, p, 0);
  var _emscripten_glGetIntegerv = _glGetIntegerv;

  /** @suppress {duplicate } */
  var _glGetProgramInfoLog = (program, maxLength, length, infoLog) => {
      var log = GLctx.getProgramInfoLog(GL.programs[program]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    };
  var _emscripten_glGetProgramInfoLog = _glGetProgramInfoLog;

  /** @suppress {duplicate } */
  var _glGetProgramiv = (program, pname, p) => {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      if (program >= GL.counter) {
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
  
      program = GL.programs[program];
  
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getProgramInfoLog(program);
        if (log === null) log = '(unknown error)';
        HEAP32[((p)>>2)] = log.length + 1;
      } else if (pname == 0x8B87 /* GL_ACTIVE_UNIFORM_MAX_LENGTH */) {
        if (!program.maxUniformLength) {
          var numActiveUniforms = GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/);
          for (var i = 0; i < numActiveUniforms; ++i) {
            program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformLength;
      } else if (pname == 0x8B8A /* GL_ACTIVE_ATTRIBUTE_MAX_LENGTH */) {
        if (!program.maxAttributeLength) {
          var numActiveAttributes = GLctx.getProgramParameter(program, 0x8B89/*GL_ACTIVE_ATTRIBUTES*/);
          for (var i = 0; i < numActiveAttributes; ++i) {
            program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxAttributeLength;
      } else if (pname == 0x8A35 /* GL_ACTIVE_UNIFORM_BLOCK_MAX_NAME_LENGTH */) {
        if (!program.maxUniformBlockNameLength) {
          var numActiveUniformBlocks = GLctx.getProgramParameter(program, 0x8A36/*GL_ACTIVE_UNIFORM_BLOCKS*/);
          for (var i = 0; i < numActiveUniformBlocks; ++i) {
            program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length+1);
          }
        }
        HEAP32[((p)>>2)] = program.maxUniformBlockNameLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getProgramParameter(program, pname);
      }
    };
  var _emscripten_glGetProgramiv = _glGetProgramiv;

  
  /** @suppress {duplicate } */
  var _glGetQueryObjecti64vEXT = (id, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param;
      {
        param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      }
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      writeI53ToI64(params, ret);
    };
  var _emscripten_glGetQueryObjecti64vEXT = _glGetQueryObjecti64vEXT;

  /** @suppress {duplicate } */
  var _glGetQueryObjectivEXT = (id, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var query = GL.queries[id];
      var param = GLctx.disjointTimerQueryExt['getQueryObjectEXT'](query, pname);
      var ret;
      if (typeof param == 'boolean') {
        ret = param ? 1 : 0;
      } else {
        ret = param;
      }
      HEAP32[((params)>>2)] = ret;
    };
  var _emscripten_glGetQueryObjectivEXT = _glGetQueryObjectivEXT;

  
  /** @suppress {duplicate } */
  var _glGetQueryObjectui64vEXT = _glGetQueryObjecti64vEXT;
  var _emscripten_glGetQueryObjectui64vEXT = _glGetQueryObjectui64vEXT;

  
  /** @suppress {duplicate } */
  var _glGetQueryObjectuivEXT = _glGetQueryObjectivEXT;
  var _emscripten_glGetQueryObjectuivEXT = _glGetQueryObjectuivEXT;

  /** @suppress {duplicate } */
  var _glGetQueryivEXT = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if p == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.disjointTimerQueryExt['getQueryEXT'](target, pname);
    };
  var _emscripten_glGetQueryivEXT = _glGetQueryivEXT;

  /** @suppress {duplicate } */
  var _glGetRenderbufferParameteriv = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null pointer. Since calling this function does not make sense
        // if params == null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getRenderbufferParameter(target, pname);
    };
  var _emscripten_glGetRenderbufferParameteriv = _glGetRenderbufferParameteriv;

  
  /** @suppress {duplicate } */
  var _glGetShaderInfoLog = (shader, maxLength, length, infoLog) => {
      var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
      if (log === null) log = '(unknown error)';
      var numBytesWrittenExclNull = (maxLength > 0 && infoLog) ? stringToUTF8(log, infoLog, maxLength) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    };
  var _emscripten_glGetShaderInfoLog = _glGetShaderInfoLog;

  /** @suppress {duplicate } */
  var _glGetShaderPrecisionFormat = (shaderType, precisionType, range, precision) => {
      var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
      HEAP32[((range)>>2)] = result.rangeMin;
      HEAP32[(((range)+(4))>>2)] = result.rangeMax;
      HEAP32[((precision)>>2)] = result.precision;
    };
  var _emscripten_glGetShaderPrecisionFormat = _glGetShaderPrecisionFormat;

  /** @suppress {duplicate } */
  var _glGetShaderSource = (shader, bufSize, length, source) => {
      var result = GLctx.getShaderSource(GL.shaders[shader]);
      if (!result) return; // If an error occurs, nothing will be written to length or source.
      var numBytesWrittenExclNull = (bufSize > 0 && source) ? stringToUTF8(result, source, bufSize) : 0;
      if (length) HEAP32[((length)>>2)] = numBytesWrittenExclNull;
    };
  var _emscripten_glGetShaderSource = _glGetShaderSource;

  /** @suppress {duplicate } */
  var _glGetShaderiv = (shader, pname, p) => {
      if (!p) {
        // GLES2 specification does not specify how to behave if p is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      if (pname == 0x8B84) { // GL_INFO_LOG_LENGTH
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null) log = '(unknown error)';
        // The GLES2 specification says that if the shader has an empty info log,
        // a value of 0 is returned. Otherwise the log has a null char appended.
        // (An empty string is falsey, so we can just check that instead of
        // looking at log.length.)
        var logLength = log ? log.length + 1 : 0;
        HEAP32[((p)>>2)] = logLength;
      } else if (pname == 0x8B88) { // GL_SHADER_SOURCE_LENGTH
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        // source may be a null, or the empty string, both of which are falsey
        // values that we report a 0 length for.
        var sourceLength = source ? source.length + 1 : 0;
        HEAP32[((p)>>2)] = sourceLength;
      } else {
        HEAP32[((p)>>2)] = GLctx.getShaderParameter(GL.shaders[shader], pname);
      }
    };
  var _emscripten_glGetShaderiv = _glGetShaderiv;

  
  
  var stringToNewUTF8 = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret) stringToUTF8(str, ret, size);
      return ret;
    };
  
  
  var webglGetExtensions = () => {
      var exts = getEmscriptenSupportedExtensions(GLctx);
      exts = exts.concat(exts.map((e) => "GL_" + e));
      return exts;
    };
  
  /** @suppress {duplicate } */
  var _glGetString = (name_) => {
      var ret = GL.stringCache[name_];
      if (!ret) {
        switch (name_) {
          case 0x1F03 /* GL_EXTENSIONS */:
            ret = stringToNewUTF8(webglGetExtensions().join(' '));
            break;
          case 0x1F00 /* GL_VENDOR */:
          case 0x1F01 /* GL_RENDERER */:
          case 0x9245 /* UNMASKED_VENDOR_WEBGL */:
          case 0x9246 /* UNMASKED_RENDERER_WEBGL */:
            var s = GLctx.getParameter(name_);
            if (!s) {
              GL.recordError(0x500/*GL_INVALID_ENUM*/);
            }
            ret = s ? stringToNewUTF8(s) : 0;
            break;
  
          case 0x1F02 /* GL_VERSION */:
            var webGLVersion = GLctx.getParameter(0x1F02 /*GL_VERSION*/);
            // return GLES version string corresponding to the version of the WebGL context
            var glVersion = `OpenGL ES 2.0 (${webGLVersion})`;
            ret = stringToNewUTF8(glVersion);
            break;
          case 0x8B8C /* GL_SHADING_LANGUAGE_VERSION */:
            var glslVersion = GLctx.getParameter(0x8B8C /*GL_SHADING_LANGUAGE_VERSION*/);
            // extract the version number 'N.M' from the string 'WebGL GLSL ES N.M ...'
            var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
            var ver_num = glslVersion.match(ver_re);
            if (ver_num !== null) {
              if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + '0'; // ensure minor version has 2 digits
              glslVersion = `OpenGL ES GLSL ES ${ver_num[1]} (${glslVersion})`;
            }
            ret = stringToNewUTF8(glslVersion);
            break;
          default:
            GL.recordError(0x500/*GL_INVALID_ENUM*/);
            // fall through
        }
        GL.stringCache[name_] = ret;
      }
      return ret;
    };
  var _emscripten_glGetString = _glGetString;

  /** @suppress {duplicate } */
  var _glGetTexParameterfv = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAPF32[((params)>>2)] = GLctx.getTexParameter(target, pname);
    };
  var _emscripten_glGetTexParameterfv = _glGetTexParameterfv;

  /** @suppress {duplicate } */
  var _glGetTexParameteriv = (target, pname, params) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if p == null,
        // issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((params)>>2)] = GLctx.getTexParameter(target, pname);
    };
  var _emscripten_glGetTexParameteriv = _glGetTexParameteriv;

  /** @suppress {checkTypes} */
  var jstoi_q = (str) => parseInt(str);
  
  /** @noinline */
  var webglGetLeftBracePos = (name) => name.slice(-1) == ']' && name.lastIndexOf('[');
  
  var webglPrepareUniformLocationsBeforeFirstUse = (program) => {
      var uniformLocsById = program.uniformLocsById, // Maps GLuint -> WebGLUniformLocation
        uniformSizeAndIdsByName = program.uniformSizeAndIdsByName, // Maps name -> [uniform array length, GLuint]
        i, j;
  
      // On the first time invocation of glGetUniformLocation on this shader program:
      // initialize cache data structures and discover which uniforms are arrays.
      if (!uniformLocsById) {
        // maps GLint integer locations to WebGLUniformLocations
        program.uniformLocsById = uniformLocsById = {};
        // maps integer locations back to uniform name strings, so that we can lazily fetch uniform array locations
        program.uniformArrayNamesById = {};
  
        var numActiveUniforms = GLctx.getProgramParameter(program, 0x8B86/*GL_ACTIVE_UNIFORMS*/);
        for (i = 0; i < numActiveUniforms; ++i) {
          var u = GLctx.getActiveUniform(program, i);
          var nm = u.name;
          var sz = u.size;
          var lb = webglGetLeftBracePos(nm);
          var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
  
          // Assign a new location.
          var id = program.uniformIdCounter;
          program.uniformIdCounter += sz;
          // Eagerly get the location of the uniformArray[0] base element.
          // The remaining indices >0 will be left for lazy evaluation to
          // improve performance. Those may never be needed to fetch, if the
          // application fills arrays always in full starting from the first
          // element of the array.
          uniformSizeAndIdsByName[arrayName] = [sz, id];
  
          // Store placeholder integers in place that highlight that these
          // >0 index locations are array indices pending population.
          for (j = 0; j < sz; ++j) {
            uniformLocsById[id] = j;
            program.uniformArrayNamesById[id++] = arrayName;
          }
        }
      }
    };
  
  
  
  /** @suppress {duplicate } */
  var _glGetUniformLocation = (program, name) => {
  
      name = UTF8ToString(name);
  
      if (program = GL.programs[program]) {
        webglPrepareUniformLocationsBeforeFirstUse(program);
        var uniformLocsById = program.uniformLocsById; // Maps GLuint -> WebGLUniformLocation
        var arrayIndex = 0;
        var uniformBaseName = name;
  
        // Invariant: when populating integer IDs for uniform locations, we must
        // maintain the precondition that arrays reside in contiguous addresses,
        // i.e. for a 'vec4 colors[10];', colors[4] must be at location
        // colors[0]+4.  However, user might call glGetUniformLocation(program,
        // "colors") for an array, so we cannot discover based on the user input
        // arguments whether the uniform we are dealing with is an array. The only
        // way to discover which uniforms are arrays is to enumerate over all the
        // active uniforms in the program.
        var leftBrace = webglGetLeftBracePos(name);
  
        // If user passed an array accessor "[index]", parse the array index off the accessor.
        if (leftBrace > 0) {
          arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0; // "index]", coerce parseInt(']') with >>>0 to treat "foo[]" as "foo[0]" and foo[-1] as unsigned out-of-bounds.
          uniformBaseName = name.slice(0, leftBrace);
        }
  
        // Have we cached the location of this uniform before?
        // A pair [array length, GLint of the uniform location]
        var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
  
        // If an uniform with this name exists, and if its index is within the
        // array limits (if it's even an array), query the WebGLlocation, or
        // return an existing cached location.
        if (sizeAndId && arrayIndex < sizeAndId[0]) {
          arrayIndex += sizeAndId[1]; // Add the base location of the uniform to the array index offset.
          if ((uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name))) {
            return arrayIndex;
          }
        }
      }
      else {
        // N.b. we are currently unable to distinguish between GL program IDs that
        // never existed vs GL program IDs that have been deleted, so report
        // GL_INVALID_VALUE in both cases.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
      }
      return -1;
    };
  var _emscripten_glGetUniformLocation = _glGetUniformLocation;

  var webglGetUniformLocation = (location) => {
      var p = GLctx.currentProgram;
  
      if (p) {
        var webglLoc = p.uniformLocsById[location];
        // p.uniformLocsById[location] stores either an integer, or a
        // WebGLUniformLocation.
        // If an integer, we have not yet bound the location, so do it now. The
        // integer value specifies the array index we should bind to.
        if (typeof webglLoc == 'number') {
          p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? `[${webglLoc}]` : ''));
        }
        // Else an already cached WebGLUniformLocation, return it.
        return webglLoc;
      } else {
        GL.recordError(0x502/*GL_INVALID_OPERATION*/);
      }
    };
  
  
  /** @suppress{checkTypes} */
  var emscriptenWebGLGetUniform = (program, location, params, type) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if params ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      program = GL.programs[program];
      webglPrepareUniformLocationsBeforeFirstUse(program);
      var data = GLctx.getUniform(program, webglGetUniformLocation(location));
      if (typeof data == 'number' || typeof data == 'boolean') {
        switch (type) {
          case 0: HEAP32[((params)>>2)] = data; break;
          case 2: HEAPF32[((params)>>2)] = data; break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
            case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
          }
        }
      }
    };
  
  /** @suppress {duplicate } */
  var _glGetUniformfv = (program, location, params) => {
      emscriptenWebGLGetUniform(program, location, params, 2);
    };
  var _emscripten_glGetUniformfv = _glGetUniformfv;

  
  /** @suppress {duplicate } */
  var _glGetUniformiv = (program, location, params) => {
      emscriptenWebGLGetUniform(program, location, params, 0);
    };
  var _emscripten_glGetUniformiv = _glGetUniformiv;

  /** @suppress {duplicate } */
  var _glGetVertexAttribPointerv = (index, pname, pointer) => {
      if (!pointer) {
        // GLES2 specification does not specify how to behave if pointer is a null
        // pointer. Since calling this function does not make sense if pointer ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      HEAP32[((pointer)>>2)] = GLctx.getVertexAttribOffset(index, pname);
    };
  var _emscripten_glGetVertexAttribPointerv = _glGetVertexAttribPointerv;

  /** @suppress{checkTypes} */
  var emscriptenWebGLGetVertexAttrib = (index, pname, params, type) => {
      if (!params) {
        // GLES2 specification does not specify how to behave if params is a null
        // pointer. Since calling this function does not make sense if params ==
        // null, issue a GL error to notify user about it.
        GL.recordError(0x501 /* GL_INVALID_VALUE */);
        return;
      }
      var data = GLctx.getVertexAttrib(index, pname);
      if (pname == 0x889F/*VERTEX_ATTRIB_ARRAY_BUFFER_BINDING*/) {
        HEAP32[((params)>>2)] = data && data["name"];
      } else if (typeof data == 'number' || typeof data == 'boolean') {
        switch (type) {
          case 0: HEAP32[((params)>>2)] = data; break;
          case 2: HEAPF32[((params)>>2)] = data; break;
          case 5: HEAP32[((params)>>2)] = Math.fround(data); break;
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          switch (type) {
            case 0: HEAP32[(((params)+(i*4))>>2)] = data[i]; break;
            case 2: HEAPF32[(((params)+(i*4))>>2)] = data[i]; break;
            case 5: HEAP32[(((params)+(i*4))>>2)] = Math.fround(data[i]); break;
          }
        }
      }
    };
  
  /** @suppress {duplicate } */
  var _glGetVertexAttribfv = (index, pname, params) => {
      // N.B. This function may only be called if the vertex attribute was
      // specified using the function glVertexAttrib*f(), otherwise the results
      // are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 2);
    };
  var _emscripten_glGetVertexAttribfv = _glGetVertexAttribfv;

  
  /** @suppress {duplicate } */
  var _glGetVertexAttribiv = (index, pname, params) => {
      // N.B. This function may only be called if the vertex attribute was
      // specified using the function glVertexAttrib*f(), otherwise the results
      // are undefined. (GLES3 spec 6.1.12)
      emscriptenWebGLGetVertexAttrib(index, pname, params, 5);
    };
  var _emscripten_glGetVertexAttribiv = _glGetVertexAttribiv;

  /** @suppress {duplicate } */
  var _glHint = (x0, x1) => GLctx.hint(x0, x1);
  var _emscripten_glHint = _glHint;

  /** @suppress {duplicate } */
  var _glIsBuffer = (buffer) => {
      var b = GL.buffers[buffer];
      if (!b) return 0;
      return GLctx.isBuffer(b);
    };
  var _emscripten_glIsBuffer = _glIsBuffer;

  /** @suppress {duplicate } */
  var _glIsEnabled = (x0) => GLctx.isEnabled(x0);
  var _emscripten_glIsEnabled = _glIsEnabled;

  /** @suppress {duplicate } */
  var _glIsFramebuffer = (framebuffer) => {
      var fb = GL.framebuffers[framebuffer];
      if (!fb) return 0;
      return GLctx.isFramebuffer(fb);
    };
  var _emscripten_glIsFramebuffer = _glIsFramebuffer;

  /** @suppress {duplicate } */
  var _glIsProgram = (program) => {
      program = GL.programs[program];
      if (!program) return 0;
      return GLctx.isProgram(program);
    };
  var _emscripten_glIsProgram = _glIsProgram;

  /** @suppress {duplicate } */
  var _glIsQueryEXT = (id) => {
      var query = GL.queries[id];
      if (!query) return 0;
      return GLctx.disjointTimerQueryExt['isQueryEXT'](query);
    };
  var _emscripten_glIsQueryEXT = _glIsQueryEXT;

  /** @suppress {duplicate } */
  var _glIsRenderbuffer = (renderbuffer) => {
      var rb = GL.renderbuffers[renderbuffer];
      if (!rb) return 0;
      return GLctx.isRenderbuffer(rb);
    };
  var _emscripten_glIsRenderbuffer = _glIsRenderbuffer;

  /** @suppress {duplicate } */
  var _glIsShader = (shader) => {
      var s = GL.shaders[shader];
      if (!s) return 0;
      return GLctx.isShader(s);
    };
  var _emscripten_glIsShader = _glIsShader;

  /** @suppress {duplicate } */
  var _glIsTexture = (id) => {
      var texture = GL.textures[id];
      if (!texture) return 0;
      return GLctx.isTexture(texture);
    };
  var _emscripten_glIsTexture = _glIsTexture;

  
  /** @suppress {duplicate } */
  var _glIsVertexArray = (array) => {
  
      var vao = GL.vaos[array];
      if (!vao) return 0;
      return GLctx.isVertexArray(vao);
    };
  /** @suppress {duplicate } */
  var _glIsVertexArrayOES = _glIsVertexArray;
  var _emscripten_glIsVertexArrayOES = _glIsVertexArrayOES;

  /** @suppress {duplicate } */
  var _glLineWidth = (x0) => GLctx.lineWidth(x0);
  var _emscripten_glLineWidth = _glLineWidth;

  /** @suppress {duplicate } */
  var _glLinkProgram = (program) => {
      program = GL.programs[program];
      GLctx.linkProgram(program);
      // Invalidate earlier computed uniform->ID mappings, those have now become stale
      program.uniformLocsById = 0; // Mark as null-like so that glGetUniformLocation() knows to populate this again.
      program.uniformSizeAndIdsByName = {};
  
    };
  var _emscripten_glLinkProgram = _glLinkProgram;

  /** @suppress {duplicate } */
  var _glPixelStorei = (pname, param) => {
      if (pname == 3317) {
        GL.unpackAlignment = param;
      } else if (pname == 3314) {
        GL.unpackRowLength = param;
      }
      GLctx.pixelStorei(pname, param);
    };
  var _emscripten_glPixelStorei = _glPixelStorei;

  /** @suppress {duplicate } */
  var _glPolygonModeWEBGL = (face, mode) => {
      GLctx.webglPolygonMode['polygonModeWEBGL'](face, mode);
    };
  var _emscripten_glPolygonModeWEBGL = _glPolygonModeWEBGL;

  /** @suppress {duplicate } */
  var _glPolygonOffset = (x0, x1) => GLctx.polygonOffset(x0, x1);
  var _emscripten_glPolygonOffset = _glPolygonOffset;

  /** @suppress {duplicate } */
  var _glPolygonOffsetClampEXT = (factor, units, clamp) => {
      GLctx.extPolygonOffsetClamp['polygonOffsetClampEXT'](factor, units, clamp);
    };
  var _emscripten_glPolygonOffsetClampEXT = _glPolygonOffsetClampEXT;

  /** @suppress {duplicate } */
  var _glQueryCounterEXT = (id, target) => {
      GLctx.disjointTimerQueryExt['queryCounterEXT'](GL.queries[id], target);
    };
  var _emscripten_glQueryCounterEXT = _glQueryCounterEXT;

  var computeUnpackAlignedImageSize = (width, height, sizePerPixel) => {
      function roundedToNextMultipleOf(x, y) {
        return (x + y - 1) & -y;
      }
      var plainRowSize = (GL.unpackRowLength || width) * sizePerPixel;
      var alignedRowSize = roundedToNextMultipleOf(plainRowSize, GL.unpackAlignment);
      return height * alignedRowSize;
    };
  
  var colorChannelsInGlTextureFormat = (format) => {
      // Micro-optimizations for size: map format to size by subtracting smallest
      // enum value (0x1902) from all values first.  Also omit the most common
      // size value (1) from the list, which is assumed by formats not on the
      // list.
      var colorChannels = {
        // 0x1902 /* GL_DEPTH_COMPONENT */ - 0x1902: 1,
        // 0x1906 /* GL_ALPHA */ - 0x1902: 1,
        5: 3,
        6: 4,
        // 0x1909 /* GL_LUMINANCE */ - 0x1902: 1,
        8: 2,
        29502: 3,
        29504: 4,
      };
      return colorChannels[format - 0x1902]||1;
    };
  
  var heapObjectForWebGLType = (type) => {
      // Micro-optimization for size: Subtract lowest GL enum number (0x1400/* GL_BYTE */) from type to compare
      // smaller values for the heap, for shorter generated code size.
      // Also the type HEAPU16 is not tested for explicitly, but any unrecognized type will return out HEAPU16.
      // (since most types are HEAPU16)
      type -= 0x1400;
  
      if (type == 1) return HEAPU8;
  
      if (type == 4) return HEAP32;
  
      if (type == 6) return HEAPF32;
  
      if (type == 5
        || type == 28922
        )
        return HEAPU32;
  
      return HEAPU16;
    };
  
  var toTypedArrayIndex = (pointer, heap) =>
      pointer >>> (31 - Math.clz32(heap.BYTES_PER_ELEMENT));
  
  var emscriptenWebGLGetTexPixelData = (type, format, width, height, pixels, internalFormat) => {
      var heap = heapObjectForWebGLType(type);
      var sizePerPixel = colorChannelsInGlTextureFormat(format) * heap.BYTES_PER_ELEMENT;
      var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel);
      return heap.subarray(toTypedArrayIndex(pixels, heap), toTypedArrayIndex(pixels + bytes, heap));
    };
  
  /** @suppress {duplicate } */
  var _glReadPixels = (x, y, width, height, format, type, pixels) => {
      var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
      if (!pixelData) {
        GL.recordError(0x500/*GL_INVALID_ENUM*/);
        return;
      }
      GLctx.readPixels(x, y, width, height, format, type, pixelData);
    };
  var _emscripten_glReadPixels = _glReadPixels;

  /** @suppress {duplicate } */
  var _glReleaseShaderCompiler = () => {
      // NOP (as allowed by GLES 2.0 spec)
    };
  var _emscripten_glReleaseShaderCompiler = _glReleaseShaderCompiler;

  /** @suppress {duplicate } */
  var _glRenderbufferStorage = (x0, x1, x2, x3) => GLctx.renderbufferStorage(x0, x1, x2, x3);
  var _emscripten_glRenderbufferStorage = _glRenderbufferStorage;

  /** @suppress {duplicate } */
  var _glSampleCoverage = (value, invert) => {
      GLctx.sampleCoverage(value, !!invert);
    };
  var _emscripten_glSampleCoverage = _glSampleCoverage;

  /** @suppress {duplicate } */
  var _glScissor = (x0, x1, x2, x3) => GLctx.scissor(x0, x1, x2, x3);
  var _emscripten_glScissor = _glScissor;

  /** @suppress {duplicate } */
  var _glShaderBinary = (count, shaders, binaryformat, binary, length) => {
      GL.recordError(0x500/*GL_INVALID_ENUM*/);
    };
  var _emscripten_glShaderBinary = _glShaderBinary;

  /** @suppress {duplicate } */
  var _glShaderSource = (shader, count, string, length) => {
      var source = GL.getSource(shader, count, string, length);
  
      GLctx.shaderSource(GL.shaders[shader], source);
    };
  var _emscripten_glShaderSource = _glShaderSource;

  /** @suppress {duplicate } */
  var _glStencilFunc = (x0, x1, x2) => GLctx.stencilFunc(x0, x1, x2);
  var _emscripten_glStencilFunc = _glStencilFunc;

  /** @suppress {duplicate } */
  var _glStencilFuncSeparate = (x0, x1, x2, x3) => GLctx.stencilFuncSeparate(x0, x1, x2, x3);
  var _emscripten_glStencilFuncSeparate = _glStencilFuncSeparate;

  /** @suppress {duplicate } */
  var _glStencilMask = (x0) => GLctx.stencilMask(x0);
  var _emscripten_glStencilMask = _glStencilMask;

  /** @suppress {duplicate } */
  var _glStencilMaskSeparate = (x0, x1) => GLctx.stencilMaskSeparate(x0, x1);
  var _emscripten_glStencilMaskSeparate = _glStencilMaskSeparate;

  /** @suppress {duplicate } */
  var _glStencilOp = (x0, x1, x2) => GLctx.stencilOp(x0, x1, x2);
  var _emscripten_glStencilOp = _glStencilOp;

  /** @suppress {duplicate } */
  var _glStencilOpSeparate = (x0, x1, x2, x3) => GLctx.stencilOpSeparate(x0, x1, x2, x3);
  var _emscripten_glStencilOpSeparate = _glStencilOpSeparate;

  
  /** @suppress {duplicate } */
  var _glTexImage2D = (target, level, internalFormat, width, height, border, format, type, pixels) => {
      var pixelData = pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null;
      GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixelData);
    };
  var _emscripten_glTexImage2D = _glTexImage2D;

  /** @suppress {duplicate } */
  var _glTexParameterf = (x0, x1, x2) => GLctx.texParameterf(x0, x1, x2);
  var _emscripten_glTexParameterf = _glTexParameterf;

  /** @suppress {duplicate } */
  var _glTexParameterfv = (target, pname, params) => {
      var param = HEAPF32[((params)>>2)];
      GLctx.texParameterf(target, pname, param);
    };
  var _emscripten_glTexParameterfv = _glTexParameterfv;

  /** @suppress {duplicate } */
  var _glTexParameteri = (x0, x1, x2) => GLctx.texParameteri(x0, x1, x2);
  var _emscripten_glTexParameteri = _glTexParameteri;

  /** @suppress {duplicate } */
  var _glTexParameteriv = (target, pname, params) => {
      var param = HEAP32[((params)>>2)];
      GLctx.texParameteri(target, pname, param);
    };
  var _emscripten_glTexParameteriv = _glTexParameteriv;

  
  /** @suppress {duplicate } */
  var _glTexSubImage2D = (target, level, xoffset, yoffset, width, height, format, type, pixels) => {
      var pixelData = pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0) : null;
      GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData);
    };
  var _emscripten_glTexSubImage2D = _glTexSubImage2D;

  
  /** @suppress {duplicate } */
  var _glUniform1f = (location, v0) => {
      GLctx.uniform1f(webglGetUniformLocation(location), v0);
    };
  var _emscripten_glUniform1f = _glUniform1f;

  
  var miniTempWebGLFloatBuffers = [];
  
  /** @suppress {duplicate } */
  var _glUniform1fv = (location, count, value) => {
  
      if (count <= 288) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*4)>>2));
      }
      GLctx.uniform1fv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform1fv = _glUniform1fv;

  
  /** @suppress {duplicate } */
  var _glUniform1i = (location, v0) => {
      GLctx.uniform1i(webglGetUniformLocation(location), v0);
    };
  var _emscripten_glUniform1i = _glUniform1i;

  
  var miniTempWebGLIntBuffers = [];
  
  /** @suppress {duplicate } */
  var _glUniform1iv = (location, count, value) => {
  
      if (count <= 288) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; ++i) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*4)>>2));
      }
      GLctx.uniform1iv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform1iv = _glUniform1iv;

  
  /** @suppress {duplicate } */
  var _glUniform2f = (location, v0, v1) => {
      GLctx.uniform2f(webglGetUniformLocation(location), v0, v1);
    };
  var _emscripten_glUniform2f = _glUniform2f;

  
  
  /** @suppress {duplicate } */
  var _glUniform2fv = (location, count, value) => {
  
      if (count <= 144) {
        // avoid allocation when uploading few enough uniforms
        count *= 2;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 2) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*8)>>2));
      }
      GLctx.uniform2fv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform2fv = _glUniform2fv;

  
  /** @suppress {duplicate } */
  var _glUniform2i = (location, v0, v1) => {
      GLctx.uniform2i(webglGetUniformLocation(location), v0, v1);
    };
  var _emscripten_glUniform2i = _glUniform2i;

  
  
  /** @suppress {duplicate } */
  var _glUniform2iv = (location, count, value) => {
  
      if (count <= 144) {
        // avoid allocation when uploading few enough uniforms
        count *= 2;
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; i += 2) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*8)>>2));
      }
      GLctx.uniform2iv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform2iv = _glUniform2iv;

  
  /** @suppress {duplicate } */
  var _glUniform3f = (location, v0, v1, v2) => {
      GLctx.uniform3f(webglGetUniformLocation(location), v0, v1, v2);
    };
  var _emscripten_glUniform3f = _glUniform3f;

  
  
  /** @suppress {duplicate } */
  var _glUniform3fv = (location, count, value) => {
  
      if (count <= 96) {
        // avoid allocation when uploading few enough uniforms
        count *= 3;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 3) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*12)>>2));
      }
      GLctx.uniform3fv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform3fv = _glUniform3fv;

  
  /** @suppress {duplicate } */
  var _glUniform3i = (location, v0, v1, v2) => {
      GLctx.uniform3i(webglGetUniformLocation(location), v0, v1, v2);
    };
  var _emscripten_glUniform3i = _glUniform3i;

  
  
  /** @suppress {duplicate } */
  var _glUniform3iv = (location, count, value) => {
  
      if (count <= 96) {
        // avoid allocation when uploading few enough uniforms
        count *= 3;
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; i += 3) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*12)>>2));
      }
      GLctx.uniform3iv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform3iv = _glUniform3iv;

  
  /** @suppress {duplicate } */
  var _glUniform4f = (location, v0, v1, v2, v3) => {
      GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
    };
  var _emscripten_glUniform4f = _glUniform4f;

  
  
  /** @suppress {duplicate } */
  var _glUniform4fv = (location, count, value) => {
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[4*count];
        // hoist the heap out of the loop for size and for pthreads+growth.
        var heap = HEAPF32;
        value = ((value)>>2);
        count *= 4;
        for (var i = 0; i < count; i += 4) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*16)>>2));
      }
      GLctx.uniform4fv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform4fv = _glUniform4fv;

  
  /** @suppress {duplicate } */
  var _glUniform4i = (location, v0, v1, v2, v3) => {
      GLctx.uniform4i(webglGetUniformLocation(location), v0, v1, v2, v3);
    };
  var _emscripten_glUniform4i = _glUniform4i;

  
  
  /** @suppress {duplicate } */
  var _glUniform4iv = (location, count, value) => {
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        count *= 4;
        var view = miniTempWebGLIntBuffers[count];
        for (var i = 0; i < count; i += 4) {
          view[i] = HEAP32[(((value)+(4*i))>>2)];
          view[i+1] = HEAP32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAP32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAP32[(((value)+(4*i+12))>>2)];
        }
      } else
      {
        var view = HEAP32.subarray((((value)>>2)), ((value+count*16)>>2));
      }
      GLctx.uniform4iv(webglGetUniformLocation(location), view);
    };
  var _emscripten_glUniform4iv = _glUniform4iv;

  
  
  /** @suppress {duplicate } */
  var _glUniformMatrix2fv = (location, count, transpose, value) => {
  
      if (count <= 72) {
        // avoid allocation when uploading few enough uniforms
        count *= 4;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 4) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*16)>>2));
      }
      GLctx.uniformMatrix2fv(webglGetUniformLocation(location), !!transpose, view);
    };
  var _emscripten_glUniformMatrix2fv = _glUniformMatrix2fv;

  
  
  /** @suppress {duplicate } */
  var _glUniformMatrix3fv = (location, count, transpose, value) => {
  
      if (count <= 32) {
        // avoid allocation when uploading few enough uniforms
        count *= 9;
        var view = miniTempWebGLFloatBuffers[count];
        for (var i = 0; i < count; i += 9) {
          view[i] = HEAPF32[(((value)+(4*i))>>2)];
          view[i+1] = HEAPF32[(((value)+(4*i+4))>>2)];
          view[i+2] = HEAPF32[(((value)+(4*i+8))>>2)];
          view[i+3] = HEAPF32[(((value)+(4*i+12))>>2)];
          view[i+4] = HEAPF32[(((value)+(4*i+16))>>2)];
          view[i+5] = HEAPF32[(((value)+(4*i+20))>>2)];
          view[i+6] = HEAPF32[(((value)+(4*i+24))>>2)];
          view[i+7] = HEAPF32[(((value)+(4*i+28))>>2)];
          view[i+8] = HEAPF32[(((value)+(4*i+32))>>2)];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*36)>>2));
      }
      GLctx.uniformMatrix3fv(webglGetUniformLocation(location), !!transpose, view);
    };
  var _emscripten_glUniformMatrix3fv = _glUniformMatrix3fv;

  
  
  /** @suppress {duplicate } */
  var _glUniformMatrix4fv = (location, count, transpose, value) => {
  
      if (count <= 18) {
        // avoid allocation when uploading few enough uniforms
        var view = miniTempWebGLFloatBuffers[16*count];
        // hoist the heap out of the loop for size and for pthreads+growth.
        var heap = HEAPF32;
        value = ((value)>>2);
        count *= 16;
        for (var i = 0; i < count; i += 16) {
          var dst = value + i;
          view[i] = heap[dst];
          view[i + 1] = heap[dst + 1];
          view[i + 2] = heap[dst + 2];
          view[i + 3] = heap[dst + 3];
          view[i + 4] = heap[dst + 4];
          view[i + 5] = heap[dst + 5];
          view[i + 6] = heap[dst + 6];
          view[i + 7] = heap[dst + 7];
          view[i + 8] = heap[dst + 8];
          view[i + 9] = heap[dst + 9];
          view[i + 10] = heap[dst + 10];
          view[i + 11] = heap[dst + 11];
          view[i + 12] = heap[dst + 12];
          view[i + 13] = heap[dst + 13];
          view[i + 14] = heap[dst + 14];
          view[i + 15] = heap[dst + 15];
        }
      } else
      {
        var view = HEAPF32.subarray((((value)>>2)), ((value+count*64)>>2));
      }
      GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
    };
  var _emscripten_glUniformMatrix4fv = _glUniformMatrix4fv;

  /** @suppress {duplicate } */
  var _glUseProgram = (program) => {
      program = GL.programs[program];
      GLctx.useProgram(program);
      // Record the currently active program so that we can access the uniform
      // mapping table of that program.
      GLctx.currentProgram = program;
    };
  var _emscripten_glUseProgram = _glUseProgram;

  /** @suppress {duplicate } */
  var _glValidateProgram = (program) => {
      GLctx.validateProgram(GL.programs[program]);
    };
  var _emscripten_glValidateProgram = _glValidateProgram;

  /** @suppress {duplicate } */
  var _glVertexAttrib1f = (x0, x1) => GLctx.vertexAttrib1f(x0, x1);
  var _emscripten_glVertexAttrib1f = _glVertexAttrib1f;

  /** @suppress {duplicate } */
  var _glVertexAttrib1fv = (index, v) => {
  
      GLctx.vertexAttrib1f(index, HEAPF32[v>>2]);
    };
  var _emscripten_glVertexAttrib1fv = _glVertexAttrib1fv;

  /** @suppress {duplicate } */
  var _glVertexAttrib2f = (x0, x1, x2) => GLctx.vertexAttrib2f(x0, x1, x2);
  var _emscripten_glVertexAttrib2f = _glVertexAttrib2f;

  /** @suppress {duplicate } */
  var _glVertexAttrib2fv = (index, v) => {
  
      GLctx.vertexAttrib2f(index, HEAPF32[v>>2], HEAPF32[v+4>>2]);
    };
  var _emscripten_glVertexAttrib2fv = _glVertexAttrib2fv;

  /** @suppress {duplicate } */
  var _glVertexAttrib3f = (x0, x1, x2, x3) => GLctx.vertexAttrib3f(x0, x1, x2, x3);
  var _emscripten_glVertexAttrib3f = _glVertexAttrib3f;

  /** @suppress {duplicate } */
  var _glVertexAttrib3fv = (index, v) => {
  
      GLctx.vertexAttrib3f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2]);
    };
  var _emscripten_glVertexAttrib3fv = _glVertexAttrib3fv;

  /** @suppress {duplicate } */
  var _glVertexAttrib4f = (x0, x1, x2, x3, x4) => GLctx.vertexAttrib4f(x0, x1, x2, x3, x4);
  var _emscripten_glVertexAttrib4f = _glVertexAttrib4f;

  /** @suppress {duplicate } */
  var _glVertexAttrib4fv = (index, v) => {
  
      GLctx.vertexAttrib4f(index, HEAPF32[v>>2], HEAPF32[v+4>>2], HEAPF32[v+8>>2], HEAPF32[v+12>>2]);
    };
  var _emscripten_glVertexAttrib4fv = _glVertexAttrib4fv;

  
  /** @suppress {duplicate } */
  var _glVertexAttribDivisor = (index, divisor) => {
      GLctx.vertexAttribDivisor(index, divisor);
    };
  /** @suppress {duplicate } */
  var _glVertexAttribDivisorANGLE = _glVertexAttribDivisor;
  var _emscripten_glVertexAttribDivisorANGLE = _glVertexAttribDivisorANGLE;

  /** @suppress {duplicate } */
  var _glVertexAttribPointer = (index, size, type, normalized, stride, ptr) => {
      GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
    };
  var _emscripten_glVertexAttribPointer = _glVertexAttribPointer;

  /** @suppress {duplicate } */
  var _glViewport = (x0, x1, x2, x3) => GLctx.viewport(x0, x1, x2, x3);
  var _emscripten_glViewport = _glViewport;

  var getHeapMax = () =>
      HEAPU8.length;
  
  
  var abortOnCannotGrowMemory = (requestedSize) => {
      abort(`Cannot enlarge memory arrays to size ${requestedSize} bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value ${HEAP8.length}, (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0`);
    };
  var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      requestedSize >>>= 0;
      abortOnCannotGrowMemory(requestedSize);
    };

  /** @suppress {checkTypes} */
  var _emscripten_sample_gamepad_data = () => {
      try {
        if (navigator.getGamepads) return (JSEvents.lastGamepadState = navigator.getGamepads())
          ? 0 : -1;
      } catch(e) {
        err(`navigator.getGamepads() exists, but failed to execute with exception ${e}. Disabling Gamepad access.`);
        navigator.getGamepads = null; // Disable getGamepads() so that it won't be attempted to be used again.
      }
      return -1;
    };

  
  var findCanvasEventTarget = findEventTarget;
  var _emscripten_set_canvas_element_size = (target, width, height) => {
      var canvas = findCanvasEventTarget(target);
      if (!canvas) return -4;
      canvas.width = width;
      canvas.height = height;
      return 0;
    };

  
  
  
  var fillMouseEventData = (eventStruct, e, target) => {
      assert(eventStruct % 4 == 0);
      HEAPF64[((eventStruct)>>3)] = e.timeStamp;
      var idx = ((eventStruct)>>2);
      HEAP32[idx + 2] = e.screenX;
      HEAP32[idx + 3] = e.screenY;
      HEAP32[idx + 4] = e.clientX;
      HEAP32[idx + 5] = e.clientY;
      HEAP8[eventStruct + 24] = e.ctrlKey;
      HEAP8[eventStruct + 25] = e.shiftKey;
      HEAP8[eventStruct + 26] = e.altKey;
      HEAP8[eventStruct + 27] = e.metaKey;
      HEAP16[idx*2 + 14] = e.button;
      HEAP16[idx*2 + 15] = e.buttons;
  
      HEAP32[idx + 8] = e["movementX"]
        ;
  
      HEAP32[idx + 9] = e["movementY"]
        ;
  
      // Note: rect contains doubles (truncated to placate SAFE_HEAP, which is the same behaviour when writing to HEAP32 anyway)
      var rect = getBoundingClientRect(target);
      HEAP32[idx + 10] = e.clientX - (rect.left | 0);
      HEAP32[idx + 11] = e.clientY - (rect.top  | 0);
  
    };
  
  
  
  var wasmTableMirror = [];
  
  /** @type {WebAssembly.Table} */
  var wasmTable;
  var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        /** @suppress {checkTypes} */
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      /** @suppress {checkTypes} */
      assert(wasmTable.get(funcPtr) == func, 'JavaScript-side Wasm function table mirror is out of date!');
      return func;
    };
  var registerMouseEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.mouseEvent ||= _malloc(64);
      target = findEventTarget(target);
  
      var mouseEventHandlerFunc = (e = event) => {
        // TODO: Make this access thread safe, or this could update live while app is reading it.
        fillMouseEventData(JSEvents.mouseEvent, e, target);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, JSEvents.mouseEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        allowsDeferredCalls: eventTypeString != 'mousemove' && eventTypeString != 'mouseenter' && eventTypeString != 'mouseleave', // Mouse move events do not allow fullscreen/pointer lock requests to be handled in them!
        eventTypeString,
        callbackfunc,
        handlerFunc: mouseEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_click_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 4, "click", targetThread);

  
  
  
  var fillFullscreenChangeEventData = (eventStruct) => {
      var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
      var isFullscreen = !!fullscreenElement;
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress{checkTypes} */
      HEAP8[eventStruct] = isFullscreen;
      HEAP8[(eventStruct)+(1)] = JSEvents.fullscreenEnabled();
      // If transitioning to fullscreen, report info about the element that is now fullscreen.
      // If transitioning to windowed mode, report info about the element that just was fullscreen.
      var reportedElement = isFullscreen ? fullscreenElement : JSEvents.previousFullscreenElement;
      var nodeName = JSEvents.getNodeNameForTarget(reportedElement);
      var id = reportedElement?.id || '';
      stringToUTF8(nodeName, eventStruct + 2, 128);
      stringToUTF8(id, eventStruct + 130, 128);
      HEAP32[(((eventStruct)+(260))>>2)] = reportedElement ? reportedElement.clientWidth : 0;
      HEAP32[(((eventStruct)+(264))>>2)] = reportedElement ? reportedElement.clientHeight : 0;
      HEAP32[(((eventStruct)+(268))>>2)] = screen.width;
      HEAP32[(((eventStruct)+(272))>>2)] = screen.height;
      if (isFullscreen) {
        JSEvents.previousFullscreenElement = fullscreenElement;
      }
    };
  
  
  
  var registerFullscreenChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.fullscreenChangeEvent ||= _malloc(276);
  
      var fullscreenChangeEventhandlerFunc = (e = event) => {
        var fullscreenChangeEvent = JSEvents.fullscreenChangeEvent;
  
        fillFullscreenChangeEventData(fullscreenChangeEvent);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, fullscreenChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        eventTypeString,
        callbackfunc,
        handlerFunc: fullscreenChangeEventhandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  
  var _emscripten_set_fullscreenchange_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => {
      if (!JSEvents.fullscreenEnabled()) return -1;
      target = findEventTarget(target);
      if (!target) return -4;
  
      // Unprefixed Fullscreen API shipped in Chromium 71 (https://bugs.chromium.org/p/chromium/issues/detail?id=383813)
      // As of Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitfullscreenchange. TODO: revisit this check once Safari ships unprefixed version.
      registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "webkitfullscreenchange", targetThread);
  
      return registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "fullscreenchange", targetThread);
    };

  
  
  
  
  var registerGamepadEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.gamepadEvent ||= _malloc(1240);
  
      var gamepadEventHandlerFunc = (e = event) => {
        var gamepadEvent = JSEvents.gamepadEvent;
        fillGamepadEventData(gamepadEvent, e["gamepad"]);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, gamepadEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target: findEventTarget(target),
        allowsDeferredCalls: true,
        eventTypeString,
        callbackfunc,
        handlerFunc: gamepadEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  var _emscripten_set_gamepadconnected_callback_on_thread = (userData, useCapture, callbackfunc, targetThread) => {
      if (_emscripten_sample_gamepad_data()) return -1;
      return registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 26, "gamepadconnected", targetThread);
    };

  
  var _emscripten_set_gamepaddisconnected_callback_on_thread = (userData, useCapture, callbackfunc, targetThread) => {
      if (_emscripten_sample_gamepad_data()) return -1;
      return registerGamepadEventCallback(2, userData, useCapture, callbackfunc, 27, "gamepaddisconnected", targetThread);
    };

  var _emscripten_set_mousemove_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, "mousemove", targetThread);

  
  
  
  var fillPointerlockChangeEventData = (eventStruct) => {
      var pointerLockElement = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
      var isPointerlocked = !!pointerLockElement;
      // Assigning a boolean to HEAP32 with expected type coercion.
      /** @suppress{checkTypes} */
      HEAP8[eventStruct] = isPointerlocked;
      var nodeName = JSEvents.getNodeNameForTarget(pointerLockElement);
      var id = pointerLockElement?.id || '';
      stringToUTF8(nodeName, eventStruct + 1, 128);
      stringToUTF8(id, eventStruct + 129, 128);
    };
  
  
  
  var registerPointerlockChangeEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.pointerlockChangeEvent ||= _malloc(257);
  
      var pointerlockChangeEventHandlerFunc = (e = event) => {
        var pointerlockChangeEvent = JSEvents.pointerlockChangeEvent;
        fillPointerlockChangeEventData(pointerlockChangeEvent);
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, pointerlockChangeEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        eventTypeString,
        callbackfunc,
        handlerFunc: pointerlockChangeEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  
  
  /** @suppress {missingProperties} */
  var _emscripten_set_pointerlockchange_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) => {
      // TODO: Currently not supported in pthreads or in --proxy-to-worker mode. (In pthreads mode, document object is not defined)
      if (!document || !document.body || (!document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock)) {
        return -1;
      }
  
      target = findEventTarget(target);
      if (!target) return -4;
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mozpointerlockchange", targetThread);
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "webkitpointerlockchange", targetThread);
      registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mspointerlockchange", targetThread);
      return registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "pointerlockchange", targetThread);
    };

  
  
  
  var registerUiEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.uiEvent ||= _malloc(36);
  
      target = findEventTarget(target);
  
      var uiEventHandlerFunc = (e = event) => {
        if (e.target != target) {
          // Never take ui events such as scroll via a 'bubbled' route, but always from the direct element that
          // was targeted. Otherwise e.g. if app logs a message in response to a page scroll, the Emscripten log
          // message box could cause to scroll, generating a new (bubbled) scroll message, causing a new log print,
          // causing a new scroll, etc..
          return;
        }
        var b = document.body; // Take document.body to a variable, Closure compiler does not outline access to it on its own.
        if (!b) {
          // During a page unload 'body' can be null, with "Cannot read property 'clientWidth' of null" being thrown
          return;
        }
        var uiEvent = JSEvents.uiEvent;
        HEAP32[((uiEvent)>>2)] = 0; // always zero for resize and scroll
        HEAP32[(((uiEvent)+(4))>>2)] = b.clientWidth;
        HEAP32[(((uiEvent)+(8))>>2)] = b.clientHeight;
        HEAP32[(((uiEvent)+(12))>>2)] = innerWidth;
        HEAP32[(((uiEvent)+(16))>>2)] = innerHeight;
        HEAP32[(((uiEvent)+(20))>>2)] = outerWidth;
        HEAP32[(((uiEvent)+(24))>>2)] = outerHeight;
        HEAP32[(((uiEvent)+(28))>>2)] = pageXOffset | 0; // scroll offsets are float
        HEAP32[(((uiEvent)+(32))>>2)] = pageYOffset | 0;
        if (getWasmTableEntry(callbackfunc)(eventTypeId, uiEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        eventTypeString,
        callbackfunc,
        handlerFunc: uiEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_resize_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerUiEventCallback(target, userData, useCapture, callbackfunc, 10, "resize", targetThread);

  
  
  
  
  var registerTouchEventCallback = (target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) => {
      JSEvents.touchEvent ||= _malloc(1552);
  
      target = findEventTarget(target);
  
      var touchEventHandlerFunc = (e) => {
        assert(e);
        var t, touches = {}, et = e.touches;
        // To ease marshalling different kinds of touches that browser reports (all touches are listed in e.touches,
        // only changed touches in e.changedTouches, and touches on target at a.targetTouches), mark a boolean in
        // each Touch object so that we can later loop only once over all touches we see to marshall over to Wasm.
  
        for (let t of et) {
          // Browser might recycle the generated Touch objects between each frame (Firefox on Android), so reset any
          // changed/target states we may have set from previous frame.
          t.isChanged = t.onTarget = 0;
          touches[t.identifier] = t;
        }
        // Mark which touches are part of the changedTouches list.
        for (let t of e.changedTouches) {
          t.isChanged = 1;
          touches[t.identifier] = t;
        }
        // Mark which touches are part of the targetTouches list.
        for (let t of e.targetTouches) {
          touches[t.identifier].onTarget = 1;
        }
  
        var touchEvent = JSEvents.touchEvent;
        HEAPF64[((touchEvent)>>3)] = e.timeStamp;
        HEAP8[touchEvent + 12] = e.ctrlKey;
        HEAP8[touchEvent + 13] = e.shiftKey;
        HEAP8[touchEvent + 14] = e.altKey;
        HEAP8[touchEvent + 15] = e.metaKey;
        var idx = touchEvent + 16;
        var targetRect = getBoundingClientRect(target);
        var numTouches = 0;
        for (let t of Object.values(touches)) {
          var idx32 = ((idx)>>2); // Pre-shift the ptr to index to HEAP32 to save code size
          HEAP32[idx32 + 0] = t.identifier;
          HEAP32[idx32 + 1] = t.screenX;
          HEAP32[idx32 + 2] = t.screenY;
          HEAP32[idx32 + 3] = t.clientX;
          HEAP32[idx32 + 4] = t.clientY;
          HEAP32[idx32 + 5] = t.pageX;
          HEAP32[idx32 + 6] = t.pageY;
          HEAP8[idx + 28] = t.isChanged;
          HEAP8[idx + 29] = t.onTarget;
          HEAP32[idx32 + 8] = t.clientX - (targetRect.left | 0);
          HEAP32[idx32 + 9] = t.clientY - (targetRect.top  | 0);
  
          idx += 48;
  
          if (++numTouches > 31) {
            break;
          }
        }
        HEAP32[(((touchEvent)+(8))>>2)] = numTouches;
  
        if (getWasmTableEntry(callbackfunc)(eventTypeId, touchEvent, userData)) e.preventDefault();
      };
  
      var eventHandler = {
        target,
        allowsDeferredCalls: eventTypeString == 'touchstart' || eventTypeString == 'touchend',
        eventTypeString,
        callbackfunc,
        handlerFunc: touchEventHandlerFunc,
        useCapture
      };
      return JSEvents.registerOrRemoveHandler(eventHandler);
    };
  var _emscripten_set_touchcancel_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 25, "touchcancel", targetThread);

  var _emscripten_set_touchend_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 23, "touchend", targetThread);

  var _emscripten_set_touchmove_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 24, "touchmove", targetThread);

  var _emscripten_set_touchstart_callback_on_thread = (target, userData, useCapture, callbackfunc, targetThread) =>
      registerTouchEventCallback(target, userData, useCapture, callbackfunc, 22, "touchstart", targetThread);

  var handleException = (e) => {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      checkStackCookie();
      if (e instanceof WebAssembly.RuntimeError) {
        if (_emscripten_stack_get_current() <= 0) {
          err('Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 65536)');
        }
      }
      quit_(1, e);
    };
  
  
  var runtimeKeepaliveCounter = 0;
  var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
  var _proc_exit = (code) => {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        Module['onExit']?.(code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    };
  
  
  /** @suppress {duplicate } */
  /** @param {boolean|number=} implicit */
  var exitJS = (status, implicit) => {
      EXITSTATUS = status;
  
      checkUnflushedContent();
  
      // if exit() was called explicitly, warn the user if the runtime isn't actually being shut down
      if (keepRuntimeAlive() && !implicit) {
        var msg = `program exited (with status: ${status}), but keepRuntimeAlive() is set (counter=${runtimeKeepaliveCounter}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;
        err(msg);
      }
  
      _proc_exit(status);
    };
  var _exit = exitJS;
  
  
  var maybeExit = () => {
      if (!keepRuntimeAlive()) {
        try {
          _exit(EXITSTATUS);
        } catch (e) {
          handleException(e);
        }
      }
    };
  var callUserCallback = (func) => {
      if (ABORT) {
        err('user callback triggered after runtime exited or application aborted.  Ignoring.');
        return;
      }
      try {
        func();
        maybeExit();
      } catch (e) {
        handleException(e);
      }
    };
  
  /** @param {number=} timeout */
  var safeSetTimeout = (func, timeout) => {
      
      return setTimeout(() => {
        
        callUserCallback(func);
      }, timeout);
    };
  
  
  
  var Browser = {
  useWebGL:false,
  isFullscreen:false,
  pointerLock:false,
  moduleContextCreatedCallbacks:[],
  workers:[],
  preloadedImages:{
  },
  preloadedAudios:{
  },
  getCanvas:() => Module['canvas'],
  init() {
        if (Browser.initted) return;
        Browser.initted = true;
  
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
  
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module['noImageDecoding'] && /\.(jpg|jpeg|png|bmp|webp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
          if (b.size !== byteArray.length) { // Safari bug #118630
            // Safari's Blob can only take an ArrayBuffer
            b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
          }
          var url = URL.createObjectURL(b);
          assert(typeof url == 'string', 'createObjectURL must return a url as a string');
          var img = new Image();
          img.onload = () => {
            assert(img.complete, `Image ${name} could not be decoded`);
            var canvas = /** @type {!HTMLCanvasElement} */ (document.createElement('canvas'));
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            Browser.preloadedImages[name] = canvas;
            URL.revokeObjectURL(url);
            onload?.(byteArray);
          };
          img.onerror = (event) => {
            err(`Image ${url} could not be decoded`);
            onerror?.();
          };
          img.src = url;
        };
        preloadPlugins.push(imagePlugin);
  
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module['noAudioDecoding'] && name.slice(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            Browser.preloadedAudios[name] = audio;
            onload?.(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            Browser.preloadedAudios[name] = new Audio(); // empty shim
            onerror?.();
          }
          var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
          var url = URL.createObjectURL(b); // XXX we never revoke this!
          assert(typeof url == 'string', 'createObjectURL must return a url as a string');
          var audio = new Audio();
          audio.addEventListener('canplaythrough', () => finish(audio), false); // use addEventListener due to chromium bug 124926
          audio.onerror = function audio_onerror(event) {
            if (done) return;
            err(`warning: browser could not fully decode audio ${name}, trying slower base64 approach`);
            function encode64(data) {
              var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
              var PAD = '=';
              var ret = '';
              var leftchar = 0;
              var leftbits = 0;
              for (var i = 0; i < data.length; i++) {
                leftchar = (leftchar << 8) | data[i];
                leftbits += 8;
                while (leftbits >= 6) {
                  var curr = (leftchar >> (leftbits-6)) & 0x3f;
                  leftbits -= 6;
                  ret += BASE[curr];
                }
              }
              if (leftbits == 2) {
                ret += BASE[(leftchar&3) << 4];
                ret += PAD + PAD;
              } else if (leftbits == 4) {
                ret += BASE[(leftchar&0xf) << 2];
                ret += PAD;
              }
              return ret;
            }
            audio.src = 'data:audio/x-' + name.slice(-3) + ';base64,' + encode64(byteArray);
            finish(audio); // we don't wait for confirmation this worked - but it's worth trying
          };
          audio.src = url;
          // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
          safeSetTimeout(() => {
            finish(audio); // try to use it even though it is not necessarily ready to play
          }, 10000);
        };
        preloadPlugins.push(audioPlugin);
  
        // Canvas event setup
  
        function pointerLockChange() {
          var canvas = Browser.getCanvas();
          Browser.pointerLock = document['pointerLockElement'] === canvas ||
                                document['mozPointerLockElement'] === canvas ||
                                document['webkitPointerLockElement'] === canvas ||
                                document['msPointerLockElement'] === canvas;
        }
        var canvas = Browser.getCanvas();
        if (canvas) {
          // forced aspect ratio can be enabled by defining 'forcedAspectRatio' on Module
          // Module['forcedAspectRatio'] = 4 / 3;
  
          canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                      canvas['mozRequestPointerLock'] ||
                                      canvas['webkitRequestPointerLock'] ||
                                      canvas['msRequestPointerLock'] ||
                                      (() => {});
          canvas.exitPointerLock = document['exitPointerLock'] ||
                                   document['mozExitPointerLock'] ||
                                   document['webkitExitPointerLock'] ||
                                   document['msExitPointerLock'] ||
                                   (() => {}); // no-op if function does not exist
          canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
  
          document.addEventListener('pointerlockchange', pointerLockChange, false);
          document.addEventListener('mozpointerlockchange', pointerLockChange, false);
          document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
          document.addEventListener('mspointerlockchange', pointerLockChange, false);
  
          if (Module['elementPointerLock']) {
            canvas.addEventListener("click", (ev) => {
              if (!Browser.pointerLock && Browser.getCanvas().requestPointerLock) {
                Browser.getCanvas().requestPointerLock();
                ev.preventDefault();
              }
            }, false);
          }
        }
      },
  createContext(/** @type {HTMLCanvasElement} */ canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module['ctx'] && canvas == Browser.getCanvas()) return Module['ctx']; // no need to recreate GL context if it's already been created for this canvas.
  
        var ctx;
        var contextHandle;
        if (useWebGL) {
          // For GLES2/desktop GL compatibility, adjust a few defaults to be different to WebGL defaults, so that they align better with the desktop defaults.
          var contextAttributes = {
            antialias: false,
            alpha: false,
            majorVersion: 1,
          };
  
          if (webGLContextAttributes) {
            for (var attribute in webGLContextAttributes) {
              contextAttributes[attribute] = webGLContextAttributes[attribute];
            }
          }
  
          // This check of existence of GL is here to satisfy Closure compiler, which yells if variable GL is referenced below but GL object is not
          // actually compiled in because application is not doing any GL operations. TODO: Ideally if GL is not being used, this function
          // Browser.createContext() should not even be emitted.
          if (typeof GL != 'undefined') {
            contextHandle = GL.createContext(canvas, contextAttributes);
            if (contextHandle) {
              ctx = GL.getContext(contextHandle).GLctx;
            }
          }
        } else {
          ctx = canvas.getContext('2d');
        }
  
        if (!ctx) return null;
  
        if (setInModule) {
          if (!useWebGL) assert(typeof GLctx == 'undefined', 'cannot set in module if GLctx is used, but we are a non-GL context that would replace it');
          Module['ctx'] = ctx;
          if (useWebGL) GL.makeContextCurrent(contextHandle);
          Browser.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach((callback) => callback());
          Browser.init();
        }
        return ctx;
      },
  fullscreenHandlersInstalled:false,
  lockPointer:undefined,
  resizeCanvas:undefined,
  requestFullscreen(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == 'undefined') Browser.resizeCanvas = false;
  
        var canvas = Browser.getCanvas();
        function fullscreenChange() {
          Browser.isFullscreen = false;
          var canvasContainer = canvas.parentNode;
          if ((document['fullscreenElement'] || document['mozFullScreenElement'] ||
               document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
               document['webkitCurrentFullScreenElement']) === canvasContainer) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          } else {
            // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
  
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
            }
          }
          Module['onFullScreen']?.(Browser.isFullscreen);
          Module['onFullscreen']?.(Browser.isFullscreen);
        }
  
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullscreenChange, false);
          document.addEventListener('mozfullscreenchange', fullscreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullscreenChange, false);
          document.addEventListener('MSFullscreenChange', fullscreenChange, false);
        }
  
        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
  
        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        canvasContainer.requestFullscreen = canvasContainer['requestFullscreen'] ||
                                            canvasContainer['mozRequestFullScreen'] ||
                                            canvasContainer['msRequestFullscreen'] ||
                                           (canvasContainer['webkitRequestFullscreen'] ? () => canvasContainer['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']) : null) ||
                                           (canvasContainer['webkitRequestFullScreen'] ? () => canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) : null);
  
        canvasContainer.requestFullscreen();
      },
  requestFullScreen() {
        abort('Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)');
      },
  exitFullscreen() {
        // This is workaround for chrome. Trying to exit from fullscreen
        // not in fullscreen state will cause "TypeError: Document not active"
        // in chrome. See https://github.com/emscripten-core/emscripten/pull/8236
        if (!Browser.isFullscreen) {
          return false;
        }
  
        var CFS = document['exitFullscreen'] ||
                  document['cancelFullScreen'] ||
                  document['mozCancelFullScreen'] ||
                  document['msExitFullscreen'] ||
                  document['webkitCancelFullScreen'] ||
            (() => {});
        CFS.apply(document, []);
        return true;
      },
  safeSetTimeout(func, timeout) {
        // Legacy function, this is used by the SDL2 port so we need to keep it
        // around at least until that is updated.
        // See https://github.com/libsdl-org/SDL/pull/6304
        return safeSetTimeout(func, timeout);
      },
  getMimetype(name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.slice(name.lastIndexOf('.')+1)];
      },
  getUserMedia(func) {
        window.getUserMedia ||= navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        window.getUserMedia(func);
      },
  getMovementX(event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },
  getMovementY(event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },
  getMouseWheelDelta(event) {
        var delta = 0;
        switch (event.type) {
          case 'DOMMouseScroll':
            // 3 lines make up a step
            delta = event.detail / 3;
            break;
          case 'mousewheel':
            // 120 units make up a step
            delta = event.wheelDelta / 120;
            break;
          case 'wheel':
            delta = event.deltaY
            switch (event.deltaMode) {
              case 0:
                // DOM_DELTA_PIXEL: 100 pixels make up a step
                delta /= 100;
                break;
              case 1:
                // DOM_DELTA_LINE: 3 lines make up a step
                delta /= 3;
                break;
              case 2:
                // DOM_DELTA_PAGE: A page makes up 80 steps
                delta *= 80;
                break;
              default:
                throw 'unrecognized mouse wheel delta mode: ' + event.deltaMode;
            }
            break;
          default:
            throw 'unrecognized mouse wheel event: ' + event.type;
        }
        return delta;
      },
  mouseX:0,
  mouseY:0,
  mouseMovementX:0,
  mouseMovementY:0,
  touches:{
  },
  lastTouches:{
  },
  calculateMouseCoords(pageX, pageY) {
        // Calculate the movement based on the changes
        // in the coordinates.
        var canvas = Browser.getCanvas();
        var rect = canvas.getBoundingClientRect();
  
        // Neither .scrollX or .pageXOffset are defined in a spec, but
        // we prefer .scrollX because it is currently in a spec draft.
        // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
        var scrollX = ((typeof window.scrollX != 'undefined') ? window.scrollX : window.pageXOffset);
        var scrollY = ((typeof window.scrollY != 'undefined') ? window.scrollY : window.pageYOffset);
        // If this assert lands, it's likely because the browser doesn't support scrollX or pageXOffset
        // and we have no viable fallback.
        assert((typeof scrollX != 'undefined') && (typeof scrollY != 'undefined'), 'Unable to retrieve scroll position, mouse positions likely broken.');
        var adjustedX = pageX - (scrollX + rect.left);
        var adjustedY = pageY - (scrollY + rect.top);
  
        // the canvas might be CSS-scaled compared to its backbuffer;
        // SDL-using content will want mouse coordinates in terms
        // of backbuffer units.
        adjustedX = adjustedX * (canvas.width / rect.width);
        adjustedY = adjustedY * (canvas.height / rect.height);
  
        return { x: adjustedX, y: adjustedY };
      },
  setMouseCoords(pageX, pageY) {
        const {x, y} = Browser.calculateMouseCoords(pageX, pageY);
        Browser.mouseMovementX = x - Browser.mouseX;
        Browser.mouseMovementY = y - Browser.mouseY;
        Browser.mouseX = x;
        Browser.mouseY = y;
      },
  calculateMouseEvent(event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
  
          // add the mouse delta to the current absolute mouse position
          Browser.mouseX += Browser.mouseMovementX;
          Browser.mouseY += Browser.mouseMovementY;
        } else {
          if (event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchmove') {
            var touch = event.touch;
            if (touch === undefined) {
              return; // the "touch" property is only defined in SDL
  
            }
            var coords = Browser.calculateMouseCoords(touch.pageX, touch.pageY);
  
            if (event.type === 'touchstart') {
              Browser.lastTouches[touch.identifier] = coords;
              Browser.touches[touch.identifier] = coords;
            } else if (event.type === 'touchend' || event.type === 'touchmove') {
              var last = Browser.touches[touch.identifier];
              last ||= coords;
              Browser.lastTouches[touch.identifier] = last;
              Browser.touches[touch.identifier] = coords;
            }
            return;
          }
  
          Browser.setMouseCoords(event.pageX, event.pageY);
        }
      },
  resizeListeners:[],
  updateResizeListeners() {
        var canvas = Browser.getCanvas();
        Browser.resizeListeners.forEach((listener) => listener(canvas.width, canvas.height));
      },
  setCanvasSize(width, height, noUpdates) {
        var canvas = Browser.getCanvas();
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates) Browser.updateResizeListeners();
      },
  windowedWidth:0,
  windowedHeight:0,
  setFullscreenCanvasSize() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags;
        }
        Browser.updateCanvasDimensions(Browser.getCanvas());
        Browser.updateResizeListeners();
      },
  setWindowedCanvasSize() {
        // check if SDL is available
        if (typeof SDL != "undefined") {
          var flags = HEAPU32[((SDL.screen)>>2)];
          flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
          HEAP32[((SDL.screen)>>2)] = flags;
        }
        Browser.updateCanvasDimensions(Browser.getCanvas());
        Browser.updateResizeListeners();
      },
  updateCanvasDimensions(canvas, wNative, hNative) {
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module['forcedAspectRatio'] > 0) {
          if (w/h < Module['forcedAspectRatio']) {
            w = Math.round(h * Module['forcedAspectRatio']);
          } else {
            h = Math.round(w / Module['forcedAspectRatio']);
          }
        }
        if (((document['fullscreenElement'] || document['mozFullScreenElement'] ||
             document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
             document['webkitCurrentFullScreenElement']) === canvas.parentNode) && (typeof screen != 'undefined')) {
           var factor = Math.min(screen.width / w, screen.height / h);
           w = Math.round(w * factor);
           h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          if (canvas.width  != w) canvas.width  = w;
          if (canvas.height != h) canvas.height = h;
          if (typeof canvas.style != 'undefined') {
            canvas.style.removeProperty( "width");
            canvas.style.removeProperty("height");
          }
        } else {
          if (canvas.width  != wNative) canvas.width  = wNative;
          if (canvas.height != hNative) canvas.height = hNative;
          if (typeof canvas.style != 'undefined') {
            if (w != wNative || h != hNative) {
              canvas.style.setProperty( "width", w + "px", "important");
              canvas.style.setProperty("height", h + "px", "important");
            } else {
              canvas.style.removeProperty( "width");
              canvas.style.removeProperty("height");
            }
          }
        }
      },
  };
  
  var _emscripten_set_window_title = (title) => document.title = UTF8ToString(title);


  function _fd_close(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  var doReadv = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break; // nothing more to read
        if (typeof offset != 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_read(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doReadv(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  
  function _fd_seek(fd, offset, whence, newOffset) {
    offset = bigintToI53Checked(offset);
  
    
  try {
  
      if (isNaN(offset)) return 61;
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.llseek(stream, offset, whence);
      HEAP64[((newOffset)>>3)] = BigInt(stream.position);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  ;
  }

  /** @param {number=} offset */
  var doWritev = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) {
          // No more space to write.
          break;
        }
        if (typeof offset != 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_write(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doWritev(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }




















































  
  
  
  /** @constructor */
  function GLFW_Window(id, width, height, framebufferWidth, framebufferHeight, title, monitor, share) {
        this.id = id;
        this.x = 0;
        this.y = 0;
        this.fullscreen = false; // Used to determine if app in fullscreen mode
        this.storedX = 0; // Used to store X before fullscreen
        this.storedY = 0; // Used to store Y before fullscreen
        this.width = width;
        this.height = height;
        this.framebufferWidth = framebufferWidth;
        this.framebufferHeight = framebufferHeight;
        this.storedWidth = width; // Used to store width before fullscreen
        this.storedHeight = height; // Used to store height before fullscreen
        this.title = title;
        this.monitor = monitor;
        this.share = share;
        this.attributes = Object.assign({}, GLFW.hints);
        this.inputModes = {
          0x00033001:0x00034001, // GLFW_CURSOR (GLFW_CURSOR_NORMAL)
          0x00033002:0, // GLFW_STICKY_KEYS
          0x00033003:0, // GLFW_STICKY_MOUSE_BUTTONS
        };
        this.buttons = 0;
        this.keys = new Array();
        this.domKeys = new Array();
        this.shouldClose = 0;
        this.title = null;
        this.windowPosFunc = 0; // GLFWwindowposfun
        this.windowSizeFunc = 0; // GLFWwindowsizefun
        this.windowCloseFunc = 0; // GLFWwindowclosefun
        this.windowRefreshFunc = 0; // GLFWwindowrefreshfun
        this.windowFocusFunc = 0; // GLFWwindowfocusfun
        this.windowIconifyFunc = 0; // GLFWwindowiconifyfun
        this.windowMaximizeFunc = 0; // GLFWwindowmaximizefun
        this.framebufferSizeFunc = 0; // GLFWframebuffersizefun
        this.windowContentScaleFunc = 0; // GLFWwindowcontentscalefun
        this.mouseButtonFunc = 0; // GLFWmousebuttonfun
        this.cursorPosFunc = 0; // GLFWcursorposfun
        this.cursorEnterFunc = 0; // GLFWcursorenterfun
        this.scrollFunc = 0; // GLFWscrollfun
        this.dropFunc = 0; // GLFWdropfun
        this.keyFunc = 0; // GLFWkeyfun
        this.charFunc = 0; // GLFWcharfun
        this.userptr = 0;
      }
  
  
  var _emscripten_set_main_loop_timing = (mode, value) => {
      MainLoop.timingMode = mode;
      MainLoop.timingValue = value;
  
      if (!MainLoop.func) {
        err('emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.');
        return 1; // Return non-zero on failure, can't set timing mode when there is no main loop.
      }
  
      if (!MainLoop.running) {
        
        MainLoop.running = true;
      }
      if (mode == 0) {
        MainLoop.scheduler = function MainLoop_scheduler_setTimeout() {
          var timeUntilNextTick = Math.max(0, MainLoop.tickStartTime + value - _emscripten_get_now())|0;
          setTimeout(MainLoop.runner, timeUntilNextTick); // doing this each time means that on exception, we stop
        };
        MainLoop.method = 'timeout';
      } else if (mode == 1) {
        MainLoop.scheduler = function MainLoop_scheduler_rAF() {
          MainLoop.requestAnimationFrame(MainLoop.runner);
        };
        MainLoop.method = 'rAF';
      } else if (mode == 2) {
        if (typeof MainLoop.setImmediate == 'undefined') {
          if (typeof setImmediate == 'undefined') {
            // Emulate setImmediate. (note: not a complete polyfill, we don't emulate clearImmediate() to keep code size to minimum, since not needed)
            var setImmediates = [];
            var emscriptenMainLoopMessageId = 'setimmediate';
            /** @param {Event} event */
            var MainLoop_setImmediate_messageHandler = (event) => {
              // When called in current thread or Worker, the main loop ID is structured slightly different to accommodate for --proxy-to-worker runtime listening to Worker events,
              // so check for both cases.
              if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
                event.stopPropagation();
                setImmediates.shift()();
              }
            };
            addEventListener("message", MainLoop_setImmediate_messageHandler, true);
            MainLoop.setImmediate = /** @type{function(function(): ?, ...?): number} */((func) => {
              setImmediates.push(func);
              if (ENVIRONMENT_IS_WORKER) {
                Module['setImmediates'] ??= [];
                Module['setImmediates'].push(func);
                postMessage({target: emscriptenMainLoopMessageId}); // In --proxy-to-worker, route the message via proxyClient.js
              } else postMessage(emscriptenMainLoopMessageId, "*"); // On the main thread, can just send the message to itself.
            });
          } else {
            MainLoop.setImmediate = setImmediate;
          }
        }
        MainLoop.scheduler = function MainLoop_scheduler_setImmediate() {
          MainLoop.setImmediate(MainLoop.runner);
        };
        MainLoop.method = 'immediate';
      }
      return 0;
    };
  
  
  
    /**
     * @param {number=} arg
     * @param {boolean=} noSetTiming
     */
  var setMainLoop = (iterFunc, fps, simulateInfiniteLoop, arg, noSetTiming) => {
      assert(!MainLoop.func, 'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.');
      MainLoop.func = iterFunc;
      MainLoop.arg = arg;
  
      var thisMainLoopId = MainLoop.currentlyRunningMainloop;
      function checkIsRunning() {
        if (thisMainLoopId < MainLoop.currentlyRunningMainloop) {
          
          maybeExit();
          return false;
        }
        return true;
      }
  
      // We create the loop runner here but it is not actually running until
      // _emscripten_set_main_loop_timing is called (which might happen a
      // later time).  This member signifies that the current runner has not
      // yet been started so that we can call runtimeKeepalivePush when it
      // gets it timing set for the first time.
      MainLoop.running = false;
      MainLoop.runner = function MainLoop_runner() {
        if (ABORT) return;
        if (MainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = MainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (MainLoop.remainingBlockers) {
            var remaining = MainLoop.remainingBlockers;
            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
            if (blocker.counted) {
              MainLoop.remainingBlockers = next;
            } else {
              // not counted, but move the progress along a tiny bit
              next = next + 0.5; // do not steal all the next one's progress
              MainLoop.remainingBlockers = (8*remaining + next)/9;
            }
          }
          MainLoop.updateStatus();
  
          // catches pause/resume main loop from blocker execution
          if (!checkIsRunning()) return;
  
          setTimeout(MainLoop.runner, 0);
          return;
        }
  
        // catch pauses from non-main loop sources
        if (!checkIsRunning()) return;
  
        // Implement very basic swap interval control
        MainLoop.currentFrameNumber = MainLoop.currentFrameNumber + 1 | 0;
        if (MainLoop.timingMode == 1 && MainLoop.timingValue > 1 && MainLoop.currentFrameNumber % MainLoop.timingValue != 0) {
          // Not the scheduled time to render this frame - skip.
          MainLoop.scheduler();
          return;
        } else if (MainLoop.timingMode == 0) {
          MainLoop.tickStartTime = _emscripten_get_now();
        }
  
        if (MainLoop.method === 'timeout' && Module['ctx']) {
          warnOnce('Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!');
          MainLoop.method = ''; // just warn once per call to set main loop
        }
  
        MainLoop.runIter(iterFunc);
  
        // catch pauses from the main loop itself
        if (!checkIsRunning()) return;
  
        MainLoop.scheduler();
      }
  
      if (!noSetTiming) {
        if (fps > 0) {
          _emscripten_set_main_loop_timing(0, 1000.0 / fps);
        } else {
          // Do rAF by rendering each frame (no decimating)
          _emscripten_set_main_loop_timing(1, 1);
        }
  
        MainLoop.scheduler();
      }
  
      if (simulateInfiniteLoop) {
        throw 'unwind';
      }
    };
  
  
  var MainLoop = {
  running:false,
  scheduler:null,
  method:"",
  currentlyRunningMainloop:0,
  func:null,
  arg:0,
  timingMode:0,
  timingValue:0,
  currentFrameNumber:0,
  queue:[],
  preMainLoop:[],
  postMainLoop:[],
  pause() {
        MainLoop.scheduler = null;
        // Incrementing this signals the previous main loop that it's now become old, and it must return.
        MainLoop.currentlyRunningMainloop++;
      },
  resume() {
        MainLoop.currentlyRunningMainloop++;
        var timingMode = MainLoop.timingMode;
        var timingValue = MainLoop.timingValue;
        var func = MainLoop.func;
        MainLoop.func = null;
        // do not set timing and call scheduler, we will do it on the next lines
        setMainLoop(func, 0, false, MainLoop.arg, true);
        _emscripten_set_main_loop_timing(timingMode, timingValue);
        MainLoop.scheduler();
      },
  updateStatus() {
        if (Module['setStatus']) {
          var message = Module['statusMessage'] || 'Please wait...';
          var remaining = MainLoop.remainingBlockers ?? 0;
          var expected = MainLoop.expectedBlockers ?? 0;
          if (remaining) {
            if (remaining < expected) {
              Module['setStatus'](`{message} ({expected - remaining}/{expected})`);
            } else {
              Module['setStatus'](message);
            }
          } else {
            Module['setStatus']('');
          }
        }
      },
  init() {
        Module['preMainLoop'] && MainLoop.preMainLoop.push(Module['preMainLoop']);
        Module['postMainLoop'] && MainLoop.postMainLoop.push(Module['postMainLoop']);
      },
  runIter(func) {
        if (ABORT) return;
        for (var pre of MainLoop.preMainLoop) {
          if (pre() === false) {
            return; // |return false| skips a frame
          }
        }
        callUserCallback(func);
        for (var post of MainLoop.postMainLoop) {
          post();
        }
        checkStackCookie();
      },
  nextRAF:0,
  fakeRequestAnimationFrame(func) {
        // try to keep 60fps between calls to here
        var now = Date.now();
        if (MainLoop.nextRAF === 0) {
          MainLoop.nextRAF = now + 1000/60;
        } else {
          while (now + 2 >= MainLoop.nextRAF) { // fudge a little, to avoid timer jitter causing us to do lots of delay:0
            MainLoop.nextRAF += 1000/60;
          }
        }
        var delay = Math.max(MainLoop.nextRAF - now, 0);
        setTimeout(func, delay);
      },
  requestAnimationFrame(func) {
        if (typeof requestAnimationFrame == 'function') {
          requestAnimationFrame(func);
          return;
        }
        var RAF = MainLoop.fakeRequestAnimationFrame;
        RAF(func);
      },
  };
  
  
  
  
  
  var GLFW = {
  WindowFromId:(id) => {
        if (id <= 0 || !GLFW.windows) return null;
        return GLFW.windows[id - 1];
      },
  joystickFunc:0,
  errorFunc:0,
  monitorFunc:0,
  active:null,
  scale:null,
  windows:null,
  monitors:null,
  monitorString:null,
  versionString:null,
  initialTime:null,
  extensions:null,
  devicePixelRatioMQL:null,
  hints:null,
  primaryTouchId:null,
  defaultHints:{
  131073:0,
  131074:0,
  131075:1,
  131076:1,
  131077:1,
  131082:0,
  135169:8,
  135170:8,
  135171:8,
  135172:8,
  135173:24,
  135174:8,
  135175:0,
  135176:0,
  135177:0,
  135178:0,
  135179:0,
  135180:0,
  135181:0,
  135182:0,
  135183:0,
  139265:196609,
  139266:1,
  139267:0,
  139268:0,
  139269:0,
  139270:0,
  139271:0,
  139272:0,
  139276:0,
  },
  DOMToGLFWKeyCode:(keycode) => {
        switch (keycode) {
          // these keycodes are only defined for GLFW3, assume they are the same for GLFW2
          case 0x20:return 32; // DOM_VK_SPACE -> GLFW_KEY_SPACE
          case 0xDE:return 39; // DOM_VK_QUOTE -> GLFW_KEY_APOSTROPHE
          case 0xBC:return 44; // DOM_VK_COMMA -> GLFW_KEY_COMMA
          case 0xAD:return 45; // DOM_VK_HYPHEN_MINUS -> GLFW_KEY_MINUS
          case 0xBD:return 45; // DOM_VK_MINUS -> GLFW_KEY_MINUS
          case 0xBE:return 46; // DOM_VK_PERIOD -> GLFW_KEY_PERIOD
          case 0xBF:return 47; // DOM_VK_SLASH -> GLFW_KEY_SLASH
          case 0x30:return 48; // DOM_VK_0 -> GLFW_KEY_0
          case 0x31:return 49; // DOM_VK_1 -> GLFW_KEY_1
          case 0x32:return 50; // DOM_VK_2 -> GLFW_KEY_2
          case 0x33:return 51; // DOM_VK_3 -> GLFW_KEY_3
          case 0x34:return 52; // DOM_VK_4 -> GLFW_KEY_4
          case 0x35:return 53; // DOM_VK_5 -> GLFW_KEY_5
          case 0x36:return 54; // DOM_VK_6 -> GLFW_KEY_6
          case 0x37:return 55; // DOM_VK_7 -> GLFW_KEY_7
          case 0x38:return 56; // DOM_VK_8 -> GLFW_KEY_8
          case 0x39:return 57; // DOM_VK_9 -> GLFW_KEY_9
          case 0x3B:return 59; // DOM_VK_SEMICOLON -> GLFW_KEY_SEMICOLON
          case 0x3D:return 61; // DOM_VK_EQUALS -> GLFW_KEY_EQUAL
          case 0xBB:return 61; // DOM_VK_EQUALS -> GLFW_KEY_EQUAL
          case 0x41:return 65; // DOM_VK_A -> GLFW_KEY_A
          case 0x42:return 66; // DOM_VK_B -> GLFW_KEY_B
          case 0x43:return 67; // DOM_VK_C -> GLFW_KEY_C
          case 0x44:return 68; // DOM_VK_D -> GLFW_KEY_D
          case 0x45:return 69; // DOM_VK_E -> GLFW_KEY_E
          case 0x46:return 70; // DOM_VK_F -> GLFW_KEY_F
          case 0x47:return 71; // DOM_VK_G -> GLFW_KEY_G
          case 0x48:return 72; // DOM_VK_H -> GLFW_KEY_H
          case 0x49:return 73; // DOM_VK_I -> GLFW_KEY_I
          case 0x4A:return 74; // DOM_VK_J -> GLFW_KEY_J
          case 0x4B:return 75; // DOM_VK_K -> GLFW_KEY_K
          case 0x4C:return 76; // DOM_VK_L -> GLFW_KEY_L
          case 0x4D:return 77; // DOM_VK_M -> GLFW_KEY_M
          case 0x4E:return 78; // DOM_VK_N -> GLFW_KEY_N
          case 0x4F:return 79; // DOM_VK_O -> GLFW_KEY_O
          case 0x50:return 80; // DOM_VK_P -> GLFW_KEY_P
          case 0x51:return 81; // DOM_VK_Q -> GLFW_KEY_Q
          case 0x52:return 82; // DOM_VK_R -> GLFW_KEY_R
          case 0x53:return 83; // DOM_VK_S -> GLFW_KEY_S
          case 0x54:return 84; // DOM_VK_T -> GLFW_KEY_T
          case 0x55:return 85; // DOM_VK_U -> GLFW_KEY_U
          case 0x56:return 86; // DOM_VK_V -> GLFW_KEY_V
          case 0x57:return 87; // DOM_VK_W -> GLFW_KEY_W
          case 0x58:return 88; // DOM_VK_X -> GLFW_KEY_X
          case 0x59:return 89; // DOM_VK_Y -> GLFW_KEY_Y
          case 0x5a:return 90; // DOM_VK_Z -> GLFW_KEY_Z
          case 0xDB:return 91; // DOM_VK_OPEN_BRACKET -> GLFW_KEY_LEFT_BRACKET
          case 0xDC:return 92; // DOM_VK_BACKSLASH -> GLFW_KEY_BACKSLASH
          case 0xDD:return 93; // DOM_VK_CLOSE_BRACKET -> GLFW_KEY_RIGHT_BRACKET
          case 0xC0:return 96; // DOM_VK_BACK_QUOTE -> GLFW_KEY_GRAVE_ACCENT
  
          case 0x1B:return 256; // DOM_VK_ESCAPE -> GLFW_KEY_ESCAPE
          case 0x0D:return 257; // DOM_VK_RETURN -> GLFW_KEY_ENTER
          case 0x09:return 258; // DOM_VK_TAB -> GLFW_KEY_TAB
          case 0x08:return 259; // DOM_VK_BACK -> GLFW_KEY_BACKSPACE
          case 0x2D:return 260; // DOM_VK_INSERT -> GLFW_KEY_INSERT
          case 0x2E:return 261; // DOM_VK_DELETE -> GLFW_KEY_DELETE
          case 0x27:return 262; // DOM_VK_RIGHT -> GLFW_KEY_RIGHT
          case 0x25:return 263; // DOM_VK_LEFT -> GLFW_KEY_LEFT
          case 0x28:return 264; // DOM_VK_DOWN -> GLFW_KEY_DOWN
          case 0x26:return 265; // DOM_VK_UP -> GLFW_KEY_UP
          case 0x21:return 266; // DOM_VK_PAGE_UP -> GLFW_KEY_PAGE_UP
          case 0x22:return 267; // DOM_VK_PAGE_DOWN -> GLFW_KEY_PAGE_DOWN
          case 0x24:return 268; // DOM_VK_HOME -> GLFW_KEY_HOME
          case 0x23:return 269; // DOM_VK_END -> GLFW_KEY_END
          case 0x14:return 280; // DOM_VK_CAPS_LOCK -> GLFW_KEY_CAPS_LOCK
          case 0x91:return 281; // DOM_VK_SCROLL_LOCK -> GLFW_KEY_SCROLL_LOCK
          case 0x90:return 282; // DOM_VK_NUM_LOCK -> GLFW_KEY_NUM_LOCK
          case 0x2C:return 283; // DOM_VK_SNAPSHOT -> GLFW_KEY_PRINT_SCREEN
          case 0x13:return 284; // DOM_VK_PAUSE -> GLFW_KEY_PAUSE
          case 0x70:return 290; // DOM_VK_F1 -> GLFW_KEY_F1
          case 0x71:return 291; // DOM_VK_F2 -> GLFW_KEY_F2
          case 0x72:return 292; // DOM_VK_F3 -> GLFW_KEY_F3
          case 0x73:return 293; // DOM_VK_F4 -> GLFW_KEY_F4
          case 0x74:return 294; // DOM_VK_F5 -> GLFW_KEY_F5
          case 0x75:return 295; // DOM_VK_F6 -> GLFW_KEY_F6
          case 0x76:return 296; // DOM_VK_F7 -> GLFW_KEY_F7
          case 0x77:return 297; // DOM_VK_F8 -> GLFW_KEY_F8
          case 0x78:return 298; // DOM_VK_F9 -> GLFW_KEY_F9
          case 0x79:return 299; // DOM_VK_F10 -> GLFW_KEY_F10
          case 0x7A:return 300; // DOM_VK_F11 -> GLFW_KEY_F11
          case 0x7B:return 301; // DOM_VK_F12 -> GLFW_KEY_F12
          case 0x7C:return 302; // DOM_VK_F13 -> GLFW_KEY_F13
          case 0x7D:return 303; // DOM_VK_F14 -> GLFW_KEY_F14
          case 0x7E:return 304; // DOM_VK_F15 -> GLFW_KEY_F15
          case 0x7F:return 305; // DOM_VK_F16 -> GLFW_KEY_F16
          case 0x80:return 306; // DOM_VK_F17 -> GLFW_KEY_F17
          case 0x81:return 307; // DOM_VK_F18 -> GLFW_KEY_F18
          case 0x82:return 308; // DOM_VK_F19 -> GLFW_KEY_F19
          case 0x83:return 309; // DOM_VK_F20 -> GLFW_KEY_F20
          case 0x84:return 310; // DOM_VK_F21 -> GLFW_KEY_F21
          case 0x85:return 311; // DOM_VK_F22 -> GLFW_KEY_F22
          case 0x86:return 312; // DOM_VK_F23 -> GLFW_KEY_F23
          case 0x87:return 313; // DOM_VK_F24 -> GLFW_KEY_F24
          case 0x88:return 314; // 0x88 (not used?) -> GLFW_KEY_F25
          case 0x60:return 320; // DOM_VK_NUMPAD0 -> GLFW_KEY_KP_0
          case 0x61:return 321; // DOM_VK_NUMPAD1 -> GLFW_KEY_KP_1
          case 0x62:return 322; // DOM_VK_NUMPAD2 -> GLFW_KEY_KP_2
          case 0x63:return 323; // DOM_VK_NUMPAD3 -> GLFW_KEY_KP_3
          case 0x64:return 324; // DOM_VK_NUMPAD4 -> GLFW_KEY_KP_4
          case 0x65:return 325; // DOM_VK_NUMPAD5 -> GLFW_KEY_KP_5
          case 0x66:return 326; // DOM_VK_NUMPAD6 -> GLFW_KEY_KP_6
          case 0x67:return 327; // DOM_VK_NUMPAD7 -> GLFW_KEY_KP_7
          case 0x68:return 328; // DOM_VK_NUMPAD8 -> GLFW_KEY_KP_8
          case 0x69:return 329; // DOM_VK_NUMPAD9 -> GLFW_KEY_KP_9
          case 0x6E:return 330; // DOM_VK_DECIMAL -> GLFW_KEY_KP_DECIMAL
          case 0x6F:return 331; // DOM_VK_DIVIDE -> GLFW_KEY_KP_DIVIDE
          case 0x6A:return 332; // DOM_VK_MULTIPLY -> GLFW_KEY_KP_MULTIPLY
          case 0x6D:return 333; // DOM_VK_SUBTRACT -> GLFW_KEY_KP_SUBTRACT
          case 0x6B:return 334; // DOM_VK_ADD -> GLFW_KEY_KP_ADD
          // case 0x0D:return 335; // DOM_VK_RETURN -> GLFW_KEY_KP_ENTER (DOM_KEY_LOCATION_RIGHT)
          // case 0x61:return 336; // DOM_VK_EQUALS -> GLFW_KEY_KP_EQUAL (DOM_KEY_LOCATION_RIGHT)
          case 0x10:return 340; // DOM_VK_SHIFT -> GLFW_KEY_LEFT_SHIFT
          case 0x11:return 341; // DOM_VK_CONTROL -> GLFW_KEY_LEFT_CONTROL
          case 0x12:return 342; // DOM_VK_ALT -> GLFW_KEY_LEFT_ALT
          case 0x5B:return 343; // DOM_VK_WIN -> GLFW_KEY_LEFT_SUPER
          case 0xE0:return 343; // DOM_VK_META -> GLFW_KEY_LEFT_SUPER
          // case 0x10:return 344; // DOM_VK_SHIFT -> GLFW_KEY_RIGHT_SHIFT (DOM_KEY_LOCATION_RIGHT)
          // case 0x11:return 345; // DOM_VK_CONTROL -> GLFW_KEY_RIGHT_CONTROL (DOM_KEY_LOCATION_RIGHT)
          // case 0x12:return 346; // DOM_VK_ALT -> GLFW_KEY_RIGHT_ALT (DOM_KEY_LOCATION_RIGHT)
          // case 0x5B:return 347; // DOM_VK_WIN -> GLFW_KEY_RIGHT_SUPER (DOM_KEY_LOCATION_RIGHT)
          case 0x5D:return 348; // DOM_VK_CONTEXT_MENU -> GLFW_KEY_MENU
          // XXX: GLFW_KEY_WORLD_1, GLFW_KEY_WORLD_2 what are these?
          default:return -1; // GLFW_KEY_UNKNOWN
        };
      },
  getModBits:(win) => {
        var mod = 0;
        if (win.keys[340]) mod |= 0x0001; // GLFW_MOD_SHIFT
        if (win.keys[341]) mod |= 0x0002; // GLFW_MOD_CONTROL
        if (win.keys[342]) mod |= 0x0004; // GLFW_MOD_ALT
        if (win.keys[343] || win.keys[348]) mod |= 0x0008; // GLFW_MOD_SUPER
        // add caps and num lock keys? only if lock_key_mod is set
        return mod;
      },
  onKeyPress:(event) => {
        if (!GLFW.active || !GLFW.active.charFunc) return;
        if (event.ctrlKey || event.metaKey) return;
  
        // correct unicode charCode is only available with onKeyPress event
        var charCode = event.charCode;
        if (charCode == 0 || (charCode >= 0x00 && charCode <= 0x1F)) return;
  
        getWasmTableEntry(GLFW.active.charFunc)(GLFW.active.id, charCode);
      },
  onKeyChanged:(keyCode, status) => {
        if (!GLFW.active) return;
  
        var key = GLFW.DOMToGLFWKeyCode(keyCode);
        if (key == -1) return;
  
        var repeat = status && GLFW.active.keys[key];
        GLFW.active.keys[key] = status;
        GLFW.active.domKeys[keyCode] = status;
  
        if (GLFW.active.keyFunc) {
          if (repeat) status = 2; // GLFW_REPEAT
          getWasmTableEntry(GLFW.active.keyFunc)(GLFW.active.id, key, keyCode, status, GLFW.getModBits(GLFW.active));
        }
      },
  onGamepadConnected:(event) => {
        GLFW.refreshJoysticks();
      },
  onGamepadDisconnected:(event) => {
        GLFW.refreshJoysticks();
      },
  onKeydown:(event) => {
        GLFW.onKeyChanged(event.keyCode, 1); // GLFW_PRESS or GLFW_REPEAT
  
        // This logic comes directly from the sdl implementation. We cannot
        // call preventDefault on all keydown events otherwise onKeyPress will
        // not get called
        if (event.key == 'Backspace' || event.key == 'Tab') {
          event.preventDefault();
        }
      },
  onKeyup:(event) => {
        GLFW.onKeyChanged(event.keyCode, 0); // GLFW_RELEASE
      },
  onBlur:(event) => {
        if (!GLFW.active) return;
  
        for (var i = 0; i < GLFW.active.domKeys.length; ++i) {
          if (GLFW.active.domKeys[i]) {
            GLFW.onKeyChanged(i, 0); // GLFW_RELEASE
          }
        }
      },
  onMousemove:(event) => {
        if (!GLFW.active) return;
  
        if (event.type === 'touchmove') {
          // Handling for touch events that are being converted to mouse input.
  
          // Don't let the browser fire a duplicate mouse event.
          event.preventDefault();
  
          let primaryChanged = false;
          for (let i of event.changedTouches) {
            // If our chosen primary touch moved, update Browser mouse coords
            if (GLFW.primaryTouchId === i.identifier) {
              Browser.setMouseCoords(i.pageX, i.pageY);
              primaryChanged = true;
              break;
            }
          }
  
          if (!primaryChanged) {
            // Do not send mouse events if some touch other than the primary triggered this.
            return;
          }
  
        } else {
          // Handling for non-touch mouse input events.
          Browser.calculateMouseEvent(event);
        }
  
        if (event.target != Browser.getCanvas() || !GLFW.active.cursorPosFunc) return;
  
        if (GLFW.active.cursorPosFunc) {
          getWasmTableEntry(GLFW.active.cursorPosFunc)(GLFW.active.id, Browser.mouseX, Browser.mouseY);
        }
      },
  DOMToGLFWMouseButton:(event) => {
        // DOM and glfw have different button codes.
        // See http://www.w3schools.com/jsref/event_button.asp.
        var eventButton = event['button'];
        if (eventButton > 0) {
          if (eventButton == 1) {
            eventButton = 2;
          } else {
            eventButton = 1;
          }
        }
        return eventButton;
      },
  onMouseenter:(event) => {
        if (!GLFW.active) return;
  
        if (event.target != Browser.getCanvas()) return;
  
        if (GLFW.active.cursorEnterFunc) {
          getWasmTableEntry(GLFW.active.cursorEnterFunc)(GLFW.active.id, 1);
        }
      },
  onMouseleave:(event) => {
        if (!GLFW.active) return;
  
        if (event.target != Browser.getCanvas()) return;
  
        if (GLFW.active.cursorEnterFunc) {
          getWasmTableEntry(GLFW.active.cursorEnterFunc)(GLFW.active.id, 0);
        }
      },
  onMouseButtonChanged:(event, status) => {
        if (!GLFW.active) return;
  
        if (event.target != Browser.getCanvas()) return;
  
        // Is this from a touch event?
        const isTouchType = event.type === 'touchstart' || event.type === 'touchend' || event.type === 'touchcancel';
  
        // Only emulating mouse left-click behavior for touches.
        let eventButton = 0;
        if (isTouchType) {
          // Handling for touch events that are being converted to mouse input.
  
          // Don't let the browser fire a duplicate mouse event.
          event.preventDefault();
  
          let primaryChanged = false;
  
          // Set a primary touch if we have none.
          if (GLFW.primaryTouchId === null && event.type === 'touchstart' && event.targetTouches.length > 0) {
            // Pick the first touch that started in the canvas and treat it as primary.
            const chosenTouch = event.targetTouches[0];
            GLFW.primaryTouchId = chosenTouch.identifier;
  
            Browser.setMouseCoords(chosenTouch.pageX, chosenTouch.pageY);
            primaryChanged = true;
          } else if (event.type === 'touchend' || event.type === 'touchcancel') {
            // Clear the primary touch if it ended.
            for (let i of event.changedTouches) {
              // If our chosen primary touch ended, remove it.
              if (GLFW.primaryTouchId === i.identifier) {
                GLFW.primaryTouchId = null;
                primaryChanged = true;
                break;
              }
            }
          }
  
          if (!primaryChanged) {
            // Do not send mouse events if some touch other than the primary triggered this.
            return;
          }
  
        } else {
          // Handling for non-touch mouse input events.
          Browser.calculateMouseEvent(event);
          eventButton = GLFW.DOMToGLFWMouseButton(event);
        }
  
        if (status == 1) { // GLFW_PRESS
          GLFW.active.buttons |= (1 << eventButton);
          try {
            event.target.setCapture();
          } catch (e) {}
        } else {  // GLFW_RELEASE
          GLFW.active.buttons &= ~(1 << eventButton);
        }
  
        // Send mouse event to GLFW.
        if (GLFW.active.mouseButtonFunc) {
          getWasmTableEntry(GLFW.active.mouseButtonFunc)(GLFW.active.id, eventButton, status, GLFW.getModBits(GLFW.active));
        }
      },
  onMouseButtonDown:(event) => {
        if (!GLFW.active) return;
        GLFW.onMouseButtonChanged(event, 1); // GLFW_PRESS
      },
  onMouseButtonUp:(event) => {
        if (!GLFW.active) return;
        GLFW.onMouseButtonChanged(event, 0); // GLFW_RELEASE
      },
  onMouseWheel:(event) => {
        // Note the minus sign that flips browser wheel direction (positive direction scrolls page down) to native wheel direction (positive direction is mouse wheel up)
        var delta = -Browser.getMouseWheelDelta(event);
        delta = (delta == 0) ? 0 : (delta > 0 ? Math.max(delta, 1) : Math.min(delta, -1)); // Quantize to integer so that minimum scroll is at least +/- 1.
        GLFW.wheelPos += delta;
  
        if (!GLFW.active || !GLFW.active.scrollFunc || event.target != Browser.getCanvas()) return;
        var sx = 0;
        var sy = delta;
        if (event.type == 'mousewheel') {
          sx = event.wheelDeltaX;
        } else {
          sx = event.deltaX;
        }
  
        getWasmTableEntry(GLFW.active.scrollFunc)(GLFW.active.id, sx, sy);
  
        event.preventDefault();
      },
  onCanvasResize:(width, height, framebufferWidth, framebufferHeight) => {
        if (!GLFW.active) return;
  
        var resizeNeeded = false;
  
        // If the client is requesting fullscreen mode
        if (document["fullscreen"] || document["fullScreen"] || document["mozFullScreen"] || document["webkitIsFullScreen"]) {
          if (!GLFW.active.fullscreen) {
            resizeNeeded = width != screen.width || height != screen.height;
            GLFW.active.storedX = GLFW.active.x;
            GLFW.active.storedY = GLFW.active.y;
            GLFW.active.storedWidth = GLFW.active.width;
            GLFW.active.storedHeight = GLFW.active.height;
            GLFW.active.x = GLFW.active.y = 0;
            GLFW.active.width = screen.width;
            GLFW.active.height = screen.height;
            GLFW.active.fullscreen = true;
          }
        // If the client is reverting from fullscreen mode
        } else if (GLFW.active.fullscreen == true) {
          resizeNeeded = width != GLFW.active.storedWidth || height != GLFW.active.storedHeight;
          GLFW.active.x = GLFW.active.storedX;
          GLFW.active.y = GLFW.active.storedY;
          GLFW.active.width = GLFW.active.storedWidth;
          GLFW.active.height = GLFW.active.storedHeight;
          GLFW.active.fullscreen = false;
        }
  
        if (resizeNeeded) {
          // width or height is changed (fullscreen / exit fullscreen) which will call this listener back
          // with proper framebufferWidth/framebufferHeight
          Browser.setCanvasSize(GLFW.active.width, GLFW.active.height);
        } else if (GLFW.active.width != width ||
                   GLFW.active.height != height ||
                   GLFW.active.framebufferWidth != framebufferWidth ||
                   GLFW.active.framebufferHeight != framebufferHeight) {
          GLFW.active.width = width;
          GLFW.active.height = height;
          GLFW.active.framebufferWidth = framebufferWidth;
          GLFW.active.framebufferHeight = framebufferHeight;
          GLFW.onWindowSizeChanged();
          GLFW.onFramebufferSizeChanged();
        }
      },
  onWindowSizeChanged:() => {
        if (!GLFW.active) return;
  
        if (GLFW.active.windowSizeFunc) {
          getWasmTableEntry(GLFW.active.windowSizeFunc)(GLFW.active.id, GLFW.active.width, GLFW.active.height);
        }
      },
  onFramebufferSizeChanged:() => {
        if (!GLFW.active) return;
  
        if (GLFW.active.framebufferSizeFunc) {
          getWasmTableEntry(GLFW.active.framebufferSizeFunc)(GLFW.active.id, GLFW.active.framebufferWidth, GLFW.active.framebufferHeight);
        }
      },
  onWindowContentScaleChanged:(scale) => {
        GLFW.scale = scale;
        if (!GLFW.active) return;
  
        if (GLFW.active.windowContentScaleFunc) {
          getWasmTableEntry(GLFW.active.windowContentScaleFunc)(GLFW.active.id, GLFW.scale, GLFW.scale);
        }
      },
  getTime:() => _emscripten_get_now() / 1000,
  setWindowTitle:(winid, title) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        win.title = title;
        if (GLFW.active.id == win.id) {
          _emscripten_set_window_title(title);
        }
      },
  setJoystickCallback:(cbfun) => {
        var prevcbfun = GLFW.joystickFunc;
        GLFW.joystickFunc = cbfun;
        GLFW.refreshJoysticks();
        return prevcbfun;
      },
  joys:{
  },
  lastGamepadState:[],
  lastGamepadStateFrame:null,
  refreshJoysticks:() => {
        // Produce a new Gamepad API sample if we are ticking a new game frame, or if not using emscripten_set_main_loop() at all to drive animation.
        if (MainLoop.currentFrameNumber !== GLFW.lastGamepadStateFrame || !MainLoop.currentFrameNumber) {
          GLFW.lastGamepadState = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads || []);
          GLFW.lastGamepadStateFrame = MainLoop.currentFrameNumber;
  
          for (var joy = 0; joy < GLFW.lastGamepadState.length; ++joy) {
            var gamepad = GLFW.lastGamepadState[joy];
  
            if (gamepad) {
              if (!GLFW.joys[joy]) {
                out('glfw joystick connected:',joy);
                GLFW.joys[joy] = {
                  id: stringToNewUTF8(gamepad.id),
                  buttonsCount: gamepad.buttons.length,
                  axesCount: gamepad.axes.length,
                  buttons: _malloc(gamepad.buttons.length),
                  axes: _malloc(gamepad.axes.length*4),
                };
  
                if (GLFW.joystickFunc) {
                  getWasmTableEntry(GLFW.joystickFunc)(joy, 0x00040001); // GLFW_CONNECTED
                }
              }
  
              var data = GLFW.joys[joy];
  
              for (var i = 0; i < gamepad.buttons.length;  ++i) {
                HEAP8[data.buttons + i] = gamepad.buttons[i].pressed;
              }
  
              for (var i = 0; i < gamepad.axes.length; ++i) {
                HEAPF32[((data.axes + i*4)>>2)] = gamepad.axes[i];
              }
            } else {
              if (GLFW.joys[joy]) {
                out('glfw joystick disconnected',joy);
  
                if (GLFW.joystickFunc) {
                  getWasmTableEntry(GLFW.joystickFunc)(joy, 0x00040002); // GLFW_DISCONNECTED
                }
  
                _free(GLFW.joys[joy].id);
                _free(GLFW.joys[joy].buttons);
                _free(GLFW.joys[joy].axes);
  
                delete GLFW.joys[joy];
              }
            }
          }
        }
      },
  setKeyCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.keyFunc;
        win.keyFunc = cbfun;
        return prevcbfun;
      },
  setCharCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.charFunc;
        win.charFunc = cbfun;
        return prevcbfun;
      },
  setMouseButtonCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.mouseButtonFunc;
        win.mouseButtonFunc = cbfun;
        return prevcbfun;
      },
  setCursorPosCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.cursorPosFunc;
        win.cursorPosFunc = cbfun;
        return prevcbfun;
      },
  setScrollCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.scrollFunc;
        win.scrollFunc = cbfun;
        return prevcbfun;
      },
  setDropCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.dropFunc;
        win.dropFunc = cbfun;
        return prevcbfun;
      },
  onDrop:(event) => {
        if (!GLFW.active || !GLFW.active.dropFunc) return;
        if (!event.dataTransfer || !event.dataTransfer.files || event.dataTransfer.files.length == 0) return;
  
        event.preventDefault();
  
        var filenames = _malloc(event.dataTransfer.files.length*4);
        var filenamesArray = [];
        var count = event.dataTransfer.files.length;
  
        // Read and save the files to emscripten's FS
        var written = 0;
        var drop_dir = '.glfw_dropped_files';
        FS.createPath('/', drop_dir);
  
        function save(file) {
          var path = '/' + drop_dir + '/' + file.name.replace(/\//g, '_');
          var reader = new FileReader();
          reader.onloadend = (e) => {
            if (reader.readyState != 2) { // not DONE
              ++written;
              out('failed to read dropped file: '+file.name+': '+reader.error);
              return;
            }
  
            var data = e.target.result;
            FS.writeFile(path, new Uint8Array(data));
            if (++written === count) {
              getWasmTableEntry(GLFW.active.dropFunc)(GLFW.active.id, count, filenames);
  
              for (var i = 0; i < filenamesArray.length; ++i) {
                _free(filenamesArray[i]);
              }
              _free(filenames);
            }
          };
          reader.readAsArrayBuffer(file);
  
          var filename = stringToNewUTF8(path);
          filenamesArray.push(filename);
          HEAPU32[((filenames + i*4)>>2)] = filename;
        }
  
        for (var i = 0; i < count; ++i) {
          save(event.dataTransfer.files[i]);
        }
  
        return false;
      },
  onDragover:(event) => {
        if (!GLFW.active || !GLFW.active.dropFunc) return;
  
        event.preventDefault();
        return false;
      },
  setWindowSizeCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowSizeFunc;
        win.windowSizeFunc = cbfun;
  
        return prevcbfun;
      },
  setWindowCloseCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowCloseFunc;
        win.windowCloseFunc = cbfun;
        return prevcbfun;
      },
  setWindowRefreshCallback:(winid, cbfun) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return null;
        var prevcbfun = win.windowRefreshFunc;
        win.windowRefreshFunc = cbfun;
        return prevcbfun;
      },
  onClickRequestPointerLock:(e) => {
        var canvas = Browser.getCanvas();
        if (!Browser.pointerLock && canvas.requestPointerLock) {
          canvas.requestPointerLock();
          e.preventDefault();
        }
      },
  setInputMode:(winid, mode, value) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        switch (mode) {
          case 0x00033001: { // GLFW_CURSOR
            var canvas = Browser.getCanvas();
            switch (value) {
              case 0x00034001: { // GLFW_CURSOR_NORMAL
                win.inputModes[mode] = value;
                canvas.removeEventListener('click', GLFW.onClickRequestPointerLock, true);
                canvas.exitPointerLock();
                break;
              }
              case 0x00034002: { // GLFW_CURSOR_HIDDEN
                err('glfwSetInputMode called with GLFW_CURSOR_HIDDEN value not implemented');
                break;
              }
              case 0x00034003: { // GLFW_CURSOR_DISABLED
                win.inputModes[mode] = value;
                canvas.addEventListener('click', GLFW.onClickRequestPointerLock, true);
                canvas.requestPointerLock();
                break;
              }
              default: {
                err(`glfwSetInputMode called with unknown value parameter value: ${value}`);
                break;
              }
            }
            break;
          }
          case 0x00033002: { // GLFW_STICKY_KEYS
            err('glfwSetInputMode called with GLFW_STICKY_KEYS mode not implemented');
            break;
          }
          case 0x00033003: { // GLFW_STICKY_MOUSE_BUTTONS
            err('glfwSetInputMode called with GLFW_STICKY_MOUSE_BUTTONS mode not implemented');
            break;
          }
          case 0x00033004: { // GLFW_LOCK_KEY_MODS
            err('glfwSetInputMode called with GLFW_LOCK_KEY_MODS mode not implemented');
            break;
          }
          case 0x000330005: { // GLFW_RAW_MOUSE_MOTION
            err('glfwSetInputMode called with GLFW_RAW_MOUSE_MOTION mode not implemented');
            break;
          }
          default: {
            err(`glfwSetInputMode called with unknown mode parameter value: ${mode}`);
            break;
          }
        }
      },
  getKey:(winid, key) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return 0;
        return win.keys[key];
      },
  getMouseButton:(winid, button) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return 0;
        return (win.buttons & (1 << button)) > 0;
      },
  getCursorPos:(winid, x, y) => {
        HEAPF64[((x)>>3)] = Browser.mouseX;
        HEAPF64[((y)>>3)] = Browser.mouseY;
      },
  getMousePos:(winid, x, y) => {
        HEAP32[((x)>>2)] = Browser.mouseX;
        HEAP32[((y)>>2)] = Browser.mouseY;
      },
  setCursorPos:(winid, x, y) => {
      },
  getWindowPos:(winid, x, y) => {
        var wx = 0;
        var wy = 0;
  
        var win = GLFW.WindowFromId(winid);
        if (win) {
          wx = win.x;
          wy = win.y;
        }
  
        if (x) {
          HEAP32[((x)>>2)] = wx;
        }
  
        if (y) {
          HEAP32[((y)>>2)] = wy;
        }
      },
  setWindowPos:(winid, x, y) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        win.x = x;
        win.y = y;
      },
  getWindowSize:(winid, width, height) => {
        var ww = 0;
        var wh = 0;
  
        var win = GLFW.WindowFromId(winid);
        if (win) {
          ww = win.width;
          wh = win.height;
        }
  
        if (width) {
          HEAP32[((width)>>2)] = ww;
        }
  
        if (height) {
          HEAP32[((height)>>2)] = wh;
        }
      },
  setWindowSize:(winid, width, height) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        if (GLFW.active.id == win.id) {
          Browser.setCanvasSize(width, height); // triggers the listener (onCanvasResize) + windowSizeFunc
        }
      },
  defaultWindowHints:() => {
        GLFW.hints = Object.assign({}, GLFW.defaultHints);
      },
  createWindow:(width, height, title, monitor, share) => {
        var i, id;
        for (i = 0; i < GLFW.windows.length && GLFW.windows[i] !== null; i++) {
          // no-op
        }
        if (i > 0) throw "glfwCreateWindow only supports one window at time currently";
  
        // id for window
        id = i + 1;
  
        // not valid
        if (width <= 0 || height <= 0) return 0;
  
        if (monitor) {
          Browser.requestFullscreen();
        } else {
          Browser.setCanvasSize(width, height);
        }
  
        // Create context when there are no existing alive windows
        for (i = 0; i < GLFW.windows.length && GLFW.windows[i] == null; i++) {
          // no-op
        }
  
        const canvas = Browser.getCanvas();
  
        var useWebGL = GLFW.hints[0x00022001] > 0; // Use WebGL when we are told to based on GLFW_CLIENT_API
        if (i == GLFW.windows.length) {
          if (useWebGL) {
            var contextAttributes = {
              antialias: (GLFW.hints[0x0002100D] > 1), // GLFW_SAMPLES
              depth: (GLFW.hints[0x00021005] > 0),     // GLFW_DEPTH_BITS
              stencil: (GLFW.hints[0x00021006] > 0),   // GLFW_STENCIL_BITS
              alpha: (GLFW.hints[0x00021004] > 0)      // GLFW_ALPHA_BITS
            }
            Browser.createContext(canvas, /*useWebGL=*/true, /*setInModule=*/true, contextAttributes);
          } else {
            Browser.init();
          }
        }
  
        // If context creation failed, do not return a valid window
        if (!Module['ctx'] && useWebGL) return 0;
  
        // Initializes the framebuffer size from the canvas
        var win = new GLFW_Window(id, width, height, canvas.width, canvas.height, title, monitor, share);
  
        // Set window to array
        if (id - 1 == GLFW.windows.length) {
          GLFW.windows.push(win);
        } else {
          GLFW.windows[id - 1] = win;
        }
  
        GLFW.active = win;
        GLFW.adjustCanvasDimensions();
        return win.id;
      },
  destroyWindow:(winid) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
  
        if (win.windowCloseFunc) {
          getWasmTableEntry(win.windowCloseFunc)(win.id);
        }
  
        GLFW.windows[win.id - 1] = null;
        if (GLFW.active.id == win.id)
          GLFW.active = null;
  
        // Destroy context when no alive windows
        for (var i = 0; i < GLFW.windows.length; i++)
          if (GLFW.windows[i] !== null) return;
  
        delete Module['ctx'];
      },
  swapBuffers:(winid) => {
      },
  requestFullscreen(lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer == 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas == 'undefined') Browser.resizeCanvas = false;
  
        var canvas = Browser.getCanvas();
        function fullscreenChange() {
          Browser.isFullscreen = false;
          var canvasContainer = canvas.parentNode;
          if ((document['fullscreenElement'] || document['mozFullScreenElement'] ||
            document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
            document['webkitCurrentFullScreenElement']) === canvasContainer) {
            canvas.exitFullscreen = Browser.exitFullscreen;
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullscreen = true;
            if (Browser.resizeCanvas) {
              Browser.setFullscreenCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
              Browser.updateResizeListeners();
            }
          } else {
            // remove the full screen specific parent of the canvas again to restore the HTML structure from before going full screen
            canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
            canvasContainer.parentNode.removeChild(canvasContainer);
  
            if (Browser.resizeCanvas) {
              Browser.setWindowedCanvasSize();
            } else {
              Browser.updateCanvasDimensions(canvas);
              Browser.updateResizeListeners();
            }
          }
          Module['onFullScreen']?.(Browser.isFullscreen);
          Module['onFullscreen']?.(Browser.isFullscreen);
        }
  
        if (!Browser.fullscreenHandlersInstalled) {
          Browser.fullscreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullscreenChange, false);
          document.addEventListener('mozfullscreenchange', fullscreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullscreenChange, false);
          document.addEventListener('MSFullscreenChange', fullscreenChange, false);
        }
  
        // create a new parent to ensure the canvas has no siblings. this allows browsers to optimize full screen performance when its parent is the full screen root
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
  
        // use parent of canvas as full screen root to allow aspect ratio correction (Firefox stretches the root to screen size)
        canvasContainer.requestFullscreen = canvasContainer['requestFullscreen'] ||
          canvasContainer['mozRequestFullScreen'] ||
          canvasContainer['msRequestFullscreen'] ||
          (canvasContainer['webkitRequestFullscreen'] ? () => canvasContainer['webkitRequestFullscreen'](Element['ALLOW_KEYBOARD_INPUT']) : null) ||
          (canvasContainer['webkitRequestFullScreen'] ? () => canvasContainer['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) : null);
  
        canvasContainer.requestFullscreen();
      },
  updateCanvasDimensions(canvas, wNative, hNative) {
        const scale = GLFW.getHiDPIScale();
  
        if (wNative && hNative) {
          canvas.widthNative = wNative;
          canvas.heightNative = hNative;
        } else {
          wNative = canvas.widthNative;
          hNative = canvas.heightNative;
        }
        var w = wNative;
        var h = hNative;
        if (Module['forcedAspectRatio'] && Module['forcedAspectRatio'] > 0) {
          if (w/h < Module['forcedAspectRatio']) {
            w = Math.round(h * Module['forcedAspectRatio']);
          } else {
            h = Math.round(w / Module['forcedAspectRatio']);
          }
        }
        if (((document['fullscreenElement'] || document['mozFullScreenElement'] ||
          document['msFullscreenElement'] || document['webkitFullscreenElement'] ||
          document['webkitCurrentFullScreenElement']) === canvas.parentNode) && (typeof screen != 'undefined')) {
          var factor = Math.min(screen.width / w, screen.height / h);
          w = Math.round(w * factor);
          h = Math.round(h * factor);
        }
        if (Browser.resizeCanvas) {
          wNative = w;
          hNative = h;
        }
        const wNativeScaled = Math.floor(wNative * scale);
        const hNativeScaled = Math.floor(hNative * scale);
        if (canvas.width  != wNativeScaled) canvas.width  = wNativeScaled;
        if (canvas.height != hNativeScaled) canvas.height = hNativeScaled;
        if (typeof canvas.style != 'undefined') {
          if (!GLFW.isCSSScalingEnabled()) {
            canvas.style.setProperty( "width", wNative + "px", "important");
            canvas.style.setProperty("height", hNative + "px", "important");
          } else {
            canvas.style.removeProperty( "width");
            canvas.style.removeProperty("height");
          }
        }
      },
  calculateMouseCoords(pageX, pageY) {
        // Calculate the movement based on the changes
        // in the coordinates.
        const rect = Browser.getCanvas().getBoundingClientRect();
  
        // Neither .scrollX or .pageXOffset are defined in a spec, but
        // we prefer .scrollX because it is currently in a spec draft.
        // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
        var scrollX = ((typeof window.scrollX != 'undefined') ? window.scrollX : window.pageXOffset);
        var scrollY = ((typeof window.scrollY != 'undefined') ? window.scrollY : window.pageYOffset);
        // If this assert lands, it's likely because the browser doesn't support scrollX or pageXOffset
        // and we have no viable fallback.
        assert((typeof scrollX != 'undefined') && (typeof scrollY != 'undefined'), 'Unable to retrieve scroll position, mouse positions likely broken.');
        var adjustedX = pageX - (scrollX + rect.left);
        var adjustedY = pageY - (scrollY + rect.top);
  
        // getBoundingClientRect() returns dimension affected by CSS, so as a result:
        // - when CSS scaling is enabled, this will fix the mouse coordinates to match the width/height of the window
        // - otherwise the CSS width/height are forced to the width/height of the GLFW window (see updateCanvasDimensions),
        //   so there is no need to adjust the position
        if (GLFW.isCSSScalingEnabled() && GLFW.active) {
          adjustedX = adjustedX * (GLFW.active.width / rect.width);
          adjustedY = adjustedY * (GLFW.active.height / rect.height);
        }
  
        return { x: adjustedX, y: adjustedY };
      },
  setWindowAttrib:(winid, attrib, value) => {
        var win = GLFW.WindowFromId(winid);
        if (!win) return;
        const isHiDPIAware = GLFW.isHiDPIAware();
        win.attributes[attrib] = value;
        if (isHiDPIAware !== GLFW.isHiDPIAware())
          GLFW.adjustCanvasDimensions();
      },
  getDevicePixelRatio() {
        return (typeof devicePixelRatio == 'number' && devicePixelRatio) || 1.0;
      },
  isHiDPIAware() {
        if (GLFW.active)
          return GLFW.active.attributes[0x0002200C] > 0; // GLFW_SCALE_TO_MONITOR
        else
          return false;
      },
  isCSSScalingEnabled() {
        return !GLFW.isHiDPIAware();
      },
  adjustCanvasDimensions() {
        if (GLFW.active) {
          Browser.updateCanvasDimensions(Browser.getCanvas(), GLFW.active.width, GLFW.active.height);
          Browser.updateResizeListeners();
        }
      },
  getHiDPIScale() {
        return GLFW.isHiDPIAware() ? GLFW.scale : 1.0;
      },
  onDevicePixelRatioChange() {
        GLFW.onWindowContentScaleChanged(GLFW.getDevicePixelRatio());
        GLFW.adjustCanvasDimensions();
      },
  GLFW2ParamToGLFW3Param:(param) => {
        var table = {
          0x00030001:0, // GLFW_MOUSE_CURSOR
          0x00030002:0, // GLFW_STICKY_KEYS
          0x00030003:0, // GLFW_STICKY_MOUSE_BUTTONS
          0x00030004:0, // GLFW_SYSTEM_KEYS
          0x00030005:0, // GLFW_KEY_REPEAT
          0x00030006:0, // GLFW_AUTO_POLL_EVENTS
          0x00020001:0, // GLFW_OPENED
          0x00020002:0, // GLFW_ACTIVE
          0x00020003:0, // GLFW_ICONIFIED
          0x00020004:0, // GLFW_ACCELERATED
          0x00020005:0x00021001, // GLFW_RED_BITS
          0x00020006:0x00021002, // GLFW_GREEN_BITS
          0x00020007:0x00021003, // GLFW_BLUE_BITS
          0x00020008:0x00021004, // GLFW_ALPHA_BITS
          0x00020009:0x00021005, // GLFW_DEPTH_BITS
          0x0002000A:0x00021006, // GLFW_STENCIL_BITS
          0x0002000B:0x0002100F, // GLFW_REFRESH_RATE
          0x0002000C:0x00021007, // GLFW_ACCUM_RED_BITS
          0x0002000D:0x00021008, // GLFW_ACCUM_GREEN_BITS
          0x0002000E:0x00021009, // GLFW_ACCUM_BLUE_BITS
          0x0002000F:0x0002100A, // GLFW_ACCUM_ALPHA_BITS
          0x00020010:0x0002100B, // GLFW_AUX_BUFFERS
          0x00020011:0x0002100C, // GLFW_STEREO
          0x00020012:0, // GLFW_WINDOW_NO_RESIZE
          0x00020013:0x0002100D, // GLFW_FSAA_SAMPLES
          0x00020014:0x00022002, // GLFW_OPENGL_VERSION_MAJOR
          0x00020015:0x00022003, // GLFW_OPENGL_VERSION_MINOR
          0x00020016:0x00022006, // GLFW_OPENGL_FORWARD_COMPAT
          0x00020017:0x00022007, // GLFW_OPENGL_DEBUG_CONTEXT
          0x00020018:0x00022008, // GLFW_OPENGL_PROFILE
        };
        return table[param];
      },
  };
  var _glfwCreateWindow = (width, height, title, monitor, share) => GLFW.createWindow(width, height, title, monitor, share);

  var _glfwDefaultWindowHints = () => GLFW.defaultWindowHints();

  var _glfwDestroyWindow = (winid) => GLFW.destroyWindow(winid);

  var _glfwGetPrimaryMonitor = () => 1;

  var _glfwGetTime = () => GLFW.getTime() - GLFW.initialTime;

  var _glfwGetVideoModes = (monitor, count) => {
      HEAP32[((count)>>2)] = 0;
      return 0;
    };

  
  
  var _glfwInit = () => {
      if (GLFW.windows) return 1; // GL_TRUE
  
      GLFW.initialTime = GLFW.getTime();
      GLFW.defaultWindowHints();
      GLFW.windows = new Array()
      GLFW.active = null;
      GLFW.scale  = GLFW.getDevicePixelRatio();
  
      window.addEventListener('gamepadconnected', GLFW.onGamepadConnected, true);
      window.addEventListener('gamepaddisconnected', GLFW.onGamepadDisconnected, true);
      window.addEventListener('keydown', GLFW.onKeydown, true);
      window.addEventListener('keypress', GLFW.onKeyPress, true);
      window.addEventListener('keyup', GLFW.onKeyup, true);
      window.addEventListener('blur', GLFW.onBlur, true);
  
      // watch for devicePixelRatio changes
      GLFW.devicePixelRatioMQL = window.matchMedia('(resolution: ' + GLFW.getDevicePixelRatio() + 'dppx)');
      GLFW.devicePixelRatioMQL.addEventListener('change', GLFW.onDevicePixelRatioChange);
  
      var canvas = Browser.getCanvas();
      canvas.addEventListener('touchmove', GLFW.onMousemove, true);
      canvas.addEventListener('touchstart', GLFW.onMouseButtonDown, true);
      canvas.addEventListener('touchcancel', GLFW.onMouseButtonUp, true);
      canvas.addEventListener('touchend', GLFW.onMouseButtonUp, true);
      canvas.addEventListener('mousemove', GLFW.onMousemove, true);
      canvas.addEventListener('mousedown', GLFW.onMouseButtonDown, true);
      canvas.addEventListener("mouseup", GLFW.onMouseButtonUp, true);
      canvas.addEventListener('wheel', GLFW.onMouseWheel, true);
      canvas.addEventListener('mousewheel', GLFW.onMouseWheel, true);
      canvas.addEventListener('mouseenter', GLFW.onMouseenter, true);
      canvas.addEventListener('mouseleave', GLFW.onMouseleave, true);
      canvas.addEventListener('drop', GLFW.onDrop, true);
      canvas.addEventListener('dragover', GLFW.onDragover, true);
  
      // Overriding implementation to account for HiDPI
      Browser.requestFullscreen = GLFW.requestFullscreen;
      Browser.calculateMouseCoords = GLFW.calculateMouseCoords;
      Browser.updateCanvasDimensions = GLFW.updateCanvasDimensions;
  
      Browser.resizeListeners.push((width, height) => {
        if (GLFW.isHiDPIAware()) {
          var canvas = Browser.getCanvas();
          GLFW.onCanvasResize(canvas.clientWidth, canvas.clientHeight, width, height);
        } else {
          GLFW.onCanvasResize(width, height, width, height);
        }
      });
  
      return 1; // GL_TRUE
    };

  var _glfwMakeContextCurrent = (winid) => 0;

  var _glfwSetCharCallback = (winid, cbfun) => GLFW.setCharCallback(winid, cbfun);

  var _glfwSetCursorEnterCallback = (winid, cbfun) => {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.cursorEnterFunc;
      win.cursorEnterFunc = cbfun;
      return prevcbfun;
    };

  var _glfwSetCursorPosCallback = (winid, cbfun) => GLFW.setCursorPosCallback(winid, cbfun);

  var _glfwSetDropCallback = (winid, cbfun) => GLFW.setDropCallback(winid, cbfun);

  var _glfwSetErrorCallback = (cbfun) => {
      var prevcbfun = GLFW.errorFunc;
      GLFW.errorFunc = cbfun;
      return prevcbfun;
    };

  var _glfwSetKeyCallback = (winid, cbfun) => GLFW.setKeyCallback(winid, cbfun);

  var _glfwSetMouseButtonCallback = (winid, cbfun) => GLFW.setMouseButtonCallback(winid, cbfun);

  var _glfwSetScrollCallback = (winid, cbfun) => GLFW.setScrollCallback(winid, cbfun);

  var _glfwSetWindowContentScaleCallback = (winid, cbfun) => {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.windowContentScaleFunc;
      win.windowContentScaleFunc = cbfun;
      return prevcbfun;
    };

  var _glfwSetWindowFocusCallback = (winid, cbfun) => {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.windowFocusFunc;
      win.windowFocusFunc = cbfun;
      return prevcbfun;
    };

  var _glfwSetWindowIconifyCallback = (winid, cbfun) => {
      var win = GLFW.WindowFromId(winid);
      if (!win) return null;
      var prevcbfun = win.windowIconifyFunc;
      win.windowIconifyFunc = cbfun;
      return prevcbfun;
    };

  var _glfwSetWindowShouldClose = (winid, value) => {
      var win = GLFW.WindowFromId(winid);
      if (!win) return;
      win.shouldClose = value;
    };

  var _glfwSetWindowSize = (winid, width, height) => GLFW.setWindowSize(winid, width, height);

  var _glfwSetWindowSizeCallback = (winid, cbfun) => GLFW.setWindowSizeCallback(winid, cbfun);

  var _glfwSwapBuffers = (winid) => GLFW.swapBuffers(winid);

  var _glfwTerminate = () => {
      window.removeEventListener('gamepadconnected', GLFW.onGamepadConnected, true);
      window.removeEventListener('gamepaddisconnected', GLFW.onGamepadDisconnected, true);
      window.removeEventListener('keydown', GLFW.onKeydown, true);
      window.removeEventListener('keypress', GLFW.onKeyPress, true);
      window.removeEventListener('keyup', GLFW.onKeyup, true);
      window.removeEventListener('blur', GLFW.onBlur, true);
      var canvas = Browser.getCanvas();
      canvas.removeEventListener('touchmove', GLFW.onMousemove, true);
      canvas.removeEventListener('touchstart', GLFW.onMouseButtonDown, true);
      canvas.removeEventListener('touchcancel', GLFW.onMouseButtonUp, true);
      canvas.removeEventListener('touchend', GLFW.onMouseButtonUp, true);
      canvas.removeEventListener('mousemove', GLFW.onMousemove, true);
      canvas.removeEventListener('mousedown', GLFW.onMouseButtonDown, true);
      canvas.removeEventListener('mouseup', GLFW.onMouseButtonUp, true);
      canvas.removeEventListener('wheel', GLFW.onMouseWheel, true);
      canvas.removeEventListener('mousewheel', GLFW.onMouseWheel, true);
      canvas.removeEventListener('mouseenter', GLFW.onMouseenter, true);
      canvas.removeEventListener('mouseleave', GLFW.onMouseleave, true);
      canvas.removeEventListener('drop', GLFW.onDrop, true);
      canvas.removeEventListener('dragover', GLFW.onDragover, true);
  
      if (GLFW.devicePixelRatioMQL)
        GLFW.devicePixelRatioMQL.removeEventListener('change', GLFW.onDevicePixelRatioChange);
  
      canvas.width = canvas.height = 1;
      GLFW.windows = null;
      GLFW.active = null;
    };

  var _glfwWindowHint = (target, hint) => {
      GLFW.hints[target] = hint;
    };

  /** @type {function(...*):?} */
  function _write(
  ) {
  abort('missing function: write');
  }
  _write.stub = true;


  var FS_createPath = FS.createPath;



  var FS_unlink = (path) => FS.unlink(path);

  var FS_createLazyFile = FS.createLazyFile;

  var FS_createDevice = FS.createDevice;

  FS.createPreloadedFile = FS_createPreloadedFile;
  FS.staticInit();
  // Set module methods based on EXPORTED_RUNTIME_METHODS
  Module['FS_createPath'] = FS.createPath;
  Module['FS_createDataFile'] = FS.createDataFile;
  Module['FS_createPreloadedFile'] = FS.createPreloadedFile;
  Module['FS_unlink'] = FS.unlink;
  Module['FS_createLazyFile'] = FS.createLazyFile;
  Module['FS_createDevice'] = FS.createDevice;
  ;
for (var i = 0; i < 32; ++i) tempFixedLengthArray.push(new Array(i));;
var miniTempWebGLFloatBuffersStorage = new Float32Array(288);
  // Create GL_POOL_TEMP_BUFFERS_SIZE+1 temporary buffers, for uploads of size 0 through GL_POOL_TEMP_BUFFERS_SIZE inclusive
  for (/**@suppress{duplicate}*/var i = 0; i <= 288; ++i) {
    miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i);
  };
var miniTempWebGLIntBuffersStorage = new Int32Array(288);
  // Create GL_POOL_TEMP_BUFFERS_SIZE+1 temporary buffers, for uploads of size 0 through GL_POOL_TEMP_BUFFERS_SIZE inclusive
  for (/**@suppress{duplicate}*/var i = 0; i <= 288; ++i) {
    miniTempWebGLIntBuffers[i] = miniTempWebGLIntBuffersStorage.subarray(0, i);
  };

      // exports
      Module['requestFullscreen'] = Browser.requestFullscreen;
      Module['requestFullScreen'] = Browser.requestFullScreen;
      Module['setCanvasSize'] = Browser.setCanvasSize;
      Module['getUserMedia'] = Browser.getUserMedia;
      Module['createContext'] = Browser.createContext;
    ;

      Module['requestAnimationFrame'] = MainLoop.requestAnimationFrame;
      Module['pauseMainLoop'] = MainLoop.pause;
      Module['resumeMainLoop'] = MainLoop.resume;
      MainLoop.init();;
function checkIncomingModuleAPI() {
  ignoredModuleProp('fetchSettings');
}
var wasmImports = {
  /** @export */
  __assert_fail: ___assert_fail,
  /** @export */
  __syscall_faccessat: ___syscall_faccessat,
  /** @export */
  __syscall_fcntl64: ___syscall_fcntl64,
  /** @export */
  __syscall_getcwd: ___syscall_getcwd,
  /** @export */
  __syscall_ioctl: ___syscall_ioctl,
  /** @export */
  __syscall_openat: ___syscall_openat,
  /** @export */
  _abort_js: __abort_js,
  /** @export */
  clock_time_get: _clock_time_get,
  /** @export */
  emscripten_asm_const_int: _emscripten_asm_const_int,
  /** @export */
  emscripten_date_now: _emscripten_date_now,
  /** @export */
  emscripten_get_element_css_size: _emscripten_get_element_css_size,
  /** @export */
  emscripten_get_gamepad_status: _emscripten_get_gamepad_status,
  /** @export */
  emscripten_get_now: _emscripten_get_now,
  /** @export */
  emscripten_get_num_gamepads: _emscripten_get_num_gamepads,
  /** @export */
  emscripten_glActiveTexture: _emscripten_glActiveTexture,
  /** @export */
  emscripten_glAttachShader: _emscripten_glAttachShader,
  /** @export */
  emscripten_glBeginQueryEXT: _emscripten_glBeginQueryEXT,
  /** @export */
  emscripten_glBindAttribLocation: _emscripten_glBindAttribLocation,
  /** @export */
  emscripten_glBindBuffer: _emscripten_glBindBuffer,
  /** @export */
  emscripten_glBindFramebuffer: _emscripten_glBindFramebuffer,
  /** @export */
  emscripten_glBindRenderbuffer: _emscripten_glBindRenderbuffer,
  /** @export */
  emscripten_glBindTexture: _emscripten_glBindTexture,
  /** @export */
  emscripten_glBindVertexArrayOES: _emscripten_glBindVertexArrayOES,
  /** @export */
  emscripten_glBlendColor: _emscripten_glBlendColor,
  /** @export */
  emscripten_glBlendEquation: _emscripten_glBlendEquation,
  /** @export */
  emscripten_glBlendEquationSeparate: _emscripten_glBlendEquationSeparate,
  /** @export */
  emscripten_glBlendFunc: _emscripten_glBlendFunc,
  /** @export */
  emscripten_glBlendFuncSeparate: _emscripten_glBlendFuncSeparate,
  /** @export */
  emscripten_glBufferData: _emscripten_glBufferData,
  /** @export */
  emscripten_glBufferSubData: _emscripten_glBufferSubData,
  /** @export */
  emscripten_glCheckFramebufferStatus: _emscripten_glCheckFramebufferStatus,
  /** @export */
  emscripten_glClear: _emscripten_glClear,
  /** @export */
  emscripten_glClearColor: _emscripten_glClearColor,
  /** @export */
  emscripten_glClearDepthf: _emscripten_glClearDepthf,
  /** @export */
  emscripten_glClearStencil: _emscripten_glClearStencil,
  /** @export */
  emscripten_glClipControlEXT: _emscripten_glClipControlEXT,
  /** @export */
  emscripten_glColorMask: _emscripten_glColorMask,
  /** @export */
  emscripten_glCompileShader: _emscripten_glCompileShader,
  /** @export */
  emscripten_glCompressedTexImage2D: _emscripten_glCompressedTexImage2D,
  /** @export */
  emscripten_glCompressedTexSubImage2D: _emscripten_glCompressedTexSubImage2D,
  /** @export */
  emscripten_glCopyTexImage2D: _emscripten_glCopyTexImage2D,
  /** @export */
  emscripten_glCopyTexSubImage2D: _emscripten_glCopyTexSubImage2D,
  /** @export */
  emscripten_glCreateProgram: _emscripten_glCreateProgram,
  /** @export */
  emscripten_glCreateShader: _emscripten_glCreateShader,
  /** @export */
  emscripten_glCullFace: _emscripten_glCullFace,
  /** @export */
  emscripten_glDeleteBuffers: _emscripten_glDeleteBuffers,
  /** @export */
  emscripten_glDeleteFramebuffers: _emscripten_glDeleteFramebuffers,
  /** @export */
  emscripten_glDeleteProgram: _emscripten_glDeleteProgram,
  /** @export */
  emscripten_glDeleteQueriesEXT: _emscripten_glDeleteQueriesEXT,
  /** @export */
  emscripten_glDeleteRenderbuffers: _emscripten_glDeleteRenderbuffers,
  /** @export */
  emscripten_glDeleteShader: _emscripten_glDeleteShader,
  /** @export */
  emscripten_glDeleteTextures: _emscripten_glDeleteTextures,
  /** @export */
  emscripten_glDeleteVertexArraysOES: _emscripten_glDeleteVertexArraysOES,
  /** @export */
  emscripten_glDepthFunc: _emscripten_glDepthFunc,
  /** @export */
  emscripten_glDepthMask: _emscripten_glDepthMask,
  /** @export */
  emscripten_glDepthRangef: _emscripten_glDepthRangef,
  /** @export */
  emscripten_glDetachShader: _emscripten_glDetachShader,
  /** @export */
  emscripten_glDisable: _emscripten_glDisable,
  /** @export */
  emscripten_glDisableVertexAttribArray: _emscripten_glDisableVertexAttribArray,
  /** @export */
  emscripten_glDrawArrays: _emscripten_glDrawArrays,
  /** @export */
  emscripten_glDrawArraysInstancedANGLE: _emscripten_glDrawArraysInstancedANGLE,
  /** @export */
  emscripten_glDrawBuffersWEBGL: _emscripten_glDrawBuffersWEBGL,
  /** @export */
  emscripten_glDrawElements: _emscripten_glDrawElements,
  /** @export */
  emscripten_glDrawElementsInstancedANGLE: _emscripten_glDrawElementsInstancedANGLE,
  /** @export */
  emscripten_glEnable: _emscripten_glEnable,
  /** @export */
  emscripten_glEnableVertexAttribArray: _emscripten_glEnableVertexAttribArray,
  /** @export */
  emscripten_glEndQueryEXT: _emscripten_glEndQueryEXT,
  /** @export */
  emscripten_glFinish: _emscripten_glFinish,
  /** @export */
  emscripten_glFlush: _emscripten_glFlush,
  /** @export */
  emscripten_glFramebufferRenderbuffer: _emscripten_glFramebufferRenderbuffer,
  /** @export */
  emscripten_glFramebufferTexture2D: _emscripten_glFramebufferTexture2D,
  /** @export */
  emscripten_glFrontFace: _emscripten_glFrontFace,
  /** @export */
  emscripten_glGenBuffers: _emscripten_glGenBuffers,
  /** @export */
  emscripten_glGenFramebuffers: _emscripten_glGenFramebuffers,
  /** @export */
  emscripten_glGenQueriesEXT: _emscripten_glGenQueriesEXT,
  /** @export */
  emscripten_glGenRenderbuffers: _emscripten_glGenRenderbuffers,
  /** @export */
  emscripten_glGenTextures: _emscripten_glGenTextures,
  /** @export */
  emscripten_glGenVertexArraysOES: _emscripten_glGenVertexArraysOES,
  /** @export */
  emscripten_glGenerateMipmap: _emscripten_glGenerateMipmap,
  /** @export */
  emscripten_glGetActiveAttrib: _emscripten_glGetActiveAttrib,
  /** @export */
  emscripten_glGetActiveUniform: _emscripten_glGetActiveUniform,
  /** @export */
  emscripten_glGetAttachedShaders: _emscripten_glGetAttachedShaders,
  /** @export */
  emscripten_glGetAttribLocation: _emscripten_glGetAttribLocation,
  /** @export */
  emscripten_glGetBooleanv: _emscripten_glGetBooleanv,
  /** @export */
  emscripten_glGetBufferParameteriv: _emscripten_glGetBufferParameteriv,
  /** @export */
  emscripten_glGetError: _emscripten_glGetError,
  /** @export */
  emscripten_glGetFloatv: _emscripten_glGetFloatv,
  /** @export */
  emscripten_glGetFramebufferAttachmentParameteriv: _emscripten_glGetFramebufferAttachmentParameteriv,
  /** @export */
  emscripten_glGetIntegerv: _emscripten_glGetIntegerv,
  /** @export */
  emscripten_glGetProgramInfoLog: _emscripten_glGetProgramInfoLog,
  /** @export */
  emscripten_glGetProgramiv: _emscripten_glGetProgramiv,
  /** @export */
  emscripten_glGetQueryObjecti64vEXT: _emscripten_glGetQueryObjecti64vEXT,
  /** @export */
  emscripten_glGetQueryObjectivEXT: _emscripten_glGetQueryObjectivEXT,
  /** @export */
  emscripten_glGetQueryObjectui64vEXT: _emscripten_glGetQueryObjectui64vEXT,
  /** @export */
  emscripten_glGetQueryObjectuivEXT: _emscripten_glGetQueryObjectuivEXT,
  /** @export */
  emscripten_glGetQueryivEXT: _emscripten_glGetQueryivEXT,
  /** @export */
  emscripten_glGetRenderbufferParameteriv: _emscripten_glGetRenderbufferParameteriv,
  /** @export */
  emscripten_glGetShaderInfoLog: _emscripten_glGetShaderInfoLog,
  /** @export */
  emscripten_glGetShaderPrecisionFormat: _emscripten_glGetShaderPrecisionFormat,
  /** @export */
  emscripten_glGetShaderSource: _emscripten_glGetShaderSource,
  /** @export */
  emscripten_glGetShaderiv: _emscripten_glGetShaderiv,
  /** @export */
  emscripten_glGetString: _emscripten_glGetString,
  /** @export */
  emscripten_glGetTexParameterfv: _emscripten_glGetTexParameterfv,
  /** @export */
  emscripten_glGetTexParameteriv: _emscripten_glGetTexParameteriv,
  /** @export */
  emscripten_glGetUniformLocation: _emscripten_glGetUniformLocation,
  /** @export */
  emscripten_glGetUniformfv: _emscripten_glGetUniformfv,
  /** @export */
  emscripten_glGetUniformiv: _emscripten_glGetUniformiv,
  /** @export */
  emscripten_glGetVertexAttribPointerv: _emscripten_glGetVertexAttribPointerv,
  /** @export */
  emscripten_glGetVertexAttribfv: _emscripten_glGetVertexAttribfv,
  /** @export */
  emscripten_glGetVertexAttribiv: _emscripten_glGetVertexAttribiv,
  /** @export */
  emscripten_glHint: _emscripten_glHint,
  /** @export */
  emscripten_glIsBuffer: _emscripten_glIsBuffer,
  /** @export */
  emscripten_glIsEnabled: _emscripten_glIsEnabled,
  /** @export */
  emscripten_glIsFramebuffer: _emscripten_glIsFramebuffer,
  /** @export */
  emscripten_glIsProgram: _emscripten_glIsProgram,
  /** @export */
  emscripten_glIsQueryEXT: _emscripten_glIsQueryEXT,
  /** @export */
  emscripten_glIsRenderbuffer: _emscripten_glIsRenderbuffer,
  /** @export */
  emscripten_glIsShader: _emscripten_glIsShader,
  /** @export */
  emscripten_glIsTexture: _emscripten_glIsTexture,
  /** @export */
  emscripten_glIsVertexArrayOES: _emscripten_glIsVertexArrayOES,
  /** @export */
  emscripten_glLineWidth: _emscripten_glLineWidth,
  /** @export */
  emscripten_glLinkProgram: _emscripten_glLinkProgram,
  /** @export */
  emscripten_glPixelStorei: _emscripten_glPixelStorei,
  /** @export */
  emscripten_glPolygonModeWEBGL: _emscripten_glPolygonModeWEBGL,
  /** @export */
  emscripten_glPolygonOffset: _emscripten_glPolygonOffset,
  /** @export */
  emscripten_glPolygonOffsetClampEXT: _emscripten_glPolygonOffsetClampEXT,
  /** @export */
  emscripten_glQueryCounterEXT: _emscripten_glQueryCounterEXT,
  /** @export */
  emscripten_glReadPixels: _emscripten_glReadPixels,
  /** @export */
  emscripten_glReleaseShaderCompiler: _emscripten_glReleaseShaderCompiler,
  /** @export */
  emscripten_glRenderbufferStorage: _emscripten_glRenderbufferStorage,
  /** @export */
  emscripten_glSampleCoverage: _emscripten_glSampleCoverage,
  /** @export */
  emscripten_glScissor: _emscripten_glScissor,
  /** @export */
  emscripten_glShaderBinary: _emscripten_glShaderBinary,
  /** @export */
  emscripten_glShaderSource: _emscripten_glShaderSource,
  /** @export */
  emscripten_glStencilFunc: _emscripten_glStencilFunc,
  /** @export */
  emscripten_glStencilFuncSeparate: _emscripten_glStencilFuncSeparate,
  /** @export */
  emscripten_glStencilMask: _emscripten_glStencilMask,
  /** @export */
  emscripten_glStencilMaskSeparate: _emscripten_glStencilMaskSeparate,
  /** @export */
  emscripten_glStencilOp: _emscripten_glStencilOp,
  /** @export */
  emscripten_glStencilOpSeparate: _emscripten_glStencilOpSeparate,
  /** @export */
  emscripten_glTexImage2D: _emscripten_glTexImage2D,
  /** @export */
  emscripten_glTexParameterf: _emscripten_glTexParameterf,
  /** @export */
  emscripten_glTexParameterfv: _emscripten_glTexParameterfv,
  /** @export */
  emscripten_glTexParameteri: _emscripten_glTexParameteri,
  /** @export */
  emscripten_glTexParameteriv: _emscripten_glTexParameteriv,
  /** @export */
  emscripten_glTexSubImage2D: _emscripten_glTexSubImage2D,
  /** @export */
  emscripten_glUniform1f: _emscripten_glUniform1f,
  /** @export */
  emscripten_glUniform1fv: _emscripten_glUniform1fv,
  /** @export */
  emscripten_glUniform1i: _emscripten_glUniform1i,
  /** @export */
  emscripten_glUniform1iv: _emscripten_glUniform1iv,
  /** @export */
  emscripten_glUniform2f: _emscripten_glUniform2f,
  /** @export */
  emscripten_glUniform2fv: _emscripten_glUniform2fv,
  /** @export */
  emscripten_glUniform2i: _emscripten_glUniform2i,
  /** @export */
  emscripten_glUniform2iv: _emscripten_glUniform2iv,
  /** @export */
  emscripten_glUniform3f: _emscripten_glUniform3f,
  /** @export */
  emscripten_glUniform3fv: _emscripten_glUniform3fv,
  /** @export */
  emscripten_glUniform3i: _emscripten_glUniform3i,
  /** @export */
  emscripten_glUniform3iv: _emscripten_glUniform3iv,
  /** @export */
  emscripten_glUniform4f: _emscripten_glUniform4f,
  /** @export */
  emscripten_glUniform4fv: _emscripten_glUniform4fv,
  /** @export */
  emscripten_glUniform4i: _emscripten_glUniform4i,
  /** @export */
  emscripten_glUniform4iv: _emscripten_glUniform4iv,
  /** @export */
  emscripten_glUniformMatrix2fv: _emscripten_glUniformMatrix2fv,
  /** @export */
  emscripten_glUniformMatrix3fv: _emscripten_glUniformMatrix3fv,
  /** @export */
  emscripten_glUniformMatrix4fv: _emscripten_glUniformMatrix4fv,
  /** @export */
  emscripten_glUseProgram: _emscripten_glUseProgram,
  /** @export */
  emscripten_glValidateProgram: _emscripten_glValidateProgram,
  /** @export */
  emscripten_glVertexAttrib1f: _emscripten_glVertexAttrib1f,
  /** @export */
  emscripten_glVertexAttrib1fv: _emscripten_glVertexAttrib1fv,
  /** @export */
  emscripten_glVertexAttrib2f: _emscripten_glVertexAttrib2f,
  /** @export */
  emscripten_glVertexAttrib2fv: _emscripten_glVertexAttrib2fv,
  /** @export */
  emscripten_glVertexAttrib3f: _emscripten_glVertexAttrib3f,
  /** @export */
  emscripten_glVertexAttrib3fv: _emscripten_glVertexAttrib3fv,
  /** @export */
  emscripten_glVertexAttrib4f: _emscripten_glVertexAttrib4f,
  /** @export */
  emscripten_glVertexAttrib4fv: _emscripten_glVertexAttrib4fv,
  /** @export */
  emscripten_glVertexAttribDivisorANGLE: _emscripten_glVertexAttribDivisorANGLE,
  /** @export */
  emscripten_glVertexAttribPointer: _emscripten_glVertexAttribPointer,
  /** @export */
  emscripten_glViewport: _emscripten_glViewport,
  /** @export */
  emscripten_resize_heap: _emscripten_resize_heap,
  /** @export */
  emscripten_sample_gamepad_data: _emscripten_sample_gamepad_data,
  /** @export */
  emscripten_set_canvas_element_size: _emscripten_set_canvas_element_size,
  /** @export */
  emscripten_set_click_callback_on_thread: _emscripten_set_click_callback_on_thread,
  /** @export */
  emscripten_set_fullscreenchange_callback_on_thread: _emscripten_set_fullscreenchange_callback_on_thread,
  /** @export */
  emscripten_set_gamepadconnected_callback_on_thread: _emscripten_set_gamepadconnected_callback_on_thread,
  /** @export */
  emscripten_set_gamepaddisconnected_callback_on_thread: _emscripten_set_gamepaddisconnected_callback_on_thread,
  /** @export */
  emscripten_set_mousemove_callback_on_thread: _emscripten_set_mousemove_callback_on_thread,
  /** @export */
  emscripten_set_pointerlockchange_callback_on_thread: _emscripten_set_pointerlockchange_callback_on_thread,
  /** @export */
  emscripten_set_resize_callback_on_thread: _emscripten_set_resize_callback_on_thread,
  /** @export */
  emscripten_set_touchcancel_callback_on_thread: _emscripten_set_touchcancel_callback_on_thread,
  /** @export */
  emscripten_set_touchend_callback_on_thread: _emscripten_set_touchend_callback_on_thread,
  /** @export */
  emscripten_set_touchmove_callback_on_thread: _emscripten_set_touchmove_callback_on_thread,
  /** @export */
  emscripten_set_touchstart_callback_on_thread: _emscripten_set_touchstart_callback_on_thread,
  /** @export */
  emscripten_set_window_title: _emscripten_set_window_title,
  /** @export */
  exit: _exit,
  /** @export */
  fd_close: _fd_close,
  /** @export */
  fd_read: _fd_read,
  /** @export */
  fd_seek: _fd_seek,
  /** @export */
  fd_write: _fd_write,
  /** @export */
  glActiveTexture: _glActiveTexture,
  /** @export */
  glAttachShader: _glAttachShader,
  /** @export */
  glBindAttribLocation: _glBindAttribLocation,
  /** @export */
  glBindBuffer: _glBindBuffer,
  /** @export */
  glBindTexture: _glBindTexture,
  /** @export */
  glBlendFunc: _glBlendFunc,
  /** @export */
  glBufferData: _glBufferData,
  /** @export */
  glBufferSubData: _glBufferSubData,
  /** @export */
  glClear: _glClear,
  /** @export */
  glClearColor: _glClearColor,
  /** @export */
  glClearDepthf: _glClearDepthf,
  /** @export */
  glCompileShader: _glCompileShader,
  /** @export */
  glCompressedTexImage2D: _glCompressedTexImage2D,
  /** @export */
  glCreateProgram: _glCreateProgram,
  /** @export */
  glCreateShader: _glCreateShader,
  /** @export */
  glCullFace: _glCullFace,
  /** @export */
  glDeleteBuffers: _glDeleteBuffers,
  /** @export */
  glDeleteProgram: _glDeleteProgram,
  /** @export */
  glDeleteShader: _glDeleteShader,
  /** @export */
  glDeleteTextures: _glDeleteTextures,
  /** @export */
  glDepthFunc: _glDepthFunc,
  /** @export */
  glDetachShader: _glDetachShader,
  /** @export */
  glDisable: _glDisable,
  /** @export */
  glDisableVertexAttribArray: _glDisableVertexAttribArray,
  /** @export */
  glDrawArrays: _glDrawArrays,
  /** @export */
  glDrawElements: _glDrawElements,
  /** @export */
  glEnable: _glEnable,
  /** @export */
  glEnableVertexAttribArray: _glEnableVertexAttribArray,
  /** @export */
  glFrontFace: _glFrontFace,
  /** @export */
  glGenBuffers: _glGenBuffers,
  /** @export */
  glGenTextures: _glGenTextures,
  /** @export */
  glGetAttribLocation: _glGetAttribLocation,
  /** @export */
  glGetFloatv: _glGetFloatv,
  /** @export */
  glGetProgramInfoLog: _glGetProgramInfoLog,
  /** @export */
  glGetProgramiv: _glGetProgramiv,
  /** @export */
  glGetShaderInfoLog: _glGetShaderInfoLog,
  /** @export */
  glGetShaderiv: _glGetShaderiv,
  /** @export */
  glGetString: _glGetString,
  /** @export */
  glGetUniformLocation: _glGetUniformLocation,
  /** @export */
  glLinkProgram: _glLinkProgram,
  /** @export */
  glPixelStorei: _glPixelStorei,
  /** @export */
  glReadPixels: _glReadPixels,
  /** @export */
  glShaderSource: _glShaderSource,
  /** @export */
  glTexImage2D: _glTexImage2D,
  /** @export */
  glTexParameteri: _glTexParameteri,
  /** @export */
  glUniform1i: _glUniform1i,
  /** @export */
  glUniform4f: _glUniform4f,
  /** @export */
  glUniformMatrix4fv: _glUniformMatrix4fv,
  /** @export */
  glUseProgram: _glUseProgram,
  /** @export */
  glVertexAttribPointer: _glVertexAttribPointer,
  /** @export */
  glViewport: _glViewport,
  /** @export */
  glfwCreateWindow: _glfwCreateWindow,
  /** @export */
  glfwDefaultWindowHints: _glfwDefaultWindowHints,
  /** @export */
  glfwDestroyWindow: _glfwDestroyWindow,
  /** @export */
  glfwGetPrimaryMonitor: _glfwGetPrimaryMonitor,
  /** @export */
  glfwGetTime: _glfwGetTime,
  /** @export */
  glfwGetVideoModes: _glfwGetVideoModes,
  /** @export */
  glfwInit: _glfwInit,
  /** @export */
  glfwMakeContextCurrent: _glfwMakeContextCurrent,
  /** @export */
  glfwSetCharCallback: _glfwSetCharCallback,
  /** @export */
  glfwSetCursorEnterCallback: _glfwSetCursorEnterCallback,
  /** @export */
  glfwSetCursorPosCallback: _glfwSetCursorPosCallback,
  /** @export */
  glfwSetDropCallback: _glfwSetDropCallback,
  /** @export */
  glfwSetErrorCallback: _glfwSetErrorCallback,
  /** @export */
  glfwSetKeyCallback: _glfwSetKeyCallback,
  /** @export */
  glfwSetMouseButtonCallback: _glfwSetMouseButtonCallback,
  /** @export */
  glfwSetScrollCallback: _glfwSetScrollCallback,
  /** @export */
  glfwSetWindowContentScaleCallback: _glfwSetWindowContentScaleCallback,
  /** @export */
  glfwSetWindowFocusCallback: _glfwSetWindowFocusCallback,
  /** @export */
  glfwSetWindowIconifyCallback: _glfwSetWindowIconifyCallback,
  /** @export */
  glfwSetWindowShouldClose: _glfwSetWindowShouldClose,
  /** @export */
  glfwSetWindowSize: _glfwSetWindowSize,
  /** @export */
  glfwSetWindowSizeCallback: _glfwSetWindowSizeCallback,
  /** @export */
  glfwSwapBuffers: _glfwSwapBuffers,
  /** @export */
  glfwTerminate: _glfwTerminate,
  /** @export */
  glfwWindowHint: _glfwWindowHint,
  /** @export */
  write: _write
};
var wasmExports;
createWasm();
var ___wasm_call_ctors = createExportWrapper('__wasm_call_ctors', 0);
var _default_context_ptr = Module['_default_context_ptr'] = createExportWrapper('default_context_ptr', 0);
var _main_start = Module['_main_start'] = createExportWrapper('main_start', 0);
var __start = Module['__start'] = createExportWrapper('_start', 0);
var __end = Module['__end'] = createExportWrapper('_end', 0);
var _main_update = Module['_main_update'] = createExportWrapper('main_update', 0);
var _main_end = Module['_main_end'] = createExportWrapper('main_end', 0);
var _web_window_size_changed = Module['_web_window_size_changed'] = createExportWrapper('web_window_size_changed', 2);
var _malloc = createExportWrapper('malloc', 1);
var _free = createExportWrapper('free', 1);
var _fflush = createExportWrapper('fflush', 1);
var _strerror = createExportWrapper('strerror', 1);
var _emscripten_stack_init = () => (_emscripten_stack_init = wasmExports['emscripten_stack_init'])();
var _emscripten_stack_get_free = () => (_emscripten_stack_get_free = wasmExports['emscripten_stack_get_free'])();
var _emscripten_stack_get_base = () => (_emscripten_stack_get_base = wasmExports['emscripten_stack_get_base'])();
var _emscripten_stack_get_end = () => (_emscripten_stack_get_end = wasmExports['emscripten_stack_get_end'])();
var __emscripten_stack_restore = (a0) => (__emscripten_stack_restore = wasmExports['_emscripten_stack_restore'])(a0);
var __emscripten_stack_alloc = (a0) => (__emscripten_stack_alloc = wasmExports['_emscripten_stack_alloc'])(a0);
var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports['emscripten_stack_get_current'])();


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

Module['addRunDependency'] = addRunDependency;
Module['removeRunDependency'] = removeRunDependency;
Module['FS_createPreloadedFile'] = FS_createPreloadedFile;
Module['FS_unlink'] = FS_unlink;
Module['FS_createPath'] = FS_createPath;
Module['FS_createDevice'] = FS_createDevice;
Module['FS_createDataFile'] = FS_createDataFile;
Module['FS_createLazyFile'] = FS_createLazyFile;
var missingLibrarySymbols = [
  'writeI53ToI64Clamped',
  'writeI53ToI64Signaling',
  'writeI53ToU64Clamped',
  'writeI53ToU64Signaling',
  'convertI32PairToI53',
  'convertI32PairToI53Checked',
  'convertU32PairToI53',
  'stackAlloc',
  'getTempRet0',
  'setTempRet0',
  'growMemory',
  'inetPton4',
  'inetNtop4',
  'inetPton6',
  'inetNtop6',
  'readSockaddr',
  'writeSockaddr',
  'emscriptenLog',
  'runMainThreadEmAsm',
  'getExecutableName',
  'listenOnce',
  'autoResumeAudioContext',
  'getDynCaller',
  'dynCall',
  'runtimeKeepalivePush',
  'runtimeKeepalivePop',
  'asmjsMangle',
  'HandleAllocator',
  'getNativeTypeSize',
  'addOnInit',
  'addOnPostCtor',
  'addOnPreMain',
  'STACK_SIZE',
  'STACK_ALIGN',
  'POINTER_SIZE',
  'ASSERTIONS',
  'getCFunc',
  'ccall',
  'cwrap',
  'uleb128Encode',
  'sigToWasmTypes',
  'generateFuncType',
  'convertJsFunctionToWasm',
  'getEmptyTableSlot',
  'updateTableMap',
  'getFunctionAddress',
  'addFunction',
  'removeFunction',
  'reallyNegative',
  'unSign',
  'strLen',
  'reSign',
  'formatString',
  'intArrayToString',
  'AsciiToString',
  'stringToAscii',
  'UTF16ToString',
  'stringToUTF16',
  'lengthBytesUTF16',
  'UTF32ToString',
  'stringToUTF32',
  'lengthBytesUTF32',
  'stringToUTF8OnStack',
  'writeArrayToMemory',
  'registerKeyEventCallback',
  'registerWheelEventCallback',
  'registerFocusEventCallback',
  'fillDeviceOrientationEventData',
  'registerDeviceOrientationEventCallback',
  'fillDeviceMotionEventData',
  'registerDeviceMotionEventCallback',
  'screenOrientation',
  'fillOrientationChangeEventData',
  'registerOrientationChangeEventCallback',
  'JSEvents_requestFullscreen',
  'JSEvents_resizeCanvasForFullscreen',
  'registerRestoreOldStyle',
  'hideEverythingExceptGivenElement',
  'restoreHiddenElements',
  'setLetterbox',
  'softFullscreenResizeWebGLRenderTarget',
  'doRequestFullscreen',
  'registerPointerlockErrorEventCallback',
  'requestPointerLock',
  'fillVisibilityChangeEventData',
  'registerVisibilityChangeEventCallback',
  'registerBeforeUnloadEventCallback',
  'fillBatteryEventData',
  'battery',
  'registerBatteryEventCallback',
  'setCanvasElementSize',
  'getCanvasElementSize',
  'jsStackTrace',
  'getCallstack',
  'convertPCtoSourceLocation',
  'getEnvStrings',
  'wasiRightsToMuslOFlags',
  'wasiOFlagsToMuslOFlags',
  'setImmediateWrapped',
  'safeRequestAnimationFrame',
  'clearImmediateWrapped',
  'registerPostMainLoop',
  'registerPreMainLoop',
  'getPromise',
  'makePromise',
  'idsToPromises',
  'makePromiseCallback',
  'ExceptionInfo',
  'findMatchingCatch',
  'Browser_asyncPrepareDataCounter',
  'isLeapYear',
  'ydayFromDate',
  'arraySum',
  'addDays',
  'getSocketFromFD',
  'getSocketAddress',
  'FS_mkdirTree',
  '_setNetworkCallback',
  'writeGLArray',
  'registerWebGlEventCallback',
  'runAndAbortIfError',
  'ALLOC_NORMAL',
  'ALLOC_STACK',
  'allocate',
  'writeStringToMemory',
  'writeAsciiToMemory',
  'setErrNo',
  'demangle',
  'stackTrace',
];
missingLibrarySymbols.forEach(missingLibrarySymbol)

var unexportedSymbols = [
  'run',
  'out',
  'err',
  'callMain',
  'abort',
  'wasmMemory',
  'wasmExports',
  'writeStackCookie',
  'checkStackCookie',
  'writeI53ToI64',
  'readI53FromI64',
  'readI53FromU64',
  'INT53_MAX',
  'INT53_MIN',
  'bigintToI53Checked',
  'stackSave',
  'stackRestore',
  'ptrToString',
  'zeroMemory',
  'exitJS',
  'getHeapMax',
  'abortOnCannotGrowMemory',
  'ENV',
  'ERRNO_CODES',
  'strError',
  'DNS',
  'Protocols',
  'Sockets',
  'timers',
  'warnOnce',
  'readEmAsmArgsArray',
  'readEmAsmArgs',
  'runEmAsmFunction',
  'jstoi_q',
  'jstoi_s',
  'handleException',
  'keepRuntimeAlive',
  'callUserCallback',
  'maybeExit',
  'asyncLoad',
  'alignMemory',
  'mmapAlloc',
  'wasmTable',
  'noExitRuntime',
  'addOnPreRun',
  'addOnExit',
  'addOnPostRun',
  'freeTableIndexes',
  'functionsInTableMap',
  'setValue',
  'getValue',
  'PATH',
  'PATH_FS',
  'UTF8Decoder',
  'UTF8ArrayToString',
  'UTF8ToString',
  'stringToUTF8Array',
  'stringToUTF8',
  'lengthBytesUTF8',
  'intArrayFromString',
  'UTF16Decoder',
  'stringToNewUTF8',
  'JSEvents',
  'specialHTMLTargets',
  'maybeCStringToJsString',
  'findEventTarget',
  'findCanvasEventTarget',
  'getBoundingClientRect',
  'fillMouseEventData',
  'registerMouseEventCallback',
  'registerUiEventCallback',
  'fillFullscreenChangeEventData',
  'registerFullscreenChangeEventCallback',
  'currentFullscreenStrategy',
  'restoreOldWindowedStyle',
  'fillPointerlockChangeEventData',
  'registerPointerlockChangeEventCallback',
  'registerTouchEventCallback',
  'fillGamepadEventData',
  'registerGamepadEventCallback',
  'UNWIND_CACHE',
  'ExitStatus',
  'checkWasiClock',
  'doReadv',
  'doWritev',
  'initRandomFill',
  'randomFill',
  'safeSetTimeout',
  'emSetImmediate',
  'emClearImmediate_deps',
  'emClearImmediate',
  'promiseMap',
  'uncaughtExceptionCount',
  'exceptionLast',
  'exceptionCaught',
  'Browser',
  'getPreloadedImageData__data',
  'wget',
  'MONTH_DAYS_REGULAR',
  'MONTH_DAYS_LEAP',
  'MONTH_DAYS_REGULAR_CUMULATIVE',
  'MONTH_DAYS_LEAP_CUMULATIVE',
  'SYSCALLS',
  'preloadPlugins',
  'FS_modeStringToFlags',
  'FS_getMode',
  'FS_stdin_getChar_buffer',
  'FS_stdin_getChar',
  'FS_readFile',
  'FS',
  'MEMFS',
  'TTY',
  'PIPEFS',
  'SOCKFS',
  'tempFixedLengthArray',
  'miniTempWebGLFloatBuffers',
  'miniTempWebGLIntBuffers',
  'heapObjectForWebGLType',
  'toTypedArrayIndex',
  'webgl_enable_ANGLE_instanced_arrays',
  'webgl_enable_OES_vertex_array_object',
  'webgl_enable_WEBGL_draw_buffers',
  'webgl_enable_WEBGL_multi_draw',
  'webgl_enable_EXT_polygon_offset_clamp',
  'webgl_enable_EXT_clip_control',
  'webgl_enable_WEBGL_polygon_mode',
  'GL',
  'emscriptenWebGLGet',
  'computeUnpackAlignedImageSize',
  'colorChannelsInGlTextureFormat',
  'emscriptenWebGLGetTexPixelData',
  'emscriptenWebGLGetUniform',
  'webglGetUniformLocation',
  'webglPrepareUniformLocationsBeforeFirstUse',
  'webglGetLeftBracePos',
  'emscriptenWebGLGetVertexAttrib',
  '__glGetActiveAttribOrUniform',
  'AL',
  'GLUT',
  'EGL',
  'GLEW',
  'IDBStore',
  'SDL',
  'SDL_gfx',
  'GLFW_Window',
  'GLFW',
  'allocateUTF8',
  'allocateUTF8OnStack',
  'print',
  'printErr',
];
unexportedSymbols.forEach(unexportedRuntimeSymbol);



var calledRun;

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  _emscripten_stack_init();
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  writeStackCookie();
}

function run() {

  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }

  stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    dependenciesFulfilled = run;
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    assert(!calledRun);
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    Module['onRuntimeInitialized']?.();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(() => {
      setTimeout(() => Module['setStatus'](''), 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = (x) => {
    has = true;
  }
  try { // it doesn't matter if it fails
    _fflush(0);
    // also flush in the JS FS layer
    ['stdout', 'stderr'].forEach((name) => {
      var info = FS.analyzePath('/dev/' + name);
      if (!info) return;
      var stream = info.object;
      var rdev = stream.rdev;
      var tty = TTY.ttys[rdev];
      if (tty?.output?.length) {
        has = true;
      }
    });
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.');
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();

// end include: postamble.js


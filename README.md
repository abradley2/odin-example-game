# Odin + Raylib Web Game Example

Example of a simple platform game made using Odin and Raylib, that can run on the web.

## Requirements

- **Emscripten**. Follow instructions here: https://emscripten.org/docs/getting_started/downloads.html (the stuff under "Installation instructions using the emsdk (recommended)").
- **Recent Odin compiler**: This uses Raylib binding changes that were done on January 1, 2025.

## Getting started

1. The first variable in `build_web.sh` must be changed 
to be the path to **your** [local *emsdk*](https://github.com/emscripten-core/emsdk) directory.
2. Run `./run_tests.sh` and ensure all tests are passing
3. Run `./build_web.sh` to create the web output in `./build/web/`
4. To play the game, have an http-server serve up the `./build/web/` directory. If you have node you
can do `npx http-server ./build/web`

## Credits

Assets used are free public-domain assets from [Kenney](https://kenney.nl/). The assets being
public domain allows me to commit these files to source control for easy open source distribution.
Please consider [donating to Kenney](https://kenney.nl/donate) to support his work.

This game uses the [template from karl-zylinski found here](https://github.com/karl-zylinski/odin-raylib-web) 
which includes work from [Caedo](https://github.com/Caedo/raylib_wasm_odin) and [Aronicu](https://github.com/Aronicu/Raylib-WASM)


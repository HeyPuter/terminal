<h3 align="center"><img width="300" alt="HiTIDE logo" src="./doc/logo.png"></h3>
<h3 align="center">Puter Terminal Emulator</h3>
<h4 align="center">Connecting commands; conquering clouds.</h4>
<hr>

This is a terminal emulator that connects to remote shells using
a protocol built on cross-document messaging. The philosophy and
scope of this project can be described as follows:
- Be a good terminal emulator (built on `xtermjs`)
- Leverage secure technologies in the browser
- Evolve toward connectedness, and not complexity

## Running with Phoenix

The terminal emulator needs a shell to communicate with.
You can run it with Puter's shell, [phoenix](https://github.com/HeyPuter/phoenix).

1. Clone `phoenix` as a sibling directory to this repo, to get a directory
   structure like the following:
   
   ```
   my-puter-repos/
     terminal/
     phoenix/
   ```
2. Ensure you've run `npm install` in both repos
3. Install `dev-runner`
   ```
   npm install -g @heyputer/dev-runner
   ```
4. While `cd`'d into this repo, run `run-phoenix-http.json5`
   ```
   dev-runner ./run-phoenix-http.json5
   ```

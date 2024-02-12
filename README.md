<h3 align="center"><img width="150" alt="HiTIDE logo" src="./doc/logo.png"></h3>
<h3 align="center">Puter Terminal Emulator</h3>
<p align="center">
    <a href="https://puter.com/app/terminal"><strong>« LIVE DEMO »</strong></a>
    <br />
    <br />
    <a href="https://puter.com">Puter.com</a>
    ·
    <a href="https://discord.gg/ENDtnd9N">Discord</a>
    ·
    <a href="https://reddit.com/r/puter">Reddit</a>
    ·
    <a href="https://twitter.com/HeyPuter">X (Twitter)</a>
</p>

<h3 align="center"><img width="751" alt="Screenshot 2024-02-11 at 9 39 56 PM" src="https://github.com/HeyPuter/terminal/assets/1715019/bd943ce8-0bf7-414c-ae9e-34205fcd8b6b">
</h3>
<h4 align="center">"Connecting commands; conquering clouds!"</h4>

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
5. Navigate to [http://127.0.0.1:8082](http://127.0.0.1:8082),
   and use the `login` command to access files on puter.com.

   **Note:** You will need to ensure the login popup is allowed.
   If you choose to allow it _after_ the popup was blocked,
   it will break; you need to allow always and then reload.

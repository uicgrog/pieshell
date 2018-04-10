# PieShell

A pie menu-driven GUI for Linux/UNIX shell command assembly 

## Usage

In its nascent stages, please use ```npm start``` to start the React server.

In a different terminal instance use ```npm run electron``` to start running within an Electron window.

This will eventually be automated such that only one command will have to be executed to have both work in tandem.
For now, this will work as we become comfortable with the logistics of our new environment and begin implementing features.

Note that React is smart enough to recompile automatically after editing the source, including stylesheets and Babel files. You can keep both the React and Electron instances running concurrently as you develop, without having to stop either process.

Speaking of recompiling, run ```npm run sass``` in another process to automatically compile sass files.

**Note:** Don't forget to run ```npm install``` to download the packages listed in the ```package.json``` before trying to get it running.

**Note:** Comment out dev tools in electron-start.js for transparent window.

*More to come soon.*

## To Do's

- drop down buttons
- event listeners
- json file of names of menu, commands, etc.
- sending qsub cmd through connected session
- click through transparent window allowing what's behind to be selected
- 3 wedge listeners
- disabled wedges
- transitions
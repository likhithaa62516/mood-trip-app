const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    icon: path.join(__dirname, 'public', 'wondermaps_logo.png.jpg'),
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  const startURL = isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname, 'build', 'index.html')}`;

  win.loadURL(startURL);

  if (isDev) win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});



// const { app, BrowserWindow } = require('electron');
// const path = require('path');

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1000,
//     height: 800,
//     webPreferences: {
//       contextIsolation: true,
//       nodeIntegration: false
//     }
//   });

//   // Load the built React app from build/index.html
//   win.loadFile(path.join(__dirname, 'build', 'index.html'));

//   // Optional: open DevTools
//   win.webContents.openDevTools();
// }

// app.whenReady().then(createWindow);

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') app.quit();
// });

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) createWindow();
// });







// // const { app, BrowserWindow } = require("electron");
// // const path = require("path");
// // const isDev = require("electron-is-dev");

// // function createWindow() {
// //   const win = new BrowserWindow({
// //     width: 1000,
// //     height: 800,
// //     icon: path.join(__dirname, "public", "wondermaps_logo.png.jpg"), // logo icon for window
// //     webPreferences: {
// //       contextIsolation: true,
// //       nodeIntegration: false,
// //     },
// //   });

// //   if (isDev) {
// //     win.loadURL("http://localhost:3000"); // React development server
// //   } else {
// //     win.loadFile(path.join(__dirname, "build", "index.html")); // Production build
// //   }

// //   // Optionally open DevTools in development mode
// //   // if (isDev) win.webContents.openDevTools();
// // }

// // app.whenReady().then(createWindow);

// // app.on("window-all-closed", () => {
// //   // On macOS, apps generally stay active until Cmd + Q
// //   if (process.platform !== "darwin") app.quit();
// // });

// // app.on("activate", () => {
// //   // On macOS, re-create a window when the dock icon is clicked
// //   if (BrowserWindow.getAllWindows().length === 0) createWindow();
// // });


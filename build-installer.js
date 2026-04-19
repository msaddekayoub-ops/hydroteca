const electronInstaller = require('electron-winstaller');
const path = require('path');

async function createInstaller() {
  console.log('Building installer...');
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: path.join(__dirname, 'dist/packaged/HYDROTECA-win32-x64'),
      outputDirectory: path.join(__dirname, 'dist/installers'),
      authors: 'Ayoub Msaddek',
      exe: 'HYDROTECA.exe',
      setupExe: 'HYDROTECA_Setup.exe',
      setupIcon: path.join(__dirname, 'icon.ico'),
      noMsi: true
    });
    console.log('Installer created successfully in dist/installers');
  } catch (e) {
    console.error(`Error creating installer: ${e.message}`);
  }
}

createInstaller();

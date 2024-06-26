import {Desktop} from './models/aspera-desktop.model';
import {
  initDesktop,
  registerActivityCallback,
  deregisterActivityCallback,
  startTransfer,
  testDesktopConnection,
  removeTransfer,
  showDirectory,
  stopTransfer,
  resumeTransfer,
  getAllTransfers,
  getTransfer,
  registerRemovedCallback,
  deregisterRemovedCallback,
  showSelectFileDialog,
  showSelectFolderDialog,
  showPreferences,
  modifyTransfer,
  createDropzone,
  removeDropzone,
  registerStatusCallback,
  deregisterStatusCallback,
  initDragDrop,
  setBranding,
  getInfo,
} from './app/core';
import {
  getInstallerInfo,
} from './app/installer';

export const asperaDesktop: Desktop = new Desktop();

asperaDesktop.initDesktop = initDesktop;
asperaDesktop.testDesktopConnection = testDesktopConnection;
asperaDesktop.startTransfer = startTransfer;
asperaDesktop.registerActivityCallback = registerActivityCallback;
asperaDesktop.deregisterActivityCallback = deregisterActivityCallback;
asperaDesktop.removeTransfer = removeTransfer;
asperaDesktop.showDirectory = showDirectory;
asperaDesktop.stopTransfer = stopTransfer;
asperaDesktop.resumeTransfer = resumeTransfer;
asperaDesktop.getAllTransfers = getAllTransfers;
asperaDesktop.getTransfer = getTransfer;
asperaDesktop.registerRemovedCallback = registerRemovedCallback;
asperaDesktop.deregisterRemovedCallback = deregisterRemovedCallback;
asperaDesktop.showSelectFileDialog = showSelectFileDialog;
asperaDesktop.showSelectFolderDialog = showSelectFolderDialog;
asperaDesktop.showPreferences = showPreferences;
asperaDesktop.modifyTransfer = modifyTransfer;
asperaDesktop.createDropzone = createDropzone;
asperaDesktop.removeDropzone = removeDropzone;
asperaDesktop.getInstallerInfo = getInstallerInfo;
asperaDesktop.registerStatusCallback = registerStatusCallback;
asperaDesktop.deregisterStatusCallback = deregisterStatusCallback;
asperaDesktop.initDragDrop = initDragDrop;
asperaDesktop.setBranding = setBranding;
asperaDesktop.getInfo = getInfo;

const launch = asperaDesktop.globals.launch;
asperaDesktop.launch = launch;

if (typeof (<any>window) === 'object') {
  (<any>window).asperaDesktop = asperaDesktop;
}

export {
  initDesktop,
  testDesktopConnection,
  startTransfer,
  launch,
  registerActivityCallback,
  deregisterActivityCallback,
  removeTransfer,
  showDirectory,
  stopTransfer,
  resumeTransfer,
  getAllTransfers,
  getTransfer,
  registerRemovedCallback,
  deregisterRemovedCallback,
  showSelectFileDialog,
  showSelectFolderDialog,
  showPreferences,
  modifyTransfer,
  createDropzone,
  removeDropzone,
  getInstallerInfo,
  registerStatusCallback,
  deregisterStatusCallback,
  setBranding,
  getInfo,
};

export default {
  initDesktop,
  testDesktopConnection,
  startTransfer,
  launch,
  registerActivityCallback,
  deregisterActivityCallback,
  removeTransfer,
  showDirectory,
  stopTransfer,
  resumeTransfer,
  getAllTransfers,
  getTransfer,
  registerRemovedCallback,
  deregisterRemovedCallback,
  showSelectFileDialog,
  showSelectFolderDialog,
  showPreferences,
  modifyTransfer,
  createDropzone,
  removeDropzone,
  getInstallerInfo,
  registerStatusCallback,
  deregisterStatusCallback,
  setBranding,
  getInfo,
};

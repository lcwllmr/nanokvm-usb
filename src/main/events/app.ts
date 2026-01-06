import { BrowserWindow, ipcMain, systemPreferences } from 'electron'
import type { IpcMainEvent } from 'electron'

import { IpcEvents } from '../../common/ipc-events'

export function registerApp(): void {
  ipcMain.handle(IpcEvents.REQUEST_MEDIA_PERMISSIONS, requestMediaPermissions)
  ipcMain.on(IpcEvents.SET_FULL_SCREEN, setFullScreen)
}

async function requestMediaPermissions(): Promise<{
  camera: boolean
  microphone: boolean
}> {
  const camera = await grant('camera')
  const microphone = await grant('microphone')

  return { camera, microphone }
}

async function grant(media: 'camera' | 'microphone'): Promise<boolean> {
  try {
    const status = systemPreferences.getMediaAccessStatus(media)
    if (status === 'granted') {
      return true
    }

    return await systemPreferences.askForMediaAccess(media)
  } catch (error) {
    console.error('Error request permission:', error)
    return false
  }
}

function setFullScreen(e: IpcMainEvent, flag: boolean): void {
  const win = BrowserWindow.fromWebContents(e.sender)
  if (!win) return

  win.setFullScreen(flag)
}

import * as SDK from '@expressms/smartapp-sdk'
import { RootStore } from '../../store/rootStore'
import { BleDevice, BleDeviceCallback, BleGattService, STATUS } from '@expressms/smartapp-sdk/build/main/types'
import { makeAutoObservable, runInAction } from 'mobx'

export class BluetoothStore {
  rootStore: RootStore
  bluetoothEnabled: boolean = false
  deviceScanFinished: boolean = false
  serviceDiscoverFinished: boolean = false
  getCharacteristicFinished: boolean = false
  devices: Array<BleDevice> = []
  services: Array<BleGattService> = []
  characteristicValue: Array<number> = []
  callback: BleDeviceCallback

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)

    this.rootStore = rootStore
    this.callback = this.deviceFoundCallback.bind(this)
  }

  private deviceFoundCallback(device: BleDevice) {
    this.devices.push(device)
  }

  reset(): void {
    this.bluetoothEnabled = false
    this.deviceScanFinished = false
    this.serviceDiscoverFinished = false
    this.getCharacteristicFinished = false
    this.devices = []
    this.services = []
    this.characteristicValue = []
  }

  async enableBluetooth(): Promise<void> {
    if (this.rootStore.appStore.platform === 'web') {
      this.rootStore.toastStore.showToast('Тестирование возможно только на мобильных платформах')
      return
    }

    try {
      const response = await SDK.Bluetooth.enable()

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка включения Bluetooth ${response.payload.errorCode}`)
        this.reset()
        return
      }

      runInAction(() => {
        this.bluetoothEnabled = true
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка включения Bluetooth ${e?.message}`)
      this.reset()
    }
  }

  async scanDevices(): Promise<void> {
    try {
      const response = await SDK.Bluetooth.scanBleDevices({ scanDuration: 5000, deviceCallback: this.callback })

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка сканирования Bluetooth устройств ${response.payload.errorCode}`)
        this.reset()
        return
      }

      runInAction(() => {
        this.devices = response.payload.bleDevices
        this.deviceScanFinished = true
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка сканирования Bluetooth устройств ${e?.message}`)
      this.reset()
    }
  }

  async discoverServices(address: string): Promise<void> {
    try {
      const connResponse = await SDK.Bluetooth.connectBleDevice({ bleDeviceAddress: address })

      if (connResponse.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(
          `Ошибка подключения к Bluetooth устройству ${connResponse.payload.errorCode}`
        )
        this.reset()
        return
      }

      const srvResponse = await SDK.Bluetooth.discoverGattServices({ bleDeviceAddress: address })

      if (srvResponse.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка сканирования GATT сервисов ${srvResponse.payload.errorCode}`)
        this.reset()
        return
      }

      runInAction(() => {
        this.services = srvResponse.payload.gattServices
        this.serviceDiscoverFinished = true
      })
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка сканирования GATT сервисов ${e?.message}`)
      this.reset()
    }
  }

  async getCharacteristic(address: string, service: string, characteristic: string): Promise<void> {
    try {
      const response = await SDK.Bluetooth.readBleGattCharacteristic({
        bleDeviceAddress: address,
        gattCharacteristicUuid: characteristic,
        gattServiceUuid: service,
      })

      if (response.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(`Ошибка получения GATT характеристики ${response.payload.errorCode}`)
        this.reset()
        return
      }

      runInAction(() => {
        this.characteristicValue = response.payload.value
        this.getCharacteristicFinished = true
      })

      const disconnResponse = await SDK.Bluetooth.disconnectBleDevice({ bleDeviceAddress: address })

      if (disconnResponse.payload.status === STATUS.ERROR) {
        this.rootStore.toastStore.showToast(
          `Ошибка отключения Bluetooth устройства ${disconnResponse.payload.errorCode}`
        )
      }
    } catch (e) {
      this.rootStore.toastStore.showToast(`Ошибка получения GATT характеристики ${e?.message}`)
      this.reset()
    }
  }
}

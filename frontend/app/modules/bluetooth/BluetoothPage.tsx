import React, { FC, useEffect, useState } from 'react'
import { useStore } from '../../hooks/useStore'
import { observer } from 'mobx-react'
import FeatureHeader from '../../components/FeatureHeader'
import Button from '../../components/Button'
import FeaturePage from '../../components/FeaturePage'
import { Panel, PanelItem, PanelSubItem } from './Panel'
import Input from '../../components/Input'

const STEP = {
  IDLE: 'idle',
  ENABLING_BT: 'enabling_bt',
  DEVICE_SCANNING: 'device_scanning',
  CHOOSING_DEVICE: 'choosing_device',
  SERVICE_SCANNING: 'service_scanning',
  CHOOSING_SERVICE: 'choosing_service',
  GETTING_VALUE: 'getting_value',
  SHOW_VALUE: 'show_value',
}

const BluetoothPage: FC = () => {
  const { bluetoothStore: store } = useStore()
  const [step, setStep] = useState<string>(STEP.IDLE)
  const [address, setAddress] = useState<string>('')

  const handleEnable = () => {
    store.reset()
    store.enableBluetooth()
    setStep(STEP.ENABLING_BT)
  }

  const handleDevice = (address: string) => {
    setAddress(address)
    store.discoverServices(address)
    setStep(STEP.SERVICE_SCANNING)
  }

  const handleCharacteristic = (service: string, characteristic: string) => {
    store.getCharacteristic(address, service, characteristic)
    setStep(STEP.GETTING_VALUE)
  }

  // Reset store on unmount
  useEffect(() => () => store.reset(), [])

  useEffect(() => {
    if (!store.bluetoothEnabled) return
    store.scanDevices()
    setStep(STEP.DEVICE_SCANNING)
  }, [store.bluetoothEnabled])

  useEffect(() => {
    if (store.deviceScanFinished) setStep(STEP.CHOOSING_DEVICE)
  }, [store.deviceScanFinished])

  useEffect(() => {
    if (store.serviceDiscoverFinished) setStep(STEP.CHOOSING_SERVICE)
  }, [store.serviceDiscoverFinished])

  useEffect(() => {
    if (store.getCharacteristicFinished) setStep(STEP.SHOW_VALUE)
  }, [store.getCharacteristicFinished])

  useEffect(() => {
    console.log('Step = ', step)
  }, [step])

  return (
    <FeaturePage>
      <FeatureHeader name="Bluetooth" />
      {
        {
          [STEP.ENABLING_BT]: <Panel title="Включение Bluetooth" showLoader />,
          [STEP.DEVICE_SCANNING]: (
            <Panel title="Сканирование устройств, подождите" showLoader>
              {store.devices.map(device => (
                <PanelItem
                  text={device.name || device.address}
                  key={`${device.address}-scan`}
                  icon="bluetooth"
                  disabled
                />
              ))}
            </Panel>
          ),
          [STEP.CHOOSING_DEVICE]: (
            <Panel title="Выберите Bluetooth устройство">
              {store.devices.map(device => (
                <PanelItem
                  text={device.name || device.address}
                  key={`${device.address}-choose`}
                  onClick={() => handleDevice(device.address)}
                  icon="bluetooth"
                />
              ))}
            </Panel>
          ),
          [STEP.SERVICE_SCANNING]: <Panel title="Получение GATT сервисов, подождите" showLoader />,
          [STEP.CHOOSING_SERVICE]: (
            <Panel title="Выберите GATT параметр">
              {store.services.map(service => (
                <>
                  <PanelItem text={service.uuid} key={service.uuid} icon="list" disabled />
                  {service.characteristics.map(characteristic => (
                    <PanelSubItem
                      text={characteristic.uuid}
                      key={characteristic.uuid}
                      onClick={() => handleCharacteristic(service.uuid, characteristic.uuid)}
                    />
                  ))}
                </>
              ))}
            </Panel>
          ),
          [STEP.GETTING_VALUE]: <Panel title="Запрос значения, подождите" showLoader />,
          [STEP.SHOW_VALUE]: (
            <Panel title="Значение GATT параметра">
              <Input value={JSON.stringify(store.characteristicValue)} disabled />
              <></>
            </Panel>
          ),
        }[step]
      }
      <br />
      <Button
        onClick={handleEnable}
        id="submit"
        title="Поиск устройств"
        icon="bluetooth"
        disabled={step != STEP.IDLE && step != STEP.SHOW_VALUE}
      />
    </FeaturePage>
  )
}

export default observer(BluetoothPage)

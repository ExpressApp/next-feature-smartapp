import React, { FC, useState } from 'react'
import { UuidInputProps } from './bot-command.types'
import Input from '../../components/Input'
import Button from '../../components/Button'

const UuidInput: FC<UuidInputProps> = ({ id, label, onChange }) => {
  const [uuids, setUuids] = useState([''])

  const addUuid = () => {
    setUuids([...uuids, ''])
  }

  const handleChange = (idx: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUuids = [...uuids]
    newUuids[idx] = event.target.value
    setUuids(newUuids)
    onChange?.(id, newUuids)
  }

  return (
    <>
      {label}
      {uuids.map((text, idx) => (
        <Input key={idx} id={`huid${idx + 1}`} value={text} onChange={handleChange(idx)} />
      ))}
      <Button id="add" icon="add" onClick={addUuid} title="HUID" />
      <br />
      <br />
    </>
  )
}

export default UuidInput

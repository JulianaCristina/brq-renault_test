import React, { useCallback, useState } from 'react'

import { Modal, Form, Input, Space, DatePicker } from 'antd'
import ColorPicker from '../ColorPicker'

const Reminder = ({ openModal }) => {
  const [open, setOpen] = useState(openModal)

  const handleClose = useCallback(() => {
    setOpen(!openModal)
  }, [])

  return (
    <Modal
      title="Insert a Reminder"
      centered
      visible={open}
      onOk={handleClose}
      onCancel={handleClose}
    >
      <Form
        name="reminder"
      >
        <Form.Item
          label="Reminder Description"
          name="description"
          rules={[{ required: true, message: 'The limit is 30 characters!', max: 30 }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Form>
      <Form.Item
        label="Select Date and time"
        name="dateTime"
      >
        <DatePicker showTime />
      </Form.Item>
      <Form.Item
        label='Select an Color'
      >
        <ColorPicker/>
      </Form.Item>
    </Modal>
  )
}

export default React.memo(Reminder)

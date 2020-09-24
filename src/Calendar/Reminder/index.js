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
        layout='vertical'
        name="reminder"
      >
        <Form.Item
          label="Reminder Description"
          name="description"
          wrapperCol={12}
          rules={[{ required: true, message: 'The limit is 30 characters!', max: 30 }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true }]}
          >
            <Input small/>
          </Form.Item>
          <span>Teste</span>
        </Form.Item>

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
      </Form>

    </Modal>
  )
}

export default React.memo(Reminder)

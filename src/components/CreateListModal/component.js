import React from 'react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import { Modal } from 'antd'
import PropTypes from 'prop-types'
import InputField from '../InputField'

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required()
})

const CreateListModalComponent = ({ setModal, createList }) => (
  <Formik
    initialValues={{
      name: '',
      description: ''
    }}
    validationSchema={validationSchema}
    onSubmit={createList}
  >
    {({ handleSubmit }) => (
      <Modal
        visible
        onCancel={() => setModal(undefined)}
        onOk={handleSubmit}
        okText="Create"
        title="Create list"
      >
        <Field
          name="name"
          placeholder="Name"
          component={InputField}
          type="text"
        />
        <Field
          name="description"
          placeholder="Description"
          component={InputField}
          type="text"
        />
      </Modal>
    )}
  </Formik>
)

CreateListModalComponent.propTypes = {
  setModal: PropTypes.func.isRequired,
  createList: PropTypes.func.isRequired
}

export default CreateListModalComponent

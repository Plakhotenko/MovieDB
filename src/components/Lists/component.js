import React from 'react'
import {
  Layout, Row, Col, Typography, Modal, Pagination, Empty
} from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { PropTypes } from 'prop-types'
import { PAGINATION_PARAMS } from 'Constants'
import Header from '../Header'
import CreateListModal from '../stubs/CreateListModal'
import Loader from '../Loader'
import List from '../List'

class ListsComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = { modalVisible: false }

    this.showModal = () => {
      this.setState({ modalVisible: true })
    }

    this.hideModal = () => {
      this.setState({ modalVisible: false })
    }
  }

  render() {
    const { modalVisible } = this.state
    const {
      isLoading,
      lists,
      currentPage,
      totalResults,
      paginationDisabled,
      onPageChange,
      isListsEmpty,
      removeList
    } = this.props

    const showModal = (id) => {
      Modal.confirm({
        title: 'Do you want to delete list?',
        onOk() {
          removeList(id)
        },
        onCancel() {}
      })
    }

    return (
      <Layout>
        <Header />
        <Layout.Content>
          <Row>
            <Col
              offset={2}
              span={20}
            >
              <div className="top-margin">
                {!isLoading
                && (
                  <Typography.Title>
                    My Lists
                    {' '}
                    <PlusCircleOutlined onClick={this.showModal} />
                  </Typography.Title>
                )}
                {isLoading && <Loader />}
                {isListsEmpty && !isLoading
                  && (
                  <Empty
                    description="No lists created yet"
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                  />
                  ) }
              </div>
            </Col>
          </Row>
          <Row
            gutter={8}
            type="flex"
          >
            <Col
              span={20}
              offset={2}
            >
              <Row
                gutter={{
                  xs: 8, sm: 16, md: 24, lg: 32
                }}
              >
                {!isLoading && lists.map(({ id, name, description }) => (
                  <List
                    key={id}
                    id={id}
                    title={name}
                    description={description}
                    onClickHandler={showModal}
                  />
                ))}
              </Row>
            </Col>
          </Row>
          <Row
            type="flex"
            justify="center"
          >
            <Col>
              {!isLoading
              && (
                <Pagination
                  current={currentPage}
                  total={totalResults}
                  pageSize={PAGINATION_PARAMS.pageSize}
                  showSizeChanger={false}
                  hideOnSinglePage
                  disabled={paginationDisabled}
                  onChange={onPageChange}
                  className="pagination"
                />
              )
              }
            </Col>
          </Row>
        </Layout.Content>
        <Modal
          visible={modalVisible}
          onCancel={this.hideModal}
          okText="Create"
          title="Create list"
        >
          <CreateListModal />
        </Modal>
      </Layout>
    )
  }
}

ListsComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  lists: PropTypes.arrayOf(PropTypes.shape),
  currentPage: PropTypes.number,
  totalResults: PropTypes.number,
  paginationDisabled: PropTypes.bool,
  onPageChange: PropTypes.func.isRequired,
  removeList: PropTypes.func.isRequired,
  isListsEmpty: PropTypes.bool
}

ListsComponent.defaultProps = {
  lists: [],
  currentPage: 1,
  totalResults: 0,
  paginationDisabled: true,
  isListsEmpty: true
}

export default ListsComponent

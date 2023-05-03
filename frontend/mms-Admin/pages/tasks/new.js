import React, { useState, useEffect } from 'react'
import styles from "styles/tasks.module.css";
import Icon from 'components/Icon';
import moment from 'moment';
import { Row, Col, Form } from 'antd';
import DeleteTask from 'components/DeleteTask';

const NewTask = () => {
  const [state, stateState] = useState({ title: "", details: "" });
  const [loading, setLoading] = useState(true);

  const handleChange = () => {};

  return (
    <Row>
      <Col span={24}>
        <CustomInput
          value={state.title}
          onChange={handleChange}
          placeholder="Enter a title"
          name="title"
        />
      </Col>
      <Col span={24}>
        <div className={styles.label}>
          <label>Details</label>
        </div>
        <CustomTextArea
          value={state.details}
          name="details"
          onChange={handleChange}
          placeholder="Enter task details"
          rows={4}
        />
      </Col>
    </Row>
  )
}

export default NewTask;

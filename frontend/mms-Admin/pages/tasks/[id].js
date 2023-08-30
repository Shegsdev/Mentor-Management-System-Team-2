import { useState, useEffect } from "react"
import Image from "next/image";
import { useRouter } from "next/router";
import { Row, Col, Form, Input, Button, Typography, Avatar } from 'antd';
import { fetchMentors, fetchMentorManagers } from "pages/api/user";
import { fetchTask, updateTask } from "pages/api/task";
import { Icon } from "components/Icon/Icon";
import SuccessModal from "components/SuccessMessage";

import buttonStyles from "styles/button.module.scss";
import styles from "styles/createTask.module.scss";


const AddMentor = ({ id, name, added, handleSelect }) => {
  return (
    <Row gutter={16} justify="space-around" align="center" className={styles.add_mentor_container}>
      <Col>
        <Avatar src="/assets/images/admin_avatar.png" size={42} />
      </Col>
      <Col>
        <Typography>
          <h5 className={styles.header}>{name}</h5>
          <small>Program Assistant</small>
        </Typography>
      </Col>
      <Col onClick={() => handleSelect(id)}>
        <Icon name={`${added ? "Check" : "PlusOutLined"}`} />
      </Col>
    </Row>
  );
};

const initialState = {
  title: "",
  description: "",
  mentors: [],
  mentorManagers: [],
};

const EditTask = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [mentors, setMentors] = useState([]);
  const [mentorManagers, setMentorManagers] = useState([]);
  const [showMentors, setShowMentors] = useState({ show: true, type: "mentors" });

  const taskId = router.query?.id;

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleShowMentors = (type) => {
    setShowMentors({ show: true, type });
  };

  const handleSelectMentor = (id) => {
    const { type } = showMentors;
    const updated = [...new Set([...state[type], id])];
    setState((prevState) => {
      return {
        ...prevState,
        [type]: updated
      };
    });
  };

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const { data: { result } } = await fetchTask(id);
      const { data: { mentors } } = await fetchMentors();
      const { data: { mentorManagers } } = await fetchMentorManagers();

      setState({
        id: result?.id,
        title: result?.title,
        description: result?.description,
        mentors: result?.mentors?.map((m) => m?.id),
        mentorManagers: result?.mentorManagers?.map((mm) => mm?.id),
      });
      setMentors(mentors);
      setMentorManagers(mentorManagers);
    } catch (e) {
      // handleError(e?.response?.data?.message);
    }
    finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (value) => {
    setLoading(true);
    const payload = {
      ...state,
      ...value,
    };

    try {
      const response = await updateTask(taskId, payload);
      if (response.status === 200) {
        setOpenModal(true);
      }
    } catch (e) {}
    finally {
      setLoading(false);
    }
  };

  const renderData = (type) => {
    switch (type) {
      case "mentors":
        return mentors;
      case "mentorManagers":
        return mentorManagers;
      default:
        return mentors;
    };
  };

  useEffect(() => {
    fetchData(taskId);
  }, [taskId]);

  const checkAdded = (id) => {
    if (mentorIds.includes(id) || mentorManagerIds.includes(id)) return true;
    return false;
  };

  const { show, type } = showMentors;
  const { mentors: mentorIds, mentorManagers: mentorManagerIds } = state;

  return (
    <>
      <Row justify="space-between" className={styles.create_task}>
        <Col span={show ? 16 : 24}>
          <Form name="edit-task" layout="vertical" form={form} onFinish={handleSubmit}>
            <Form.Item
              name="title"
              label="Title"
              help="The title must contain a maximum of 40 characters"
              rules={[
                { required: true, min: 3, max: 40 }
              ]}>
              <Input
                placeholder={state.title}
                className={styles.input}
                value={state.title} />
            </Form.Item>
            <Form.Item
              name="description"
              label="Details"
              rules={[
                { required: true, min: 10 }
              ]}>
              <Input.TextArea
                placeholder={state.description}
                className={styles.input} rows={10}
                value={state.description} />
            </Form.Item>

            <Row gutter={16}>
              <Col lg={12} md={24}>
                <div className={styles.mentor_container}>
                  <Typography>
                    <h4>Add Mentor Manager</h4>
                    <span className={styles.selected_item_text}>
                      {`${mentorManagerIds?.length} selected`}
                      <Image src={"/assets/images/remove_tag.png"} width={16} height={12} />
                    </span>
                  </Typography>
                  <Button
                    onClick={() => handleShowMentors("mentorManagers")}
                    className={[buttonStyles.button, buttonStyles.primary]}>
                    Select
                  </Button>
                </div>
              </Col>
              <Col lg={12} md={24}>
                <div className={styles.mentor_container}>
                  <Typography>
                    <h4>Add Mentor</h4>
                    <span className={styles.selected_item_text}>
                      {`${mentorIds?.length} selected`}
                      <Image src={"/assets/images/remove_tag.png"} width={16} height={12} />
                    </span>
                  </Typography>
                  <Button
                    onClick={() => handleShowMentors("mentors")}
                    className={[buttonStyles.button, buttonStyles.primary]}>
                    Select
                  </Button>
                </div>
              </Col>
            </Row>

            <Button
              className={[buttonStyles.button, buttonStyles.primary, buttonStyles.medium]}
              htmlType="submit"
              loading={loading}>
              Edit Task
            </Button>
          </Form>
        </Col>
        {show ? (
          <Col md={6}>
            {renderData(type)?.map((profile) => (
              <AddMentor
                id={profile?.id}
                key={profile?.id}
                name={`${profile?.first_name} ${profile?.last_name}`}
                added={checkAdded(profile?.id)}
                handleSelect={handleSelectMentor}
              />))}
          </Col>
        ) : null}
      </Row>

      <SuccessModal
        message="Task updated successfuly"
        isModalOpen={openModal}
        image={"/assets/images/task_success.png"}
        setIsModalOpen={handleModal}
        reloadPage={true}
      />
    </>
  );
};

export default EditTask;

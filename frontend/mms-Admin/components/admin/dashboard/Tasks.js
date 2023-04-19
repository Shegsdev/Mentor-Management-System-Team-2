import { Col, Row, Space, Typography } from "antd";
import { Button } from "components/Button";
import { Icon } from "components/Icon/Icon";
import styles from "styles/admin/dashboard.module.css";

const Tasks = ({ tasks }) => {
  const { Paragraph } = Typography;
  return (
    <div className={styles.card_container}>
      <Row justify={"space-between"}>
          <Paragraph>
            <p style={{ margin: 0 }} className={styles.card_header_text}>Tasks overview</p>
          </Paragraph>
      </Row>
      <Row gutter={[16, 16]}>
        <Col
          md={4}
          sm={24}
          style={{
            background: "#058b94",
            borderRadius: "7px",
            padding: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "20px", color: "#f7feff", margin: 0 }}>In Progress</p>
        </Col>
        <Col md={20} sm={24}>
          <Row gutter={[16, 16]}>
          {tasks?.map((task) => {
            return (
              <Col md={8} sm={12} xs={24}>
                <div className={styles.card}>
                  <Icon name="Report" width={25} height={33} color="#058B94" />
                  <Paragraph style={{ marginLeft: "1em", display: "inline-block" }}>
                    <p style={{ margin: 0, fontSize: "20px" }}>{task.title}</p>
                    <small>
                      <Icon name="Calendar" />
                      {task.daysLeft} days from now
                    </small>
                  </Paragraph>
                </div>
              </Col>
            )})}
          </Row>
        </Col>
      </Row>
      <Row justify={"end"}>
        <Space style={{ marginTop: "1em" }}>
          <Button type="primary">View all</Button>
        </Space>
      </Row>
    </div>
  );
};

export default Tasks;

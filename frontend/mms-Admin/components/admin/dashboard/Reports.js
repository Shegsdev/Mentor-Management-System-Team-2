import { Col, Row, Space, Typography } from "antd";
import { Button } from "components/Button";
import { Icon } from "components/Icon/Icon";
import styles from "styles/admin/dashboard.module.css";

const Reports = ({ reports }) => {
  const { Paragraph } = Typography;
  return (
    <div className={styles.card_container}>
      <Row justify={"space-between"}>
          <Paragraph>
            <p style={{ margin: 0 }} className={styles.card_header_text}>Reports overview</p>
          </Paragraph>
          <Paragraph>
            <p style={{ margin: 0 }} className={styles.card_header_text}>17 Reports Submitted</p>
          </Paragraph>
      </Row>
      <Row justify={"space-between"} gutter={[16, 16]}>
        {reports?.map((report) => {
          return (
            <Col md={8} sm={12} xs={24}>
              <div className={styles.card}>
                <Icon name="Report" width={25} height={33} color="#058B94" />
                <Paragraph style={{ marginLeft: "1em", display: "inline-block" }}>
                  <p style={{ margin: 0, fontSize: "20px" }}>{report.title}</p>
                  <small>By {report.author} - {report.date}</small>
                </Paragraph>
              </div>
            </Col>
          )})}
      </Row>
      <Row justify={"end"}>
        <Space style={{ marginTop: "1em" }}>
          <Button type="primary">View all</Button>
        </Space>
      </Row>
    </div>
  );
};

export default Reports;

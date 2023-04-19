import { Typography } from "antd";
import { Icon } from "components/Icon/Icon";
import { Button } from "components/Button";
import styles from "styles/admin/dashboard.module.css";

const Statistics = ({ stats }) => {
  const { Title, Paragraph } = Typography;
  return (
    <div className={styles.stats}>
      <div
        style={{
          background: "#058b94",
          borderRadius: "7px",
          padding: "12px",
          width: "250px",
        }}>
        <div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button>View</Button>
          </div>
          <Typography
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "end",
            }}>
            <Title
              level={6}
              style={{ color: "#fff", marginRight: "12px", marginBottom: 0 }}>
              12
            </Title>
            <Paragraph style={{ margin: 0 }}>
              <p
                style={{
                  color: "#f7feff",
                  margin: 0,
                  width: "80%",
                  fontWeight: 500,
                  fontSize: "20px",
                }}>
                Active Programs
              </p>
            </Paragraph>
          </Typography>
        </div>
      </div>
      <div className={styles.card_container}>
        <div className={styles.top_cards}>
          {stats?.map((stat) => (
            <div className={styles.stats_card} key={stat.title}>
              <Paragraph style={{ margin: 0 }}>
                <p style={{ margin: 0, fontSize: "20px" }}>{stat.title}</p>
                <p style={{ margin: 0, fontSize: "20px" }}>{stat.value}</p>
              </Paragraph>
              <Icon
                name={`${stat.icon}`}
                color="#058b94"
                width="32"
                height="32"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;

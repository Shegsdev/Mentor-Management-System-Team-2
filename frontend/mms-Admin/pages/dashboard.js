import { useRouter } from "next/router";

const Dashboard = (props) => {
  const router = useRouter();
  const sideBarState = null;

  return (
    <>
      <div>
        {sideBarState && (
          <div>{/* <SideBar handleToggle={handleToggle} /> */}</div>
        )}
        <div>
          {/* <NavBar handleToggle={handleToggle} /> */}
          <main>
            <h2>Dashboard</h2>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

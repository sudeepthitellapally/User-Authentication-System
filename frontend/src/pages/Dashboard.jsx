export default function Dashboard() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>
      <p>You are authenticated successfully.</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
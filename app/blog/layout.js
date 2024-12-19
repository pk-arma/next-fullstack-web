// app/dashboard/settings/layout.js
export default function BlogLayout({ children, team, analytics }) {
  return (
    <div>
      <nav>Blog  Navigation</nav>
      <main>
        <div style={{
          display: "flex", justifyContent: "space-evenly",
          alignItems: "center",
          padding: "10px",
          border: "1px solid #ccc",
        }}>
          {team}
          {analytics}
        </div>
        {children}
      </main>
    </div>
  );
}

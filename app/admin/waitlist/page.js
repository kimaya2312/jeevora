import { getAllEntries } from "@lib/db";

export const dynamic = "force-dynamic"; // always re-fetch on each visit

export default async function WaitlistAdmin() {
  const entries = await getAllEntries();

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "40px 32px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: "#0f172a", margin: 0 }}>
          Jeevora Care — Waitlist
        </h1>
        <p style={{ color: "#64748b", marginTop: 6, fontSize: 14 }}>
          {entries.length === 0
            ? "No sign-ups yet."
            : `${entries.length} sign-up${entries.length === 1 ? "" : "s"} · newest first`}
        </p>
        <p style={{ color: "#94a3b8", marginTop: 4, fontSize: 12 }}>
          Data stored in Turso cloud database.
        </p>
      </div>

      {entries.length === 0 ? (
        <div style={{
          border: "1px dashed #e2e8f0",
          borderRadius: 10,
          padding: "60px 24px",
          textAlign: "center",
          color: "#94a3b8",
          fontSize: 15,
        }}>
          No one has joined the waitlist yet. Share the page and come back!
        </div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                {["#", "Name", "Email", "Message", "Joined (UTC)"].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "10px 14px",
                      fontWeight: 600,
                      color: "#475569",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {entries.map((row, i) => (
                <tr
                  key={row.id}
                  style={{
                    borderBottom: "1px solid #f1f5f9",
                    background: i % 2 === 0 ? "#fff" : "#f8fafc",
                    verticalAlign: "top",
                  }}
                >
                  <td style={{ padding: "10px 14px", color: "#94a3b8", fontVariantNumeric: "tabular-nums" }}>
                    {row.id}
                  </td>
                  <td style={{ padding: "10px 14px", color: "#0f172a", fontWeight: 500, whiteSpace: "nowrap" }}>
                    {row.name}
                  </td>
                  <td style={{ padding: "10px 14px", color: "#1D9E75", fontFamily: "monospace", whiteSpace: "nowrap" }}>
                    {row.email}
                  </td>
                  <td style={{ padding: "10px 14px", color: "#64748b", maxWidth: 320, lineHeight: 1.5 }}>
                    {row.message ? row.message : <span style={{ color: "#cbd5e1", fontStyle: "italic" }}>—</span>}
                  </td>
                  <td style={{ padding: "10px 14px", color: "#64748b", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
                    {row.joined_at}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Footer note */}
      <p style={{ marginTop: 32, fontSize: 12, color: "#cbd5e1" }}>
        This page is internal. Do not share the URL publicly without adding authentication.
      </p>
    </main>
  );
}

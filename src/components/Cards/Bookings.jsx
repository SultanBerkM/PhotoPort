function Bookings() {
  const headers = [
    { id: 1, key: "DATE", label: "Date" },
    { id: 2, key: "CLIENT", label: "Client" },
    { id: 3, key: "TYPE", label: "Type" },
    { id: 4, key: "STATUS", label: "Status" },
  ];

  const bookingsData = [
    {
      id: 1,
      date: "2024-09-15",
      client: "John Doe",
      type: "Wedding",
      status: "Confirmed",
    },
    {
      id: 2,
      date: "2024-09-16",
      client: "Jane Smith",
      type: "Corporate",
      status: "Pending",
    },
    {
      id: 3,
      date: "2024-09-17",
      client: "Alice Johnson",
      type: "Engagement",
      status: "Confirmed",
    },
    {
      id: 4,
      date: "2024-09-18",
      client: "Bob Brown",
      type: "Birthday",
      status: "Pending",
    },
    {
      id: 5,
      date: "2024-09-19",
      client: "Charlie Davis",
      type: "Anniversary",
      status: "Confirmed",
    },
  ];

  // helpers
  const StatusBadge = ({ value }) => {
    const v = (value || "").toLowerCase();
    const styles =
      {
        confirmed: "bg-emerald-100 text-emerald-700",
        pending: "bg-amber-100 text-amber-700",
        cancelled: "bg-rose-100 text-rose-700",
        completed: "bg-zinc-100 text-zinc-700",
      }[v] || "bg-zinc-100 text-zinc-700";
    return (
      <span
        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${styles}`}
      >
        {value}
      </span>
    );
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return isNaN(d)
      ? iso
      : d.toLocaleDateString("en-GB", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
  };

  const only3 = typeof window !== "undefined" &&
                window.matchMedia(" (max-height:1080px)").matches;
  const rows = only3 ? bookingsData.slice(0, 3) : bookingsData;

  return (
      <div className="overflow-x-auto w-1/2 rounded-2xl border border-zinc-200 bg-white shadow-sm mx-5">
      <table className="w-full min-w-[720px] text-sm">
        <thead className="bg-zinc-50/80 sticky top-0 z-10">
          <tr>
            {headers.map((header) => {
              const accessor = header.key.toLowerCase();
              const hideOnSm =
                accessor === "type" ? "hidden sm:table-cell" : "";
              return (
                <th
                  key={header.id}
                  className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-zinc-500 ${hideOnSm}`}
                >
                  <span>{header.label}</span>
                </th>
              );
            })}
          </tr>
        </thead>

            
        <tbody className="divide-y divide-zinc-100">
          {rows.map((row) => (
            <tr key={row.id} className="hover:bg-zinc-50/70 transition-colors">
              {headers.map((header) => {
                const accessor = header.key.toLowerCase();
                const hideOnSm =
                  accessor === "type" ? "hidden sm:table-cell" : "";

                let content = row[accessor];

                if (accessor === "date") {
                  content = formatDate(row.date);
                } else if (accessor === "status") {
                  content = <StatusBadge value={row.status} />;
                } else if (accessor === "type") {
                  content = (
                    <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-xs">
                      {row.type}
                    </span>
                  );
                }

                return (
                  <td
                    key={header.id}
                    className={`px-4 py-3 whitespace-nowrap align-middle ${hideOnSm}`}
                  >
                    {content ?? "—"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;

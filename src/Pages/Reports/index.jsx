import React from "react";
import DueTable from "../../Components/ui/DueTable";

export default function Index() {
  const dueTableData = [
    {
      name: "John Doe",
      type: "Type A",
    },
    {
      name: "Jane Smith",
      type: "Type B",
    },
    {
      name: "Michael Johnson",
      type: "Type C",
    },
    // Add more data objects as needed
  ];

  return (
    <div>
      <DueTable title="Reports" data={dueTableData} />
    </div>
  );
}

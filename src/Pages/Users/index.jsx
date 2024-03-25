import React from "react";
import DueTable from "../../Components/ui/DueTable";
import Table from "../../Components/ui/Table";

export default function Index() {
  const users = [
    {
      id: 1,
      name: "Item 1",
      date: "2024-03-22",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      id: 1,
      name: "Item 1",
      date: "2024-03-22",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      id: 1,
      name: "Item 1",
      date: "2024-03-22",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
    {
      id: 2,
      name: "Item 2",
      date: "2024-03-23",
      imageUrl: null, // Replace with your image URL
    },
    {
      id: 2,
      name: "Item 2",
      date: "2024-03-23",
      imageUrl: null, // Replace with your image URL
    },
    {
      id: 2,
      name: "Item 2",
      date: "2024-03-23",
      imageUrl: null, // Replace with your image URL
    },
    {
      id: 2,
      name: "Item 2",
      date: "2024-03-23",
      imageUrl: null, // Replace with your image URL
    },
    // Add more items as needed
  ];
  return (
    <div>
      <Table data={users} />
    </div>
  );
}

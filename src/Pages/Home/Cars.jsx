import React from "react";
import CardReport from "../../Components/ui/CardReport";

export default function Cars() {
  return (
    <div className="grid md:grid-cols-3 md:gap-3 gap-2">
      <CardReport />
      <CardReport />
      <CardReport />
    </div>
  );
}

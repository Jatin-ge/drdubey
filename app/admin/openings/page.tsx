import EditableTable from "@/components/EditableTable/EditableTable";
import { db } from "@/lib/db";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const days = await db.day.findMany();

  return (
    <div>
      <EditableTable days={days} />
    </div>
  );
};

export default page;

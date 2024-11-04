import React from "react";
import AdminDashboard from "@/app/views/admin/dashboard/Dashboard";

export default function page() {
  return (
    <>
      <AdminDashboard />
    </>
  );
}

export const generateMetadata = () => {
  return {
    title: "Admin Dashboard",
    description:
      "Admin dashboard to manage users, movies, events, and all the shows",
  };
};

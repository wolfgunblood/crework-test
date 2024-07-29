"use client";
import { Button } from "@/components/ui/button";
import { Sidebar } from "./_components/Sidebar";
import Dashboard from "./_components/Dashboard";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default function Home() {
  const getTask = async () => {
    const token = getCookie("jwtToken");

    try {
      const response = await fetch(
        "https://crework-test.onrender.com/api/v1/tasks",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

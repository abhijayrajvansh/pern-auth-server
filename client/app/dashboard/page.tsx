"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface DashboardData {
  route_protected: boolean;
  msg: string;
}

const page = () => {
  const server_url = process.env.NEXT_PUBLIC_API_URL;
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  const auth_token = localStorage.getItem("auth_token");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await axios.get(server_url + "/api/dashboard", {
          headers: {
            Authorization: `Bearer ${auth_token}`,
          },
        });
        setDashboardData(response.data);
      } catch (error) {
        console.error("there was an error:", error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-5xl mb-12 text-center">Dashboard</h1>

      {dashboardData ? (
        <div className="p-4 rounded-xl font-light bg-black/30">
          <div className="text-2xl">
            <div>Route Name: {dashboardData.msg}</div>
            <div>
              Route Protected:{" "}
              <span className="text-green-400 font-semibold">
                {dashboardData.route_protected ? "Yes" : "Yes"}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default page;

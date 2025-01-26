import React, { useState } from "react";
import { Row, Col, Card, Table, Input, Button } from "antd";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { SearchOutlined } from '@ant-design/icons';

const AdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy data for charts and table
  const totalVisitorsData = [
    { name: "New Visitors", value: 400 },
    { name: "Returning Visitors", value: 240 },
  ];

  const departmentActivityData = [
    { name: "Finance", count: 100 },
    { name: "Medical", count: 120 },
    { name: "Legal", count: 50 },
    { name: "Support", count: 80 },
  ];

  const operationLogs = [
    { key: "1", action: "Login Attempt", time: "10:00 AM", user: "Admin" },
    { key: "2", action: "Data Export", time: "10:15 AM", user: "Admin" },
    { key: "3", action: "Visitor Token Generated", time: "10:30 AM", user: "Receptionist" },
  ];

  const recentActivities = [
    { key: "1", activity: "User John Doe registered", time: "9:00 AM" },
    { key: "2", activity: "Admin updated loan details", time: "9:30 AM" },
    { key: "3", activity: "Receptionist generated visitor token", time: "10:00 AM" },
  ];

  const handleSearch = () => {
    // Add logic for searching records by CNIC, name, or phone number
    console.log("Search triggered with query:", searchQuery);
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* Daily Insights */}
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <h3>Total Visitors</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={totalVisitorsData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#4CAF50" label>
                  {totalVisitorsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#FF5722" : "#FFC107"} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <h3>Department-wise Activity</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={departmentActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#2196F3" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <h3>Visitor Statistics</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={departmentActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#9C27B0" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Search Records */}
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by CNIC, Name, or Phone Number"
          style={{ width: 300, marginRight: 10 }}
        />
        <Button icon={<SearchOutlined />} onClick={handleSearch}>
          Search
        </Button>
      </div>

      {/* Operational Logs */}
      <Card title="Reports and Logs" style={{ marginTop: "20px" }}>
        <Table
          columns={[
            { title: "Action", dataIndex: "action" },
            { title: "Time", dataIndex: "time" },
            { title: "User", dataIndex: "user" },
          ]}
          dataSource={operationLogs}
          pagination={false}
        />
      </Card>

      {/* Recent Activities */}
      <Card title="Recent Activities" style={{ marginTop: "20px" }}>
        <Table
          columns={[
            { title: "Activity", dataIndex: "activity" },
            { title: "Time", dataIndex: "time" },
          ]}
          dataSource={recentActivities}
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default AdminDashboard;

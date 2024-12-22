'use client';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as LineTooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { PieChart } from '@mui/x-charts'; // Import MUI PieChart
import { BarChart, Bar, Tooltip as BarTooltip } from 'recharts';
import { leads } from '@/lib/placeholder';

// Format the line chart data
const formattedLineData = leads.reduce((acc, lead) => {
  const date = lead.date.split(' ')[0]; // Extract date part (e.g., '04/02/2024')
  if (acc[date]) {
    acc[date].count += 1;
  } else {
    acc[date] = { date, count: 1 };
  }
  return acc;
}, {} as { [key: string]: { date: string; count: number } });
const lineChartData = Object.values(formattedLineData);

// Format the pie chart data (status counts)
const statusCounts = leads.reduce((acc, lead) => {
  if (acc[lead.status]) {
    acc[lead.status] += 1;
  } else {
    acc[lead.status] = 1;
  }
  return acc;
}, {} as { [key: string]: number });
const pieChartData = Object.entries(statusCounts).map(([status, count], index) => ({
  id: index,
  value: count,
  label: status,
}));

// Format data for the BarChart (for showing total leads per status)
const leadNamesCount = leads.reduce((acc, lead) => {
  if (acc[lead.status]) {
    acc[lead.status].push(lead.name);
  } else {
    acc[lead.status] = [lead.name];
  }
  return acc;
}, {} as { [key: string]: string[] });

const barChartData = Object.entries(leadNamesCount).map(([status, names]) => ({
  status,
  totalLeads: names.length,
  leads: names.join(', '), // Join names as a comma-separated string
}));

// Custom Tooltip for LineChart
const CustomLineTooltip = ({ payload, label }: any) => {
  if (!payload || payload.length === 0) {
    return null;
  }
  const count = payload[0].value;
  const date = label;

  return (
    <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '5px', border: '1px solid #ccc' }}>
      <p>{`Date: ${date}`}</p>
      <p>{count === 0 ? 'No leads recorded for this date.' : `Leads: ${count}`}</p>
    </div>
  );
};

const CustomChartWithLineAndPie = () => (
  <div className="mt-5 bg-gradient-to-b from-white to-gray-200 p-8">
    {/* LineChart Section */}
    <div style={{ marginBottom: '30px' }}>
      <h3>Leads Trend Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={lineChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <LineTooltip content={<CustomLineTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Additional Graphs and Details */}
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
      {/* MUI PieChart */}
      <div style={{ flex: 1 }}>
        <h3>Leads Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart
            series={[
              {
                data: pieChartData,
              },
            ]}
            width={400}
            height={200}
          />
        </ResponsiveContainer>
      </div>

      {/* BarChart for Total Leads Per Status */}
      <div style={{ flex: 1 }}>
        <h3>Total Leads by Status</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis />
            <Bar dataKey="totalLeads" fill="#d0dcee" />
            <BarTooltip
              content={({ payload }: any) => {
                if (!payload || payload.length === 0) return null;
                const { leads } = payload[0].payload;
                return (
                  <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '5px', border: '1px solid #ccc' }}>
                    <p>{`Leads in this status: ${leads}`}</p>
                  </div>
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default CustomChartWithLineAndPie;

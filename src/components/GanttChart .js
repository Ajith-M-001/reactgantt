// GanttChart.js
import React from "react";
import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

const GanttChart = () => {
  // Define tasks with start and end times
  const tasks = [
    {
      start: new Date(2020, 1, 1, 8, 0), // 8:00 AM
      end: new Date(2020, 1, 1, 10, 0), // 10:00 AM
      name: "Morning Task",
      id: "Task 0",
      type: "task",
      progress: 100,
      styles: { progressColor: "#0000FF", progressSelectedColor: "#0000FF" },
    },
    {
      start: new Date(2020, 1, 1, 10, 0), // 10:30 AM
      end: new Date(2020, 1, 1, 12, 0), // 12:00 PM
      name: "Midday Task",
      id: "Task 1",
      type: "task",
      progress: 100,
      styles: { progressColor: "#0000FF", progressSelectedColor: "#0000FF" },
    },
    {
      start: new Date(2020, 1, 1, 12, 0), // 1:00 PM
      end: new Date(2020, 1, 1, 15, 0), // 3:00 PM
      name: "Afternoon Task",
      id: "Task 2",
      type: "task",
      progress: 100,
      styles: { progressColor: "#0000FF", progressSelectedColor: "#0000FF" },
    },
    {
      start: new Date(2020, 1, 2, 12, 0), // 1:00 PM
      end: new Date(2020, 1, 2, 15, 0), // 3:00 PM
      name: "Afternoon Task",
      id: "Task 2",
      type: "task",
      progress: 100,
      styles: { progressColor: "#0000FF", progressSelectedColor: "#0000FF" },
    },
  ];

  return (
    <div>
      <h1>Gantt Chart with 24-hour time format</h1>
      <Gantt tasks={tasks} viewMode={ViewMode.Hour} />
    </div>
  );
};

export default GanttChart;

import React, { createContext, useState } from 'react';

// Remove the 'interface' block entirely. It is TypeScript syntax.

// Create the context
export const TaskContext = createContext(null);

// The component that provides the context
const TaskContext1 = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext1;

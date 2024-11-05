import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const TasksContext = createContext();

 //TODO : add real DIO id

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedDioId, setSelectedDioId] = useState(localStorage.getItem("DOId"));
  const [dioTasks, setDIOTasks] = useState([]);

  useEffect(() => {
      axios.get(process.env.REACT_APP_BACKEND_URL + "/DIO/execution?dioId=" + selectedDioId)
      .then((res) => {
        setDIOTasks(res.data.combinedData);
      });
  }, [selectedDioId]);

  const [propositions, setPropositions] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource(`${process.env.REACT_APP_BACKEND_URL}/events`);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'NEW_EXECUTION' || data.type === 'UPDATED_EXECUTION') {
        setDIOTasks((prevTasks) => [...prevTasks, data.payload]);
      }
    };

    return () => {
      eventSource.close();
    };
  }, [setDIOTasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const addDIOTask = (task) => {
    setDIOTasks((prevTasks) => [...prevTasks, task]);
  };

  const addProposition = (proposition) => {
    setPropositions((prevPropositions) => [...prevPropositions, proposition]);
  };

  const [prop, setProp] = useState([]);
  const addProp = (description) => {
    setProp((prevProps) => [...prevProps, description]);
  };

  const selectDioId = (dioId) => {
    setSelectedDioId(dioId);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        dioTasks,
        addDIOTask,
        propositions,
        addProposition,
        prop,
        setProp,
        addProp,
        selectedDioId, // Include selectedDioId in the context
        selectDioId, // Function to update selectedDioId
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "create landing page",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting " +
        "industry. Lorem Ipsum has been the industry's standard dummy text " +
        "ever since the 1500s, when an unknown printer took a galley of type " +
        "and scrambled it to make a type specimen book. It has survived not",
      activity: [
        {
          id: 1,
          name: "set up env",
          desc: "just do anything for fuck sake",
          isCompleted: false,
        },
        {
          id: 2,
          name: "decide on color palette",
          desc: "just pic anything for fuck sake",
          isCompleted: false,
        },
      ],
    },
    {
      id: 2,
      name: "create ecommerce website",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting " +
        "industry. Lorem Ipsum has been the industry's standard dummy text " +
        "ever since the 1500s, when an unknown printer took a galley of type " +
        "and scrambled it to make a type specimen book. It has survived not",
      activity: [
        {
          id: 1,
          name: "set up env",
          desc: "just do anything for fuck sake",
          isCompleted: false,
        },
      ],
    },
    {
      id: 3,
      name: "create ecommerce website",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting " +
        "industry. Lorem Ipsum has been the industry's standard dummy text " +
        "ever since the 1500s, when an unknown printer took a galley of type " +
        "and scrambled it to make a type specimen book. It has survived not",
      activity: [
        {
          id: 1,
          name: "set up env",
          desc: "just do anything for fuck sake",
          isCompleted: false,
        },
      ],
    },
    {
      id: 4,
      name: "create ecommerce website",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting " +
        "industry. Lorem Ipsum has been the industry's standard dummy text " +
        "ever since the 1500s, when an unknown printer took a galley of type " +
        "and scrambled it to make a type specimen book. It has survived not",
      activity: [
        {
          id: 1,
          name: "set up env",
          desc: "just do anything for fuck sake",
          isCompleted: false,
        },
      ],
    },
    {
      id: 5,
      name: "create ecommerce website",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting " +
        "industry. Lorem Ipsum has been the industry's standard dummy text " +
        "ever since the 1500s, when an unknown printer took a galley of type " +
        "and scrambled it to make a type specimen book. It has survived not",
      activity: [
        {
          id: 1,
          name: "set up env",
          desc: "just do anything for fuck sake",
          isCompleted: false,
        },
      ],
    },
  ]);
  const [inEditMode, setInEditMode] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <DataContext.Provider
      value={{ tasks, setTasks, inEditMode, setInEditMode, windowWidth }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

import React, { useContext } from "react";
import { DataContext } from "../hooks/DataContext";
function NavList({ list }) {
  const { setSpecificCategory } = useContext(DataContext);
  return (
    <>
      <ul>
        {list.map((data, index) => {
          return (
            <li key={index} onClick={() => setSpecificCategory(data)}>
              {data}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default NavList;

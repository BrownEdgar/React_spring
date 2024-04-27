import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/users/usersSlice";
import "./MainForm.scss";

export default function MainForm() {
  const dispatch = useDispatch();
  const fnameRef = useRef();
  const lnameRef = useRef();
  const languageRef = useRef();
  return (
    <div className="MainForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addUser({
              firstName: fnameRef.current.value,
              lastName: lnameRef.current.value,
              language: languageRef.current.value,
            })
          );
          fnameRef.current.value = "";
          lnameRef.current.value = "";
          languageRef.current.value = "JS";
        }}
      >
        <label htmlFor="firstName">
          First Name:
          <input ref={fnameRef} type="text" name="firstName" />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input ref={lnameRef} type="text" name="lastName" />
        </label>
        <select ref={languageRef} name="language">
          <option value="JS">JS</option>
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="HTML&CSS">HTML&CSS</option>
        </select>
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
}

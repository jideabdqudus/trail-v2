import React from "react";

interface Props{
  filtered: any;
  inputChange: any
}

export const FormFilter = ({filtered,inputChange}: Props) => {
  return (
    <form action="">
      <input type="text" className="search_input" placeholder="Search By Name" ref={filtered} onChange={inputChange}/>
    </form>
  );
};

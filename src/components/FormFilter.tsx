interface Props{
  filtered: any; // Any?
  inputChange: any // Any?
}

// #TODO

export const FormFilter = ({filtered,inputChange}: Props) => {
  return (
    // Form Action?
    <form action=""> 
      <input type="text" className="search_input" placeholder="Search By Name" ref={filtered} onChange={inputChange}/>
    </form>
  );
};

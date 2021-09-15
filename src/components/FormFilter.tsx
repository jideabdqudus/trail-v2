interface Props{
  inputChange:(e: any)=>void
  filterText:any
}
export const FormFilter = ({ inputChange, filterText} : Props) => {
  return (
    <form> 
      <input type="text" className="search_input" placeholder="Search By Name" ref={filterText} onChange={inputChange}/>
    </form>
  );
};

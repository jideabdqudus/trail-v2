interface Props{
  
  inputChange:(e: any)=>void
  inputtext: string
}

export const FormFilter = ({ inputChange, inputtext} : Props) => {

  return (
    
    <form> 
      <input type="text" className="search_input" placeholder="Search By Name" value={inputtext} onChange={inputChange}/>
    </form>
  );
};

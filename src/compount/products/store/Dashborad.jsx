

export  function Dashboard (){
    
    
    return(
        <> 
        <h1>ADD New Item from here</h1>
     <div className=" h-96 w-full bg-slate-500 flex flex-col  items-center justify-center">
     <label htmlFor="">Handing</label>
 <input className="w-1/3"  type="text" name="" id="" />
 <label htmlFor="">image</label>
 <input  className="w-1/3" type="file" name="" id="" />
 <label htmlFor="">Decribtion</label>
 <input  className="w-1/3" type="text" name="" id="" />

     </div>
        
        
        </>
    )
}
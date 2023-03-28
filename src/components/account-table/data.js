export const columns = [

    { 
      field: 'header', 
      headerName: 'Bank Accounts', 
      width: 200 ,
      renderCell:(params)=>{
        return(
          <div className="cellWithImg">
            {params.row.username}
          </div>
        )
      }
    }
    
  ];
  
  export const rows = [
    { id: 1,
      age: 35,
      username:'snow', 
      status:'active', 
      email:'1snow@gmail.com', 
      img:'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dp'
    }
   
  ];
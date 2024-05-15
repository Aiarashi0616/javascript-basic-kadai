 const today = new Date(2023, 8, 22 );

 const DatePrototype = () => {
     const year = today.getFullYear();
     const month = today.getMonth() ;
     const date = today.getDate();
  
     console.log(year + '年' + month + '月' + date + '日');
  }
  
 DatePrototype();



 export const fetchPosts = async (setPosts) => {
    // traditionally DO NOT hard code the 
    const response = await fetch('http://localhost:5000/Posts', {
    method: "GET",
   });
     // Json data
    const data = await response.json();
    setPosts(data);
    // console.log(data);
  };

//   
  export const fetchUsers = async (setUsers) => {
    // traditionally DO NOT hard code the 
    const response = await fetch('http://localhost:5000/users', {
    method: "GET",
   });
     // Json data
    const data = await response.json();
    setUsers(data);
    // console.log(data);
  };


  
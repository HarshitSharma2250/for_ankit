const getUsersData = async () => {
  try {
   const res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users`)
  const data= await res.json()
  splitData(data.data,data.totalPages)
  return data;
  } catch (err) {
    return err
  }

};





function splitData(...getData){

const[data,totalPages]=getData

const[data1,data2,...data3]=data

  return {
    totalPages,
    data1,
    data2,
    data3
  }
}


// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getUsersData,
    splitData,
  };
}

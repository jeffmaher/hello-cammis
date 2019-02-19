let myMap = {
  v1: {
    routes: [
      {
        method: "GET",
        endpoint: "/hello/:name",
        handler: "v1/hello"
      },
      {
        method: "GET",
        endpoint: "/health",
        handler: "v1/healthcheck"
      }
    ]
  },
  v2: {
    routes: [
      {
        method: "GET",
        endpoint: "/hello/:name",
        handler: "v2/hello"
      }
    ]
  }
};

//break apart into arrays
let outArr = Object.keys(myMap).reduce((acc, current, index) => {
  acc.push(myMap[current].routes)
  return acc;
}, []);


const getEndpointArr = (input) => {
  return input.reduce((acc, current, index) => {
    acc.push(current.endpoint);
    return acc;
  },[]);
};

//filter out existing endpoints
const filterOut = (obj, endpointFilterArr) => {
  return obj.filter((item) => {
    return !endpointFilterArr.includes(item.endpoint)
  });
};

outArr = outArr.reduce((acc, current, index) => {
  if(index > 0) {
    let currentEndpoints = getEndpointArr(current);
    let filteredEndpoints = filterOut(acc[index-1], currentEndpoints);
    current = current.concat(filteredEndpoints);
  }
  acc.push(current);
  return acc;
},[]);

console.log(outArr)

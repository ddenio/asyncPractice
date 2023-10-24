const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    })
  
  
  // console.log(fetchPromise);
  
  // fetchPromise.then((response) => {
  //   const jsonPromise = response.json();
  //   jsonPromise.then((data) => {
  //     console.log(data[0].name);
  //   });
  //   console.log(`Received response: ${response.status}`);
  // });
  
  console.log("Started request…");
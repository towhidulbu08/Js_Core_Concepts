const url = "https://jsonplaceholder.typicode.com/postss";

//const xhr = new XMLHttpRequest();

//step-01:

//xhr.open("GET", url);

// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 300) {
//     const data = JSON.parse(xhr.response);
//     //console.log(data);
//     const id = data[3].id;

//     const xhr2 = new XMLHttpRequest();
//     const url2 = `${url}/${id}`;
//     xhr2.open("GET", url2);
//     xhr2.onload = function () {
//       if (xhr2.status >= 200 && xhr2.status < 300) {
//         const data2 = JSON.parse(xhr2.response);
//         console.log(data2);
//       } else {
//         console.log("something wrong");
//       }
//     };
//     xhr2.send();
//   } else {
//     console.log("something wrong");
//   }
// };
//handing network errors

// xhr.onerror = function () {
//   console.log("network error");
// };

//xhr.send();

//console.log("hello");

// using Promise

function getData(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject("something went wrong");
      }
    };
    xhr.onerror = function () {
      reject("network error");
    };
    xhr.send();
  });
}

getData("GET", url)
  .then((response) => {
    const data = JSON.parse(response);
    console.log(data);
    const id = data[3].id;
    const url2 = `${url}/${id}`;
    return getData("GET", url2);
  })
  .then((data) => {
    const data2 = JSON.parse(data);
    console.log(data2);
  })
  .catch((err) => {
    console.log(err);
  });

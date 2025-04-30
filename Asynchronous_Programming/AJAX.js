const url = "https://jsonplaceholder.typicode.com/posts/1";

const xhr = new XMLHttpRequest();

//step-01:
//console.log(xhr.readyState); // 0
xhr.open("GET", url);
//console.log(xhr.readyState); // 1

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     const response = JSON.parse(xhr.response);
//     console.log(response);
//   }
// };

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const response = JSON.parse(xhr.response);
    console.log(response);
  } else {
    console.log("something wrong");
  }
};
//handing network errors

xhr.onerror = function () {
  console.log("network error");
};

xhr.send();

//console.log("hello");

// AJAX: Asynchronous Js and XML

// XML is another formate for data , beside json

//creating a http request with xml

//

//const url = "https/jsonplace.comments/posts";
const xhr = new XMLHttpRequest();
//console.log(xhr);
console.log(xhr.readyState);
xhr.open("GET", url);
console.log(xhr.readyState);

xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const response = xhr.response;
    console.log(typeof response);
    const data = JSON.parse(response);
    console.log(typeof data);
  }
};

xhr.onload = function () {
  console.log(xhr.readyState);
  const response = xhr.response;
  //console.log(typeof response);
  const data = JSON.parse(response); //object
  //console.log(typeof data);
};
xhr.send();

// error handling

const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.response);
    const id = data[3].id;
    const xhr2 = new XMLHttpRequest();
    const url2 = `${url}/${id}`;
    console.log(url2);
    xhr2.open("GET", url2);
    xhr2.onload = () => {
      const data2 = JSON.parse(xhr2.response);
      console.log(data2);
    };
    xhr2.send();
  } else {
    console.log("something went wrong");
  }
};

xhr.onerror = () => {
  //   console.log("network error");
};

// To avoid callback hell , use Promise

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("something went wrong"));
      }
    };
    xhr.onerror = function () {
      reject(new Error("network error"));
    };
    xhr.send();
  });
}

sendRequest("GET", url)
  .then((response) => {
    const data = JSON.parse(response);
    return data;
  })
  .then((data) => {
    const id = data[3].id;
    return sendRequest("GET", url);
  })
  .then((newResponse) => {
    const newData = JSON.parse(newResponse);
    console.log(newData);
  })
  .catch((error) => {
    console.log(error);
  });

// add project

let blogs = [];

function getBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("project").value;
  let startDate = document.getElementById("start").value;
  let endDate = document.getElementById("end").value;
  let desc = document.getElementById("description").value;
  let image = document.getElementById("inputbox").files;

  image = URL.createObjectURL(image[0]);

  let nodeJs = document.getElementById("node-js").checked;
  let nextJs = document.getElementById("next-js").checked;
  let react = document.getElementById("react-js").checked;
  let ts = document.getElementById("typescript").checked;

  // validation

  if (projectName === "") {
    alert("Name is still empty!");
  }

  if (startDate > endDate) {
    alert("Date is not correct!");
  }

  if (desc === "") {
    alert("Description empty!");
  }

  const getData = {
    projectName,
    startDate,
    endDate,
    desc,
    image,
    nodeJs,
    nextJs,
    react,
    ts,
  };

  blogs.push(getData);
  renderData();
}

function renderData() {
  document.getElementById("contentProject").innerHTML = "";
  for (let i = 0; i < blogs.length; i++) {
    document.getElementById("contentProject").innerHTML += `
    <div class="item">
            <div class="img"> 
              <img src="${blogs[i].image}" alt="" />
            </div>

            <div class="project-name">
              <h4>${blogs[i].projectName}</h4>
              <p>${getDurations(blogs[i].startDate, blogs[i].endDate)}</p>
            </div>

            <div class="desk">
              <p>${blogs[i].desc}</p>
            </div>
            <div class="icon" id="iconValue">
              ${blogs[i].nodeJs === true ? `<img src="Asset/img/node-js.svg" alt="" />` : ""}
              ${blogs[i].nextJs === true ? `<img src="Asset/img/207px-Nextjs-logo.svg.png" alt="" />` : ""}
              ${blogs[i].react === true ? `<img src="Asset/img/logo-react-svgrepo-com.svg" alt="" />` : ""}
              ${blogs[i].ts === true ? `<img src="Asset/img/typescriptlang-icon.svg" alt="" />` : ""}
            </div>

            <div class="edit">
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>
`;
  }
}

function getDurations(startDates, endDates) {
  const start = new Date(startDates);
  const end = new Date(endDates);
  const getTime = end.getDate() - start.getDate();

  if (getTime > 0) {
    return `Duration: ${getTime} day`;
  } else {
    const mounth = end.getMonth() + 1 - (start.getMonth() + 1);
    if (mounth > 0) {
      return `Duration: ${mounth} Month`;
    } else {
      const year = end.getFullYear() - start.getFullYear();
      if (year > 0) {
        return `Duration: ${year} Year`;
      }
    }
  }
}

console.log(start);

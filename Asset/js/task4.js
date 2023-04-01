// add project

let blogs = [];

function getBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("project").value;
  let startDate = document.getElementById("start").value;
  let endDate = document.getElementById("end").value;
  let desc = document.getElementById("description").value;
  let image = document.getElementById("inputbox").files;
  let tech = [];

  image = URL.createObjectURL(image[0]);

  if (document.getElementById("node-js").checked) {
    tech.push(document.getElementById("node-js").value);
  }
  if (document.getElementById("next-js").checked) {
    tech.push(document.getElementById("next-js").value);
  }
  if (document.getElementById("react-js").checked) {
    tech.push(document.getElementById("react-js").value);
  }
  if (document.getElementById("typescript").checked) {
    tech.push(document.getElementById("typescript").value);
  }

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
    tech,
  };

  blogs.push(getData);
  renderDatas();
}

function renderDatas() {
  document.getElementsByClassName("flex-box").innerHTML = "";
  for (let i = 0; i < blogs.length; i++) {
    document.getElementsByClassName("flex-box").innerHTML = `
    <div class="item">
            <div class="img">
              <img src="${blogs[i].image}" alt="" />
            </div>

            <div class="project-name">
              <h4>${blogs[i].projectName}</h4>
              <p>durasi: 3 bulan</p>
            </div>

            <div class="desk">
              <p>${blogs[i].desc}</p>
            </div>

            <div class="icon">
              <img src="Asset/img/logo-file.png" alt="" />
              <img src="Asset/img/logo-file.png" alt="" />
              <img src="Asset/img/logo-file.png" alt="" />
              <img src="Asset/img/logo-file.png" alt="" />
            </div>

            <div class="edit">
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>`;
  }
}

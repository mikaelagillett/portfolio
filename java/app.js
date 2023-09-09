function projectImageHover() {
  project.innerHTML = `<div class="project-description">
            <p>description of project</p>
            <a href="" class="btn">View Site</a>
            <a href="" class="btn">View Source Code</a>
          </div>`;
}

let project = document.querySelectorAll(`.project`);
project.addEventListener("mouseover", projectImageHover);

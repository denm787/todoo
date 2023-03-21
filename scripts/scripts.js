const inProgress = [];
const finished = [];

function renderInProgress() {
    let html = ``;
    for (let index in inProgress) {
        html = `${html}
        <div>${inProgress[index]}
            <button onclick="markAsFinished(${index})">
                Finished
            </button>
        </div>`
    }
    document.getElementById('inProgressTasks').innerHTML = html;
}

function markAsFinished(index) {
    const finishedTask = inProgress.splice(index, 1);
    finished.push(finishedTask);
    renderInProgress();
    renderFinished();
}

function renderFinished() {
    let html = ``;
    for (let item of finished) {
        html = `${html}<div>${item}</div>`
    }
    document.getElementById('finishedTasks').innerHTML = html;
}

function addTodo() {
    const text = document.getElementById('newItem').value;
    inProgress.push(text);
    renderInProgress();
}

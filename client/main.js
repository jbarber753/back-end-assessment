const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.getElementById(`fortune-button`)
const goalsForm = document.getElementById(`goals-form`)
const rpsButtons = document.getElementsByClassName(`rps`)
const madLibForm = document.getElementById(`mad-lib-form`)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(`http://localhost:4000/api/fortune/`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getAllGoals = () => {
    axios.get(`http://localhost:4000/api/goals/`)
    .then(res => {
        displayGoals(res.data)
    })
}

const addGoal = body => {
    axios.post('http://localhost:4000/api/goals/', body)
    .then(res => {
        displayGoals(res.data)
    })
}

const displayGoals = arr => {
    document.getElementById(`goals-container`).innerHTML = ''
    for (let i = 0; i < arr.length; i++){
        let goal = document.createElement(`div`)
        goal.innerHTML = `
            <span>${arr[i].text}</span>`
            //Element used to include this button: <button onclick="deleteGoal(${arr[i].id})">Delete goal</Button>
        document.getElementById(`goals-container`).appendChild(goal)
    }
}
//Does not work
// const deleteGoal = id => {
//     axios.delete(`/api/goals/${id}`)
//     .then(res => {
//         displayGoals(res.data)
//     })
// }

const goalSubmit = event => {
    event.preventDefault()
    let body = {
        text: document.getElementById(`goals-text`).value
    }
    addGoal(body)
}

const rpsThrow = event => {
    let body = {
        choice: event.target.id
    }
    getThrow(body)
}

const getThrow = body => {
    axios.post(`http://localhost:4000/api/rockpaperscissors/`, body)
    .then(res => {
        alert(res.data)
    })
}

const getMadLib = body => {
    axios.post(`http://localhost:4000/api/madlib/`, body)
    .then(res => {
        document.getElementById(`mad-lib-container`).innerHTML = res.data
    })
}

const clearInput = () => {
    let inputs = document.getElementsByClassName(`mad-lib-input`);
    for (let i = 0; i < inputs.length; i++){
        inputs[i].value = ''
    }
}

const generateMadLib = event => {
    event.preventDefault()
    let body = {
        person1: document.getElementById(`person-1`).value,
        person2: document.getElementById(`person-2`).value,
        noun1: document.getElementById(`noun-1`).value,
        noun2: document.getElementById(`noun-2`).value,
        noun3: document.getElementById(`noun-3`).value,
        noun4: document.getElementById(`noun-4`).value,
        verb1: document.getElementById(`verb-1`).value,
        noun5: document.getElementById(`noun-5`).value,
        noun6: document.getElementById(`noun-6`).value,
        noun7: document.getElementById(`noun-7`).value,
        verb2: document.getElementById(`verb-2`).value,
        noun8: document.getElementById(`noun-8`).value,
        noun9: document.getElementById(`noun-9`).value,
        adjective1: document.getElementById(`adjective-1`).value,
        adjective2: document.getElementById(`adjective-2`).value,
        place: document.getElementById(`place`).value
    }
    getMadLib(body)
    clearInput()
}

complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener(`click`, getFortune)
goalsForm.addEventListener(`submit`, goalSubmit)
madLibForm.addEventListener(`submit`, generateMadLib)
for (let i = 0; i < rpsButtons.length; i++){
    rpsButtons[i].addEventListener(`click`, rpsThrow)
}
getAllGoals()
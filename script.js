const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const data = {
    run: ['01-16','01-17','01-18','01-19','01-20'],
    food: ['01-16','01-17','01-18'],
    water: ['01-16'],
    journal: [],
    meditate: ['01-16','01-17','01-18']
}

nlwSetup.setData(data)
nlwSetup.load()
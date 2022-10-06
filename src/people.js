const peopleMapper = (firstName, lastName) => {
    return {
        name: firstName,
        surname: lastName,
        company: {
            name: 'Kavak',
        },
        position: 'Software Engineer'
    }
}

const callPeople = (name) => {
    if(name == 'Matias') {
        throw new Error('Matias is not allowed');
    }
    return true;
}

const callPeopleAsync = async (name) => {
    if(name == 'Matias') {
        throw new Error('Matias is not allowed');
    }
    return Promise.resolve(true);
}

module.exports = {
    peopleMapper,
    callPeople,
    callPeopleAsync
}
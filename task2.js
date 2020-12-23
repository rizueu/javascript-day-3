const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if (!error){
            callback(null, month);
        } else {
            callback(new Error('Sorry, data not found!', []));
        }
    }, 4000);
}

const printMonth = (error, month) => {
    if (!error){
        month.map(e => console.log(e));
    } else {
        throw error;
    }
}

getMonth(printMonth);
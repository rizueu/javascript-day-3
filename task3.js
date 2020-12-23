// Program 1
const searchUser = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = ['Rizki', 'Ridho', 'Shafa', 'Mathius', 'Indra', 'Yosef', 'Abby'];
            user.includes(name) ? resolve('User ditemukan!') : reject(new Error('User tidak ditemukan :('));
        }, 1000);
    });
}

// searchUser('rizki').then(res => console.log(res)).catch(err => {throw err});

// Program 2
const ujian = (nilai) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            nilai >= 70 ? resolve('Nilai kamu bagus, tingkatkan lagi belajar kamu ya :)') : reject('Silahkan kamu remedial!');
        }, 1000);
    });
}

// ujian(70).then(res => console.log(res)).catch(err => console.log(err));
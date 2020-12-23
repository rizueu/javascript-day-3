const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
            let cek = dataDay.find(item => item === day);
            cek ? resolve(cek) : reject(new Error('Hari ini bukan hari kerja.'));
        }, 3000)
    })
}

// .then dan .catch
cekHariKerja('Sabtu').then((result) => console.log(result))
                     .catch((err) => console.log(err))
/*
    Sebuah objek Promise memiliki method then dan catch yang masing-masing memiliki fungsi untuk mengolah hasil sukses dan gagal
*/

// .try dan .catch
const kerja = async () => {
    try {
        const res = await cekHariKerja('Senin');
        console.log(res);
    } catch (err) {
        throw err;
    }
}

kerja();

/*
    try atau catch adalah sebuah statement yang bertugas untuk menangani beberapa atau semua kesalahan yang mungkin terjadi dalam satu blok code.
*/
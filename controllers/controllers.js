const db = require('../db/db')
const Mahasiswa = require('../models/mahasiswa')


// * ------------- CONTROLLER

// * controller untuk dapatkan keseluruhan dan render tabel mahasiswa
exports.get = async (req, res, next) => {
    try{
        // * GET semua data dari collection Mahasiswa
        let data = await db.collection('mahasiswa').get()

        //* atur data yang dibutuhkan
        let all_data = []
        data.forEach(doc => {
            all_data.push({
                id: doc.id,
                ...doc.data()
            })
        })

        // * render dan tampilkan seluruh data mahasiswa
        res.render('table', {
            data: all_data
        })

    } catch (e) {
        if(!e.statusCode){
            e.statusCode = 500
        }
        next(e)
    }
}


// * controller untuk render form input mahasiswa
exports.get_create_mhs = (req, res, next) => {
    res.render('base')
}


// * controller untuk POST data baru mahasiswa
exports.create = async (req, res, next) => {
    try{
        //* buat objek baru data mahasiswa
        const mahasiswa = new Mahasiswa(
            req.body.nama,
            req.body.jk,
            req.body.umur,
                req.body.alamat
        )

        const new_mahasiswa = {...mahasiswa}

        // * tambahkan data baru mahasiswa ke Collection mahasiswa
        await db.collection('mahasiswa').add(new_mahasiswa)

        //* redirect kembali ke halaman tabel
        res.redirect('/')

    } catch (e) {
        if(!e.statusCode){
            e.statusCode = 500
        }
        next(e)
    }
}



//* controller untuk GET 1 data mahasiswa yang ingin diedit -> sehingga bisa isi form untuk edit mahasiswa
//* data mahasiswa didapatkan berdasarkan ID dari mahasiswa
exports.get_mahasiswa = async (req, res, next) => {
    try{
        //* dapatkan 1 data mahasiswa berdasarkan ID-nya
        const single_data = (await db.collection('mahasiswa').doc(req.params.id).get()).data()

        const data = {
            id: req.params.id,
            ...single_data
        }

        // * tampilkan dan render pada form edit
        res.render('base-edit', {
            data: data
        })

    } catch (e) {
        if(!e.statusCode){
            e.statusCode = 500
        }
        next(e)
    }
}




// * controller untuk POST perubahan data mahasiswa
exports.update = async (req, res, next) => {
    try{

        //* GET 1 data yang di Edit
        const id = req.body.id
        const data_edit = (await db.collection('mahasiswa').doc(id).get()).data()

        //* Ubah data mahasiswa berdasarkan form inptu terbaru
        data_edit.nama = req.body.nama
        data_edit.jk = req.body.jk
        data_edit.umur = req.body.umur
        data_edit.alamat = req.body.alamat

        //* simpan data ke database
        await db.collection('mahasiswa').doc(id).update(data_edit)

        //* redirect lagi setelah berhasil ke tabel utama
        res.redirect('/')

    } catch (e) {
        if(!e.statusCode){
            e.statusCode = 500
        }
        next(e)
    }
}




// * controller untuk delete mahasiswa berdasarkan ID-nya
exports.delete = async (req, res, next) => {
    try{
        //* ambil id
        const id = req.body.id
        const data = (await db.collection('mahasiswa').doc(id).get()).data()


        //* hapus data terkait berdasarkan ID yang diinputkan
        await db.collection('mahasiswa').doc(id).delete()

        //* kembali ke halaman utama tabel
        res.redirect('/')

    } catch (e) {
        if(!e.statusCode){
            e.statusCode = 500
        }
        next(e)
    }
}
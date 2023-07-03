const router = require('express').Router()
const mhs_controller = require('../controllers/controllers')

router.get('/', mhs_controller.get)

router.get('/create-mahasiswa', mhs_controller.get_create_mhs)

router.post('/create-mahasiswa', mhs_controller.create)

router.get('/update-mahasiswa/:id', mhs_controller.get_mahasiswa)

router.post('/update-mahasiswa', mhs_controller.update)

router.post('/delete-mahasiswa', mhs_controller.delete)

module.exports = router
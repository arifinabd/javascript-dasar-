function nestedObject() {
    var mahasiswa = {
        nama : 'arifin',
        ipk : {
            semester1 : 3.5,
            semester2 : 3.6,
            semester3 : 3.3,
            semester4 : 3.1,
        }
    }
    console.log(mahasiswa.ipk.semester3)
}

nestedObject()
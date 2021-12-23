function panggilObject() {
    var mahasiswa = {
        nama : 'suep',
        umur : 23,
        jurusan : 'teknik mesin',
        semester : 8,
    }
    for(var x in mahasiswa){
        console.log(mahasiswa[x])
    }
}

panggilObject()


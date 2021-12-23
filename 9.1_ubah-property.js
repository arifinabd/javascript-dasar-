function panggilObject() {
    var mobil = {
        type : 'sedan',
        harga : 2000000,
        warna : 'putih',
        tahun : [2001, 2002, 2003, 2004],
    }   

    mobil.type = '4wd';
    mobil.type = 30;
    mobil.type = true;
    mobil.harga = 300000;
    mobil.bbm = 'bensin';
    console.log(mobil)
    console.log(mobil.harga)
    console.log(mobil.tahun[3])
}

panggilObject()
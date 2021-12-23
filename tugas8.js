function tugas8() {
    var handPhone = {
        merk : 'samsung',
        type : 'galaxy s50',
        harga : 4000000,
        internal : '128gb',
    }

    console.log(handPhone)

    handPhone.internal = '216gb';
    handPhone.external = 'none';

    console.log(handPhone)
}

tugas8()
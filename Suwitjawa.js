let tanya = true
while (tanya){
    //menagkap pilihan player
    let p = prompt('silahkan pilih pilihannya : Batu, Gunting, Kertas')
    //menagkap pilihan komputer
    //membangkitkan bilangan random
    let komp = Math.random();

    if(komp < 0.34){
        komp = 'Batu'
    } else if(komp >= 0.34 && komp < 0.67){
        komp = 'Gunting'
    } else{
        komp = "Kertas"
    }
    let hasil = ''
    //menentukan rule
    if (p == komp){
        hasil = 'Seri'
    } else if(p == 'Batu'){
        // if(komp == "Gunting"){
        //     hasil ='Menang'
        // }else{
        //     hasil = 'Kalah'
        // }
        hasil = (komp == 'Gunting') ? 'Menag' : 'Kalah'
    } else if (p == 'Gunting'){
        // if(komp == 'kerta'){
        //     hasil ='Menang'
        // }else{
        //     hasil ='Kal ah'
        // }
        hasil = (komp == 'kertas') ? 'Kalah' : 'Menag'
    }else if (p == 'kertas'){
        hasil = (komp == 'Batu') ? 'Menag' : 'Kalah'
    } else {
        hasil ='memasukan pilihan yang salah'
    }
    //menampilkan hasil
    alert ('kamu Memilih : '+ p + ' dan Komputer memilih ' + komp +'\nMaka Hasilnya : kamu '+ hasil)
    tanya = confirm('lagih?')
}

alert('terima kasih sudah bermain')

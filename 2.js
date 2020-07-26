function solution(N, users) {

    var answer = [];
    var arraySementara = [];
    var arrayScore = [];
    var arrayScoreTwo = [];
    var antiGlobalArray = [];

    users.forEach((a) => {
      if(a <= N){
        arraySementara.push(a); //Akan membuat array cadangan yang akan dipakai di kode selanjutnya
      }
    })

    antiGlobalArray.push(users.length);

    for(var i=1;i<=N;i++){
      var arrayJumlah = arraySementara.filter(x => x==i).length;
      var kurangJumlah = antiGlobalArray-arrayJumlah;
      antiGlobalArray.pop();
      antiGlobalArray.push(kurangJumlah); //Karena tidak boleh menggunakan Global Variabel. Maka saya akan memanggil pop dan push untuk menentukan sisa pemain pada setiap stage
      var jumlahSementaraPerPenyebut = kurangJumlah+arrayJumlah;
      arrayScore.push(arrayJumlah/jumlahSementaraPerPenyebut); //Array Score yang akan di sort
      arrayScoreTwo.push(arrayJumlah/jumlahSementaraPerPenyebut); //Ini adalah array Score murni yang tidak akan di sorting. Mengapa? karena pada kode selanjutnya kita akan melihat perubahan yang terjadi pada Array Score murni dan Array Score yang sudah di sort.
    }
    
    //Score pada Array akan diurutkan
    arrayScore.sort(function(a,b){return b-a});

    //Setelah Score Array diurutkan maka Array stage akan kita urutkan sesuai dengan perpindahan pada Score Array sebelumnya 
    arrayScore.forEach((a,b) => {
      answer.push(arrayScoreTwo.indexOf(a)+1);
      arrayScoreTwo[arrayScoreTwo.indexOf(a)] = ""; //Pada Item yang duplikat nilainya akan kita ubah, karena jika tidak akan menghasilkan stage double seperti: 3,3,2,1,5. Sedangkan perintah dari test adalah mengurutkan dari paling kecil jika terjadi sama, maka hasilnya akan 3,4,2,1,5.
    })

    return answer;
}

console.log(solution(5, [2,1,2,6,2,4,3,3]));

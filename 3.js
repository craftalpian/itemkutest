function solution(relation) {
  var answer = 0;
  var arrayPerbandingan = [];
  var isDuplicate = []; //Apakah ada duplicate

  for (var i = 0; i < relation[0].length; i++) {
    relation.forEach((a, b) => {
      var arrayPlusItem = arrayPerbandingan[b]; //Mengambil item array sebelumnya
      if (typeof arrayPlusItem == 'undefined') {
        arrayPlusItem = ''; //Apabila item array sebelumnya tidak ada/undefined, maka akan diubah manjadi string kosong 
      }
      arrayPerbandingan[b] = arrayPlusItem + a[i];

      if (arrayPerbandingan.filter(x => x == arrayPlusItem + a[i]).length == 1) {
        if (b == relation.length - 1) {
          //Ini kode mengcek apakah dia berada di item terakhir? Jika iya makan akan dicek, apakah item item yang berada di array tersebut terdapat duplikasi atau tidak? Jika ada maka item sebelumnya akan digabungkan dengan item selanjutnya hingga tidak ada yang duplicate alias itemnya unik semua, yang sesuai candidate keys
          if (isDuplicate.indexOf(1) == -1) {
            arrayPerbandingan = [];
            answer += 1; //Menambahkan 1 candidate keys
          } else {
            isDuplicate = [];
            arrayPerbandingan = [];
            answer += 1; //Menambahkan 1 candidate keys
          }
        }
      } else {
        isDuplicate.push(1); //Jika ditemukan duplikasi item pada suatu array maka akan disimpan pada array isDuplicate
      }
    });
  }
  return answer;
}

console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]));

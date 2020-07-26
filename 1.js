function solution(record) {

  var answer = [];
  var userId = [];
  var userName = [];

  record.forEach(pilahData); //Data akan dipilah dulu
  record.forEach(resultFinal); //Setelah data dipilah maka siap untuk di kembalikan/return ke pemanggil dengan format yang diberikan pada google form

  function pilahData(a) {
    var pecahData = a.split(" ");
    if (pecahData[0] == "Enter") {
      //Pada bagian ini akan mengecek dan memastikan nama dengan user id sesuai
      if (userId.indexOf(pecahData[1]) == -1) {
        userId.push(pecahData[1]);
        userName.push(pecahData[2]);
      } else {
        var posisiArray = userId.indexOf(pecahData[1]);
        userName[posisiArray] = pecahData[2];
      }
    } else if (pecahData[0] == "Change") {
      //Dibagian ini akan mengganti apabila ada perintah Change
      var posisiArray = userId.indexOf(pecahData[1]);
      userName[posisiArray] = pecahData[2];
    }
  }

  function resultFinal(a) {
    var pecahData = a.split(" "); //Memecahkan setiap spasi yang ada
    if (pecahData[0] == "Enter") {
      //Memasukan ke array answer sesuai perintahnya. Pada bagian ini perintahnya merupakan Enter
      var posisiArray = userId.indexOf(pecahData[1]);
      answer.push(userName[posisiArray] + " came in.");
    } else if (pecahData[0] == "Leave") {
      //Pada bagian ini untuk perintah keluar
      var posisiArray = userId.indexOf(pecahData[1]);
      answer.push(userName[posisiArray] + " has left.");
    }
  }

  return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))

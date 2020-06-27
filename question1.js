const solution = record => {
  let answer = [];
  let temporary = [];

  record.map(item => {
    let splitted = item.split(' ');

    if (splitted[0] === 'Enter') {
      temporary.map((temp, index) => {
        if (temporary[index].uid === splitted[1]) {
          temporary[index].username = splitted[2];
        }
      });
      temporary.push({
        username: splitted[2],
        word: 'came in.',
        uid: splitted[1],
      });
    }

    if (splitted[0] === 'Leave') {
      temporary.map((temp, index) => {
        if (temp.uid === splitted[1]) {
          temporary.push({
            username: temp.username,
            word: 'has left.',
            uid: splitted[1],
          });
        }
      });
    }

    if (splitted[0] === 'Change') {
      let check = false;
      temporary.map(item => {
        if (item.uid === splitted[1]) {
          if (item.word === 'has left.') {
            check = false;
          } else if (item.word === 'came in.') {
            check = true;
          }
        }
      });
      console.log(check, splitted);
      if (check) {
        temporary.map((item, index) => {
          if (temporary[index].uid === splitted[1]) {
            temporary[index].username = splitted[2];
          }
        });
      }
    }
  });

  temporary.map(item => {
    answer.push(item.username + ' ' + item.word);
  });

  return answer;
};

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);

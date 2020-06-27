const solution = (N, users) => {
  const answer = [];
  let player = users.length;
  let temporary = [];

  for (let i = 1; i <= N; i++) {
    let counter = 0;
    users.map(user => {
      if (user === i) {
        counter++;
      }
    });

    temporary.push({
      stage: i,
      rate: counter / player,
    });

    player -= counter;
  }
  let swap;

  do {
    swap = false;
    for (let i = 0; i < temporary.length - 1; i++) {
      if (temporary[i].rate < temporary[i + 1].rate) {
        let log = temporary[i];
        temporary[i] = temporary[i + 1];
        temporary[i + 1] = log;
        swap = true;
      }
    }
  } while (swap);

  temporary.forEach(e => {
    answer.push(e.stage);
  });

  return answer;
};

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));

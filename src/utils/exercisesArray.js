export function createArrayOfExercises({
  order,
  exercise,
  seriesAndRepetitions,
  tempo,
  rest,
}) {
  const exercisesArr = [];

  exercisesArr.push({
    order,
    exercise,
    seriesAndRepetitions,
    tempo,
    rest,
  });

  return exercisesArr;
}

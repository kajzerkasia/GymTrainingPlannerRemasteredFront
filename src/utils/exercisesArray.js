export function createArrayOfExercises({order, exercise, seriesAndRepetitions, tempo, rest }) {

    const exercisesArr = [];

    for (let i = 0; i < 1; i++) {
        exercisesArr.push({
            order,
            exercise,
            seriesAndRepetitions,
            tempo,
            rest,
        });
    }

    return exercisesArr;
}
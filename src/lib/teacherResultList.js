
export const teacherResultList = [
  {
    result_id: 0,
    quiz_id: 102,
    course_id: 15,
    number_of_students: 10,
    av_score: 76
  },
  {
    result_id: 1,
    quiz_id: 102,
    course_id: 14,
    number_of_students: 10,
    av_score: 50
  }
]

export const oneResult = {
  result_id: 0,
    quiz_id: 102,
    course_id: 15,
    number_of_students: 10,
    av_score: 76
  }

export const teacherResponses = [
  {
    response_id: 0,
    course_id: 14,
    quiz_id: 102,
    student_id: 123,
    quizResponse: {
      1: [1,2],
      2: [3],
      3: [4]
    },
    score: 56,
    max_score: 100
  },
  {
    response_id: 1,
    course_id: 14,
    quiz_id: 102,
    student_id: 124,
    quizResponse: {
      1: [3],
      2: [1, 2],
      3: [1]
    },
    score: 60,
    max_score: 100
  },
  {
    response_id: 2,
    course_id: 14,
    quiz_id: 102,
    student_id: 125,
    quizResponse: {
      1: [2, 3],
      2: [1],
      3: [1]
    },
    score: 30,
    max_score: 100
  },
]

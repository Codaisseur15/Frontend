import { SUBMIT, SUBMIT_FAILED } from './types'
import { submitForm } from './submitButton'


describe('SubmitForm(courseId, studentId, quizId, quizResponse)', () => {
  const action = submitForm()

  it('clicking it', () => {
    expect(action.type).toEqual(SUBMIT)
  })
  describe('its payload', () => {
    it('sends result to backend', () => {
      expect(action.payload).toEqual(result)
    })
})
})

class AddStudentInterviewRefToAnswers < ActiveRecord::Migration[6.0]
  def change
    add_reference :answers, :student_interview, null: false, foreign_key: true
  end
end

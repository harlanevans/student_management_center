class RemoveStudentFromAnswers < ActiveRecord::Migration[6.0]
  def change
    remove_reference :answers, :student, null: false, foreign_key: true
  end
end

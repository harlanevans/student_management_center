class AddStudentRefToAnswers < ActiveRecord::Migration[6.0]
  def change
    add_reference :answers, :student, null: false, foreign_key: true
  end
end

class ChangeAnswerToStudentAnswer < ActiveRecord::Migration[6.0]
  def change
    rename_column :answers, :answer, :student_answer
  end
end

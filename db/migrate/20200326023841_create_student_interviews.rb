class CreateStudentInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :student_interviews do |t|
      t.belongs_to :interview, null: false, foreign_key: true
      t.belongs_to :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end

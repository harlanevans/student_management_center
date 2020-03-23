class RemoveCourseRefFromTasks < ActiveRecord::Migration[6.0]
  def change
    remove_reference :tasks, :course, index: true, foreign_key: true
  end
end

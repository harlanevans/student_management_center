class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :last_name
      t.integer :technical
      t.integer :effort
      t.integer :social
      t.belongs_to :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end

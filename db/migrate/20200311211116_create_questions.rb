class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :type
      t.string :answer
      t.belongs_to :interview, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.text :body
      t.string :author
      t.string :type
      t.belongs_to :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end

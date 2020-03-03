class CreateCheckins < ActiveRecord::Migration[6.0]
  def change
    create_table :checkins do |t|
      t.text :feeling
      t.text :technical
      t.text :groups
      t.text :qcs
      t.text :feedback
      t.belongs_to :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end

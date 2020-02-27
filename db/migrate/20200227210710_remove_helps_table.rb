class RemoveHelpsTable < ActiveRecord::Migration[6.0]
  def change
    drop_table :helps
  end
end

class AddTimeToCheckins < ActiveRecord::Migration[6.0]
  def change
    add_column :checkins, :time_spent, :text
    add_column :checkins, :status, :string
  end
end

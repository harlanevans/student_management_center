class RemoveTypeFromQuestions < ActiveRecord::Migration[6.0]
  def change
    remove_column :questions, :type, :string
    add_column :questions, :qtype, :string
  end
end

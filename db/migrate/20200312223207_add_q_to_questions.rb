class AddQToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :q, :string
  end
end

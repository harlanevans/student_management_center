class ChangeAnswerToText < ActiveRecord::Migration[6.0]
  def change
    change_column :answers, :answer, :text
  end
end

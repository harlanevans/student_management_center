class RenameTypeToTag < ActiveRecord::Migration[6.0]
  def change
    rename_column :comments, :type, :tag
  end
end

class AddPhotoToAccountProfile < ActiveRecord::Migration
  def change
    add_column :account_profiles, :image, :string
    add_column :account_profiles, :string, :string
  end
end

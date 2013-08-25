class AddPhotoToAccountProfile < ActiveRecord::Migration
  def change
    add_column :account_profiles, :photo, :string
  end
end

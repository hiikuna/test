class CreateAccountProfiles < ActiveRecord::Migration
  def change
    create_table :account_profiles do |t|
      t.belongs_to :user, index: true
      t.belongs_to :profession, index: true
      t.string :zip_code
      t.float :lat,limit: 30
      t.float :lng,limit: 30
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone_number

      t.timestamps
    end
  end
end

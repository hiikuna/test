class CreateAccountProfiles < ActiveRecord::Migration
  def change
    create_table :account_profiles do |t|
      t.belongs_to :user, index: true
      t.string :zip_code
      t.float :lat,limit: 30
      t.float :lng,limit: 30
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone_number
      t.time :mon_start
      t.time :mon_end
      t.time :tue_start
      t.time :tue_end
      t.time :wed_start
      t.time :wed_end
      t.time :thu_start
      t.time :thu_end
      t.time :fri_start
      t.time :fri_end
      t.time :sat_start
      t.time :sat_end
      t.time :sun_start
      t.time :sun_end

      t.timestamps
    end
  end
end

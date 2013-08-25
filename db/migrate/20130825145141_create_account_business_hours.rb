class CreateAccountBusinessHours < ActiveRecord::Migration
  def change
    create_table :account_business_hours do |t|
      t.string :day
      t.time :start_at
      t.time :end_at
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end

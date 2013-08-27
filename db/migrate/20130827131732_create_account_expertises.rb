class CreateAccountExpertises < ActiveRecord::Migration
  def change
    create_table :account_expertises do |t|
      t.belongs_to :user, index: true
      t.belongs_to :expertise, index: true

      t.timestamps
    end
  end
end

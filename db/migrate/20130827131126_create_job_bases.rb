class CreateJobBases < ActiveRecord::Migration
  def change
    create_table :job_bases do |t|
      t.string :name
      t.string :ancestry
      t.string :type

      t.timestamps
    end
  end
end

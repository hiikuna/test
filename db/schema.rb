# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20130827132649) do

  create_table "account_business_hours", force: true do |t|
    t.string   "day"
    t.time     "start_at"
    t.time     "end_at"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "account_business_hours", ["user_id"], name: "index_account_business_hours_on_user_id", using: :btree

  create_table "account_expertises", force: true do |t|
    t.integer  "user_id"
    t.integer  "expertise_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "account_expertises", ["expertise_id"], name: "index_account_expertises_on_expertise_id", using: :btree
  add_index "account_expertises", ["user_id"], name: "index_account_expertises_on_user_id", using: :btree

  create_table "account_profiles", force: true do |t|
    t.integer  "user_id"
    t.integer  "profession_id"
    t.string   "zip_code"
    t.float    "lat"
    t.float    "lng"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "phone_number"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "photo"
  end

  add_index "account_profiles", ["profession_id"], name: "index_account_profiles_on_profession_id", using: :btree
  add_index "account_profiles", ["user_id"], name: "index_account_profiles_on_user_id", using: :btree

  create_table "account_skills", force: true do |t|
    t.integer  "user_id"
    t.integer  "expertise_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "account_skills", ["expertise_id"], name: "index_account_skills_on_expertise_id", using: :btree
  add_index "account_skills", ["user_id"], name: "index_account_skills_on_user_id", using: :btree

  create_table "account_users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "account_users", ["email"], name: "index_account_users_on_email", unique: true, using: :btree
  add_index "account_users", ["reset_password_token"], name: "index_account_users_on_reset_password_token", unique: true, using: :btree

  create_table "job_bases", force: true do |t|
    t.string   "name"
    t.string   "ancestry"
    t.string   "type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

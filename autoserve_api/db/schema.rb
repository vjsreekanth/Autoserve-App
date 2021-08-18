# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_18_114739) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "service_requests", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "start_date"
    t.string "vehicle_type"
    t.string "make"
    t.string "model"
    t.string "trim"
    t.string "year"
    t.string "vin"
    t.string "status", default: "pending"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_service_requests_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone"
    t.boolean "is_admin", default: false
    t.boolean "is_mechanic", default: false
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "vehicles", force: :cascade do |t|
    t.string "vehicle_type"
    t.string "make"
    t.string "model"
    t.string "trim"
    t.string "year"
    t.string "vin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_vehicles_on_user_id"
  end

  add_foreign_key "service_requests", "users"
  add_foreign_key "vehicles", "users"
end

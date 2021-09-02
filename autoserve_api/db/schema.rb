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

ActiveRecord::Schema.define(version: 2021_08_19_182329) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.string "status", default: "pending"
    t.datetime "start_time", null: false
    t.bigint "customer_id", null: false
    t.bigint "mechanic_id", null: false
    t.bigint "service_offer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id"], name: "index_appointments_on_customer_id"
    t.index ["mechanic_id"], name: "index_appointments_on_mechanic_id"
    t.index ["service_offer_id"], name: "index_appointments_on_service_offer_id"
  end

  create_table "service_offers", force: :cascade do |t|
    t.text "comment"
    t.datetime "start_date"
    t.datetime "delivery_date"
    t.float "estimate_price"
    t.string "status", default: "active"
    t.bigint "mechanic_id", null: false
    t.bigint "customer_id", null: false
    t.bigint "service_request_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id"], name: "index_service_offers_on_customer_id"
    t.index ["mechanic_id"], name: "index_service_offers_on_mechanic_id"
    t.index ["service_request_id"], name: "index_service_offers_on_service_request_id"
  end

  create_table "service_requests", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "appointment_date"
    t.string "status", default: "pending"
    t.bigint "customer_id", null: false
    t.bigint "vehicle_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id"], name: "index_service_requests_on_customer_id"
    t.index ["vehicle_id"], name: "index_service_requests_on_vehicle_id"
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
    t.bigint "customer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id"], name: "index_vehicles_on_customer_id"
  end

  add_foreign_key "appointments", "service_offers"
  add_foreign_key "appointments", "users", column: "customer_id"
  add_foreign_key "appointments", "users", column: "mechanic_id"
  add_foreign_key "service_offers", "service_requests"
  add_foreign_key "service_offers", "users", column: "customer_id"
  add_foreign_key "service_offers", "users", column: "mechanic_id"
  add_foreign_key "service_requests", "users", column: "customer_id"
  add_foreign_key "service_requests", "vehicles"
  add_foreign_key "vehicles", "users", column: "customer_id"
end

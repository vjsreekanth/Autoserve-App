class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.string :status, default: "pending"
      t.datetime :start_time, null: false
      t.references :customer, null: false, index: true, foreign_key: {to_table: :users}
      t.references :mechanic, null: false, index: true, foreign_key: {to_table: :users}
      t.references :service_offer, null: false, foreign_key: true

      t.timestamps
    end

  end
end

class CreateServiceRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :service_requests do |t|
      t.string :title
      t.text :description
      t.datetime :start_date
      t.string :vehicle_type
      t.string :make
      t.string :model
      t.string :trim
      t.string :year
      t.string :vin
      t.string :status, default: "pending"

      t.timestamps
    end
  end
end

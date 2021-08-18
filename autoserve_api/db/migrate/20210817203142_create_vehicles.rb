class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.string :vehicle_type
      t.string :make
      t.string :model
      t.string :trim
      t.string :year
      t.string :vin

      t.timestamps
    end
  end
end

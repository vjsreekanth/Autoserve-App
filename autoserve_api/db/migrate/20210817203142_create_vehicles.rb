class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.string :vehicle_type
      t.string :make
      t.string :model
      t.string :trim
      t.string :year
      t.string :vin
      t.references :customer, null: false, index: true, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end

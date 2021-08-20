class CreateServiceRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :service_requests do |t|
      t.string :title
      t.text :description
      t.datetime :appointment_date
      t.string :status, default: "pending"
      t.references :customer, null: false, index: true, foreign_key: {to_table: :users}
      t.references :vehicle, null: false, foreign_key: true

      t.timestamps
    end
  end
end

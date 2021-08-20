class CreateServiceOffers < ActiveRecord::Migration[6.1]
  def change
    create_table :service_offers do |t|
      t.text :comment
      t.datetime :start_date
      t.datetime :delivery_date
      t.float :estimate_price
      t.string :status, default: "active"
      t.references :mechanic, null: false, index: true, foreign_key: {to_table: :users}
      t.references :service_request, null: false, foreign_key: true

      t.timestamps
    end
  end
end

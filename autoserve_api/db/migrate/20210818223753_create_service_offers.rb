class CreateServiceOffers < ActiveRecord::Migration[6.1]
  def change
    create_table :service_offers do |t|
      t.text :comment
      t.datetime :start_date
      t.datetime :delivery_date
      t.float :estimate_price
      t.string :status, default: "pending"

      t.timestamps
    end
  end
end

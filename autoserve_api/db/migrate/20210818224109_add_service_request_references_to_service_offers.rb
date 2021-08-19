class AddServiceRequestReferencesToServiceOffers < ActiveRecord::Migration[6.1]
  def change
    add_reference :service_offers, :service_request, null: false, foreign_key: true
  end
end

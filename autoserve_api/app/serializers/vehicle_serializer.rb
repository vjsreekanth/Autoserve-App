class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :title, :vehicle_type, :make, :model, :year, :vin, :trim, :customer_id

end

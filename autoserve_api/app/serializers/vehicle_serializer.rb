class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :title, :vehicle_type, :make, :model, :year, :vin, :trim

  belongs_to :user, key: :owner


end

class ServiceRequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :appointment_date, :status

end

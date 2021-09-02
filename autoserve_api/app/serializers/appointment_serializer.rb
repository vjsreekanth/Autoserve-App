class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :customer, :status
  belongs_to :customer
  belongs_to :mechanic


end

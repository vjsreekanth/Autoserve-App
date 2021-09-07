class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :customer_id, :status, :mechanic_id
 



end

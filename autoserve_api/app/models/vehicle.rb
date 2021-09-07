class Vehicle < ApplicationRecord
    belongs_to :customer, :class_name => "User"
    has_many :service_requests

    validates :vehicle_type, presence: true
    validates :make, presence: true
    validates :model, presence: true
    validates :year, presence: true
    validates :vin, uniqueness: true

 

   def title
    "#{make} #{model} #{trim} #{year}".strip
   end

end

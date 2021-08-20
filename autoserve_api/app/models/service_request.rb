class ServiceRequest < ApplicationRecord
    belongs_to :customer, :class_name => "User"
    belongs_to :vehicle
    has_many :service_offers

    # validations
    validates :title, presence: true
    validates :description, presence: true
    validates :appointment_date, presence: true
    
    
    # validates_inclusion_of(:status, in: ["approved", "pending", "denied"])

end

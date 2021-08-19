class ServiceRequest < ApplicationRecord
    belongs_to :user
    has_many :service_offers

    # validations
    validates :title, presence: true
    validates :description, presence: true
    validates :start_date, presence: true
    validates :vehicle_type, presence: true
    validates :make, presence: true
    validates :model, presence: true
    validates :year, presence: true
    
    # validates_inclusion_of(:status, in: ["approved", "pending", "denied"])

end

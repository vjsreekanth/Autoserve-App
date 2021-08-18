class Vehicle < ApplicationRecord
    belongs_to :user

    validates :vehicle_type, presence: true
    validates :make, presence: true
    validates :model, presence: true, uniqueness: true
    validates :year, presence: true
    validates :vin, uniqueness: true

   private

   def title
    "#{make} #{model} #{trim} #{year}".strip
   end

end

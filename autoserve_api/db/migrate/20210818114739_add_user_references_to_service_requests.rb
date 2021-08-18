class AddUserReferencesToServiceRequests < ActiveRecord::Migration[6.1]
  def change
    add_reference :service_requests, :user, null: false, foreign_key: true
  end
end

class User < ApplicationRecord
  has_many :tweets, dependent: :destroy

  # devise :database_authenticatable,
  #        :jwt_authenticatable,
  #        jwt_revocation_strategy: JWTBlacklist
end

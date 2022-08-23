class CreateCountries < ActiveRecord::Migration[6.1]
  def change
    create_table :countries do |t|
      t.string :name
      t.float :pop_growth
      t.string :flag

      t.timestamps
    end
  end
end

class CreateSubjects < ActiveRecord::Migration[5.1]
   def change
      create_table :subjects do |t|
         t.column :name, :string
         t.timestamps
      end

      Subject.create :name => "Physics"
      Subject.create :name => "Mathematics"
      Subject.create :name => "Geography"
   end
end

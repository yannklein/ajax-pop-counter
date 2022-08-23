puts "Destroy countries"
Country.destroy_all

puts "Create countries"
Country.create!(
  name: "France",
  pop_growth: 1.5,
  flag: "🇫🇷"
)

Country.create!(
  name: "New Zealand",
  pop_growth: 1.3,
  flag: "🇳🇿"
)

Country.create!(
  name: "India",
  pop_growth: 6,
  flag: "🇮🇳"
)

Country.create!(
  name: "Japan",
  pop_growth: 0.3,
  flag: "🇯🇵"
)

Country.create!(
  name: "Nigeria",
  pop_growth: 10,
  flag: "🇳🇬"
)

puts "done"
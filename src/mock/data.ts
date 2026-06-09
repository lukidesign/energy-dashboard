export interface Station {
  status: string
  name: string
  power: string
  today: string
  total: string
}

export const stations: Station[] = [
  { status: '在线', name: '235朱士红', power: '463.00 W', today: '250.70 kWh', total: '194.52 MWh' },
  { status: '在线', name: '225韩腾晓', power: '1.23 kW', today: '178.80 kWh', total: '134.32 MWh' },
  { status: '在线', name: '225翟纪彬', power: '987.00 W', today: '215.60 kWh', total: '172.05 MWh' },
  { status: '在线', name: '225田欢雨', power: '1.22 kW', today: '246.80 kWh', total: '179.89 MWh' },
  { status: '在线', name: '225王洋', power: '1.27 kW', today: '269.80 kWh', total: '185.92 MWh' },
  { status: '在线', name: '225马增学', power: '642.00 W', today: '181.50 kWh', total: '133.84 MWh' },
  { status: '在线', name: '235李军山', power: '557.00 W', today: '197.40 kWh', total: '127.08 MWh' },
  { status: '在线', name: '225宋君祥', power: '1.45 kW', today: '248.10 kWh', total: '183.08 MWh' }
]

export const barData = {
  日: { unit: 'MWh', x: Array.from({ length: 30 }, (_, i) => i + 1),
        y: [5.4, 5.4, 4.1, 5.2, 4.5, 1.3, 5.4, ...Array(23).fill(0)] },
  月: { unit: 'MWh', x: Array.from({ length: 12 }, (_, i) => i + 1),
        y: [120, 135, 160, 180, 210, 190, 220, 205, 170, 150, 130, 110] },
  年: { unit: 'GWh', x: [2021, 2022, 2023, 2024, 2025],
        y: [1.2, 2.1, 3.0, 3.8, 4.4] }
}

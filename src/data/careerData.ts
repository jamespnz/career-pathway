export type Lang = 'en' | 'jp';

export interface EmployerRow {
  employers: string;
  level4: string;
  level5: string;
  foodTech: string;
  nzExperience: string;
  whyNZ: string;
}

export const employerImpact: EmployerRow[] = [
  {
    employers: 'Park Hyatt, Ritz-Carlton, Hilton, Marriott',
    level4: 'Medium',
    level5: 'High',
    foodTech: 'Medium',
    nzExperience: 'High',
    whyNZ: 'Retail patisserie experience shows decorative skill + customer service; hotel kitchens value reliability + bilingual ability.',
  },
  {
    employers: 'Isetan, Takashimaya, Tokyu',
    level4: 'Medium',
    level5: 'High',
    foodTech: 'Medium',
    nzExperience: 'High',
    whyNZ: 'NZ boutique patisserie experience maps directly to entremets, glazing, chocolate work.',
  },
  {
    employers: 'Maison Kayser, PAUL, Gontran Cherrier',
    level4: 'Medium',
    level5: 'High',
    foodTech: 'Medium',
    nzExperience: 'High',
    whyNZ: 'NZ artisan bakery experience proves Western technique; Level 5 + experience = ideal candidate.',
  },
  {
    employers: 'Disney, USJ, Pokémon Café, Kirby Café',
    level4: 'Low',
    level5: 'Medium',
    foodTech: 'Low–Medium',
    nzExperience: 'High',
    whyNZ: 'NZ customer-facing bakery work + bilingual ability = perfect fit for themed dessert production.',
  },
  {
    employers: 'Levain, Burdigala, Pelican Bakery',
    level4: 'Medium',
    level5: 'Medium',
    foodTech: 'Low',
    nzExperience: 'High',
    whyNZ: 'NZ artisan bakery experience is directly relevant; employers value hands-on craft.',
  },
  {
    employers: 'Yamazaki, Pasco, Fuji Baking',
    level4: 'Low',
    level5: 'Medium',
    foodTech: 'High',
    nzExperience: 'High',
    whyNZ: 'NZ supermarket/hospital/hotel production experience prepares her for batch production + QA roles.',
  },
  {
    employers: '7-Eleven suppliers, Lawson suppliers',
    level4: 'Low',
    level5: 'Medium',
    foodTech: 'High',
    nzExperience: 'High',
    whyNZ: 'NZ institutional/commercial bakery experience aligns with high-volume production workflows.',
  },
  {
    employers: 'Meiji, Morinaga, Lotte',
    level4: 'Low',
    level5: 'Medium',
    foodTech: 'High',
    nzExperience: 'Medium–High',
    whyNZ: 'NZ production experience + Food Tech Diploma = strong QA/R&D candidate.',
  },
];

export interface SalaryRow {
  duration: string;
  qualification: string;
  starting: string;
  after23: string;
  ceiling: string;
}

export const salaryData: SalaryRow[] = [
  {
    duration: '1 year',
    qualification: 'Level 4',
    starting: '¥2.2M–¥2.8M',
    after23: '¥2.6M–¥3.0M',
    ceiling: '¥3.5M–¥4.0M',
  },
  {
    duration: '2 years',
    qualification: 'Level 5',
    starting: '¥2.8M–¥3.6M',
    after23: '¥3.5M–¥4.2M',
    ceiling: '¥5.0M–¥6.0M',
  },
  {
    duration: '3 years',
    qualification: 'Level 5 + Food Tech',
    starting: '¥3.4M–¥4.2M',
    after23: '¥4.2M–¥5.5M',
    ceiling: '¥6.5M–¥7.5M',
  },
  {
    duration: '3 years + fluency',
    qualification: 'Full English fluency',
    starting: '¥3.4M–¥4.2M',
    after23: '¥4.5M–¥5.5M',
    ceiling: '¥7.0M–¥8.0M',
  },
];

export interface DecisionRow {
  label: string;
  oneYear: string;
  twoYear: string;
  threeYear: string;
}

export const decisionMatrix: DecisionRow[] = [
  { label: 'Qualification', oneYear: 'Level 4 Baking', twoYear: 'Level 5 Patisserie', threeYear: 'Level 5 + Food Tech Diploma' },
  { label: 'NZ Work Experience', oneYear: 'None', twoYear: 'Optional', threeYear: 'Retail + Production (3 yrs)' },
  { label: 'English Fluency', oneYear: 'Moderate', twoYear: 'High', threeYear: 'Full fluency (3 yrs NZ)' },
  { label: 'Japan Entry-Level Roles', oneYear: 'Small bakeries, Cafés, Junior hotel kitchen', twoYear: 'Luxury hotels, French bakery chains, Theme parks', threeYear: 'Luxury hotels + QA + R&D, Industrial bakeries, Convenience-store suppliers' },
  { label: 'Japan Mid-Level Roles', oneYear: 'Limited', twoYear: 'Senior patissier, Shift leader', threeYear: 'QA lead, production lead, R&D assistant' },
  { label: 'Japan Management Roles', oneYear: 'Unlikely', twoYear: 'Possible after 6–8 yrs', threeYear: 'Likely after 4–6 yrs' },
  { label: 'Salary Ceiling (Japan)', oneYear: '¥3.5M–¥4.0M', twoYear: '¥5.0M–¥6.0M', threeYear: '¥7.0M–¥8.0M' },
  { label: 'Promotion Speed', oneYear: 'Slow', twoYear: 'Moderate', threeYear: 'Fast' },
  { label: 'Employer Range', oneYear: 'Narrow', twoYear: 'Broad (hotels, patisseries)', threeYear: 'Very broad (hotels, patisseries, QA, R&D, manufacturing)' },
  { label: 'Competitive Advantage', oneYear: 'Low', twoYear: 'Medium', threeYear: 'Very high' },
  { label: 'Lifetime Earnings Impact', oneYear: 'Low', twoYear: 'Medium', threeYear: 'Very high' },
];

export interface RegionInfo {
  name: string;
  jpName: string;
  industries: string[];
  exampleEmployers: string[];
  why: string;
  x: number;
  y: number;
}

export const regions: RegionInfo[] = [
  {
    name: 'Tokyo',
    jpName: '東京',
    industries: ['Hotels', 'Patisseries', 'French chains', 'Anime cafés', 'HQ manufacturing', 'R&D'],
    exampleEmployers: ['Park Hyatt', 'Ritz-Carlton', 'Isetan', 'Takashimaya', 'Maison Kayser', 'Yamazaki HQ'],
    why: 'Largest job market with the widest range of employer categories — from luxury hotels to R&D headquarters.',
    x: 52,
    y: 38,
  },
  {
    name: 'Yokohama',
    jpName: '横浜',
    industries: ['Hotels', 'French chains', 'Industrial baking'],
    exampleEmployers: ['Hilton Yokohama', 'PAUL', 'Fuji Baking'],
    why: 'Major port city with strong industrial baking sector and international hotel presence.',
    x: 53,
    y: 40,
  },
  {
    name: 'Osaka',
    jpName: '大阪',
    industries: ['USJ', 'Hotels', 'French chains', 'Industrial baking'],
    exampleEmployers: ['Universal Studios Japan', 'Hilton Osaka', 'Burdigala', 'Pasco'],
    why: 'Second-largest economy — theme parks, hotels, and large-scale industrial baking.',
    x: 45,
    y: 52,
  },
  {
    name: 'Kyoto',
    jpName: '京都',
    industries: ['Luxury hotels', 'Boutique patisseries'],
    exampleEmployers: ['The Ritz-Carlton Kyoto', 'Levain', 'Pelican Bakery'],
    why: 'Tourism hub with high-end boutique patisseries and luxury hotel demand.',
    x: 47,
    y: 49,
  },
  {
    name: 'Nagoya',
    jpName: '名古屋',
    industries: ['Ghibli Park', 'Industrial baking', 'Convenience-store suppliers'],
    exampleEmployers: ['Ghibli Park', '7-Eleven suppliers', 'Lawson suppliers', 'Yamazaki'],
    why: 'Manufacturing heartland — ideal for Food Tech graduates targeting QA, R&D, and production.',
    x: 50,
    y: 48,
  },
  {
    name: 'Sapporo',
    jpName: '札幌',
    industries: ['Hotels', 'Dairy/confectionery manufacturers'],
    exampleEmployers: ['Hilton Sapporo', 'Meiji', 'Morinaga'],
    why: 'Dairy and confectionery manufacturing hub — strong fit for Food Tech and production skills.',
    x: 42,
    y: 15,
  },
  {
    name: 'Fukuoka',
    jpName: '福岡',
    industries: ['Hotels', 'Anime cafés', 'Industrial baking'],
    exampleEmployers: ['Hilton Fukuoka', 'Pokémon Café', 'Fuji Baking'],
    why: 'Growing food scene with anime cafés and industrial baking — gateway to Kyushu.',
    x: 30,
    y: 62,
  },
];

export interface QualificationRegion {
  qualification: string;
  bestRegions: string[];
  why: string;
}

export const qualificationRegions: QualificationRegion[] = [
  { qualification: 'Level 4', bestRegions: ['Tokyo', 'Osaka'], why: 'Entry-level roles available' },
  { qualification: 'Level 5', bestRegions: ['Tokyo', 'Osaka', 'Kyoto', 'Fukuoka'], why: 'Advanced patisserie + hotels + theme parks' },
  { qualification: 'Food Tech Diploma', bestRegions: ['Nagoya', 'Osaka', 'Tokyo', 'Fukuoka', 'Sapporo'], why: 'Manufacturing, QA, R&D' },
  { qualification: 'NZ Retail Experience', bestRegions: ['Tokyo', 'Kyoto', 'Osaka'], why: 'Decorative patisserie + customer-facing' },
  { qualification: 'NZ Production Experience', bestRegions: ['Nagoya', 'Osaka', 'Tokyo', 'Fukuoka'], why: 'Industrial baking + QA + production' },
  { qualification: 'Full English Fluency', bestRegions: ['Tokyo', 'Osaka', 'Fukuoka'], why: 'International hotels + training roles' },
];

export const salaryChartBars = [
  { label: 'L4 (1yr)', start: 2.5, ceiling: 4.0, color: 'bg-stone-400' },
  { label: 'L5 (2yr)', start: 3.2, ceiling: 6.0, color: 'bg-fern-400' },
  { label: 'L5+Tech (3yr)', start: 3.8, ceiling: 7.5, color: 'bg-fern-600' },
  { label: 'Fluency (3yr NZ)', start: 3.8, ceiling: 8.0, color: 'bg-sakura-500' },
  { label: 'Mid-career (5–7 yrs JP)', start: 4.5, ceiling: 8.0, color: 'bg-sakura-700' },
];

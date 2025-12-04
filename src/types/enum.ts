
import {
  CardColor,
  type CardType,
  type MagicSubtype,
  type Rarity,
  type Symbol,
} from '@/src/types/cards';

export const cardTypes: CardType[] = ['Avatar', 'Magic', 'Life', 'Construct'];
export const magicSubtypes: MagicSubtype[] = [
  'Modification',
  'React',
  'Normal',
  'Land',
];
export const rarities: Rarity[] = [
  'SR',
  'UR',
  'PR',
  'CBR',
  'C',
  'SCR',
  'R',
  'USEC',
];
export const colors: CardColor[] = ['แดง', 'ฟ้า', 'เขียว', 'ม่วง', 'ไม่มีสี'];
export const gems: number[] = [0, 1, 2, 3, 4];
export const keywords: string[] = [
  'จุติ',
  'คำสั่งเสีย',
  'เซ่นไหว้',
  'สอดแนม',
  'ธรณีสูบ',
  'เลือกปฏิบัติ',
  'สามัคคี',
  'โล่มนุษย์',
  'เตะไข่',
  'เทิร์นละครั้ง',
  'ต่อเนื่อง',
  'สั่งใช้',
  'อัตโนมัติ',
  'พอดี',
  'ลูกฮึด',
  'แทงหลัง',
];

export const keywordColors: Record<
  string,
  'blue' | 'purple' | 'red' | 'green'
> = {
  จุติ: 'blue',
  คำสั่งเสีย: 'blue',
  เซ่นไหว้: 'blue',
  สอดแนม: 'purple',
  ธรณีสูบ: 'purple',
  เลือกปฏิบัติ: 'purple',
  สามัคคี: 'red',
  โล่มนุษย์: 'red',
  เตะไข่: 'red',
  เทิร์นละครั้ง: 'green',
  ต่อเนื่อง: 'green',
  สั่งใช้: 'green',
  อัตโนมัติ: 'green',
  พอดี: 'blue',
  ลูกฮึด: 'red',
  แทงหลัง: 'red',
};

export const symbols: Symbol[] = [
  'เทพ',
  'ยักษ์',
  'จอมเวทย์',
  'คน',
  'แมลง',
  'สัตว์',
  'รัททาทุย',
  'นรก',
  'ผี',
  'ปลา',
  'หุ่นยนต์',
  'สิ่งก่อสร้าง',
  'ต่างชาติ',
  'ต้นไม้',
  'เปรต',
  'ฤษี',
  'เอเลี่ยน',
  'กะปอม',
  'สัตว์มหัศจรรย์',
  'ทหาร',
];

export type SortOption = 'name' | 'type' | 'cost' | 'color' | 'gem' | 'keyword' | 'recommended';
export type SortDirection = 'asc' | 'desc';

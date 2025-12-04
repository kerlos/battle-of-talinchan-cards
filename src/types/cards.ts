export interface DeckEntry {
  card: Card;
  quantity: number;
}
export type CardColor = 'แดง' | 'ฟ้า' | 'เขียว' | 'ม่วง' | 'ไม่มีสี';
export type CardType = 'Avatar' | 'Magic' | 'Life' | 'Construct';
export type MagicSubtype = 'Modification' | 'React' | 'Normal' | 'Land';
export type Rarity =
  | 'SR'
  | 'UR'
  | 'PR'
  | 'CBR'
  | 'C'
  | 'SCR'
  | 'R'
  | 'PR'
  | 'USEC';
export type Symbol =
  | 'เทพ'
  | 'ยักษ์'
  | 'จอมเวทย์'
  | 'คน'
  | 'แมลง'
  | 'สัตว์'
  | 'รัททาทุย'
  | 'นรก'
  | 'ผี'
  | 'หุ่นยนต์'
  | 'ปลา'
  | 'สิ่งก่อสร้าง'
  | 'ต่างชาติ'
  | 'ต้นไม้'
  | 'เปรต'
  | 'เอเลี่ยน'
  | 'ฤษี'
  | 'กะปอม'
  | 'สัตว์มหัศจรรย์'
  | 'ทหาร';

export interface BaseCard {
  name: string;
  type: CardType;
  print: string;
  rare: Rarity;
  dropRate?: string;
  soi: number; // ซอย
  customLimit?: number;
  ex?: string;
}

export interface AvatarCard extends BaseCard {
  type: 'Avatar';
  cost: number;
  gem: number;
  power: number;
  symbol: Symbol;
  color?: string; // Card colors: แดง (Red), ฟ้า (Blue), เขียว (Green), ม่วง (gray), etc.
  mainEffect: string;
}

export interface MagicCard extends BaseCard {
  type: 'Magic';
  subtype: MagicSubtype;
  cost: number;
  symbol: Symbol;
  color?: string;
  mainEffect: string;
}

export interface LifeCard extends BaseCard {
  type: 'Life';
  mainEffect: string;
  favorText: string;
}

export interface ConstructCard extends BaseCard {
  type: 'Construct';
  cost: number;
  gem: number;
  power: number;
  symbol: Symbol;
  color?: string;
  mainEffect: string;
}

export type Card = AvatarCard | MagicCard | LifeCard | ConstructCard;

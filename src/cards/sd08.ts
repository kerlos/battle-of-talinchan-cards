import { Card } from '@/src/types/cards';

export const CARDS_SD08: Card[] = [
  {
    name: 'ไพรมอล รัททาทุย',
    type: 'Avatar',
    soi: 3,
    print: 'SD08-001',
    rare: 'UR',
    mainEffect:
      'เทิร์นละครั้ง สั่งใช้ : อัญเชิญ Avatar {symbol รัททาทุย} ที่มี Cost 1 Gem 1 POWER 1 จํานวน 1 ใบ จากใน Deck หรือ นรก เรา ลงบน Avatar Zone ฝ่ายเรา ถ้า อัญเชิญ จาก Deck ให้สับ Deck\nเทิร์นละครั้ง อัตโนมัติ เมื่อ Avatar ใบนี้จะออกจากสนาม เนรเทศ การ์ด {symbol รัททาทุย} ในนรกเรา 5 ใบ : Avatar ใบนี้จะไม่ออกจากสนาม\nสั่งใช้ เมื่อ Avatar ใบนี้โจมตี เซ่นไหว้ Avatar {symbol รัททาทุย} ฝ่ายเรา 1 ใบ : เปลี่ยนสภาพ Avatar ใบนี้เป็นสภาพตื่น',
    cost: 6,
    gem: 2,
    power: 6,
    symbol: 'รัททาทุย',
    color: 'ฟ้า',
    ex: 'Only #1',
  },
  {
    name: 'รัททาทุย พาหะ',
    type: 'Avatar',
    soi: 3,
    print: 'SD08-002',
    rare: 'C',
    mainEffect:
      'อัตโนมัติ เมื่อ Avatar ใบนี้ต่อสู้ : Avatar ที่ต่อสู้กับ Avatar ใบนี้ POWER -1 #สามารถใส่การ์ดใบนี้ใน Deck ได้มากสุด 50 ใบ',
    cost: 1,
    gem: 1,
    power: 1,
    symbol: 'รัททาทุย',
    color: 'ฟ้า',
    customLimit: 50,
  },
  {
    name: 'รัททาทุย 2 แสนโวลต์',
    type: 'Avatar',
    soi: 3,
    print: 'SD08-004',
    rare: 'C',
    mainEffect:
      'สามัคคี (เปลี่ยนการ์ดนี้ที่อยู่บน Avatar Zone ในสภาพตื่นเป็น สภาพนอนบน และนํา POWER การ์ดนี้ไปเพิ่มให้กับ Avatar เรา ที่ โจมตี จนจบการต่อสู้นั้น)',
    cost: 2,
    gem: 3,
    power: 2,
    symbol: 'รัททาทุย',
    color: 'ฟ้า',
  },
]
import { Noun } from '@/lib/types';

// ============================================================================
// NOUNS / OBJECTS — Levantine (Shami). Singular + plural.
// ALL entries are AI-drafted (draft: true) — PENDING Alaa's verification
// (spoken plurals especially). Transliteration: 7=ح, 3=ع, D/T/S=emphatic.
// ============================================================================

export const NOUNS: Noun[] = [
  // home
  { id: 'door', english: 'door', singular: { ar: 'باب', ph: 'baab' }, plural: { ar: 'أبواب', ph: 'abwaab' }, category: 'home', draft: true },
  { id: 'window', english: 'window', singular: { ar: 'شبّاك', ph: 'shubbaak' }, plural: { ar: 'شبابيك', ph: 'shababeek' }, category: 'home', draft: true },
  { id: 'wall', english: 'wall', singular: { ar: 'حيط', ph: '7eeT' }, plural: { ar: 'حيطان', ph: '7eeTaan' }, category: 'home', draft: true },
  { id: 'room', english: 'room', singular: { ar: 'غرفة', ph: 'ghorfa' }, plural: { ar: 'غرف', ph: 'ghuraf' }, category: 'home', draft: true },
  { id: 'kitchen', english: 'kitchen', singular: { ar: 'مطبخ', ph: 'maTbakh' }, plural: { ar: 'مطابخ', ph: 'maTaabekh' }, category: 'home', draft: true },
  { id: 'bathroom', english: 'bathroom', singular: { ar: 'حمّام', ph: '7ammaam' }, plural: { ar: 'حمّامات', ph: '7ammaamaat' }, category: 'home', draft: true },
  { id: 'bed', english: 'bed', singular: { ar: 'تخت', ph: 'takht' }, plural: { ar: 'تخوت', ph: 'tkhoot' }, category: 'home', draft: true },
  { id: 'table', english: 'table', singular: { ar: 'طاولة', ph: 'Taawle' }, plural: { ar: 'طاولات', ph: 'Taawlaat' }, category: 'home', draft: true },
  { id: 'chair', english: 'chair', singular: { ar: 'كرسي', ph: 'kursi' }, plural: { ar: 'كراسي', ph: 'karaasi' }, category: 'home', draft: true },
  { id: 'lamp', english: 'lamp', singular: { ar: 'لمبة', ph: 'lamba' }, plural: { ar: 'لمبات', ph: 'lambaat' }, category: 'home', draft: true },
  { id: 'mirror', english: 'mirror', singular: { ar: 'مراية', ph: 'miraaye' }, plural: { ar: 'مرايا', ph: 'maraaya' }, category: 'home', draft: true },
  { id: 'fridge', english: 'fridge', singular: { ar: 'برّاد', ph: 'barraad' }, plural: { ar: 'برّادات', ph: 'barraadaat' }, category: 'home', draft: true },
  { id: 'key', english: 'key', singular: { ar: 'مفتاح', ph: 'miftaa7' }, plural: { ar: 'مفاتيح', ph: 'mafateе7' }, category: 'home', draft: true },
  { id: 'clock', english: 'clock / watch', singular: { ar: 'ساعة', ph: 'saa3a' }, plural: { ar: 'ساعات', ph: 'saa3aat' }, category: 'home', draft: true },

  // kitchen-items
  { id: 'plate', english: 'plate', singular: { ar: 'صحن', ph: 'Sa7en' }, plural: { ar: 'صحون', ph: 'S7oon' }, category: 'kitchen-items', draft: true },
  { id: 'glass', english: 'glass / cup', singular: { ar: 'كاسة', ph: 'kaase' }, plural: { ar: 'كاسات', ph: 'kaasaat' }, category: 'kitchen-items', draft: true },
  { id: 'spoon', english: 'spoon', singular: { ar: 'معلقة', ph: 'ma3la2a' }, plural: { ar: 'معالق', ph: 'ma3aale2' }, category: 'kitchen-items', draft: true },
  { id: 'fork', english: 'fork', singular: { ar: 'شوكة', ph: 'shoke' }, plural: { ar: 'شوك', ph: 'showak' }, category: 'kitchen-items', draft: true },
  { id: 'knife', english: 'knife', singular: { ar: 'سكين', ph: 'sikkeen' }, plural: { ar: 'سكاكين', ph: 'sakakeen' }, category: 'kitchen-items', draft: true },
  { id: 'pot', english: 'pot', singular: { ar: 'طنجرة', ph: 'Tanjara' }, plural: { ar: 'طناجر', ph: 'Tanaajer' }, category: 'kitchen-items', draft: true },

  // objects
  { id: 'phone', english: 'phone', singular: { ar: 'تلفون', ph: 'talifoon' }, plural: { ar: 'تلفونات', ph: 'talifoonaat' }, category: 'objects', draft: true },
  { id: 'computer', english: 'computer', singular: { ar: 'كمبيوتر', ph: 'kombyooter' }, plural: { ar: 'كمبيوترات', ph: 'kombyooteraat' }, category: 'objects', draft: true },
  { id: 'tv', english: 'TV', singular: { ar: 'تلفزيون', ph: 'talfezyoon' }, plural: { ar: 'تلفزيونات', ph: 'talfezyoonaat' }, category: 'objects', draft: true },
  { id: 'bag', english: 'bag', singular: { ar: 'شنطة', ph: 'shanTa' }, plural: { ar: 'شنط', ph: 'shonaT' }, category: 'objects', draft: true },
  { id: 'wallet', english: 'wallet', singular: { ar: 'جزدان', ph: 'jizdaan' }, plural: { ar: 'جزادين', ph: 'jazadeen' }, category: 'objects', draft: true },
  { id: 'pen', english: 'pen', singular: { ar: 'قلم', ph: 'qalam' }, plural: { ar: 'أقلام', ph: 'a2laam' }, category: 'objects', draft: true },
  { id: 'paper', english: 'paper', singular: { ar: 'ورقة', ph: 'wara2a' }, plural: { ar: 'أوراق', ph: 'awraa2' }, category: 'objects', draft: true },
  { id: 'book', english: 'book', singular: { ar: 'كتاب', ph: 'ktaab' }, plural: { ar: 'كتب', ph: 'kutub' }, category: 'objects', draft: true },
  { id: 'notebook', english: 'notebook', singular: { ar: 'دفتر', ph: 'daftar' }, plural: { ar: 'دفاتر', ph: 'dafaater' }, category: 'objects', draft: true },
  { id: 'box', english: 'box', singular: { ar: 'علبة', ph: '3ilbe' }, plural: { ar: 'علب', ph: '3ilab' }, category: 'objects', draft: true },
  { id: 'glasses', english: 'glasses', singular: { ar: 'نظّارة', ph: 'naDDaara' }, plural: { ar: 'نظّارات', ph: 'naDDaaraat' }, category: 'objects', draft: true },
  { id: 'camera', english: 'camera', singular: { ar: 'كاميرا', ph: 'kaamira' }, plural: { ar: 'كاميرات', ph: 'kaamiraat' }, category: 'objects', draft: true },

  // clothes
  { id: 'shirt', english: 'shirt', singular: { ar: 'قميص', ph: '2amees' }, plural: { ar: 'قمصان', ph: '2umSaan' }, category: 'clothes', draft: true },
  { id: 'pants', english: 'pants', singular: { ar: 'بنطلون', ph: 'banTaloon' }, plural: { ar: 'بنطلونات', ph: 'banTaloonaat' }, category: 'clothes', draft: true },
  { id: 'shoes', english: 'shoe', singular: { ar: 'صباط', ph: 'SubbaaT' }, plural: { ar: 'صبابيط', ph: 'SababeeT' }, category: 'clothes', draft: true },
  { id: 'jacket', english: 'jacket', singular: { ar: 'جاكيت', ph: 'jaakeet' }, plural: { ar: 'جاكيتات', ph: 'jaakeetaat' }, category: 'clothes', draft: true },
  { id: 'dress', english: 'dress', singular: { ar: 'فستان', ph: 'fustaan' }, plural: { ar: 'فساتين', ph: 'fasateen' }, category: 'clothes', draft: true },
  { id: 'hat', english: 'hat', singular: { ar: 'قبعة', ph: '2ubba3a' }, plural: { ar: 'قبعات', ph: '2ubba3aat' }, category: 'clothes', draft: true },

  // city
  { id: 'street', english: 'street', singular: { ar: 'شارع', ph: 'shaari3' }, plural: { ar: 'شوارع', ph: 'shawaari3' }, category: 'city', draft: true },
  { id: 'road', english: 'road', singular: { ar: 'طريق', ph: 'Taree2' }, plural: { ar: 'طرقات', ph: 'Turu2aat' }, category: 'city', draft: true },
  { id: 'building', english: 'building', singular: { ar: 'عمارة', ph: '3imaara' }, plural: { ar: 'عمارات', ph: '3imaaraat' }, category: 'city', draft: true },
  { id: 'house', english: 'house', singular: { ar: 'بيت', ph: 'beit' }, plural: { ar: 'بيوت', ph: 'byoot' }, category: 'city', draft: true },
  { id: 'shop', english: 'shop', singular: { ar: 'دكّان', ph: 'dukkaan' }, plural: { ar: 'دكاكين', ph: 'dakakeen' }, category: 'city', draft: true },
  { id: 'bank', english: 'bank', singular: { ar: 'بنك', ph: 'bank' }, plural: { ar: 'بنوك', ph: 'bnook' }, category: 'city', draft: true },
  { id: 'bridge', english: 'bridge', singular: { ar: 'جسر', ph: 'jiser' }, plural: { ar: 'جسور', ph: 'jsoor' }, category: 'city', draft: true },
  { id: 'garden', english: 'garden', singular: { ar: 'جنينة', ph: 'jneene' }, plural: { ar: 'جناين', ph: 'janaayen' }, category: 'city', draft: true },

  // transport
  { id: 'car', english: 'car', singular: { ar: 'سيارة', ph: 'sayyaara' }, plural: { ar: 'سيارات', ph: 'sayyaaraat' }, category: 'transport', draft: true },
  { id: 'bus', english: 'bus', singular: { ar: 'باص', ph: 'baaS' }, plural: { ar: 'باصات', ph: 'baaSaat' }, category: 'transport', draft: true },
  { id: 'taxi', english: 'taxi', singular: { ar: 'تكسي', ph: 'taksi' }, plural: { ar: 'تكاسي', ph: 'takaasi' }, category: 'transport', draft: true },
  { id: 'train', english: 'train', singular: { ar: 'قطار', ph: '2iTaar' }, plural: { ar: 'قطارات', ph: '2iTaaraat' }, category: 'transport', draft: true },
  { id: 'plane', english: 'plane', singular: { ar: 'طيارة', ph: 'Tayyaara' }, plural: { ar: 'طيارات', ph: 'Tayyaaraat' }, category: 'transport', draft: true },
  { id: 'bike', english: 'bicycle', singular: { ar: 'بسكليت', ph: 'basakleet' }, plural: { ar: 'بسكليتات', ph: 'basakleetaat' }, category: 'transport', draft: true },
  { id: 'wheel', english: 'wheel / tire', singular: { ar: 'دولاب', ph: 'doolaab' }, plural: { ar: 'دواليب', ph: 'dawaaleeb' }, category: 'transport', draft: true },

  // nature
  { id: 'tree', english: 'tree', singular: { ar: 'شجرة', ph: 'shajara' }, plural: { ar: 'شجر', ph: 'shajar' }, category: 'nature', draft: true },
  { id: 'flower', english: 'flower', singular: { ar: 'وردة', ph: 'warde' }, plural: { ar: 'ورود', ph: 'wrood' }, category: 'nature', draft: true },
  { id: 'sun', english: 'sun', singular: { ar: 'شمس', ph: 'shams' }, plural: { ar: 'شموس', ph: 'shmoos' }, category: 'nature', draft: true },
  { id: 'moon', english: 'moon', singular: { ar: 'قمر', ph: 'qamar' }, plural: { ar: 'أقمار', ph: 'a2maar' }, category: 'nature', draft: true },
  { id: 'star', english: 'star', singular: { ar: 'نجمة', ph: 'najme' }, plural: { ar: 'نجوم', ph: 'njoom' }, category: 'nature', draft: true },
  { id: 'sea', english: 'sea', singular: { ar: 'بحر', ph: 'ba7er' }, plural: { ar: 'بحور', ph: 'b7oor' }, category: 'nature', draft: true },
  { id: 'river', english: 'river', singular: { ar: 'نهر', ph: 'naher' }, plural: { ar: 'أنهار', ph: 'anhaar' }, category: 'nature', draft: true },
  { id: 'mountain', english: 'mountain', singular: { ar: 'جبل', ph: 'jabal' }, plural: { ar: 'جبال', ph: 'jbaal' }, category: 'nature', draft: true },
  { id: 'stone', english: 'stone', singular: { ar: 'حجر', ph: '7ajar' }, plural: { ar: 'حجار', ph: '7jaar' }, category: 'nature', draft: true },
  { id: 'cloud', english: 'cloud', singular: { ar: 'غيمة', ph: 'gheeme' }, plural: { ar: 'غيوم', ph: 'ghyoom' }, category: 'nature', draft: true },

  // food-items
  { id: 'apple', english: 'apple', singular: { ar: 'تفاحة', ph: 'tuffaa7a' }, plural: { ar: 'تفاح', ph: 'tuffaa7' }, category: 'food-items', draft: true },
  { id: 'banana', english: 'banana', singular: { ar: 'موزة', ph: 'moze' }, plural: { ar: 'موز', ph: 'moz' }, category: 'food-items', draft: true },
  { id: 'orange', english: 'orange', singular: { ar: 'برتقالة', ph: 'burt2aale' }, plural: { ar: 'برتقال', ph: 'burt2aal' }, category: 'food-items', draft: true },
  { id: 'bread-loaf', english: 'loaf of bread', singular: { ar: 'رغيف', ph: 'ragheef' }, plural: { ar: 'أرغفة', ph: 'arghfe' }, category: 'food-items', draft: true },
  { id: 'egg', english: 'egg', singular: { ar: 'بيضة', ph: 'beeDa' }, plural: { ar: 'بيض', ph: 'beeD' }, category: 'food-items', draft: true },
  { id: 'cake', english: 'cake', singular: { ar: 'كيكة', ph: 'keeke' }, plural: { ar: 'كيكات', ph: 'keekaat' }, category: 'food-items', draft: true },

  // ===== MORE NOUNS (AI draft, 2nd batch) =====
  // home
  { id: 'sofa', english: 'sofa', singular: { ar: 'كنباية', ph: 'kanabaaye' }, plural: { ar: 'كنبايات', ph: 'kanabaayaat' }, category: 'home', draft: true },
  { id: 'curtain', english: 'curtain', singular: { ar: 'برداية', ph: 'birdaaye' }, plural: { ar: 'برادي', ph: 'baraadi' }, category: 'home', draft: true },
  { id: 'carpet', english: 'carpet', singular: { ar: 'سجادة', ph: 'sijjaade' }, plural: { ar: 'سجاد', ph: 'sijjaad' }, category: 'home', draft: true },
  { id: 'pillow', english: 'pillow', singular: { ar: 'مخدة', ph: 'mikhadde' }, plural: { ar: 'مخدات', ph: 'mikhaddaat' }, category: 'home', draft: true },
  { id: 'blanket', english: 'blanket', singular: { ar: 'حرام', ph: '7raam' }, plural: { ar: 'حرامات', ph: '7raamaat' }, category: 'home', draft: true },
  { id: 'ceiling', english: 'ceiling', singular: { ar: 'سقف', ph: 'saqf' }, plural: { ar: 'سقوف', ph: 'squuf' }, category: 'home', draft: true },
  { id: 'stairs', english: 'stairs', singular: { ar: 'درج', ph: 'daraj' }, plural: { ar: 'أدراج', ph: 'adraaj' }, category: 'home', draft: true },
  { id: 'elevator', english: 'elevator', singular: { ar: 'أصنصير', ph: 'aSanSeer' }, plural: { ar: 'أصنصيرات', ph: 'aSanSeeraat' }, category: 'home', draft: true },
  { id: 'balcony', english: 'balcony', singular: { ar: 'بلكون', ph: 'balkoon' }, plural: { ar: 'بلكونات', ph: 'balkoonaat' }, category: 'home', draft: true },
  { id: 'fan', english: 'fan', singular: { ar: 'مروحة', ph: 'marwa7a' }, plural: { ar: 'مراوح', ph: 'maraawe7' }, category: 'home', draft: true },
  // kitchen-items
  { id: 'cup-mug', english: 'cup (mug)', singular: { ar: 'كباية', ph: 'kubbaaye' }, plural: { ar: 'كبايات', ph: 'kubbaayaat' }, category: 'kitchen-items', draft: true },
  { id: 'bowl', english: 'bowl', singular: { ar: 'زبدية', ph: 'zibdiyye' }, plural: { ar: 'زبادي', ph: 'zabaadi' }, category: 'kitchen-items', draft: true },
  { id: 'tray', english: 'tray', singular: { ar: 'صينية', ph: 'Saaniyye' }, plural: { ar: 'صواني', ph: 'Sawaani' }, category: 'kitchen-items', draft: true },
  { id: 'jug', english: 'jug', singular: { ar: 'إبريق', ph: 'ibreeq' }, plural: { ar: 'أباريق', ph: 'abaareeq' }, category: 'kitchen-items', draft: true },
  { id: 'kettle', english: 'kettle', singular: { ar: 'غلاية', ph: 'ghallaaye' }, plural: { ar: 'غلايات', ph: 'ghallaayaat' }, category: 'kitchen-items', draft: true },
  { id: 'oven', english: 'oven', singular: { ar: 'فرن', ph: 'furun' }, plural: { ar: 'أفران', ph: 'afraan' }, category: 'kitchen-items', draft: true },
  { id: 'napkin', english: 'napkin', singular: { ar: 'محرمة', ph: 'ma7rame' }, plural: { ar: 'محارم', ph: 'ma7aarem' }, category: 'kitchen-items', draft: true },
  { id: 'jar', english: 'jar', singular: { ar: 'مرطبان', ph: 'marTabaan' }, plural: { ar: 'مرطبانات', ph: 'marTabaanaat' }, category: 'kitchen-items', draft: true },
  // objects
  { id: 'umbrella', english: 'umbrella', singular: { ar: 'شمسية', ph: 'shamsiyye' }, plural: { ar: 'شمسيات', ph: 'shamsiyyaat' }, category: 'objects', draft: true },
  { id: 'remote', english: 'remote', singular: { ar: 'ريموت', ph: 'remote' }, plural: { ar: 'ريموتات', ph: 'remotaat' }, category: 'objects', draft: true },
  { id: 'charger', english: 'charger', singular: { ar: 'شاحن', ph: 'shaa7en' }, plural: { ar: 'شواحن', ph: 'shawaa7en' }, category: 'objects', draft: true },
  { id: 'battery', english: 'battery', singular: { ar: 'بطارية', ph: 'baTTaariyye' }, plural: { ar: 'بطاريات', ph: 'baTTaariyyaat' }, category: 'objects', draft: true },
  { id: 'candle', english: 'candle', singular: { ar: 'شمعة', ph: 'sham3a' }, plural: { ar: 'شموع', ph: 'shmoo3' }, category: 'objects', draft: true },
  { id: 'hammer', english: 'hammer', singular: { ar: 'شاكوش', ph: 'shaakoosh' }, plural: { ar: 'شواكيش', ph: 'shawaakeesh' }, category: 'objects', draft: true },
  { id: 'ladder', english: 'ladder', singular: { ar: 'سلم', ph: 'sillum' }, plural: { ar: 'سلالم', ph: 'salaalem' }, category: 'objects', draft: true },
  { id: 'lock', english: 'lock', singular: { ar: 'قفل', ph: 'qifel' }, plural: { ar: 'أقفال', ph: 'aqfaal' }, category: 'objects', draft: true },
  { id: 'rope', english: 'rope', singular: { ar: 'حبل', ph: '7abel' }, plural: { ar: 'حبال', ph: '7baal' }, category: 'objects', draft: true },
  // clothes
  { id: 'skirt', english: 'skirt', singular: { ar: 'تنورة', ph: 'tannoora' }, plural: { ar: 'تنانير', ph: 'tanaaneer' }, category: 'clothes', draft: true },
  { id: 'coat', english: 'coat', singular: { ar: 'معطف', ph: 'mi3Taf' }, plural: { ar: 'معاطف', ph: 'ma3aaTef' }, category: 'clothes', draft: true },
  { id: 'scarf', english: 'scarf', singular: { ar: 'شال', ph: 'shaal' }, plural: { ar: 'شالات', ph: 'shaalaat' }, category: 'clothes', draft: true },
  { id: 'sock', english: 'sock', singular: { ar: 'كلسة', ph: 'kalse' }, plural: { ar: 'كلسات', ph: 'kalsaat' }, category: 'clothes', draft: true },
  { id: 'belt', english: 'belt', singular: { ar: 'زنار', ph: 'znaar' }, plural: { ar: 'زنانير', ph: 'zanaaneer' }, category: 'clothes', draft: true },
  { id: 'glove', english: 'glove', singular: { ar: 'جوانتي', ph: 'jwaanti' }, plural: { ar: 'جوانتيات', ph: 'jwaantiyaat' }, category: 'clothes', draft: true },
  { id: 'sandal', english: 'sandal', singular: { ar: 'صندل', ph: 'Sandal' }, plural: { ar: 'صنادل', ph: 'Sanaadel' }, category: 'clothes', draft: true },
  { id: 'button', english: 'button', singular: { ar: 'زر', ph: 'zerr' }, plural: { ar: 'أزرار', ph: 'azraar' }, category: 'clothes', draft: true },
  // city
  { id: 'mosque', english: 'mosque', singular: { ar: 'جامع', ph: 'jaame3' }, plural: { ar: 'جوامع', ph: 'jawaame3' }, category: 'city', draft: true },
  { id: 'church', english: 'church', singular: { ar: 'كنيسة', ph: 'kneese' }, plural: { ar: 'كنائس', ph: 'kanaayes' }, category: 'city', draft: true },
  { id: 'hospital', english: 'hospital', singular: { ar: 'مستشفى', ph: 'mustashfa' }, plural: { ar: 'مستشفيات', ph: 'mustashfayaat' }, category: 'city', draft: true },
  { id: 'airport', english: 'airport', singular: { ar: 'مطار', ph: 'maTaar' }, plural: { ar: 'مطارات', ph: 'maTaaraat' }, category: 'city', draft: true },
  { id: 'market', english: 'market', singular: { ar: 'سوق', ph: 'soo2' }, plural: { ar: 'أسواق', ph: 'aswaaq' }, category: 'city', draft: true },
  { id: 'restaurant', english: 'restaurant', singular: { ar: 'مطعم', ph: 'maT3am' }, plural: { ar: 'مطاعم', ph: 'maTaa3em' }, category: 'city', draft: true },
  { id: 'hotel', english: 'hotel', singular: { ar: 'فندق', ph: 'funduq' }, plural: { ar: 'فنادق', ph: 'fanaadeq' }, category: 'city', draft: true },
  { id: 'museum', english: 'museum', singular: { ar: 'متحف', ph: 'mat7af' }, plural: { ar: 'متاحف', ph: 'mataa7ef' }, category: 'city', draft: true },
  { id: 'library', english: 'library', singular: { ar: 'مكتبة', ph: 'maktabe' }, plural: { ar: 'مكتبات', ph: 'maktabaat' }, category: 'city', draft: true },
  // transport
  { id: 'ship', english: 'ship', singular: { ar: 'سفينة', ph: 'safeene' }, plural: { ar: 'سفن', ph: 'sufun' }, category: 'transport', draft: true },
  { id: 'boat', english: 'boat', singular: { ar: 'قارب', ph: 'qaareb' }, plural: { ar: 'قوارب', ph: 'qawaareb' }, category: 'transport', draft: true },
  { id: 'ticket', english: 'ticket', singular: { ar: 'تذكرة', ph: 'tazkara' }, plural: { ar: 'تذاكر', ph: 'tazaaker' }, category: 'transport', draft: true },
  { id: 'engine', english: 'engine', singular: { ar: 'موتور', ph: 'motor' }, plural: { ar: 'موتورات', ph: 'motoraat' }, category: 'transport', draft: true },
  // nature
  { id: 'grass', english: 'grass', singular: { ar: 'عشب', ph: '3oshob' }, plural: { ar: 'أعشاب', ph: 'a3shaab' }, category: 'nature', draft: true },
  { id: 'leaf', english: 'leaf', singular: { ar: 'ورقة', ph: 'wara2a' }, plural: { ar: 'أوراق', ph: 'awraaq' }, category: 'nature', draft: true },
  { id: 'sand', english: 'sand', singular: { ar: 'رمل', ph: 'ramel' }, plural: { ar: 'رمال', ph: 'rmaal' }, category: 'nature', draft: true },
  { id: 'snow', english: 'snow', singular: { ar: 'تلج', ph: 'talej' }, plural: { ar: 'تلوج', ph: 'tluuj' }, category: 'nature', draft: true },
  { id: 'wind', english: 'wind', singular: { ar: 'ريح', ph: 'ree7' }, plural: { ar: 'رياح', ph: 'riyaa7' }, category: 'nature', draft: true },
  { id: 'fire', english: 'fire', singular: { ar: 'نار', ph: 'naar' }, plural: { ar: 'نيران', ph: 'neeraan' }, category: 'nature', draft: true },
  { id: 'smoke', english: 'smoke', singular: { ar: 'دخان', ph: 'dukhaan' }, plural: { ar: 'أدخنة', ph: 'adkhine' }, category: 'nature', draft: true },
  { id: 'sky', english: 'sky', singular: { ar: 'سما', ph: 'sama' }, plural: { ar: 'سماوات', ph: 'samaawaat' }, category: 'nature', draft: true },
  // food-items
  { id: 'rice', english: 'rice', singular: { ar: 'رز', ph: 'rezz' }, plural: { ar: 'رز', ph: 'rezz' }, category: 'food-items', draft: true },
  { id: 'meat', english: 'meat', singular: { ar: 'لحمة', ph: 'la7me' }, plural: { ar: 'لحوم', ph: 'l7oom' }, category: 'food-items', draft: true },
  { id: 'chicken', english: 'chicken', singular: { ar: 'دجاجة', ph: 'dajaaje' }, plural: { ar: 'دجاج', ph: 'dajaaj' }, category: 'food-items', draft: true },
  { id: 'fish-food', english: 'fish', singular: { ar: 'سمكة', ph: 'samake' }, plural: { ar: 'سمك', ph: 'samak' }, category: 'food-items', draft: true },
  { id: 'cheese', english: 'cheese', singular: { ar: 'جبنة', ph: 'jibne' }, plural: { ar: 'أجبان', ph: 'ajbaan' }, category: 'food-items', draft: true },
  { id: 'milk', english: 'milk', singular: { ar: 'حليب', ph: '7aleeb' }, plural: { ar: 'حليب', ph: '7aleeb' }, category: 'food-items', draft: true },
  { id: 'oil', english: 'oil', singular: { ar: 'زيت', ph: 'zeet' }, plural: { ar: 'زيوت', ph: 'zyoot' }, category: 'food-items', draft: true },
  { id: 'salt', english: 'salt', singular: { ar: 'ملح', ph: 'mele7' }, plural: { ar: 'أملاح', ph: 'amlaa7' }, category: 'food-items', draft: true },
  { id: 'sugar', english: 'sugar', singular: { ar: 'سكر', ph: 'sukkar' }, plural: { ar: 'سكر', ph: 'sukkar' }, category: 'food-items', draft: true },
  { id: 'tomato', english: 'tomato', singular: { ar: 'بندورة', ph: 'banadoora' }, plural: { ar: 'بندورات', ph: 'banadooraat' }, category: 'food-items', draft: true },
  // body
  { id: 'head', english: 'head', singular: { ar: 'راس', ph: 'raas' }, plural: { ar: 'روس', ph: 'roos' }, category: 'body', draft: true },
  { id: 'hair', english: 'hair', singular: { ar: 'شعر', ph: 'sha3er' }, plural: { ar: 'شعور', ph: 'sh3oor' }, category: 'body', draft: true },
  { id: 'eye', english: 'eye', singular: { ar: 'عين', ph: '3een' }, plural: { ar: 'عيون', ph: '3yoon' }, category: 'body', draft: true },
  { id: 'ear', english: 'ear', singular: { ar: 'أذن', ph: 'uzun' }, plural: { ar: 'آذان', ph: 'aazaan' }, category: 'body', draft: true },
  { id: 'nose', english: 'nose', singular: { ar: 'أنف', ph: 'anf' }, plural: { ar: 'أنوف', ph: 'unoof' }, category: 'body', draft: true },
  { id: 'mouth', english: 'mouth', singular: { ar: 'تم', ph: 'temm' }, plural: { ar: 'تمام', ph: 'tmaam' }, category: 'body', draft: true },
  { id: 'hand', english: 'hand', singular: { ar: 'إيد', ph: 'iid' }, plural: { ar: 'إيدين', ph: 'iideen' }, category: 'body', draft: true },
  { id: 'foot', english: 'foot / leg', singular: { ar: 'إجر', ph: 'ijer' }, plural: { ar: 'إجرين', ph: 'ijreen' }, category: 'body', draft: true },
  // animals
  { id: 'dog', english: 'dog', singular: { ar: 'كلب', ph: 'kalb' }, plural: { ar: 'كلاب', ph: 'klaab' }, category: 'animals', draft: true },
  { id: 'cat', english: 'cat', singular: { ar: 'بسة', ph: 'bisse' }, plural: { ar: 'بسس', ph: 'bisas' }, category: 'animals', draft: true },
  { id: 'bird', english: 'bird', singular: { ar: 'عصفور', ph: '3aSfoor' }, plural: { ar: 'عصافير', ph: '3aSaafeer' }, category: 'animals', draft: true },
  { id: 'horse', english: 'horse', singular: { ar: 'حصان', ph: '7Saan' }, plural: { ar: 'خيول', ph: 'khyool' }, category: 'animals', draft: true },
  { id: 'donkey', english: 'donkey', singular: { ar: 'حمار', ph: '7maar' }, plural: { ar: 'حمير', ph: '7meer' }, category: 'animals', draft: true },
  { id: 'cow', english: 'cow', singular: { ar: 'بقرة', ph: 'ba2ara' }, plural: { ar: 'بقر', ph: 'ba2ar' }, category: 'animals', draft: true },
  { id: 'sheep', english: 'sheep', singular: { ar: 'خروف', ph: 'kharoof' }, plural: { ar: 'خرفان', ph: 'khirfaan' }, category: 'animals', draft: true },
  { id: 'camel', english: 'camel', singular: { ar: 'جمل', ph: 'jamal' }, plural: { ar: 'جمال', ph: 'jmaal' }, category: 'animals', draft: true },
  // work / school
  { id: 'money', english: 'money', singular: { ar: 'مصاري', ph: 'maSaari' }, plural: { ar: 'مصاري', ph: 'maSaari' }, category: 'work', draft: true },
  { id: 'boss', english: 'boss / manager', singular: { ar: 'مدير', ph: 'mudeer' }, plural: { ar: 'مدراء', ph: 'mudaraa' }, category: 'work', draft: true },
  { id: 'salary', english: 'salary', singular: { ar: 'راتب', ph: 'raateb' }, plural: { ar: 'رواتب', ph: 'rawaateb' }, category: 'work', draft: true },
  { id: 'teacher', english: 'teacher', singular: { ar: 'أستاذ', ph: 'ustaaz' }, plural: { ar: 'أساتذة', ph: 'asaatze' }, category: 'school', draft: true },
  { id: 'student', english: 'student', singular: { ar: 'طالب', ph: 'Taaleb' }, plural: { ar: 'طلاب', ph: 'Tullaab' }, category: 'school', draft: true },
];

export const NOUNS_BY_ID: Record<string, Noun> = Object.fromEntries(NOUNS.map((n) => [n.id, n]));
export const NOUN_CATEGORIES: string[] = Array.from(new Set(NOUNS.map((n) => n.category)));
export function nounsByCategory(cat: string): Noun[] {
  return NOUNS.filter((n) => n.category === cat);
}

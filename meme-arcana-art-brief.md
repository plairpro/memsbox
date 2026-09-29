# Meme Arcana — ТЗ на иллюстрации

Документ для генерации 36 иллюстраций карт (плюс грань лутбокса и рубашка карты) в одном стиле. Общий стиль-префикс и негатив-промт подставляются к каждой карте, персональный промт описывает только сцену.

## 1. Технические требования

| Параметр | Значение |
| --- | --- |
| Формат | PNG, без прозрачности |
| Пропорции | 5:4 (горизонталь) |
| Размер | 1000 × 800 px, минимум 750 × 600 |
| Кадрирование в игре | Окно-арка: верхние углы срезаны полукругом радиусом в половину ширины. Главное держать в центральных 70% ширины и нижних 85% высоты |
| Текст на картинке | Нет, кроме оговорённого в промте карты |
| Рамка | Не рисовать: рамку, имя и текст карты добавляет игра |
| Имена файлов | Как в таблице ниже, папка `art/` рядом с `meme-arcana.html` |

## 2. Стиль

Яркое таро в духе классической колоды Райдера — Уэйта 1909 года, переосмысленной как современная флэт-иллюстрация.

- Плоские насыщенные заливки, объём даёт один тон темнее и один блик.
- Уверенный чёрный контур одинаковой толщины, как гравюра или линогравюра.
- Каждая карта — сцена аркана: герой в центре, один атрибут-символ, простой фон (небо, пейзаж, интерьер).
- Солнечные лучи, звёзды, луна, облака — как в старом таро.
- Лёгкое зерно печати допустимо, градиенты и фотореализм — нет.
- Выражения героев слегка ироничные, по-мемному нелепые, но без злобы.

### Палитра

| Роль | HEX |
| --- | --- |
| Небо, ночь | #1c2a78, #22307f |
| Дневное небо | #7cc0f2, #3f78d1 |
| Солнце, золото | #f6c431 |
| Киноварь | #d7382b |
| Оранжевый | #ef8a2b |
| Зелень | #3f9a4a, #8fdc7a |
| Фиолетовый | #7a4fc0 |
| Розовый | #ec8fb3 |
| Бумага, белое | #fbf3de |
| Контур | #1a1410 |

### Стиль-префикс (подставлять к каждой карте)

```
Tarot card illustration in the style of the 1909 Rider-Waite deck reimagined as bold modern flat art. Thick uniform black ink outlines like a linocut, flat saturated colors from a limited palette (royal blue #1c2a78, sun yellow #f6c431, vermilion #d7382b, grass green #3f9a4a, cream #fbf3de, orange #ef8a2b), simple symbolic background, radiating sun rays or stars where fitting, subtle print grain, playful and slightly absurd mood. Horizontal 5:4 composition, main subject centered, generous margin at the top corners. No border, no frame, no card title, no text unless specified.
```

### Негатив-промт

```
photorealistic, 3d render, gradient mesh, blurry, watercolor bleed, anime style, chibi, text, letters, watermark, signature, logo, border, frame, card title, real person, celebrity, recognizable face, copyrighted character, brand mascot, extra limbs, deformed hands
```

### Запреты

- Никаких реальных людей и узнаваемых лиц.
- Не копировать исходные фото и кадры мемов: только своя сцена по мотивам.
- Никаких чужих персонажей, логотипов и маскотов.

## 3. Карты

Год в скобках — номер аркана (игра пишет его римскими цифрами сама).

### Common

| № | Файл | Карта | Аркан | Промт сцены |
| --- | --- | --- | --- | --- |
| 1 | `01-dubai-chocolate.png` | Dubai Chocolate (2025) | The Star | A broken bar of chocolate in gold foil lying on a night hill, the break revealing a thick bright green pistachio filling with crispy golden strands, a large eight-pointed yellow star shining above, small white stars in the royal blue sky |
| 2 | `02-six-seven.png` | Six Seven (2025) | Justice | Two open hands held palms up at different heights like weighing scales, a big red numeral 6 floating above the left hand and a big blue numeral 7 above the right, sun rays on a yellow background, motion arcs showing the hands bobbing up and down (numerals 6 and 7 are the only allowed text) |
| 3 | `03-girl-dinner.png` | Girl Dinner (2023) | Nine of Pentacles | Top-down view of a white plate on a pink gingham tablecloth holding a chaotic snack dinner: a few crackers, a wedge of cheese, a small bunch of purple grapes and one single green olive, a lit candle in the corner, cozy and slightly pathetic |
| 4 | `04-roman-empire.png` | Roman Empire (2023) | The Emperor | A classical white marble temple with columns under a blue sky with sun rays, in the foreground a golden Roman legionary helmet with a tall red crest, dramatic and heroic, a laurel wreath on the ground |
| 5 | `05-dancing-raccoon.png` | Dancing Raccoon (2024) | The Magician (trickster) | A grey raccoon with a black mask dancing on its hind legs at night beside a metal trash can, one arm raised, striped tail swinging, yellow music notes floating, a moon and stars in the dark blue sky |
| 6 | `06-pibble.png` | Pibble (2025) | The Sun (joy) | A happy grey pit bull lying belly-up in a white clawfoot bathtub full of soap foam, pink belly showing, huge wide smile, floating bubbles, pale blue tiled bathroom wall |
| 7 | `07-rizz.png` | Rizz (2023) | The Lovers | A big pink heart wearing black sunglasses with a confident smirk, surrounded by radiating vermilion sun rays and golden sparkles, pure charisma |
| 8 | `08-moo-deng.png` | Moo Deng (2024) | Strength | A tiny chubby baby pygmy hippo with glossy purple-grey skin, mouth open mid-bite, standing on a green hill with red and white flowers, wearing a flower garland, an infinity symbol floating above its head, yellow sky with sun rays |
| 9 | `09-aura-farming.png` | Aura Farming (2025) | The Magician | A lone black silhouette figure with a red headband standing confidently at the prow of a long wooden boat on calm water at sunset, one hand on hip, surrounded by glowing concentric golden aura rings, an infinity symbol above the head (silhouette only, no face) |
| 10 | `10-mewing.png` | Mewing (2024) | The High Priestess | A hooded figure in blue robes shown in side profile with an exaggerated razor-sharp jawline, one finger pressed to the lips, seated between a black pillar marked B and a white pillar marked J, pomegranate curtain behind, crescent moon at the feet (letters B and J allowed) |
| 11 | `11-nihilist-penguin.png` | Nihilist Penguin (2026) | The Fool | A single emperor penguin walking away from its distant colony across white ice toward huge snowy mountains, calm and determined, orange sun in a yellow sky, a trail of small footprints behind it |
| 12 | `12-capybara.png` | Capybara (2023) | The World | A serene capybara soaking in a hot spring up to its shoulders, a yuzu orange balanced on its head, more oranges floating in the steaming water, all framed by a green laurel wreath oval |

### Rare

| № | Файл | Карта | Аркан | Промт сцены |
| --- | --- | --- | --- | --- |
| 13 | `13-moth-lamp.png` | Moth & Lamp (2018) | The Moon | A fluffy brown moth with feathery antennae and patterned wings flying longingly toward a glowing red desk lamp in the night, golden light rays, dark blue sky with stars |
| 14 | `14-big-floppa.png` | Big Floppa (2020) | The Emperor | A regal caracal with long black-tufted ears and a stern face sitting on a grey stone throne with golden ram-horn ornaments, holding a golden ankh scepter nearby, vermilion background |
| 15 | `15-always-has-been.png` | Always Has Been (2020) | The Sun | Two astronauts in white suits with dark visors standing on either side of a small planet shaped like a red lootbox tied with a golden ribbon, radiating sun rays on a yellow background |
| 16 | `16-cat-at-the-table.png` | Cat at the Table (2019) | Justice | A white cat with a skeptical frown sitting upright, golden balance scales hanging above it, a sword leaning beside it, red theater curtains behind |
| 17 | `17-coffin-dance.png` | Coffin Dance (2020) | Wheel of Fortune | A big orange Wheel of Fortune with the letters T A R O on its rim, a small wooden coffin with a golden cross riding on top of the wheel, a green snake winding down one side, clouds in the corners, blue sky (letters T A R O allowed) |
| 18 | `18-popcat.png` | Popcat (2020) | Page of Cups | An orange tabby cat with its mouth open in a perfect round "O", eyes squeezed shut, sitting by a blue sea with gentle waves |
| 19 | `19-dead-inside.png` | Dead Inside (2020) | Four of Swords | A hooded figure lying still on a grey stone tomb like a knight effigy, three swords hanging point-down above it, a small stained glass window, muted violet background, the text "1000 − 7" in small gold letters (only allowed text) |
| 20 | `20-ok-boomer.png` | OK Boomer (2019) | The Hierophant | An old bearded sage in red robes and a golden tiara holding a triple-cross staff, and a young person in a green hoodie casually waving him off with one hand, vermilion background, crossed keys on the ground |
| 21 | `21-cheems.png` | Cheems (2019) | Page of Pentacles | A slightly chubby shiba inu dog sitting in a green meadow, looking unsure, holding a cheeseburger, curled tail, soft yellow sun |
| 22 | `22-return-to-monke.png` | Return to Monke (2020) | Ace of Wands | A brown monkey sitting in a lush jungle, raising a wooden stick triumphantly like a scepter, a bunch of bananas beside it, large green leaves framing the scene |

### Epic

| № | Файл | Карта | Аркан | Промт сцены |
| --- | --- | --- | --- | --- |
| 23 | `23-ice-bucket-challenge.png` | Ice Bucket Challenge (2014) | Temperance | A metal bucket tipping over in mid-air, pouring icy water and ice cubes onto a figure in a red T-shirt shown from behind or with eyes shut, big splash, blue sky and green grass |
| 24 | `24-the-dress.png` | The Dress (2015) | The High Priestess (duality) | A striped lace dress on a hanger split exactly down the middle: the left half blue with black stripes on a blue background, the right half white with gold stripes on a gold background, a dotted line in the center |
| 25 | `25-stonks.png` | Stonks (2017) | Ace of Pentacles | A giant golden coin with a pentacle engraved on it, a thick green arrow zigzagging upward past it, green and red candlestick chart bars in the background, bright blue sky |
| 26 | `26-galaxy-brain.png` | Galaxy Brain (2017) | The High Priestess | A black profile silhouette of a head containing a glowing pink brain radiating golden light rays and cosmic rings, deep purple starry night sky |
| 27 | `27-dat-boi.png` | Dat Boi (2016) | Six of Wands | A cheerful green frog riding a unicycle along a green road, arms spread in triumph, blue sky with sun and clouds |
| 28 | `28-doge.png` | Doge (2013) | Wheel of Fortune | A shiba inu with a sly sideways glance sitting in the center of a large golden Wheel of Fortune, teal background, small floating sparkles |
| 29 | `29-stoned-fox.png` | Stoned Fox (2012) | Seven of Cups | A badly stuffed taxidermy fox standing on a wooden base, wild mismatched bulging eyes, crooked grin, golden cups floating on clouds all around it, lavender sky |
| 30 | `30-uyu-cat.png` | Ъуъ Cat (2012) | Queen of Cups | A grumpy grey cat with a crooked twisted scowl wearing a small golden crown, sitting on a golden throne by the sea, a cup beside it |

### Legendary

| № | Файл | Карта | Аркан | Промт сцены |
| --- | --- | --- | --- | --- |
| 31 | `31-o-rly-owl.png` | O RLY Owl (2005) | The Hermit | A white snowy owl with black speckles and huge round yellow eyes perched on a bare branch at night, staring directly at the viewer with deep skepticism, full moon |
| 32 | `32-longcat.png` | Longcat (2006) | The Tower | An impossibly long white cat stretching vertically through the whole picture, head at the very top, body extending down off the bottom edge, front paws raised, blue sky and clouds |
| 33 | `33-lolcat.png` | Lolcat (2007) | Queen of Pentacles | A grey tabby cat with round yellow eyes hugging a giant cheeseburger in a flower garden, hopeful expression |
| 34 | `34-all-your-base.png` | All Your Base (2000) | King of Wands | A green alien with huge black eyes sitting on a throne made of tangled black and grey cables, old CRT monitors glowing with green lines on both sides, red background |
| 35 | `35-ceiling-cat.png` | Ceiling Cat (2006) | The Star (watcher) | A white cat peeking down through a round hole in a tiled ceiling, green eyes watching, three tarot cards falling from the hole |

### Mythic

| № | Файл | Карта | Аркан | Промт сцены |
| --- | --- | --- | --- | --- |
| 36 | `36-kilroy.png` | Kilroy Was Here (1944) | The World | The classic WWII graffiti doodle: a bald head with two round eyes and a long nose peeking over a brick wall, fingers gripping the edge on both sides, drawn in simple dark brown ink on faded yellowed paper (this card is intentionally plain and aged, less saturated than the rest) |

## 4. Дополнительные элементы

| Файл | Что | Промт |
| --- | --- | --- |
| `box-face.png` (1:1, 512 × 512) | Грань куба-лутбокса | Square tarot-style emblem: a golden eight-pointed star with a red center on a vermilion background, double gold inner border, bold black outline |
| `card-back.png` (5:8, 500 × 800) | Рубашка карты | Tarot card back: symmetrical pattern of golden sun, crescent moons and stars on royal blue, ornamental gold border, bold black outlines |

## 5. Как подключить в игру

В начале скрипта `meme-arcana.html` есть объект `ART_IMG`. Впишите туда пути к готовым файлам:

```js
const ART_IMG={
  1:'art/01-dubai-chocolate.png',
  2:'art/02-six-seven.png',
  // ...
};
```

Карты с указанным путём показывают картинку, остальные — встроенную заглушку. Файлы должны лежать в папке `art/` рядом с HTML.

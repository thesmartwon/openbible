export const getChapterPath = (version, book, chapter) => {
	return `./static/${version}/${book}.json`
}

const cache = {}

export const getChapter = (version, book, chapter) => {
	const path = getChapterPath(version, book, chapter)
	cache[path] = cache[path] || fetch(path).then(res => res.json()) 
	return cache[path]
}

export const getBooks = version => {
	return {
		Genesis: 'GEN',
		Exodus: 'EXO',
		Leviticus: 'LEV',
		Numbers: 'NUM',
		Deuteronomy: 'DEU',
		Joshua: 'JOS',
		Judges: 'JDG',
		Ruth: 'RUT',
		'1 Samuel': '1SA',
		'2 Samuel': '2SA',
		'1 Kings': '1KI',
		'2 Kings': '2KI',
		'1 Chronicles': '1CH',
		'2 Chronicles': '2CH',
		Ezra: 'EZR',
		Nehamiah: 'NEH',
		Esther: 'EST',
		Job: 'JOB',
		Psalm: 'PSA',
		Proverbs: 'PRO',
		Ecclessiates: 'ECC',
		'Song of Solomon': 'SNG',
		Isiah: 'ISA',
		Jeremiah: 'JER',
		Lamentations: 'LAM',
		Ezekiel: 'EZK',
		Daniel: 'DAN',
		Hosea: 'HOS',
		Joel: 'JOL',
		Amos: 'AMO',
		Obadiah: 'OBA',
		Jonah: 'JON',
		Micah: 'MIC',
		Nahum: 'NAM',
		Habakkuk: 'HAB',
		Zephaniah: 'ZEP',
		Haggai: 'HAG',
		Zechariah: 'ZEC',
		Malachi: 'MAL',
		Matthew: 'MAT',
		Mark: 'MRK',
		Luke: 'LUK',
		John: 'JHN',
		Acts: 'ACT',
		Romans: 'ROM',
		'1 Corinthians': '1CO',
		'2 Corinthians': '2CO',
		Galatians: 'GAL',
		Ephesians: 'EPH',
		Philippians: 'PHP',
		Colossians: 'COL',
		'1 Thessalonians': '1TH',
		'2 Thessalonians': '2TH',
		'1 Timothy': '1TI',
		'2 Timothy': '2TI',
		Titus: 'TIT',
		Philemon: 'PHM',
		Hebrews: 'HEB',
		James: 'JAS',
		'1 Peter': '1PE',
		'2 Peter': '2PE',
		'1 John': '1JN',
		'2 John': '2JN',
		'3 John': '3JN',
		Jude: 'JUD',
		Revelation: 'REV'
	}
}

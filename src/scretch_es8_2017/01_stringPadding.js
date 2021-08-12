// padStart()
'test'.padStart(3)	// ‘test’
'test'.padStart(5)	// ‘ test’
'test'.padStart(8)	// ‘    test’
console.log('test'.padStart(6, 'abcdv'));  // ‘abcdtest’

// padEnd()
'test'.padEnd(4)	// ‘test’
'test'.padEnd(5)	// ‘test ’
'test'.padEnd(8)	// ‘test    ’
'test'.padEnd(8, 'abcd')  // ‘testabcd’

newjson = []
zjcities = '宁波 温州 嘉兴 湖州 绍兴 金华 衢州 台州 丽水 舟山 杭州 富阳 建德 临安'.split(' ')
for(var i in a){if(zjcities.indexOf(a[i]['city name'])>=0)newjson.push(a[i]);}
	JSON.stringify(newjson)

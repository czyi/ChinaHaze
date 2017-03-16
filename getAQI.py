from bs4 import BeautifulSoup
import requests
import json
import bs4
from collections import OrderedDict

 # Fetch the page we want to parse
page = requests.get('http://www.pm25.in/rank')
 # Feed in page and specify parser for Beautiful Soup
bs = BeautifulSoup(page.content, "html5lib")
 # Find all of the divs that contain an answer based on the class
divs = bs.find_all("div", class_="table")
# result = []
table_data = [[cell.text.strip() for cell in row("td")]
 						 for row in bs.find_all('tr')]
with open('AQI.json','w') as f:
			json.dump(table_data,f)
#for div in divs:
	#print div
#table_data = []
#for row in bs.find_all('tr'):
	#print row
	 #for col in row.contents:
	# 	all_data.append(col.string.stripped_strings)
	# 	#print col.string
	# 	print all_data
	#print '\n'.join(row.stripped_strings)
#	for col in row.stripped_strings:
		#item = {"rank":row[0]}
		#print item
		#print col

		#result=col
#		table_data.append(col)
		#print table_data
#		with open('AQI.json','w') as f:
#			json.dump(table_data,f)

#print table_data[0]

print "=========="

print len(table_data)
print len(table_data[1])
all_data = []

for x in range(1,len(table_data)):
	dict_data = {}
	dict_data['rank'] = table_data[x][0]
	dict_data['city name'] = table_data[x][1]
	dict_data['AQI'] = table_data[x][2]
	dict_data['Air Quality Level'] = table_data[x][3]
	dict_data['primary pollutant'] = table_data[x][4]
	dict_data['PM2.5'] = table_data[x][5]
	dict_data['PM10'] = table_data[x][6]
	dict_data['CO'] = table_data[x][7]
	dict_data['NO2'] = table_data[x][8]
	dict_data['O3/h'] = table_data[x][9]
	dict_data['O3/8h'] = table_data[x][10]
	dict_data['SO2'] = table_data[x][11]
	all_data.append(dict_data)
	print dict_data
with open('AQI_1.json','w') as f:
	json.dump(all_data,f)
#print all_data

# newjson = []
# zjcities = '宁波 温州 嘉兴 湖州 绍兴 金华 衢州 台州 丽水 舟山 杭州 富阳 建德 临安'.split(' ')
# for i in a:
# 	if(zjcities.indexOf(a[i]['city name'])>=0)newjson.append(a[i])
# JSON.stringify(newjson)
# print newjson
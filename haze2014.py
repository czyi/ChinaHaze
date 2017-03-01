import bs4
from bs4 import BeautifulSoup
import requests

#2014
page = requests.get('http://www.pm25s.com/month/201410.html')

soup = BeautifulSoup(page.content, 'html5lib')
#print(soup.prettify())

div_tags = soup.find_all("div")

data_dict = {}
i = 0
for first_divs in div_tags[0] :
	i += 1
	if(i==9):
		# print "---------"
		# print line
		# print "======="

		second_divs=first_divs.find_all("div")
		#print second_divs[0]

		third_divs=second_divs[0].find_all("div")
		#print third_divs[5]

		fourth_divs=third_divs[5].find_all("div")
		# print fourth_divs[0]

		j=0
		for line in fourth_divs:
			if(j<1):
				j+=1
				continue

			#print line
			data = line.find_all("span")
			print data[1].string

			city_list=[data[2].string,data[3].string,data[4].string,data[5].string,data[6].string,data[7].string,data[8].string,data[9].string]
			print city_list

			data_dict[data[1].string] = city_list;

output=""
#AQI  PM2.5  PM10  CO  NO2  SO2  03-1h   O3-8h
for key, value in data_dict.items():
   output += '{"city":"'+key+'",' + '"AQI":"'+value[0]+'",' + '"pm2.5":"'+value[1]+'",' + '"pm10":"'+value[2]+'",'+ '"CO":"'+value[3]+'",' + '"NO2":"'+value[4]+'",' + '"SO2":"'+value[5]+'",' + '"O3-1h":"'+value[6]+'",' + '"O3-8h'+value[7]+'"},'

print output










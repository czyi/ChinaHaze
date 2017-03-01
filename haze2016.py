import bs4
from bs4 import BeautifulSoup
import requests

#2016
page = requests.get('http://kaoshi.yjbys.com/gongwuyuan/shizhengshenlun/shishizhengye/479727.html')

soup = BeautifulSoup(page.content, 'html5lib')
#print(soup.prettify())

tbody_tags = soup.find_all("tbody")

data_dict = {}
for line in tbody_tags[0] :
	if(type(line)==bs4.element.Tag) :
		#print line

		data = line.find_all("td")
		# print data[1]
		# print data[2]

		city = unicode(data[1].string)[1:]
		print city

		pm = unicode(data[2].string)[1:]
		print pm

		data_dict[city] = pm;

output=""
for key, value in data_dict.items():
   output += '{"city":"'+key+'",' + '"pm2.5":"'+value+'"},'

print output










import bs4
from bs4 import BeautifulSoup
import requests

#2015
page = requests.get('http://www.drmj.org/green-peace-2015-china-air.html')

soup = BeautifulSoup(page.content, 'html5lib')
#print(soup.prettify())

tbody_tags = soup.find_all("tbody")

data_dict = {}
for line in tbody_tags[1] :
	if(type(line)==bs4.element.Tag) :
		#print line

		data = line.find_all("td")
		# print data[1].string
		# print data[2].string
		# print data[3].string

		city = unicode(data[1].string)
		print city

		pm = unicode(data[2].string)
		print pm

		prov = unicode(data[3].string)
		print prov

		data_dict[city] = (pm, prov);

output=""
for key, value in data_dict.items():
   output += '{"city":"'+key+'",' + '"pm2.5":"'+value[0]+'",' + '"province":"'+value[1]+'"},'

print output









